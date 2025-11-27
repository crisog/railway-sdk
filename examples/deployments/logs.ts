import { createRailwayFromEnv, unwrapArray } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.deployments.logs({
    variables: { deploymentId, limit: 20 },
  });

  if (result.isErr()) throw result.error;

  const logs = unwrapArray(result, 'deploymentLogs', 'No logs found');
  if (logs.isErr()) throw logs.error;

  console.log(`Recent ${logs.value.length} log entries:\n`);
  for (const log of logs.value) {
    const time = new Date(log.timestamp).toLocaleTimeString();
    console.log(`[${time}] ${log.message}`);
  }
}

main().catch(console.error);
