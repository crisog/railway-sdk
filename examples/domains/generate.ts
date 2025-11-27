import { createRailwayFromEnv } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = 'c3d4e5f6-a7b8-9012-cdef-123456789012';
  const environmentId = 'b2c3d4e5-f6a7-8901-bcde-f12345678901';

  const result = await railway.services.domains.create({
    variables: {
      input: { serviceId, environmentId },
    },
  });

  if (result.isErr()) throw result.error;

  console.log(`Generated domain: https://${result.value.serviceDomainCreate.domain}`);
}

main().catch(console.error);
