# railway-sdk

A lightweight TypeScript SDK and tooling for Railway's public GraphQL API.

## Getting Started

Install dependencies with Bun:

```bash
bun install
```

### Generating the GraphQL Schema

The SDK relies on an introspection dump of the Railway schema. Before running code generation, set one of the supported tokens in your environment:

- `RAILWAY_API_TOKEN` for personal/account tokens
- `RAILWAY_TEAM_TOKEN` for team tokens
- `RAILWAY_PROJECT_TOKEN` for project tokens

Then run:

```bash
bun run codegen:introspect
```

This command fetches the schema from `https://backboard.railway.com/graphql/v2` and writes a minified introspection JSON file to `schema/railway-introspection.json`.

### Using the Client

Create a `RailwayClient` by passing a token directly:

```ts
import { RailwayClient } from 'railway-sdk';

const client = new RailwayClient({ token: process.env.RAILWAY_API_TOKEN! });

const result = await client.request<{ me: { name: string } }>({
  query: `query { me { name } }`,
});
```

Alternatively, bootstrap from environment variables:

```ts
const client = RailwayClient.fromEnv();
```

The client automatically determines the appropriate authentication header for account, team, and project tokens.

### Next Steps

- Define `.graphql` documents under `src/` and extend `codegen.ts` with additional plugins such as `typescript`, `typescript-operations`, and `typed-document-node`.
- Use the generated types to build higher-level SDK helpers around common workflows (projects, services, deployments, variables, etc).

---

This project runs on Bun v1.2.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
