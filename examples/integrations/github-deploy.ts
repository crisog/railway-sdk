import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';

  const result = await railway.integrations.github.deployRepo({
    variables: {
      input: {
        projectId,
        repo: 'owner/repo-name',
        branch: 'main',
      },
    },
  });

  if (result.isErr()) throw result.error;

  const deployment = unwrapField(result, 'githubRepoDeploy', 'Deploy failed');
  if (deployment.isErr()) throw deployment.error;

  console.log(`Deployed to project: ${deployment.value}`);
}

main().catch(console.error);
