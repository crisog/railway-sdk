import type { GraphQLResponse } from './types';

export class GraphQLRequestError extends Error {
  constructor(
    message: string,
    readonly response?: Response,
    readonly body?: GraphQLResponse<unknown> | null,
    readonly rawBody?: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = 'GraphQLRequestError';
  }
}

export class NotFoundError extends GraphQLRequestError {
  constructor(
    message: string,
    response?: Response,
    body?: GraphQLResponse<unknown> | null,
    rawBody?: string,
    options?: ErrorOptions,
  ) {
    super(message, response, body, rawBody, options);
    this.name = 'NotFoundError';
  }
}

export class ValidationError extends GraphQLRequestError {
  constructor(
    message: string,
    response?: Response,
    body?: GraphQLResponse<unknown> | null,
    rawBody?: string,
    options?: ErrorOptions,
  ) {
    super(message, response, body, rawBody, options);
    this.name = 'ValidationError';
  }
}

export class PermissionError extends GraphQLRequestError {
  constructor(
    message: string,
    response?: Response,
    body?: GraphQLResponse<unknown> | null,
    rawBody?: string,
    options?: ErrorOptions,
  ) {
    super(message, response, body, rawBody, options);
    this.name = 'PermissionError';
  }
}

export class NetworkError extends GraphQLRequestError {
  constructor(
    message: string,
    response?: Response,
    body?: GraphQLResponse<unknown> | null,
    rawBody?: string,
    options?: ErrorOptions,
  ) {
    super(message, response, body, rawBody, options);
    this.name = 'NetworkError';
  }
}
