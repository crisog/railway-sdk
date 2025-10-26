import { requireTokenFromEnv } from './auth';
import type { RailwayApi } from './api';
import { createRailwayApi } from './api';
import { RailwayClient } from './client';
import type { RailwayClientOptions } from './types';

export type Railway = RailwayApi & { client: RailwayClient };

export const createRailway = (options: RailwayClientOptions): Railway => {
  const client = new RailwayClient(options);
  const api = createRailwayApi(client);
  return { ...api, client };
};

export const createRailwayFromEnv = (
  partialOptions: Omit<Partial<RailwayClientOptions>, 'token'> = {},
): Railway => {
  const envToken = requireTokenFromEnv();
  return createRailway({
    ...partialOptions,
    token: envToken.token,
    tokenType: envToken.type,
  });
};
