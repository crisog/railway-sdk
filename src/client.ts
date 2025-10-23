import { print, Kind, type GraphQLError, type OperationDefinitionNode } from 'graphql';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  MissingTokenError,
  requireTokenFromEnv,
  resolveAuthHeader,
  type TokenType,
} from './auth';

export interface RailwayClientOptions {
  token: string;
  tokenType?: TokenType;
  endpoint?: string;
  fetch?: typeof fetch;
  headers?: Record<string, string>;
}

export interface GraphQLRequestOptions<TVariables = Record<string, unknown>> {
  query: string;
  variables?: TVariables;
  operationName?: string;
  headers?: Record<string, string>;
}

export interface GraphQLDocumentRequestOptions {
  headers?: Record<string, string>;
}

const DEFAULT_ENDPOINT = 'https://backboard.railway.com/graphql/v2';

interface GraphQLResponse<TData> {
  data?: TData;
  errors?: GraphQLError[];
}

export class GraphQLRequestError extends Error {
  constructor(
    message: string,
    readonly response: Response,
    readonly body: GraphQLResponse<unknown>,
  ) {
    super(message);
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

  private readonly token: string;

  private readonly tokenType: TokenType;

  private readonly baseHeaders: Record<string, string>;

  constructor(options: RailwayClientOptions) {
    this.token = options.token;
    this.tokenType = options.tokenType ?? 'account';
    this.endpoint = options.endpoint ?? DEFAULT_ENDPOINT;
    this.fetchImpl = options.fetch ?? globalThis.fetch;

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
    const response = await this.fetchImpl(this.endpoint, {
      method: 'POST',
      headers: {
        ...this.baseHeaders,
        ...options.headers,
      },
      body: JSON.stringify({
        query: options.query,
        variables: options.variables,
        operationName: options.operationName,
      }),
    });

    const payload = (await response.json()) as GraphQLResponse<TData>;

    if (!response.ok || payload.errors) {
      const message =
        payload.errors?.map((error) => error.message).join('\n') ?? response.statusText;
      throw new GraphQLRequestError(message, response, payload);
    }

    if (!payload.data) {
      throw new GraphQLRequestError('GraphQL response did not include data.', response, payload);
    }

    return payload.data;
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
    });
  }
}

const inferOperationName = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
): string | undefined => {
  const operationDefinition = document.definitions.find(
    (definition): definition is OperationDefinitionNode =>
      definition.kind === Kind.OPERATION_DEFINITION && Boolean(definition.name),
  );

  return operationDefinition?.name?.value;
};
