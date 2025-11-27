import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';

  const result = await railway.services.get({
    variables: { id: serviceId },
  });

  if (result.isErr()) throw result.error;

  const service = unwrapField(result, 'service', 'Service not found');
  if (service.isErr()) throw service.error;

  console.log(`Service: ${service.value.name}`);
  console.log(`ID: ${service.value.id}`);
  console.log(`Project: ${service.value.projectId}`);
}

main().catch(console.error);
