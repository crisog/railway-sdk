import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const volumeInstanceId = 'c1d2e3f4-a5b6-7890-cdef-123456789012';
  const backupId = 'd2e3f4a5-b6c7-8901-efgh-234567890123';

  const result = await railway.volumes.instance.backups.restore({
    variables: {
      volumeInstanceId,
      volumeInstanceBackupId: backupId,
    },
  });

  if (result.isErr()) throw result.error;

  const restore = unwrapField(result, 'volumeInstanceBackupRestore', 'Restore failed');
  if (restore.isErr()) throw restore.error;

  console.log(`Restore initiated, workflow ID: ${restore.value.workflowId}`);
}

main().catch(console.error);
