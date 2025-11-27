import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';
  const serviceId = '8cdf7de4-a9f4-4693-9f84-edd0b52fbbb3';

  const result = await railway.variables.serviceDeployment.variables({
    variables: { projectId, environmentId, serviceId },
  });

  if (result.isErr()) throw result.error;

  const vars = unwrapField(result, 'variablesForServiceDeployment', 'Variables not found');
  if (vars.isErr()) throw vars.error;

  const entries = Object.entries(vars.value as Record<string, string>);
  console.log(`Rendered ${entries.length} variables:\n`);
  for (const [key, value] of entries.slice(0, 10)) {
    const display = value.length > 40 ? `${value.slice(0, 40)}...` : value;
    console.log(`  ${key}=${display}`);
  }
}

main().catch(console.error);
