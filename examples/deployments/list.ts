import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.deployments.list({
    variables: {
      input: { projectId },
      first: 10,
    },
  });

  if (result.isErr()) throw result.error;

  const deployments = unwrapField(result, 'deployments', 'Deployments not found');
  if (deployments.isErr()) throw deployments.error;

  console.log(`Found ${deployments.value.length} deployments:\n`);
  for (const d of deployments.value) {
    console.log(`  • ${d.id} [${d.status}]`);
  }
}

main().catch(console.error);
