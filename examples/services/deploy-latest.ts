import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.services.instances.deployV2({
    variables: { serviceId, environmentId },
  });

  if (result.isErr()) throw result.error;

  const deploymentId = unwrapField(result, 'serviceInstanceDeployV2', 'Deploy failed');
  if (deploymentId.isErr()) throw deploymentId.error;

  console.log(`Triggered deployment: ${deploymentId.value}`);
}

main().catch(console.error);
