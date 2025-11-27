import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.observability.events({
    variables: { projectId, first: 10 },
  });

  if (result.isErr()) throw result.error;

  const events = unwrapField(result, 'events', 'Events not found');
  if (events.isErr()) throw events.error;

  console.log(`Recent system events:\n`);
  for (const e of events.value) {
    const time = new Date(e.createdAt).toLocaleString();
    console.log(`  [${e.severity || 'INFO'}] ${time}: ${e.action}`);
  }
}

main().catch(console.error);
