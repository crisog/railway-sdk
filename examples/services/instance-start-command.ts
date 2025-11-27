import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.services.instances.update({
    variables: {
      serviceId,
      environmentId,
      input: {
        startCommand: 'npm start',
      },
    },
  });

  if (result.isErr()) throw result.error;

  const success = unwrapField(result, 'serviceInstanceUpdate', 'Update failed');
  if (success.isErr()) throw success.error;

  console.log(`Start command updated: ${success.value}`);
}

main().catch(console.error);
