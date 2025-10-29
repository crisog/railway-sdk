import { createRailwayFromEnv } from '../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const { projects } = await railway.projects.list({
    variables: {
      after: null,
      before: null,
      first: 5,
      includeDeleted: false,
      last: null,
      userId: null,
      workspaceId: null,
    },
  });

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
