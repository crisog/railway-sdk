import { createRailwayFromEnv, unwrapArray } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const owner = 'railwayapp';
  const repo = 'nixpacks';

  const result = await railway.integrations.github.listBranches({
    variables: { owner, repo },
  });

  if (result.isErr()) throw result.error;

  const branches = unwrapArray(result, 'githubRepoBranches', 'No branches found');
  if (branches.isErr()) throw branches.error;

  console.log(`Branches for ${owner}/${repo}:\n`);
  for (const branch of branches.value) {
    console.log(`  • ${branch.name}`);
  }
}

main().catch(console.error);
