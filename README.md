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

Documents are written to `src/graphql/queries` and `src/graphql/mutations`, keyed by their operation names. The generator validates each document against the current introspection dump and skips anything the active schema no longer supports. Re-run `bun run codegen:introspect` after adding or regenerating documents.

### Emitting TypeScript Wrappers

After updating operations and regenerating types, create strongly-typed helpers in `src/operations/generated.ts`:

```bash
bun run generate:wrappers
```

This script introspects each `.graphql` document, derives the correct `TypedDocumentNode` import from `src/generated/graphql.ts`, and emits a thin wrapper that calls `client.requestDocument`. All wrappers are exported from the package root for convenient imports.

### Using the Client

Create a `RailwayClient` and call the generated helpers:

```ts
import { RailwayClient, me, apiTokenCreate } from "railway-sdk";

const client = RailwayClient.fromEnv();

const meData = await me(client);
const newToken = await apiTokenCreate(client, {
  input: { name: "CI Token", workspaceId: "workspace_123" },
});
```

Every GraphQL document under `src/graphql` is surfaced through an async function in `src/operations/generated.ts` (re-exported by the package). Each helper enforces the correct variables type and accepts optional `GraphQLDocumentRequestOptions`.

If you need lower-level control, you can still execute typed documents directly:

```ts
import { RailwayClient } from "railway-sdk";
import { MeDocument } from "railway-sdk/src/generated/graphql";

const client = RailwayClient.fromEnv();
const meData = await client.requestDocument(MeDocument);
```

The client automatically determines the appropriate authentication header for account, team, and project tokens.

---

This project runs on Bun v1.2.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
