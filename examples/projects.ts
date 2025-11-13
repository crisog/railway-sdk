import { createRailwayFromEnv } from '../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectsResult = await railway.projects.list({
    variables: {
      first: 5,
      includeDeleted: false,
    },
  });

  if (projectsResult.isErr()) {
    throw projectsResult.error;
  }

  const { projects } = projectsResult.value;

  for (const edge of projects.edges) {
    console.log(`${edge.node.id} – ${edge.node.name}`);
  }

  if (projects.pageInfo.hasNextPage) {
    console.log('More projects available…');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
