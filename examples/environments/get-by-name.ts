import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const name = 'production';

  const listResult = await railway.environments.list({
    variables: { projectId, first: 100 },
  });

  if (listResult.isErr()) throw listResult.error;

  const environments = unwrapField(listResult, 'environments', 'Environments not found');
  if (environments.isErr()) throw environments.error;

  const env = environments.value.find((e) => e.name === name);

  if (!env) {
    console.log(`Environment "${name}" not found`);
    return;
  }

  const result = await railway.environments.get({
    variables: { id: env.id },
  });

  if (result.isErr()) throw result.error;

  const environment = unwrapField(result, 'environment', 'Environment not found');
  if (environment.isErr()) throw environment.error;

  console.log(`Environment: ${environment.value.name}`);
  console.log(`ID: ${environment.value.id}`);
}

main().catch(console.error);
