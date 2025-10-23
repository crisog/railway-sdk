export type TokenType = 'account' | 'team' | 'project';

export interface EnvToken {
  token: string;
  type: TokenType;
  envVar: string;
}

export class MissingTokenError extends Error {
  constructor(
    message =
      'Missing Railway API token. Provide one via RailwayClient options or environment variables.',
  ) {
    super(message);
    this.name = 'MissingTokenError';
  }
}

const tokenSources: ReadonlyArray<{ env: string; type: TokenType }> = Object.freeze([
  { env: 'RAILWAY_API_TOKEN', type: 'account' },
  { env: 'RAILWAY_TEAM_TOKEN', type: 'team' },
  { env: 'RAILWAY_PROJECT_TOKEN', type: 'project' },
]);

export const getTokenFromEnv = (): EnvToken | null => {
  for (const { env, type } of tokenSources) {
    const token = process.env[env];
    if (token) {
      return { token, type, envVar: env };
    }
  }

  return null;
};

export const requireTokenFromEnv = (): EnvToken => {
  const envToken = getTokenFromEnv();

  if (!envToken) {
    throw new MissingTokenError(
      'No Railway token found in environment: set RAILWAY_API_TOKEN, RAILWAY_TEAM_TOKEN, or RAILWAY_PROJECT_TOKEN.',
    );
  }

  return envToken;
};

export const resolveAuthHeader = (token: string, type: TokenType): Record<string, string> => {
  switch (type) {
    case 'account':
      return { Authorization: `Bearer ${token}` };
    case 'team':
      return { 'Team-Access-Token': token };
    case 'project':
      return { 'Project-Access-Token': token };
    default: {
      const neverType: never = type;
      throw new Error(`Unsupported token type: ${String(neverType)}`);
    }
  }
};

export const TOKEN_ENV_PRIORITY = tokenSources;
