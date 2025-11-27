import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';

  const result = await railway.services.update({
    variables: {
      id: serviceId,
      input: { name: 'updated-service-name' },
    },
  });

  if (result.isErr()) throw result.error;

  const service = unwrapField(result, 'serviceUpdate', 'Service update failed');
  if (service.isErr()) throw service.error;

  console.log(`Updated service: ${service.value.name}`);
}

main().catch(console.error);
