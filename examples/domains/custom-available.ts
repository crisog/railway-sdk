import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const domain = 'my-cool-app.example.com';

  const result = await railway.domains.custom.available({
    variables: { domain },
  });

  if (result.isErr()) throw result.error;

  const availability = unwrapField(result, 'customDomainAvailable', 'Check failed');
  if (availability.isErr()) throw availability.error;

  const data = availability.value as { available: boolean; message: string };
  console.log(`Domain: ${domain}`);
  console.log(`Available: ${data.available}`);
  console.log(`Message: ${data.message}`);
}

main().catch(console.error);
