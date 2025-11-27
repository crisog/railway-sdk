import { createRailwayFromEnv, unwrapNested } from '../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.services.list({
    variables: { projectId, first: 10 },
  });

  if (result.isErr()) {
    throw result.error;
  }

  const services = unwrapNested(result, ['project', 'services'] as const, 'Services not found');

  if (services.isErr()) {
    throw services.error;
  }

  console.log(`Found ${services.value.length} services:\n`);
  for (const service of services.value) {
    console.log(`  • ${service.name} (${service.id})`);
  }
}

main().catch(console.error);
