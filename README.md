# Railway SDK

A lightweight TypeScript SDK and tooling around Railway's public GraphQL API. It ships a minimal client, generated operation helpers, and scripts that keep local documents aligned with the platform schema.

## Installation

Install the package together with your preferred package manager:

```bash
npm install @crisog/railway-sdk
```

> **Note**  
> The SDK is published as ESM-only. Import it using `import`/dynamic `import()`; CommonJS `require()` is not supported.

## Quick Start

```bash
export RAILWAY_API_TOKEN=your-token-here
```

```ts
import { createRailwayFromEnv } from '@crisog/railway-sdk';

const railway = createRailwayFromEnv();

const projectsResult = await railway.projects.list({
  variables: {
    first: 5,
    includeDeleted: false,
  },
});

if (projectsResult.isErr()) {
  throw projectsResult.error;
}

const { projects } = projectsResult.value;

for (const project of projects) {
  console.log(`${project.id} – ${project.name}`);
}

if (projects.pageInfo.hasNextPage) {
  console.log('More projects available…');
}
```

### Initialization

| Method                   | Use When                                                       |
| ------------------------ | -------------------------------------------------------------- |
| `createRailwayFromEnv()` | Token lives in environment variables                           |
| `createRailway(options)` | Token is supplied programmatically (e.g., from a secret store) |

```ts
import { createRailway } from '@crisog/railway-sdk';

const railway = createRailway({
  token: myToken,
  tokenType: 'team',
});
```

### Response Handling

Every helper returns `ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError>`. Branch with `.isOk()` / `.isErr()`, `unwrapOr`, or `.match()` to handle success and failure.

The `FlattenGraphQLResponse` type collapses GraphQL connections (`edges`/`node`) into plain arrays while preserving metadata like `pageInfo`.

### Examples

Browse more examples at [github.com/crisog/railway-sdk/tree/main/examples](https://github.com/crisog/railway-sdk/tree/main/examples).

## Authentication

Supported environment variables, in lookup order:

1. `RAILWAY_API_TOKEN` (account / personal tokens)
2. `RAILWAY_TEAM_TOKEN`
3. `RAILWAY_PROJECT_TOKEN`

If no token is discovered, the helpers throw `MissingTokenError`.

### Token Types

The SDK's `tokenType` option determines which HTTP header is used:

| tokenType   | HTTP Header             |
| ----------- | ----------------------- |
| `'account'` | `Authorization: Bearer` |
| `'team'`    | `Team-Access-Token`     |
| `'project'` | `Project-Access-Token`  |

> [!NOTE]
> The default `tokenType` is `'account'`. For workspace tokens, use `'team'`. For project tokens, use `'project'`.

<details>
<summary><strong>Token Scope Matrix</strong></summary>

| Category           | Account Token  | Workspace Token   | Project Token       |
| ------------------ | -------------- | ----------------- | ------------------- |
| **projects/**      | ✅ Full Access | ✅ Full Access    | ⚠️ Get Only         |
| **services/**      | ✅ Full Access | ✅ Full Access    | ✅ Full Access      |
| **environments/**  | ✅ Full Access | ✅ Full Access    | ✅ Full Access      |
| **deployments/**   | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized   |
| **variables/**     | ✅ Full Access | ✅ Full Access    | ✅ Full Access      |
| **domains/**       | ✅ Full Access | ✅ Full Access    | ✅ Full Access      |
| **templates/**     | ✅ Full Access | ✅ Full Access    | ⚠️ Existing Project |
| **networking/**    | ✅ Full Access | ✅ Full Access    | ✅ Full Access      |
| **observability/** | ✅ Full Access | ✅ Full Access    | ⚠️ Events Only      |
| **workflows/**     | ⚠️ Limited     | ⚠️ Limited        | ❌ Not Authorized   |
| **integrations/**  | ✅ Full Access | ❌ Not Authorized | ❌ Not Authorized   |
| **volumes/**       | ✅ Full Access | ✅ Full Access    | ✅ Backups Only     |
| **account/**       | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized   |

**Legend:** ✅ Full Access · ⚠️ Limited · ❌ Not Authorized

- **Account Token**: Required for GitHub integrations. Use `tokenType: 'account'` (default).
- **Workspace Token**: Best for workspace-level operations. Use `tokenType: 'team'`. Can create new projects and deploy templates.
- **Project Token**: Scoped to specific project/environment. Use `tokenType: 'project'`. Has broad access within the scoped project but cannot list deployments or access metrics.

</details>

## Supported Namespaced Methods

Both helpers return a `Railway` client with these namespaces. Use them to discover what each part of the API can do:

| Namespace       | Summary                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `projects`      | Cover the full project lifecycle: CRUD, membership, invitations, feature flags, schedules, tokens, access checks, workflows, and transfers.    |
| `services`      | Manage services and deployments, including instance operations (limits, overrides), domains, feature flags, and runtimes.                      |
| `deployments`   | Inspect and operate deployments: approvals, retries, logs/events, triggers, and snapshots.                                                     |
| `domains`       | Work with custom domains attached to Railway services.                                                                                         |
| `account`       | Manage the authenticated account: profile, email updates, invites, flags, passkeys, beta access, terms, and deletion.                          |
| `environments`  | Manage environment lifecycle, logs, configuration patches (including staged changes), and deploy triggers.                                     |
| `networking`    | Administer private networks, endpoints, egress gateways, nodes, and TCP proxies.                                                               |
| `templates`     | Discover, clone, generate, publish, or delete templates (including project sources).                                                           |
| `volumes`       | Create, update, delete volumes, and administer backups and schedules.                                                                          |
| `variables`     | List, upsert, and manage variables, collections, and shared configurations.                                                                    |
| `auth`          | Handle login sessions, recovery codes, active sessions, and two-factor authentication flows.                                                   |
| `apiTokens`     | Create, list, and revoke personal API tokens.                                                                                                  |
| `billing`       | Control customer subscriptions, referral info, usage limits, and fair use acknowledgements.                                                    |
| `integrations`  | Configure third-party integrations (GitHub, Heroku, Vercel, providers) and their auth records.                                                 |
| `observability` | Access platform observability dashboards, logs, events, metrics, and usage statistics.                                                         |
| `preferences`   | Retrieve and update user preferences plus per-resource overrides.                                                                              |
| `webhooks`      | Create, update, delete, and list project webhooks.                                                                                             |
| `workspaces`    | Inspect and update workspaces, manage users and permissions, invite codes, templates, trusted domains, Slack channels, and identity providers. |
| `regions`       | List available deployment regions.                                                                                                             |
| `misc`          | Miscellaneous public platform endpoints such as changelog assets, status, and platform feature flags.                                          |

> Refer to `src/api.ts` for the precise helper mapping and regenerate wrappers after schema or document changes (`bun run generate:wrappers`).

## Generated Operations

The SDK re-exports every generated wrapper from `src/generated/operations.ts`. You can cherry‑pick individual helpers if you prefer tree-shaken imports:

```ts
import { createRailwayFromEnv, projects } from '@crisog/railway-sdk';

const railway = createRailwayFromEnv();
const result = await projects(railway.client, {
  variables: { first: 5 },
});
```

Each helper enforces the correct variables shape and accepts optional `GraphQLDocumentRequestOptions` (custom headers, alternate `fetch`, abort signals, retry configuration, …). Responses use the flattened representation described above so you can iterate directly over arrays instead of traversing `edges`/`node` wrappers.

## Retries & Cancellation

Pass retry configuration through the creation helpers:

```ts
const railway = createRailwayFromEnv({
  retry: {
    maxAttempts: 3,
    shouldRetry: ({ error, response }) => response?.status >= 500 || error instanceof TypeError, // network errors
    delayMs: (attempt) => attempt * 250,
  },
});
```

Retries never run by default. `shouldRetry` must return `true` to trigger another attempt. Aborted requests (AbortController, `signal.aborted`, etc.) are never retried and bubble the original abort error back to the caller.

## Error Handling

- Generated operations resolve to `ResultAsync<FlattenGraphQLResponse<TData>, GraphQLRequestError>`. The `Err` variant includes `GraphQLRequestError` (or subclasses such as `NetworkError`, `NotFoundError`, `PermissionError`, `ValidationError`).
- Inspect `error.response`, `error.body`, or `error.rawBody` on the error instance for full context.
- Missing or empty tokens still throw `MissingTokenError` during client construction.

## Response Utilities

The SDK ships a few helpers that build on `neverthrow` results:

- `unwrapField(result, 'field')` – ensures the top-level field exists before returning it.
- `unwrapArray(result, 'field')` – validates the field is an array.
- `unwrapNested(result, ['path', 'to', 'field'])` – walks nested objects safely.

All helpers preserve the original error type when the upstream result is `Err`, and produce a `ResponseFieldError` when the requested field is missing.

## Code Generation Workflow

The repository includes scripts for keeping schema artifacts and wrappers in sync:

1. **Fetch the latest schema**

   ```bash
   bun run codegen:introspect
   ```

   Requires a valid token; writes `schema/railway-introspection.json` and regenerates `src/generated/graphql.ts`.

2. **Emit typed wrappers**

   ```bash
   bun run generate:wrappers
   ```

   Produces `src/generated/operations.ts`, which powers the namespaced API surface.

Run both commands whenever the upstream schema changes or after adding/editing `.graphql` documents under `src/graphql/`.

## Development

```bash
bun install
bun run lint
bun run typecheck
```

Bun 1.2+ is recommended. The project enforces strict TypeScript options; run formatting/linting before submitting changes.
