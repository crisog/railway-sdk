import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const volumeInstanceId = 'c1d2e3f4-a5b6-7890-cdef-123456789012';

  const result = await railway.volumes.instance.backups.create({
    variables: { volumeInstanceId },
  });

  if (result.isErr()) throw result.error;

  const backup = unwrapField(result, 'volumeInstanceBackupCreate', 'Backup creation failed');
  if (backup.isErr()) throw backup.error;

  console.log(`Backup initiated, workflow ID: ${backup.value.workflowId}`);
}

main().catch(console.error);
