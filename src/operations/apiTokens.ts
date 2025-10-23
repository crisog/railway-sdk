import { RailwayClient } from '../client';
import {
  ApiTokenCreateDocument,
  type ApiTokenCreateMutationVariables,
} from '../generated/graphql';

/**
 * Creates a new API token and returns the token string.
 */
export const createApiToken = (
  client: RailwayClient,
  variables: ApiTokenCreateMutationVariables,
) => client.requestDocument(ApiTokenCreateDocument, variables);
