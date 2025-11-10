import { createRailwayFromEnv } from '../src/index';

async function main() {
  // Create Railway instance with API methods and client
  const railway = createRailwayFromEnv();

  // Use the high-level API
  const meResult = await railway.account.me();

  if (meResult.isErr()) {
    throw meResult.error;
  }

  const { me } = meResult.value;
  console.log(`Logged in as ${me.email}`);

  // Advanced: Access the underlying client for custom GraphQL queries
  // const customData = await railway.client
  //   .request({ query: '...' })
  //   .andThen((result) => unwrapField(result, 'someField'));
}

main().catch(console.error);
