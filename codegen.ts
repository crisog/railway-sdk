import type { CodegenConfig } from '@graphql-codegen/cli';
import { requireTokenFromEnv, resolveAuthHeader } from './src/auth';

const graphqlEndpoint = 'https://backboard.railway.com/graphql/v2';

const { token, type } = requireTokenFromEnv();
const schemaHeaders = resolveAuthHeader(token, type);

const config: CodegenConfig = {
  schema: [
    {
      [graphqlEndpoint]: {
        headers: schemaHeaders,
      },
    },
  ],
  generates: {
    'schema/railway-introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
