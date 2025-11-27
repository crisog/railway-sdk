import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const result = await railway.projects.list({
    variables: { first: 10 },
  });

  if (result.isErr()) throw result.error;

  const projects = unwrapField(result, 'projects', 'Projects not found');
  if (projects.isErr()) throw projects.error;

  console.log(`Found ${projects.value.length} projects:\n`);
  for (const project of projects.value) {
    console.log(`  • ${project.name} (${project.id})`);
  }
}

main().catch(console.error);
