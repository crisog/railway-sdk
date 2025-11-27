import { createRailwayFromEnv } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
  const environmentId = 'b2c3d4e5-f6a7-8901-bcde-f12345678901';
  const serviceId = 'c3d4e5f6-a7b8-9012-cdef-123456789012';

  const result = await railway.domains.custom.create({
    variables: {
      input: {
        projectId,
        environmentId,
        serviceId,
        domain: 'api.example.com',
      },
    },
  });

  if (result.isErr()) throw result.error;

  console.log(`Created custom domain: https://${result.value.customDomainCreate.domain}`);
}

main().catch(console.error);
