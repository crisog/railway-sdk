import { createRailwayFromEnv, unwrapArray } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.environments.logs({
    variables: { environmentId, afterLimit: 20 },
  });

  if (result.isErr()) throw result.error;

  const logs = unwrapArray(result, 'environmentLogs', 'No logs found');
  if (logs.isErr()) throw logs.error;

  console.log(`Recent ${logs.value.length} log entries:\n`);
  for (const log of logs.value) {
    const time = new Date(log.timestamp).toLocaleTimeString();
    console.log(`[${time}] ${log.message}`);
  }
}

main().catch(console.error);
