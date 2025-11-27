import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.events({
    variables: { id: deploymentId, first: 10 },
  });

  if (result.isErr()) throw result.error;

  const events = unwrapField(result, 'deploymentEvents', 'Events not found');
  if (events.isErr()) throw events.error;

  console.log(`Deployment events:\n`);
  for (const e of events.value) {
    console.log(`  • ${e.step} (${e.createdAt})`);
  }
}

main().catch(console.error);
