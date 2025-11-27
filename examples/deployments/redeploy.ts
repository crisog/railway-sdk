import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.redeploy({
    variables: { id: deploymentId },
  });

  if (result.isErr()) throw result.error;

  const deployment = unwrapField(result, 'deploymentRedeploy', 'Redeploy failed');
  if (deployment.isErr()) throw deployment.error;

  console.log(`Redeployed: ${deployment.value.id}`);
  console.log(`Status: ${deployment.value.status}`);
}

main().catch(console.error);
