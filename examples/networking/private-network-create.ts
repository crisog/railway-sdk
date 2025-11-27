import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.networking.privateNetworks.createOrGet({
    variables: {
      input: {
        projectId,
        environmentId,
        name: 'internal-network',
        tags: [],
      },
    },
  });

  if (result.isErr()) throw result.error;

  const network = unwrapField(result, 'privateNetworkCreateOrGet', 'Network creation failed');
  if (network.isErr()) throw network.error;

  console.log(`Network: ${network.value.name}`);
  console.log(`DNS: ${network.value.dnsName}`);
}

main().catch(console.error);
