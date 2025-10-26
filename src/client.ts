import { print, Kind, type OperationDefinitionNode } from 'graphql';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { MissingTokenError, requireTokenFromEnv, resolveAuthHeader, type TokenType } from './auth';
import type {
  GraphQLDocumentRequestOptions,
  GraphQLRequestOptions,
  GraphQLResponse,
  RailwayClientOptions,
  RetryContext,
  RetryOptions,
} from './types';

const DEFAULT_ENDPOINT = 'https://backboard.railway.com/graphql/v2';

export class GraphQLRequestError extends Error {
  constructor(
    message: string,
    readonly response: Response,
    readonly body: GraphQLResponse<unknown> | null,
    readonly rawBody?: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = 'GraphQLRequestError';
  }
}

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

  async request<TData = unknown, TVariables = Record<string, unknown>>(
    options: GraphQLRequestOptions<TVariables>,
  ): Promise<TData> {
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

    return executeWithRetry<TData>(async () => {
      const requestInit: RequestInit = {
        method: 'POST',
        headers,
        body,
      };

      if (signal) {
        requestInit.signal = signal as unknown as AbortSignal;
      }

      const response = await fetchImpl(this.endpoint, requestInit);
      return parseResponse<TData>(response);
    }, retryOptions);
  }

  async requestDocument<TData = unknown, TVariables = Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
    options: GraphQLDocumentRequestOptions = {},
  ): Promise<TData> {
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

const executeWithRetry = async <T>(
  operation: () => Promise<T>,
  retryOptions?: RetryOptions,
): Promise<T> => {
  const config = retryOptions && retryOptions.maxAttempts > 0 ? retryOptions : undefined;
  const maxAttempts = config?.maxAttempts && config.maxAttempts > 0 ? config.maxAttempts : 1;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      if (!config || attempt >= maxAttempts) {
        throw error;
      }

      const context: RetryContext = {
        attempt,
        error,
        response: error instanceof GraphQLRequestError ? error.response : undefined,
      };

      if (config.shouldRetry) {
        const shouldRetry = await config.shouldRetry(context);
        if (!shouldRetry) {
          throw error;
        }
      }

      await config.onRetry?.(context);

      const delayValue =
        typeof config.delayMs === 'function' ? await config.delayMs(attempt) : config.delayMs;

      if (delayValue && delayValue > 0) {
        await delay(delayValue);
      }
    }
  }

  throw new Error('Retry attempts exhausted without completing request.');
};

const parseResponse = async <TData>(response: Response): Promise<TData> => {
  let rawBody: string | undefined;

  try {
    rawBody = await response.text();
  } catch (error) {
    throw new GraphQLRequestError(
      'Failed to read response body.',
      response,
      null,
      undefined,
      error instanceof Error ? { cause: error } : undefined,
    );
  }

  if (!rawBody) {
    const message = response.statusText || 'GraphQL response did not include data.';
    throw new GraphQLRequestError(message, response, null, rawBody);
  }

  let payload: GraphQLResponse<TData> | null = null;

  try {
    payload = JSON.parse(rawBody) as GraphQLResponse<TData>;
  } catch (error) {
    throw new GraphQLRequestError(
      'Failed to parse JSON response body.',
      response,
      null,
      rawBody,
      error instanceof Error ? { cause: error } : undefined,
    );
  }

  if (!payload || typeof payload !== 'object') {
    throw new GraphQLRequestError(
      'GraphQL response body was not a valid GraphQL payload.',
      response,
      null,
      rawBody,
    );
  }

  const normalizedPayload = payload as GraphQLResponse<TData>;
  const hasGraphQLErrors =
    Array.isArray(normalizedPayload.errors) && normalizedPayload.errors.length > 0;

  if (!response.ok || hasGraphQLErrors) {
    const message =
      (normalizedPayload.errors && normalizedPayload.errors.length > 0
        ? normalizedPayload.errors.map((error) => error.message).join('\n')
        : undefined) ||
      response.statusText ||
      'GraphQL request failed.';

    throw new GraphQLRequestError(message, response, normalizedPayload, rawBody);
  }

  if (normalizedPayload.data === undefined) {
    throw new GraphQLRequestError(
      'GraphQL response did not include data.',
      response,
      normalizedPayload,
      rawBody,
    );
  }

  return normalizedPayload.data;
};

const delay = async (duration: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, duration));
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
