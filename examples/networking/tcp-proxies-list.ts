import { createRailwayFromEnv, unwrapArray } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';
  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';

  const result = await railway.networking.tcpProxies.list({
    variables: { environmentId, serviceId },
  });

  if (result.isErr()) throw result.error;

  const proxies = unwrapArray(result, 'tcpProxies', 'No proxies found');
  if (proxies.isErr()) throw proxies.error;

  console.log(`Found ${proxies.value.length} TCP proxies:\n`);
  for (const proxy of proxies.value) {
    console.log(`  • ${proxy.domain}:${proxy.proxyPort} → :${proxy.applicationPort}`);
  }
}

main().catch(console.error);
