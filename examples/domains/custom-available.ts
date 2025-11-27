import { createRailwayFromEnv } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const domain = 'api.example.com';

  const result = await railway.domains.custom.available({
    variables: { domain },
  });

  if (result.isErr()) throw result.error;

  const { customDomainAvailable } = result.value;
  console.log(`Domain: ${domain}`);
  console.log(`Available: ${customDomainAvailable.available}`);
  console.log(`Message: ${customDomainAvailable.message}`);
}

main().catch(console.error);
