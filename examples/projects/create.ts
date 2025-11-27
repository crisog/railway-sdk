import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const result = await railway.projects.create({
    variables: {
      input: {
        name: 'my-new-project',
        description: 'Created via SDK',
        defaultEnvironmentName: 'production',
      },
    },
  });

  if (result.isErr()) throw result.error;

  const project = unwrapField(result, 'projectCreate', 'Project creation failed');
  if (project.isErr()) throw project.error;

  console.log(`Created project: ${project.value.name} (${project.value.id})`);
}

main().catch(console.error);
