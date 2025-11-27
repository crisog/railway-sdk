import { createRailwayFromEnv } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.cancel({
    variables: { id: deploymentId },
  });

  if (result.isErr()) throw result.error;

  console.log(`Deployment cancelled: ${result.value.deploymentCancel}`);
}

main().catch(console.error);
