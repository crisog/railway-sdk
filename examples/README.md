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

Railway supports three types of API tokens, each with different access levels:

- **Account Token**: Global access to everything, multiple workspaces
- **Workspace Token**: Single workspace access, multiple projects
- **Project Token**: Scoped to specific environment within a project

### Token Scope Matrix

| Category        | Account Token  | Workspace Token   | Project Token     |
| --------------- | -------------- | ----------------- | ----------------- |
| **projects/**   | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **services/**   | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **environments/** | ✅ Full Access | ✅ Full Access  | ❌ Not Authorized |
| **deployments/** | ✅ Full Access | ✅ Full Access   | ❌ Not Authorized |
| **variables/**  | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **domains/**    | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **templates/**  | ✅ Full Access | ✅ Full Access    | ✅ Full Access    |
| **networking/** | ✅ Full Access | ✅ Full Access    | ❌ Not Authorized |
| **observability/** | ✅ Full Access | ✅ Full Access | ❌ Not Authorized |
| **workflows/**  | ⚠️ Limited     | ⚠️ Limited        | ❌ Not Authorized |
| **integrations/** | ✅ Full Access | ❌ Not Authorized | ❌ Not Authorized |
| **volumes/**    | ✅ Full Access | ✅ Full Access    | ✅ Backups Only   |

**Legend:**

- ✅ Full Access - All operations work
- ⚠️ Limited - Some operations may be restricted
- ❌ Not Authorized - Token scope doesn't allow access

### Key Differences

- **Account Token**: Required for GitHub integrations. All other operations work identically to Workspace Token.
- **Workspace Token**: Best for most operations. Workflow status works for template deployments but volume backup workflows return "Not Authorized".
- **Project Token**: Environment-scoped access. Only templates work fully. Volume backup operations work with valid volume instance IDs in the token's scoped environment.

## Examples by Category

### deployments/
- `list.ts` - List deployments for a project
- `get.ts` - Get deployment details
- `logs.ts` - Fetch deployment logs
- `events.ts` - Fetch deployment events
- `redeploy.ts` - Redeploy a previous deployment
- `restart.ts` - Restart a deployment
- `stop.ts` - Stop a running deployment
- `cancel.ts` - Cancel a pending deployment
- `rollback.ts` - Rollback to a previous deployment

### domains/
- `list.ts` - List domains for a service
- `generate.ts` - Generate a railway.app domain
- `custom-create.ts` - Add a custom domain
- `custom-available.ts` - Check domain availability

### environments/
- `list.ts` - List environments for a project
- `create.ts` - Create a new environment
- `rename.ts` - Rename an environment
- `logs.ts` - Fetch environment logs
- `get-by-name.ts` - Get environment by name

### integrations/
- `github-repos.ts` - List GitHub repositories
- `github-branches.ts` - List branches for a repository
- `github-deploy.ts` - Deploy from GitHub

### networking/
- `private-networks-list.ts` - List private networks
- `private-network-create.ts` - Create a private network
- `tcp-proxies-list.ts` - List TCP proxies

### observability/
- `http-logs.ts` - Get HTTP request logs
- `build-logs.ts` - Get build logs
- `events.ts` - Get system events

### projects/
- `list.ts` - List projects
- `create.ts` - Create a project
- `get.ts` - Get project details
- `workspaces-list.ts` - List workspaces

### services/
- `list.ts` - List services in a project
- `get.ts` - Get service details
- `create.ts` - Create a service
- `update.ts` - Update service metadata
- `deploy-latest.ts` - Deploy latest commit
- `instance-build-command.ts` - Update build command
- `instance-start-command.ts` - Update start command
- `instance-predeploy.ts` - Update pre-deploy commands

### templates/
- `list.ts` - List available templates
- `get.ts` - Get template details
- `deploy.ts` - Deploy a template
- `advanced/` - Type-safe template configuration

### variables/
- `upsert.ts` - Create or update a variable
- `collection-upsert.ts` - Bulk upsert variables
- `render.ts` - Render variables for deployment

### volumes/
- `create.ts` - Create a volume
- `instances-list.ts` - List volume instances
- `backup-create.ts` - Create a backup
- `backup-list.ts` - List backups
- `backup-restore.ts` - Restore from backup

### workflows/
- `status.ts` - Check workflow status

