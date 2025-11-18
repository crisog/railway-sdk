import { createRailwayFromEnv } from '../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = process.env['SERVICE_ID'] || '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';

  const deploymentsResult = await railway.deployments.list({
    variables: {
      input: { serviceId },
      first: 100,
    },
  });

  if (deploymentsResult.isErr()) {
    throw deploymentsResult.error;
  }

  const { deployments } = deploymentsResult.value;

  const statusCounts: Record<string, number> = {};
  for (const deployment of deployments) {
    statusCounts[deployment.status] = (statusCounts[deployment.status] || 0) + 1;
  }

  const serviceName = deployments[0]?.service?.name || 'Unknown';

  console.log(`Service: ${serviceName}`);
  console.log(`Total: ${deployments.length}`);
  console.log('');
  for (const [status, count] of Object.entries(statusCounts)) {
    console.log(`${status}: ${count}`);
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
