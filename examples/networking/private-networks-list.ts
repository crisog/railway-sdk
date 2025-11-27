import { createRailwayFromEnv, unwrapArray } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.networking.privateNetworks.list({
    variables: { environmentId },
  });

  if (result.isErr()) throw result.error;

  const networks = unwrapArray(result, 'privateNetworks', 'No networks found');
  if (networks.isErr()) throw networks.error;

  console.log(`Found ${networks.value.length} private networks:\n`);
  for (const network of networks.value) {
    console.log(`  • ${network.name} (${network.dnsName})`);
  }
}

main().catch(console.error);
