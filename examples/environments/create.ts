import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.environments.create({
    variables: {
      input: {
        projectId,
        name: 'staging',
        ephemeral: false,
      },
    },
  });

  if (result.isErr()) throw result.error;

  const environment = unwrapField(result, 'environmentCreate', 'Environment creation failed');
  if (environment.isErr()) throw environment.error;

  console.log(`Created environment: ${environment.value.name} (${environment.value.id})`);
}

main().catch(console.error);
