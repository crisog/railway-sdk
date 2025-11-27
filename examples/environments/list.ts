import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.environments.list({
    variables: { projectId, first: 20 },
  });

  if (result.isErr()) throw result.error;

  const environments = unwrapField(result, 'environments', 'Environments not found');
  if (environments.isErr()) throw environments.error;

  console.log(`Found ${environments.value.length} environments:\n`);
  for (const env of environments.value) {
    const tag = env.isEphemeral ? ' [ephemeral]' : '';
    console.log(`  • ${env.name}${tag} (${env.id})`);
  }
}

main().catch(console.error);
