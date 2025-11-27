import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const result = await railway.account.me();

  if (result.isErr()) throw result.error;

  const me = unwrapField(result, 'me', 'User not found');
  if (me.isErr()) throw me.error;

  const workspaces = me.value.workspaces ?? [];

  console.log(`Found ${workspaces.length} workspaces:\n`);
  for (const ws of workspaces) {
    console.log(`  • ${ws.name} (${ws.id})`);
  }
}

main().catch(console.error);
