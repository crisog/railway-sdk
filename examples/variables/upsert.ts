import { createRailwayFromEnv } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';
  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';

  const result = await railway.variables.upsert({
    variables: {
      input: {
        projectId,
        environmentId,
        serviceId,
        name: 'API_KEY',
        value: 'sk-test-12345',
      },
    },
  });

  if (result.isErr()) throw result.error;

  console.log(`Variable upserted: ${result.value.variableUpsert}`);
}

main().catch(console.error);
