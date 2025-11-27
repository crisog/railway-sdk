import { createRailwayFromEnv } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
  const environmentId = 'b2c3d4e5-f6a7-8901-bcde-f12345678901';
  const serviceId = 'c3d4e5f6-a7b8-9012-cdef-123456789012';

  const result = await railway.domains.list({
    variables: { projectId, environmentId, serviceId },
  });

  if (result.isErr()) throw result.error;

  const { domains } = result.value;

  console.log('Service Domains (Railway-generated):');
  for (const d of domains.serviceDomains) {
    console.log(`  - https://${d.domain} (port: ${d.targetPort ?? 'default'})`);
  }

  console.log('\nCustom Domains:');
  for (const d of domains.customDomains) {
    console.log(`  - https://${d.domain}`);
  }
}

main().catch(console.error);
