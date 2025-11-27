import { createRailwayFromEnv } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.stop({
    variables: { id: deploymentId },
  });

  if (result.isErr()) throw result.error;

  console.log(`Deployment stopped: ${result.value.deploymentStop}`);
}

main().catch(console.error);
