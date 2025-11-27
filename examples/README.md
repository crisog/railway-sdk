# Railway SDK Examples

This directory contains examples for all Railway SDK operations, organized by namespace.

## Running Examples

```bash
# Set your Railway API token
export RAILWAY_API_TOKEN="your-token-here"

# Run an example
bun run examples/projects/list.ts
```

## Token Types & Scope

> [!IMPORTANT]
> This token scope matrix is subject to change and might not be accurate. Always refer to [Railway's official documentation](https://docs.railway.com/guides/public-api) for the most up-to-date information.

Railway supports three types of API tokens, each with different access levels:

- **Account Token**: Global access to everything, multiple workspaces
- **Workspace Token**: Single workspace access, multiple projects
- **Project Token**: Scoped to specific environment within a project

### Token Scope Matrix

| Category           | Account Token  | Workspace Token   | Project Token     |
| ------------------ | -------------- | ----------------- | ----------------- |
| **projects/**      | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **services/**      | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **environments/**  | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **deployments/**   | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **variables/**     | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **domains/**       | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **templates/**     | ✅ Full Access | ✅ Full Access    | ✅ Full Access    |
| **networking/**    | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **observability/** | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **workflows/**     | ⚠️ Limited     | ⚠️ Limited        | ❌ Not Authorized |
| **integrations/**  | ✅ Full Access | ❌ Not Authorized | ❌ Not Authorized |
| **volumes/**       | ✅ Full Access | ✅ Full Access    | ✅ Backups Only   |

**Legend:**

- ✅ Full Access - All operations work
- ⚠️ Limited - Some operations may be restricted
- ❌ Not Authorized - Token scope doesn't allow access

### Key Differences

- **Account Token**: Required for GitHub integrations. All other operations work identically to Workspace Token.
- **Workspace Token**: Best for most operations. Workflow status works for template deployments but volume backup workflows return "Not Authorized".
- **Project Token**: Environment-scoped access. Only templates work fully. Volume backup operations work with valid volume instance IDs in the token's scoped environment.
