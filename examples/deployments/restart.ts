import { createRailwayFromEnv } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.restart({
    variables: { id: deploymentId },
  });

  if (result.isErr()) throw result.error;

  console.log(`Deployment restarted: ${result.value.deploymentRestart}`);
}

main().catch(console.error);
