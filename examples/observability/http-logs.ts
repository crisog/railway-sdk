import { createRailwayFromEnv, unwrapArray } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const deploymentId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

  const result = await railway.observability.logs.http({
    variables: { deploymentId, limit: 10 },
  });

  if (result.isErr()) throw result.error;

  const logs = unwrapArray(result, 'httpLogs', 'No HTTP logs found');
  if (logs.isErr()) throw logs.error;

  console.log(`Recent HTTP requests:\n`);
  for (const log of logs.value) {
    console.log(`  ${log.method} ${log.path} → ${log.httpStatus} (${log.totalDuration}ms)`);
  }
}

main().catch(console.error);
