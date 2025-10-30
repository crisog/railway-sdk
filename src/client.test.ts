import { afterEach, describe, expect, mock, test } from 'bun:test';
import { Kind } from 'graphql';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import { GraphQLRequestError, RailwayClient } from './client';
import type { RailwayClientOptions } from './types';

const TEST_ENDPOINT = 'https://example.com/graphql';

type FetchParams = Parameters<typeof fetch>;
type FetchInput = FetchParams[0];
type FetchInit = FetchParams[1];

const createFetchMock = (
  implementation: (input: FetchInput, init?: FetchInit) => Promise<Response>,
): typeof fetch => {
  const fn = mock(implementation);
  return Object.assign(fn, { preconnect: mock(async () => false) }) as unknown as typeof fetch;
};

const createClient = (overrides: Omit<RailwayClientOptions, 'token'>): RailwayClient =>
  new RailwayClient({
    token: 'test-token',
    ...overrides,
  });

const createJsonResponse = (payload: unknown, init?: ResponseInit): Response =>
  new Response(JSON.stringify(payload), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

const setEnv = (key: string, value: string | undefined): void => {
  if (value === undefined) {
    Reflect.deleteProperty(process.env, key);
  } else {
    process.env[key] = value;
  }
};

const restoreEnv = (backup: Record<string, string | undefined>): void => {
  for (const [key, value] of Object.entries(backup)) {
    setEnv(key, value);
  }
};

const snapshotEnv = (): Record<string, string | undefined> => ({
  RAILWAY_API_TOKEN: process.env['RAILWAY_API_TOKEN'],
  RAILWAY_TEAM_TOKEN: process.env['RAILWAY_TEAM_TOKEN'],
  RAILWAY_PROJECT_TOKEN: process.env['RAILWAY_PROJECT_TOKEN'],
});

describe('RailwayClient', () => {
  let envBackup: Record<string, string | undefined> | undefined;

  afterEach(() => {
    if (envBackup) {
      restoreEnv(envBackup);
      envBackup = undefined;
    }
  });

  test('request posts GraphQL payload with base headers', async () => {
    const fetchMock = createFetchMock(async (_input: FetchInput, init?: FetchInit) => {
      const headers = init?.headers as Record<string, string>;
      expect(init?.method).toBe('POST');
      expect(headers['Content-Type']).toBe('application/json');
      expect(headers['Authorization']).toBe('Bearer test-token');

      const parsedBody = JSON.parse(init?.body as string);
      expect(parsedBody).toEqual({
        query: 'query CustomOp { __typename }',
        variables: { flag: true },
        operationName: 'CustomOp',
      });

      return createJsonResponse({ data: { ok: true } });
    });

    const client = createClient({
      fetch: fetchMock,
      endpoint: TEST_ENDPOINT,
    });

    const result = await client.request({
      query: 'query CustomOp { __typename }',
      variables: { flag: true },
      operationName: 'CustomOp',
    });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test('requestDocument prints operation and forwards variables', async () => {
    const fetchMock = createFetchMock(async (_input: FetchInput, init?: FetchInit) => {
      const body = JSON.parse(init?.body as string);
      expect(body.operationName).toBe('TestOperation');
      expect(body.variables).toEqual({ id: '123' });

      return createJsonResponse({ data: { test: 'value' } });
    });

    const client = createClient({
      fetch: fetchMock,
      endpoint: TEST_ENDPOINT,
    });

    const document = {
      kind: Kind.DOCUMENT,
      definitions: [
        {
          kind: Kind.OPERATION_DEFINITION,
          operation: 'query',
          name: { kind: Kind.NAME, value: 'TestOperation' },
          selectionSet: {
            kind: Kind.SELECTION_SET,
            selections: [{ kind: Kind.FIELD, name: { kind: Kind.NAME, value: '__typename' } }],
          },
          variableDefinitions: [
            {
              kind: Kind.VARIABLE_DEFINITION,
              variable: { kind: Kind.VARIABLE, name: { kind: Kind.NAME, value: 'id' } },
              type: {
                kind: Kind.NON_NULL_TYPE,
                type: { kind: Kind.NAMED_TYPE, name: { kind: Kind.NAME, value: 'ID' } },
              },
            },
          ],
        },
      ],
    } as unknown as TypedDocumentNode<{ test: string }, { id: string }>;

    const result = await client.requestDocument(document, { id: '123' });
    expect(result).toEqual({ test: 'value' });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test('throws GraphQLRequestError when GraphQL errors are returned', async () => {
    const fetchMock = createFetchMock(async () =>
      createJsonResponse({
        data: null,
        errors: [{ message: 'Boom!', path: ['test'] }],
      }),
    );

    const client = createClient({
      fetch: fetchMock,
      endpoint: TEST_ENDPOINT,
    });

    let caught: unknown;
    try {
      await client.request({ query: '{ __typename }' });
    } catch (error) {
      caught = error;
    }

    expect(caught).toBeInstanceOf(GraphQLRequestError);
    const graphError = caught as GraphQLRequestError;
    expect(graphError.body?.errors?.[0]?.message).toBe('Boom!');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test('retries when shouldRetry resolves truthy', async () => {
    let callCount = 0;
    const fetchMock = createFetchMock(async () => {
      callCount += 1;
      if (callCount === 1) {
        throw new TypeError('Network down');
      }

      return createJsonResponse({ data: { ok: true } });
    });

    const shouldRetry = mock(async () => true);
    const onRetry = mock(async () => undefined);

    const client = createClient({
      fetch: fetchMock,
      endpoint: TEST_ENDPOINT,
      retry: {
        maxAttempts: 2,
        shouldRetry,
        onRetry,
      },
    });

    const result = await client.request({ query: '{ __typename }' });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(shouldRetry).toHaveBeenCalledTimes(1);
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  test('fromEnv discovers team token and applies correct header', async () => {
    envBackup = snapshotEnv();
    setEnv('RAILWAY_API_TOKEN', undefined);
    setEnv('RAILWAY_TEAM_TOKEN', 'team-token');
    setEnv('RAILWAY_PROJECT_TOKEN', undefined);

    const fetchMock = createFetchMock(async (_input: FetchInput, init?: FetchInit) => {
      const headers = init?.headers as Record<string, string>;
      expect(headers['Team-Access-Token']).toBe('team-token');
      return createJsonResponse({ data: { ok: true } });
    });

    const client = RailwayClient.fromEnv({
      fetch: fetchMock,
      endpoint: TEST_ENDPOINT,
    });
    const result = await client.request({ query: '{ __typename }' });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
