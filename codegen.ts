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
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    'schema/railway-introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        avoidOptionals: true,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
