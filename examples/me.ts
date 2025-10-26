import { createRailwayFromEnv } from '../src/index';

async function main() {
  // Create Railway instance with API methods and client
  const railway = createRailwayFromEnv();

  // Use the high-level API
  const { me } = await railway.account.me();
  console.log(me.agreedFairUse);

  // Advanced: Access the underlying client for custom GraphQL queries
  // const customData = await railway.client.request({ query: '...' });
}

main().catch(console.error);
