import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.projects.get({
    variables: { id: projectId },
  });

  if (result.isErr()) throw result.error;

  const project = unwrapField(result, 'project', 'Project not found');
  if (project.isErr()) throw project.error;

  console.log(`Project: ${project.value.name}`);
  console.log(`ID: ${project.value.id}`);
  console.log(`Public: ${project.value.isPublic}`);
  console.log(`Created: ${project.value.createdAt}`);
}

main().catch(console.error);
