import { createRailwayFromEnv, unwrapArray } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const volumeInstanceId = 'c1d2e3f4-a5b6-7890-cdef-123456789012';

  const result = await railway.volumes.instance.backups.list({
    variables: { volumeInstanceId },
  });

  if (result.isErr()) throw result.error;

  const backups = unwrapArray(result, 'volumeInstanceBackupList', 'No backups found');
  if (backups.isErr()) throw backups.error;

  console.log(`Found ${backups.value.length} backups:\n`);
  for (const b of backups.value) {
    console.log(`  • ${b.name || 'Unnamed'} (${b.id}) - ${b.usedMB || 0} MB`);
  }
}

main().catch(console.error);
