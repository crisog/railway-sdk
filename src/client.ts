import { print, Kind, type OperationDefinitionNode } from 'graphql';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { err, ok, ResultAsync } from 'neverthrow';
import { MissingTokenError, requireTokenFromEnv, resolveAuthHeader, type TokenType } from './auth';
import type {
  GraphQLDocumentRequestOptions,
  GraphQLRequestOptions,
  GraphQLResponse,
  RailwayClientOptions,
  GraphQLRequestSignal,
  RetryContext,
  RetryOptions,
} from './types';
import {
  GraphQLRequestError,
  NetworkError,
  NotFoundError,
  PermissionError,
  ValidationError,
} from './errors';
import { flattenGraphQLResponse, type FlattenGraphQLResponse } from './flatten';

export { GraphQLRequestError } from './errors';

const DEFAULT_ENDPOINT = 'https://backboard.railway.com/graphql/v2';

export class RailwayClient {
  static fromEnv(partialOptions: Omit<Partial<RailwayClientOptions>, 'token'> = {}): RailwayClient {
    const envToken = requireTokenFromEnv();

    return new RailwayClient({
      ...partialOptions,
      token: envToken.token,
      tokenType: envToken.type,
    });
  }

  private readonly endpoint: string;

  private readonly fetchImpl: typeof fetch;

  private readonly retryOptions?: RetryOptions;

  private readonly token: string;

  private readonly tokenType: TokenType;

  private readonly baseHeaders: Record<string, string>;

  constructor(options: RailwayClientOptions) {
    this.token = options.token;
    this.tokenType = options.tokenType ?? 'account';
    this.endpoint = options.endpoint ?? DEFAULT_ENDPOINT;
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.retryOptions = options.retry;

    if (!this.token) {
      throw new MissingTokenError();
    }

    if (!this.fetchImpl) {
      throw new Error(
        'No fetch implementation available. Pass one via options.fetch when running outside of environments that provide fetch.',
      );
    }

    this.baseHeaders = {
      'Content-Type': 'application/json',
      ...options.headers,
      ...resolveAuthHeader(this.token, this.tokenType),
    };
  }

  request<TData = unknown, TVariables = Record<string, unknown>>(
    options: GraphQLRequestOptions<TVariables>,
  ): ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError> {
    const headers = {
      ...this.baseHeaders,
      ...options.headers,
    };

    const body = JSON.stringify({
      query: options.query,
      variables: options.variables,
      operationName: options.operationName,
    });

    const fetchImpl = options.fetch ?? this.fetchImpl;
    const retryOptions = options.retry ?? this.retryOptions;
    const signal = options.signal;

    const operation = (): ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError> =>
      ResultAsync.fromPromise<Response, GraphQLRequestError>(
        (async () => {
          const requestInit: RequestInit = {
            method: 'POST',
            headers,
            body,
          };

          if (signal) {
            requestInit.signal = signal as unknown as AbortSignal;
          }

          return fetchImpl(this.endpoint, requestInit);
        })(),
        (error) => toNetworkError(error),
      ).andThen((response) => parseResponse<TData>(response)) as ResultAsync<
        FlattenGraphQLResponse<TData>,
        GraphQLRequestError
      >;

    return executeWithRetry<FlattenGraphQLResponse<TData>>(operation, retryOptions, signal);
  }

  requestDocument<TData = unknown, TVariables = Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
    options: GraphQLDocumentRequestOptions = {},
  ): ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError> {
    const operationName = inferOperationName(document);

    return this.request<TData, TVariables>({
      query: print(document),
      variables,
      operationName,
      headers: options.headers,
      signal: options.signal,
      fetch: options.fetch,
      retry: options.retry,
    });
  }
}

const executeWithRetry = <T>(
  operation: () => ResultAsync<T, GraphQLRequestError>,
  retryOptions?: RetryOptions,
  signal?: GraphQLRequestSignal,
): ResultAsync<T, GraphQLRequestError> => {
  const config = retryOptions && retryOptions.maxAttempts > 0 ? retryOptions : undefined;
  const maxAttempts = config?.maxAttempts && config.maxAttempts > 0 ? config.maxAttempts : 1;

  const runner = async (): Promise<T> => {
    let lastError: GraphQLRequestError | undefined;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      const result = await operation();
      if (result.isOk()) {
        return result.value;
      }

      lastError = result.error;

      if (!config || attempt >= maxAttempts) {
        throw lastError;
      }

      const context: RetryContext = {
        attempt,
        error: lastError,
        response: lastError.response,
      };

      if (signal) {
        context.signal = signal;
      }

      const shouldRetry = await evaluateRetry(config, context, signal);
      if (!shouldRetry) {
        throw lastError;
      }

      await config.onRetry?.(context);

      const delayValue =
        typeof config.delayMs === 'function' ? await config.delayMs(attempt) : config.delayMs;

      if (delayValue && delayValue > 0) {
        await delay(delayValue);
      }
    }

    throw (
      lastError ?? new GraphQLRequestError('Retry attempts exhausted without completing request.')
    );
  };

  return ResultAsync.fromPromise(runner(), (error) =>
    error instanceof GraphQLRequestError
      ? error
      : new GraphQLRequestError(
          error instanceof Error ? error.message : 'Request failed.',
          undefined,
          null,
          undefined,
          error instanceof Error ? { cause: error } : undefined,
        ),
  );
};

const parseResponse = <TData>(
  response: Response,
): ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError> =>
  ResultAsync.fromPromise<string, GraphQLRequestError>(
    response.text(),
    (error) =>
      new GraphQLRequestError(
        'Failed to read response body.',
        response,
        null,
        undefined,
        error instanceof Error ? { cause: error } : undefined,
      ),
  ).andThen((rawBody) => {
    if (!rawBody) {
      const message = response.statusText || 'GraphQL response did not include data.';
      return err(new GraphQLRequestError(message, response, null, rawBody));
    }

    let payload: GraphQLResponse<TData> | null = null;

    try {
      payload = JSON.parse(rawBody) as GraphQLResponse<TData>;
    } catch (error) {
      return err(
        new GraphQLRequestError(
          'Failed to parse JSON response body.',
          response,
          null,
          rawBody,
          error instanceof Error ? { cause: error } : undefined,
        ),
      );
    }

    if (!payload || typeof payload !== 'object') {
      return err(
        new GraphQLRequestError(
          'GraphQL response body was not a valid GraphQL payload.',
          response,
          null,
          rawBody,
        ),
      );
    }

    const normalizedPayload = payload as GraphQLResponse<TData>;
    const hasGraphQLErrors =
      Array.isArray(normalizedPayload.errors) && normalizedPayload.errors.length > 0;

    if (!response.ok || hasGraphQLErrors) {
      return err(categorizeError(response, normalizedPayload, rawBody));
    }

    if (normalizedPayload.data === undefined) {
      return err(
        new GraphQLRequestError(
          'GraphQL response did not include data.',
          response,
          normalizedPayload,
          rawBody,
        ),
      );
    }

    return ok(flattenGraphQLResponse(normalizedPayload.data));
  }) as ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError>;

const categorizeError = (
  response: Response,
  payload: GraphQLResponse<unknown> | null,
  rawBody?: string,
): GraphQLRequestError => {
  const message = buildErrorMessage(response, payload);

  if (response.status === 404) {
    return new NotFoundError(message, response, payload, rawBody);
  }

  if (response.status === 400) {
    return new ValidationError(message, response, payload, rawBody);
  }

  if (response.status === 401 || response.status === 403) {
    return new PermissionError(message, response, payload, rawBody);
  }

  if (response.status === 0) {
    return new NetworkError(message, response, payload, rawBody);
  }

  return new GraphQLRequestError(message, response, payload, rawBody);
};

const buildErrorMessage = (
  response: Response,
  payload: GraphQLResponse<unknown> | null,
): string => {
  const graphqlMessage =
    payload?.errors && payload.errors.length > 0
      ? payload.errors.map((error) => error.message).join('\n')
      : undefined;

  return graphqlMessage || response.statusText || 'GraphQL request failed.';
};

const toNetworkError = (error: unknown): GraphQLRequestError => {
  if (error instanceof GraphQLRequestError) {
    return error;
  }

  const message =
    error instanceof Error && error.message ? error.message : 'Network request failed.';

  return new NetworkError(
    message,
    undefined,
    null,
    undefined,
    error instanceof Error ? { cause: error } : undefined,
  );
};

const delay = async (duration: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, duration));
};

const evaluateRetry = async (
  config: RetryOptions,
  context: RetryContext,
  signal?: GraphQLRequestSignal,
): Promise<boolean> => {
  if (isAbortError(context.error) || signal?.aborted) {
    return false;
  }

  if (config.shouldRetry) {
    return Boolean(await config.shouldRetry(context));
  }

  return false;
};

const isAbortError = (error: unknown): boolean => {
  if (!error) {
    return false;
  }

  if (typeof DOMException !== 'undefined' && error instanceof DOMException) {
    return error.name === 'AbortError';
  }

  if (error instanceof Error) {
    return error.name === 'AbortError';
  }

  return false;
};

const inferOperationName = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
): string | undefined => {
  const operationDefinition = document.definitions.find(
    (definition): definition is OperationDefinitionNode =>
      definition.kind === Kind.OPERATION_DEFINITION && Boolean(definition.name),
  );

  return operationDefinition?.name?.value;
};
