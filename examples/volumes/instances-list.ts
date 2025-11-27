import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.environments.get({
    variables: { id: environmentId },
  });

  if (result.isErr()) throw result.error;

  const env = unwrapField(result, 'environment', 'Environment not found');
  if (env.isErr()) throw env.error;

  const instances = env.value.volumeInstances ?? [];

  console.log(`Found ${instances.length} volume instances:\n`);
  for (const v of instances) {
    console.log(`  • ${v.mountPath} [${v.state}] - ${v.currentSizeMB || 0} MB`);
  }
}

main().catch(console.error);
