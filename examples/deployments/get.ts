import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.get({
    variables: { id: deploymentId },
  });

  if (result.isErr()) throw result.error;

  const deployment = unwrapField(result, 'deployment', 'Deployment not found');
  if (deployment.isErr()) throw deployment.error;

  console.log(`Deployment: ${deployment.value.id}`);
  console.log(`Status: ${deployment.value.status}`);
  console.log(`URL: ${deployment.value.url ?? 'N/A'}`);
}

main().catch(console.error);
