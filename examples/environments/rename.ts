import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.environments.rename({
    variables: {
      id: environmentId,
      input: { name: 'production-v2' },
    },
  });

  if (result.isErr()) throw result.error;

  const environment = unwrapField(result, 'environmentRename', 'Rename failed');
  if (environment.isErr()) throw environment.error;

  console.log(`Renamed to: ${environment.value.name}`);
}

main().catch(console.error);
