import type { GraphQLError } from 'graphql';
import type { TokenType } from '../auth';

export interface GraphQLRequestSignal {
  readonly aborted: boolean;
  addEventListener?: (type: string, listener: (...args: unknown[]) => void) => void;
  removeEventListener?: (type: string, listener: (...args: unknown[]) => void) => void;
}

export interface RetryContext {
  attempt: number;
  error: unknown;
  response?: Response;
}

export interface RetryOptions {
  maxAttempts: number;
  shouldRetry?: (context: RetryContext) => boolean | Promise<boolean>;
  onRetry?: (context: RetryContext) => void | Promise<void>;
  delayMs?: number | ((attempt: number) => number | Promise<number>);
}

export interface GraphQLRequestBaseOptions {
  headers?: Record<string, string>;
  signal?: GraphQLRequestSignal;
  fetch?: typeof fetch;
  retry?: RetryOptions;
}

export interface GraphQLResponse<TData> {
  data?: TData;
  errors?: GraphQLError[];
}

export interface RailwayClientOptions {
  token: string;
  tokenType?: TokenType;
  endpoint?: string;
  fetch?: typeof fetch;
  headers?: Record<string, string>;
  retry?: RetryOptions;
}

export interface GraphQLRequestOptions<TVariables = Record<string, unknown>>
  extends GraphQLRequestBaseOptions {
  query: string;
  variables?: TVariables;
  operationName?: string;
}

export type GraphQLDocumentRequestOptions = GraphQLRequestBaseOptions;
