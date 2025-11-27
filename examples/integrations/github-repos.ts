import { createRailwayFromEnv, unwrapArray } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const result = await railway.integrations.github.listRepos();

  if (result.isErr()) throw result.error;

  const repos = unwrapArray(result, 'githubRepos', 'No repos found');
  if (repos.isErr()) throw repos.error;

  console.log(`Found ${repos.value.length} GitHub repositories:\n`);
  for (const repo of repos.value.slice(0, 10)) {
    const visibility = repo.isPrivate ? 'private' : 'public';
    console.log(`  • ${repo.fullName} [${visibility}]`);
  }
}

main().catch(console.error);
