import { RailwayClient } from '../client';
import { MeDocument } from '../generated/graphql';

/**
 * Fetches the current user associated with the provided token.
 */
export const fetchCurrentUser = (client: RailwayClient) => client.requestDocument(MeDocument);
