import { describe, expect, mock, test } from 'bun:test';

import { createRailway } from './railway';
import { RailwayClient } from './client';

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

const createJsonResponse = (payload: unknown, init?: ResponseInit): Response =>
  new Response(JSON.stringify(payload), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

describe('Railway namespace', () => {
  test('binds generated operations to the underlying client', async () => {
    const mePayload = {
      me: {
        __typename: 'User',
        agreedFairUse: true,
        avatar: null,
        banReason: null,
        createdAt: '2023-01-01T00:00:00.000Z',
        email: 'user@example.com',
        featureFlags: ['BUCKETS'],
        flags: ['BETA'],
        has2FA: false,
        id: 'user_123',
        isAdmin: false,
        isConductor: false,
        isVerified: true,
        lastLogin: '2023-01-02T00:00:00.000Z',
        name: 'Test User',
        registrationStatus: 'REGISTERED',
        riskLevel: 1,
        termsAgreedOn: '2023-01-01T00:00:00.000Z',
        username: 'test-user',
      },
    };

    const projectsPayload = {
      projects: {
        __typename: 'QueryProjectsConnection',
        edges: [
          {
            __typename: 'QueryProjectsConnectionEdge',
            cursor: 'cursor-1',
            node: {
              __typename: 'Project',
              id: 'proj_1',
              name: 'Test Project',
              description: 'Sample project',
              createdAt: '2023-01-01T00:00:00.000Z',
              updatedAt: '2023-01-01T00:00:00.000Z',
              isPublic: false,
              isTempProject: false,
              teamId: null,
            },
          },
        ],
        pageInfo: {
          __typename: 'PageInfo',
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: 'cursor-1',
          endCursor: 'cursor-1',
        },
      },
    };

    const operations: string[] = [];
    const projectListVariables = {
      after: null,
      before: null,
      first: 1,
      includeDeleted: false,
      last: null,
      userId: null,
      workspaceId: null,
    };

    const fetchMock = createFetchMock(async (_input: FetchInput, init?: FetchInit) => {
      const headers = init?.headers as Record<string, string>;
      expect(headers['Authorization']).toBe('Bearer namespaced-token');
      expect(headers['Content-Type']).toBe('application/json');

      const body = JSON.parse(init?.body as string) as {
        operationName?: string;
        variables?: Record<string, unknown>;
      };

      const operationName = body.operationName ?? 'unknown';
      operations.push(operationName);

      if (operationName === 'me') {
        return createJsonResponse({ data: mePayload });
      }

      if (operationName === 'projects') {
        expect(body.variables).toEqual(projectListVariables);
        return createJsonResponse({ data: projectsPayload });
      }

      throw new Error(`Unexpected operation: ${operationName}`);
    });

    const railway = createRailway({
      token: 'namespaced-token',
      fetch: fetchMock,
      endpoint: TEST_ENDPOINT,
    });

    expect(railway.client).toBeInstanceOf(RailwayClient);

    const meResult = await railway.account.me();
    expect(meResult.isOk()).toBe(true);
    if (meResult.isErr()) {
      throw meResult.error;
    }
    expect(meResult.value.me.email).toBe('user@example.com');

    const projectsResult = await railway.projects.list({ variables: projectListVariables });
    expect(projectsResult.isOk()).toBe(true);
    if (projectsResult.isErr()) {
      throw projectsResult.error;
    }
    expect(projectsResult.value.projects).toHaveLength(1);
    expect(projectsResult.value.projects[0]?.name).toBe('Test Project');
    expect(projectsResult.value.projects.pageInfo?.hasNextPage).toBe(false);

    expect(operations).toEqual(['me', 'projects']);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
