import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const result = await railway.templates.list({
    variables: { first: 10, recommended: true },
  });

  if (result.isErr()) throw result.error;

  const templates = unwrapField(result, 'templates', 'Templates not found');
  if (templates.isErr()) throw templates.error;

  console.log(`Found ${templates.value.length} templates:\n`);
  for (const t of templates.value) {
    console.log(`  • ${t.name} (${t.code})`);
  }
}

main().catch(console.error);
