import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const result = await railway.templates.get({
    variables: { code: 'postgres' },
  });

  if (result.isErr()) throw result.error;

  const template = unwrapField(result, 'template', 'Template not found');
  if (template.isErr()) throw template.error;

  console.log(`Template: ${template.value.name}`);
  console.log(`Code: ${template.value.code}`);
  console.log(`Description: ${template.value.description}`);
}

main().catch(console.error);
