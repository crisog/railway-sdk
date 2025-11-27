export type TokenType = 'project';

export interface EnvToken {
  token: string;
  type?: TokenType;
  envVar: string;
}

export class MissingTokenError extends Error {
  constructor(
    message = 'Missing Railway API token. Provide one via RailwayClient options or environment variables.',
  ) {
    super(message);
    this.name = 'MissingTokenError';
  }
}

const tokenSources: readonly { env: string; type?: TokenType }[] = Object.freeze([
  { env: 'RAILWAY_API_TOKEN' },
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
      'No Railway token found in environment: set RAILWAY_API_TOKEN or RAILWAY_PROJECT_TOKEN.',
    );
  }

  return envToken;
};

export const resolveAuthHeader = (token: string, type?: TokenType): Record<string, string> => {
  if (type === 'project') {
    return { 'Project-Access-Token': token };
  }
  return { Authorization: `Bearer ${token}` };
};

export const TOKEN_ENV_PRIORITY = tokenSources;
