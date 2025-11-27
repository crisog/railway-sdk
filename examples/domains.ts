import { createRailwayFromEnv, unwrapField } from '../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.services.domains.create({
    variables: {
      input: {
        serviceId,
        environmentId,
      },
    },
  });

  if (result.isErr()) {
    throw result.error;
  }

  const domain = unwrapField(result, 'serviceDomainCreate', 'No domain created');

  if (domain.isErr()) {
    throw domain.error;
  }

  console.log(`Generated domain: https://${domain.value.domain}`);
}

main().catch(console.error);
