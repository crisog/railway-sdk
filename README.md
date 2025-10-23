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
It also generates typed operation artifacts in `src/generated/graphql.ts` for every document in `src/graphql/`.

### Generating Operation Documents

Railway ships a Postman/Insomnia collection (`railway_graphql_collection.json`) that contains ready-made operations. Use the helper script to materialise `.graphql` files:

```bash
# Generate a subset of operations
bun run generate:operations -- --only=me,apiTokenCreate

# Regenerate all operations and overwrite existing files
bun run generate:operations -- --force
```

Documents are written to `src/graphql/queries` and `src/graphql/mutations`, keyed by their operation names. Re-run `bun run codegen:introspect` after adding or regenerating documents.

### Using the Client

Create a `RailwayClient` and call the provided helpers:

```ts
import { RailwayClient, fetchCurrentUser, createApiToken } from 'railway-sdk';

const client = RailwayClient.fromEnv();

const me = await fetchCurrentUser(client);
const newToken = await createApiToken(client, {
  input: { name: 'CI Token', workspaceId: 'workspace_123' },
});
```

If you need lower-level control, you can still execute typed documents directly:

```ts
import { RailwayClient } from 'railway-sdk';
import { MeDocument } from 'railway-sdk/src/generated/graphql';

const client = RailwayClient.fromEnv();
const me = await client.requestDocument(MeDocument);
```

The client automatically determines the appropriate authentication header for account, team, and project tokens.

### Baseline Operations

Two starter operations ship with the SDK:

- `fetchCurrentUser` (`src/operations/account.ts`) wraps the `Me` query and returns the current account details.
- `createApiToken` (`src/operations/apiTokens.ts`) creates a new API token when supplied with `ApiTokenCreateInput`.

These helpers rely on the generated artifacts in `src/generated/graphql.ts`. Add new `.graphql` documents under `src/graphql/` and rerun `bun run codegen:introspect` to grow the SDK surface.

### Next Steps

- Add new `.graphql` documents under `src/graphql/` and extend `codegen.ts` with additional plugins such as `typescript`, `typescript-operations`, and `typed-document-node`.
- Use the generated types to build higher-level SDK helpers around common workflows (projects, services, deployments, variables, etc).

---

This project runs on Bun v1.2.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
