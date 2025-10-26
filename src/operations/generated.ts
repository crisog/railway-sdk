import { RailwayClient } from '../client';
import type { GraphQLDocumentRequestOptions } from '../client';
import {
  ApiTokenCreateDocument,
  ApiTokenDeleteDocument,
  ApiTokensDocument,
  BaseEnvironmentOverrideDocument,
  BuildLogsDocument,
  ChangelogBlockImageDocument,
  CustomDomainDocument,
  CustomDomainAvailableDocument,
  CustomDomainCreateDocument,
  CustomDomainDeleteDocument,
  CustomDomainUpdateDocument,
  CustomerCreateFreePlanSubscriptionDocument,
  CustomerTogglePayoutsToCreditsDocument,
  DeploymentDocument,
  DeploymentApproveDocument,
  DeploymentCancelDocument,
  DeploymentEventsDocument,
  DeploymentInstanceExecutionCreateDocument,
  DeploymentInstanceExecutionsDocument,
  DeploymentLogsDocument,
  DeploymentRedeployDocument,
  DeploymentRemoveDocument,
  DeploymentRestartDocument,
  DeploymentRollbackDocument,
  DeploymentsDocument,
  DeploymentSnapshotDocument,
  DeploymentStopDocument,
  DeploymentTriggerCreateDocument,
  DeploymentTriggerDeleteDocument,
  DeploymentTriggersDocument,
  DeploymentTriggerUpdateDocument,
  DockerComposeImportDocument,
  DomainsDocument,
  EgressGatewayAssociationCreateDocument,
  EgressGatewayAssociationsClearDocument,
  EgressGatewaysDocument,
  EmailChangeConfirmDocument,
  EmailChangeInitiateDocument,
  EnvironmentDocument,
  EnvironmentCreateDocument,
  EnvironmentDeleteDocument,
  EnvironmentLogsDocument,
  EnvironmentPatchCommitDocument,
  EnvironmentPatchesDocument,
  EnvironmentRenameDocument,
  EnvironmentsDocument,
  EnvironmentTriggersDeployDocument,
  EventsDocument,
  FairUseAgreeDocument,
  FeatureFlagAddDocument,
  FeatureFlagRemoveDocument,
  FunctionRuntimeDocument,
  FunctionRuntimesDocument,
  GithubIsRepoNameAvailableDocument,
  GithubRepoDocument,
  GitHubRepoAccessAvailableDocument,
  GithubRepoBranchesDocument,
  GithubRepoDeployDocument,
  GithubReposDocument,
  GithubRepoUpdateDocument,
  GithubWritableScopesDocument,
  HerokuAppsDocument,
  HerokuImportVariablesDocument,
  HttpLogsDocument,
  IntegrationAuthDocument,
  IntegrationAuthsDocument,
  IntegrationCreateDocument,
  IntegrationDeleteDocument,
  IntegrationsDocument,
  IntegrationUpdateDocument,
  InviteCodeDocument,
  InviteCodeUseDocument,
  JobApplicationCreateDocument,
  LoginSessionAuthDocument,
  LoginSessionCancelDocument,
  LoginSessionConsumeDocument,
  LoginSessionCreateDocument,
  LoginSessionVerifyDocument,
  MeDocument,
  NodeDocument,
  NodesDocument,
  ObservabilityDashboardCreateDocument,
  ObservabilityDashboardResetDocument,
  ObservabilityDashboardsDocument,
  ObservabilityDashboardUpdateDocument,
  PlatformStatusDocument,
  PreferenceOverridesCreateUpdateDocument,
  PreferenceOverridesDestroyForResourceDocument,
  PreferencesDocument,
  PreferencesUpdateDocument,
  PrivateNetworkCreateOrGetDocument,
  PrivateNetworkEndpointDocument,
  PrivateNetworkEndpointCreateOrGetDocument,
  PrivateNetworkEndpointDeleteDocument,
  PrivateNetworkEndpointNameAvailableDocument,
  PrivateNetworkEndpointRenameDocument,
  PrivateNetworksDocument,
  PrivateNetworksForEnvironmentDeleteDocument,
  ProjectDocument,
  ProjectClaimDocument,
  ProjectCreateDocument,
  ProjectDeleteDocument,
  ProjectInvitationDocument,
  ProjectInvitationAcceptDocument,
  ProjectInvitationCreateDocument,
  ProjectInvitationDeleteDocument,
  ProjectInvitationResendDocument,
  ProjectInvitationsDocument,
  ProjectInviteCodeDocument,
  ProjectInviteUserDocument,
  ProjectLeaveDocument,
  ProjectMemberRemoveDocument,
  ProjectMembersDocument,
  ProjectMemberUpdateDocument,
  ProjectResourceAccessDocument,
  ProjectsDocument,
  ProjectScheduleDeleteDocument,
  ProjectScheduleDeleteCancelDocument,
  ProjectScheduleDeleteForceDocument,
  ProjectTokenDocument,
  ProjectTokenCreateDocument,
  ProjectTokenDeleteDocument,
  ProjectTokensDocument,
  ProjectTransferConfirmDocument,
  ProjectTransferInitiateDocument,
  ProjectUpdateDocument,
  ProviderAuthRemoveDocument,
  PublicStatsDocument,
  RecoveryCodeGenerateDocument,
  RecoveryCodeValidateDocument,
  ReferralInfoDocument,
  ReferralInfoUpdateDocument,
  ResourceAccessDocument,
  ServiceDocument,
  ServiceConnectDocument,
  ServiceCreateDocument,
  ServiceDeleteDocument,
  ServiceDisconnectDocument,
  ServiceDomainAvailableDocument,
  ServiceDomainCreateDocument,
  ServiceDomainDeleteDocument,
  ServiceDomainUpdateDocument,
  ServiceFeatureFlagAddDocument,
  ServiceFeatureFlagRemoveDocument,
  ServiceInstanceDocument,
  ServiceInstanceDeployDocument,
  ServiceInstanceDeployV2Document,
  ServiceInstanceIsUpdatableDocument,
  ServiceInstanceLimitsUpdateDocument,
  ServiceInstanceRedeployDocument,
  ServiceInstanceUpdateDocument,
  ServiceRemoveUpstreamUrlDocument,
  ServiceUpdateDocument,
  SessionDeleteDocument,
  SessionsDocument,
  SharedVariableConfigureDocument,
  TcpProxiesDocument,
  TcpProxyDeleteDocument,
  TemplateDocument,
  TemplateCloneDocument,
  TemplateDeleteDocument,
  TemplateDeployV2Document,
  TemplateGenerateDocument,
  TemplatePublishDocument,
  TemplatesDocument,
  TemplatesCountDocument,
  TemplateServiceSourceEjectDocument,
  TemplateSourceForProjectDocument,
  TemplateUnpublishDocument,
  TwoFactorInfoDocument,
  TwoFactorInfoCreateDocument,
  TwoFactorInfoDeleteDocument,
  TwoFactorInfoSecretDocument,
  TwoFactorInfoValidateDocument,
  UsageLimitRemoveDocument,
  UsageLimitSetDocument,
  UserBetaLeaveDocument,
  UserDeleteDocument,
  UserDiscordDisconnectDocument,
  UserFlagsRemoveDocument,
  UserFlagsSetDocument,
  UserProfileDocument,
  UserProfileUpdateDocument,
  UserTermsUpdateDocument,
  VariableCollectionUpsertDocument,
  VariableDeleteDocument,
  VariablesForServiceDeploymentDocument,
  VariableUpsertDocument,
  VercelInfoDocument,
  VolumeCreateDocument,
  VolumeDeleteDocument,
  VolumeInstanceBackupCreateDocument,
  VolumeInstanceBackupDeleteDocument,
  VolumeInstanceBackupListDocument,
  VolumeInstanceBackupLockDocument,
  VolumeInstanceBackupRestoreDocument,
  VolumeInstanceBackupScheduleListDocument,
  VolumeInstanceBackupScheduleUpdateDocument,
  VolumeInstanceUpdateDocument,
  VolumeUpdateDocument,
  WebhookCreateDocument,
  WebhookDeleteDocument,
  WebhooksDocument,
  WebhookUpdateDocument,
  WorkflowStatusDocument,
  WorkspaceDocument,
  WorkspaceDeleteDocument,
  WorkspaceLeaveDocument,
  WorkspaceUpdateDocument,
  WorkspaceUpsertSlackChannelDocument,
  type ApiTokenCreateMutationVariables,
  type ApiTokenDeleteMutationVariables,
  type ApiTokensQueryVariables,
  type BaseEnvironmentOverrideMutationVariables,
  type BuildLogsQueryVariables,
  type ChangelogBlockImageQueryVariables,
  type CustomDomainQueryVariables,
  type CustomDomainAvailableQueryVariables,
  type CustomDomainCreateMutationVariables,
  type CustomDomainDeleteMutationVariables,
  type CustomDomainUpdateMutationVariables,
  type CustomerCreateFreePlanSubscriptionMutationVariables,
  type CustomerTogglePayoutsToCreditsMutationVariables,
  type DeploymentQueryVariables,
  type DeploymentApproveMutationVariables,
  type DeploymentCancelMutationVariables,
  type DeploymentEventsQueryVariables,
  type DeploymentInstanceExecutionCreateMutationVariables,
  type DeploymentInstanceExecutionsQueryVariables,
  type DeploymentLogsQueryVariables,
  type DeploymentRedeployMutationVariables,
  type DeploymentRemoveMutationVariables,
  type DeploymentRestartMutationVariables,
  type DeploymentRollbackMutationVariables,
  type DeploymentsQueryVariables,
  type DeploymentSnapshotQueryVariables,
  type DeploymentStopMutationVariables,
  type DeploymentTriggerCreateMutationVariables,
  type DeploymentTriggerDeleteMutationVariables,
  type DeploymentTriggersQueryVariables,
  type DeploymentTriggerUpdateMutationVariables,
  type DockerComposeImportMutationVariables,
  type DomainsQueryVariables,
  type EgressGatewayAssociationCreateMutationVariables,
  type EgressGatewayAssociationsClearMutationVariables,
  type EgressGatewaysQueryVariables,
  type EmailChangeConfirmMutationVariables,
  type EmailChangeInitiateMutationVariables,
  type EnvironmentQueryVariables,
  type EnvironmentCreateMutationVariables,
  type EnvironmentDeleteMutationVariables,
  type EnvironmentLogsQueryVariables,
  type EnvironmentPatchCommitMutationVariables,
  type EnvironmentPatchesQueryVariables,
  type EnvironmentRenameMutationVariables,
  type EnvironmentsQueryVariables,
  type EnvironmentTriggersDeployMutationVariables,
  type EventsQueryVariables,
  type FairUseAgreeMutationVariables,
  type FeatureFlagAddMutationVariables,
  type FeatureFlagRemoveMutationVariables,
  type FunctionRuntimeQueryVariables,
  type GithubIsRepoNameAvailableQueryVariables,
  type GithubRepoQueryVariables,
  type GitHubRepoAccessAvailableQueryVariables,
  type GithubRepoBranchesQueryVariables,
  type GithubRepoDeployMutationVariables,
  type GithubRepoUpdateMutationVariables,
  type HerokuImportVariablesMutationVariables,
  type HttpLogsQueryVariables,
  type IntegrationAuthQueryVariables,
  type IntegrationAuthsQueryVariables,
  type IntegrationCreateMutationVariables,
  type IntegrationDeleteMutationVariables,
  type IntegrationsQueryVariables,
  type IntegrationUpdateMutationVariables,
  type InviteCodeQueryVariables,
  type InviteCodeUseMutationVariables,
  type JobApplicationCreateMutationVariables,
  type LoginSessionAuthMutationVariables,
  type LoginSessionCancelMutationVariables,
  type LoginSessionConsumeMutationVariables,
  type LoginSessionVerifyMutationVariables,
  type NodeQueryVariables,
  type NodesQueryVariables,
  type ObservabilityDashboardCreateMutationVariables,
  type ObservabilityDashboardResetMutationVariables,
  type ObservabilityDashboardsQueryVariables,
  type ObservabilityDashboardUpdateMutationVariables,
  type PreferenceOverridesCreateUpdateMutationVariables,
  type PreferenceOverridesDestroyForResourceMutationVariables,
  type PreferencesQueryVariables,
  type PreferencesUpdateMutationVariables,
  type PrivateNetworkCreateOrGetMutationVariables,
  type PrivateNetworkEndpointQueryVariables,
  type PrivateNetworkEndpointCreateOrGetMutationVariables,
  type PrivateNetworkEndpointDeleteMutationVariables,
  type PrivateNetworkEndpointNameAvailableQueryVariables,
  type PrivateNetworkEndpointRenameMutationVariables,
  type PrivateNetworksQueryVariables,
  type PrivateNetworksForEnvironmentDeleteMutationVariables,
  type ProjectQueryVariables,
  type ProjectClaimMutationVariables,
  type ProjectCreateMutationVariables,
  type ProjectDeleteMutationVariables,
  type ProjectInvitationQueryVariables,
  type ProjectInvitationAcceptMutationVariables,
  type ProjectInvitationCreateMutationVariables,
  type ProjectInvitationDeleteMutationVariables,
  type ProjectInvitationResendMutationVariables,
  type ProjectInvitationsQueryVariables,
  type ProjectInviteCodeQueryVariables,
  type ProjectInviteUserMutationVariables,
  type ProjectLeaveMutationVariables,
  type ProjectMemberRemoveMutationVariables,
  type ProjectMembersQueryVariables,
  type ProjectMemberUpdateMutationVariables,
  type ProjectResourceAccessQueryVariables,
  type ProjectsQueryVariables,
  type ProjectScheduleDeleteMutationVariables,
  type ProjectScheduleDeleteCancelMutationVariables,
  type ProjectScheduleDeleteForceMutationVariables,
  type ProjectTokenCreateMutationVariables,
  type ProjectTokenDeleteMutationVariables,
  type ProjectTokensQueryVariables,
  type ProjectTransferConfirmMutationVariables,
  type ProjectTransferInitiateMutationVariables,
  type ProjectUpdateMutationVariables,
  type ProviderAuthRemoveMutationVariables,
  type RecoveryCodeValidateMutationVariables,
  type ReferralInfoQueryVariables,
  type ReferralInfoUpdateMutationVariables,
  type ResourceAccessQueryVariables,
  type ServiceQueryVariables,
  type ServiceConnectMutationVariables,
  type ServiceCreateMutationVariables,
  type ServiceDeleteMutationVariables,
  type ServiceDisconnectMutationVariables,
  type ServiceDomainAvailableQueryVariables,
  type ServiceDomainCreateMutationVariables,
  type ServiceDomainDeleteMutationVariables,
  type ServiceDomainUpdateMutationVariables,
  type ServiceFeatureFlagAddMutationVariables,
  type ServiceFeatureFlagRemoveMutationVariables,
  type ServiceInstanceQueryVariables,
  type ServiceInstanceDeployMutationVariables,
  type ServiceInstanceDeployV2MutationVariables,
  type ServiceInstanceIsUpdatableQueryVariables,
  type ServiceInstanceLimitsUpdateMutationVariables,
  type ServiceInstanceRedeployMutationVariables,
  type ServiceInstanceUpdateMutationVariables,
  type ServiceRemoveUpstreamUrlMutationVariables,
  type ServiceUpdateMutationVariables,
  type SessionDeleteMutationVariables,
  type SessionsQueryVariables,
  type SharedVariableConfigureMutationVariables,
  type TcpProxiesQueryVariables,
  type TcpProxyDeleteMutationVariables,
  type TemplateQueryVariables,
  type TemplateCloneMutationVariables,
  type TemplateDeleteMutationVariables,
  type TemplateDeployV2MutationVariables,
  type TemplateGenerateMutationVariables,
  type TemplatePublishMutationVariables,
  type TemplatesQueryVariables,
  type TemplateServiceSourceEjectMutationVariables,
  type TemplateSourceForProjectQueryVariables,
  type TemplateUnpublishMutationVariables,
  type TwoFactorInfoCreateMutationVariables,
  type TwoFactorInfoValidateMutationVariables,
  type UsageLimitRemoveMutationVariables,
  type UsageLimitSetMutationVariables,
  type UserFlagsRemoveMutationVariables,
  type UserFlagsSetMutationVariables,
  type UserProfileQueryVariables,
  type UserProfileUpdateMutationVariables,
  type VariableCollectionUpsertMutationVariables,
  type VariableDeleteMutationVariables,
  type VariablesForServiceDeploymentQueryVariables,
  type VariableUpsertMutationVariables,
  type VolumeCreateMutationVariables,
  type VolumeDeleteMutationVariables,
  type VolumeInstanceBackupCreateMutationVariables,
  type VolumeInstanceBackupDeleteMutationVariables,
  type VolumeInstanceBackupListQueryVariables,
  type VolumeInstanceBackupLockMutationVariables,
  type VolumeInstanceBackupRestoreMutationVariables,
  type VolumeInstanceBackupScheduleListQueryVariables,
  type VolumeInstanceBackupScheduleUpdateMutationVariables,
  type VolumeInstanceUpdateMutationVariables,
  type VolumeUpdateMutationVariables,
  type WebhookCreateMutationVariables,
  type WebhookDeleteMutationVariables,
  type WebhooksQueryVariables,
  type WebhookUpdateMutationVariables,
  type WorkflowStatusQueryVariables,
  type WorkspaceQueryVariables,
  type WorkspaceDeleteMutationVariables,
  type WorkspaceLeaveMutationVariables,
  type WorkspaceUpdateMutationVariables,
  type WorkspaceUpsertSlackChannelMutationVariables,
} from '../generated/graphql';
/** Creates a new API token. */
export const apiTokenCreate = (
  client: RailwayClient,
  request: { variables: ApiTokenCreateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ApiTokenCreateDocument, request.variables, request?.options);

/** Deletes an API token. */
export const apiTokenDelete = (
  client: RailwayClient,
  request: { variables: ApiTokenDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ApiTokenDeleteDocument, request.variables, request?.options);

/** Gets all API tokens for the authenticated user. */
export const apiTokens = (
  client: RailwayClient,
  request?: { variables?: ApiTokensQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ApiTokensDocument, request?.variables, request?.options);

/** Sets the base environment override for a deployment trigger. */
export const baseEnvironmentOverride = (
  client: RailwayClient,
  request: {
    variables: BaseEnvironmentOverrideMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(BaseEnvironmentOverrideDocument, request.variables, request?.options);

/** Fetch logs for a build */
export const buildLogs = (
  client: RailwayClient,
  request: { variables: BuildLogsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(BuildLogsDocument, request.variables, request?.options);

/** Gets the image URL for a Notion image block */
export const changelogBlockImage = (
  client: RailwayClient,
  request: {
    variables: ChangelogBlockImageQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ChangelogBlockImageDocument, request.variables, request?.options);

/** Fetch details for a custom domain */
export const customDomain = (
  client: RailwayClient,
  request: { variables: CustomDomainQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(CustomDomainDocument, request.variables, request?.options);

/** Checks if a custom domain is available. */
export const customDomainAvailable = (
  client: RailwayClient,
  request: {
    variables: CustomDomainAvailableQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(CustomDomainAvailableDocument, request.variables, request?.options);

/** Creates a new custom domain. */
export const customDomainCreate = (
  client: RailwayClient,
  request: {
    variables: CustomDomainCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(CustomDomainCreateDocument, request.variables, request?.options);

/** Deletes a custom domain. */
export const customDomainDelete = (
  client: RailwayClient,
  request: {
    variables: CustomDomainDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(CustomDomainDeleteDocument, request.variables, request?.options);

/** Updates a custom domain. */
export const customDomainUpdate = (
  client: RailwayClient,
  request: {
    variables: CustomDomainUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(CustomDomainUpdateDocument, request.variables, request?.options);

/** Create a free plan subscription for a customer */
export const customerCreateFreePlanSubscription = (
  client: RailwayClient,
  request: {
    variables: CustomerCreateFreePlanSubscriptionMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    CustomerCreateFreePlanSubscriptionDocument,
    request.variables,
    request?.options,
  );

/** Toggle whether a customer is automatically withdrawing to credits */
export const customerTogglePayoutsToCredits = (
  client: RailwayClient,
  request: {
    variables: CustomerTogglePayoutsToCreditsMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    CustomerTogglePayoutsToCreditsDocument,
    request.variables,
    request?.options,
  );

/** Find a single deployment */
export const deployment = (
  client: RailwayClient,
  request: { variables: DeploymentQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentDocument, request.variables, request?.options);

/** Approves a deployment. */
export const deploymentApprove = (
  client: RailwayClient,
  request: {
    variables: DeploymentApproveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentApproveDocument, request.variables, request?.options);

/** Cancels a deployment. */
export const deploymentCancel = (
  client: RailwayClient,
  request: {
    variables: DeploymentCancelMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentCancelDocument, request.variables, request?.options);

/** Get the deployment events for a deployment */
export const deploymentEvents = (
  client: RailwayClient,
  request: { variables: DeploymentEventsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentEventsDocument, request.variables, request?.options);

/** Invoke a deployment instance execution. */
export const deploymentInstanceExecutionCreate = (
  client: RailwayClient,
  request: {
    variables: DeploymentInstanceExecutionCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    DeploymentInstanceExecutionCreateDocument,
    request.variables,
    request?.options,
  );

/** Get the deployment instance executions for a deployment. */
export const deploymentInstanceExecutions = (
  client: RailwayClient,
  request: {
    variables: DeploymentInstanceExecutionsQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(DeploymentInstanceExecutionsDocument, request.variables, request?.options);

/** Fetch logs for a deployment */
export const deploymentLogs = (
  client: RailwayClient,
  request: { variables: DeploymentLogsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentLogsDocument, request.variables, request?.options);

/** Redeploys a deployment. */
export const deploymentRedeploy = (
  client: RailwayClient,
  request: {
    variables: DeploymentRedeployMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentRedeployDocument, request.variables, request?.options);

/** Removes a deployment. */
export const deploymentRemove = (
  client: RailwayClient,
  request: {
    variables: DeploymentRemoveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentRemoveDocument, request.variables, request?.options);

/** Restarts a deployment. */
export const deploymentRestart = (
  client: RailwayClient,
  request: {
    variables: DeploymentRestartMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentRestartDocument, request.variables, request?.options);

/** Rolls back to a deployment. */
export const deploymentRollback = (
  client: RailwayClient,
  request: {
    variables: DeploymentRollbackMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentRollbackDocument, request.variables, request?.options);

/** Get all deployments */
export const deployments = (
  client: RailwayClient,
  request: { variables: DeploymentsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentsDocument, request.variables, request?.options);

/** Find a single DeploymentSnapshot */
export const deploymentSnapshot = (
  client: RailwayClient,
  request: { variables: DeploymentSnapshotQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentSnapshotDocument, request.variables, request?.options);

/** Stops a deployment. */
export const deploymentStop = (
  client: RailwayClient,
  request: { variables: DeploymentStopMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentStopDocument, request.variables, request?.options);

/** Creates a deployment trigger. */
export const deploymentTriggerCreate = (
  client: RailwayClient,
  request: {
    variables: DeploymentTriggerCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentTriggerCreateDocument, request.variables, request?.options);

/** Deletes a deployment trigger. */
export const deploymentTriggerDelete = (
  client: RailwayClient,
  request: {
    variables: DeploymentTriggerDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentTriggerDeleteDocument, request.variables, request?.options);

/** All deployment triggers. */
export const deploymentTriggers = (
  client: RailwayClient,
  request: { variables: DeploymentTriggersQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DeploymentTriggersDocument, request.variables, request?.options);

/** Updates a deployment trigger. */
export const deploymentTriggerUpdate = (
  client: RailwayClient,
  request: {
    variables: DeploymentTriggerUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DeploymentTriggerUpdateDocument, request.variables, request?.options);

/** Create services and volumes from docker compose */
export const dockerComposeImport = (
  client: RailwayClient,
  request: {
    variables: DockerComposeImportMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(DockerComposeImportDocument, request.variables, request?.options);

/** All domains for a service instance */
export const domains = (
  client: RailwayClient,
  request: { variables: DomainsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(DomainsDocument, request.variables, request?.options);

/** Create a new egress gateway association for a service instance */
export const egressGatewayAssociationCreate = (
  client: RailwayClient,
  request: {
    variables: EgressGatewayAssociationCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    EgressGatewayAssociationCreateDocument,
    request.variables,
    request?.options,
  );

/** Clear all egress gateway associations for a service instance */
export const egressGatewayAssociationsClear = (
  client: RailwayClient,
  request: {
    variables: EgressGatewayAssociationsClearMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    EgressGatewayAssociationsClearDocument,
    request.variables,
    request?.options,
  );

/** All egress gateways assigned to a service instance */
export const egressGateways = (
  client: RailwayClient,
  request: { variables: EgressGatewaysQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(EgressGatewaysDocument, request.variables, request?.options);

/** Change the User's account email if there is a valid change email request. */
export const emailChangeConfirm = (
  client: RailwayClient,
  request: {
    variables: EmailChangeConfirmMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EmailChangeConfirmDocument, request.variables, request?.options);

/** Initiate an email change request for a user */
export const emailChangeInitiate = (
  client: RailwayClient,
  request: {
    variables: EmailChangeInitiateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EmailChangeInitiateDocument, request.variables, request?.options);

/** Find a single environment */
export const environment = (
  client: RailwayClient,
  request: { variables: EnvironmentQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(EnvironmentDocument, request.variables, request?.options);

/** Creates a new environment. */
export const environmentCreate = (
  client: RailwayClient,
  request: {
    variables: EnvironmentCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EnvironmentCreateDocument, request.variables, request?.options);

/** Deletes an environment. */
export const environmentDelete = (
  client: RailwayClient,
  request: {
    variables: EnvironmentDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EnvironmentDeleteDocument, request.variables, request?.options);

/** Fetch logs for a project environment. Build logs are excluded unless a snapshot ID is explicitly provided in the filter */
export const environmentLogs = (
  client: RailwayClient,
  request: { variables: EnvironmentLogsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(EnvironmentLogsDocument, request.variables, request?.options);

/** Commit the provided patch to the environment. */
export const environmentPatchCommit = (
  client: RailwayClient,
  request: {
    variables: EnvironmentPatchCommitMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EnvironmentPatchCommitDocument, request.variables, request?.options);

/** Get the patches for an environment */
export const environmentPatches = (
  client: RailwayClient,
  request: { variables: EnvironmentPatchesQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(EnvironmentPatchesDocument, request.variables, request?.options);

/** Renames an environment. */
export const environmentRename = (
  client: RailwayClient,
  request: {
    variables: EnvironmentRenameMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EnvironmentRenameDocument, request.variables, request?.options);

/** Gets all environments for a project. */
export const environments = (
  client: RailwayClient,
  request: { variables: EnvironmentsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(EnvironmentsDocument, request.variables, request?.options);

/** Deploys all connected triggers for an environment. */
export const environmentTriggersDeploy = (
  client: RailwayClient,
  request: {
    variables: EnvironmentTriggersDeployMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(EnvironmentTriggersDeployDocument, request.variables, request?.options);

/** Gets the events for a project. */
export const events = (
  client: RailwayClient,
  request: { variables: EventsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(EventsDocument, request.variables, request?.options);

/** Agree to the fair use policy for the currently authenticated user */
export const fairUseAgree = (
  client: RailwayClient,
  request: { variables: FairUseAgreeMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(FairUseAgreeDocument, request.variables, request?.options);

/** Add a feature flag for a user */
export const featureFlagAdd = (
  client: RailwayClient,
  request: { variables: FeatureFlagAddMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(FeatureFlagAddDocument, request.variables, request?.options);

/** Remove a feature flag for a user */
export const featureFlagRemove = (
  client: RailwayClient,
  request: {
    variables: FeatureFlagRemoveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(FeatureFlagRemoveDocument, request.variables, request?.options);

/** Get information about a specific function runtime */
export const functionRuntime = (
  client: RailwayClient,
  request: { variables: FunctionRuntimeQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(FunctionRuntimeDocument, request.variables, request?.options);

/** List available function runtimes */
export const functionRuntimes = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(FunctionRuntimesDocument, undefined, request?.options);

/** Check if a repo name is available */
export const githubIsRepoNameAvailable = (
  client: RailwayClient,
  request: {
    variables: GithubIsRepoNameAvailableQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(GithubIsRepoNameAvailableDocument, request.variables, request?.options);

/** Checks if user has access to GitHub repository */
export const githubRepo = (
  client: RailwayClient,
  request: { variables: GithubRepoQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(GithubRepoDocument, request.variables, request?.options);

/** Checks if user has access to GitHub repository */
export const gitHubRepoAccessAvailable = (
  client: RailwayClient,
  request: {
    variables: GitHubRepoAccessAvailableQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(GitHubRepoAccessAvailableDocument, request.variables, request?.options);

/** Get branches for a GitHub repo that the authenticated user has access to */
export const githubRepoBranches = (
  client: RailwayClient,
  request: { variables: GithubRepoBranchesQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(GithubRepoBranchesDocument, request.variables, request?.options);

/** Deploys a GitHub repo */
export const githubRepoDeploy = (
  client: RailwayClient,
  request: {
    variables: GithubRepoDeployMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(GithubRepoDeployDocument, request.variables, request?.options);

/** Get a list of repos for a user that Railway has access to */
export const githubRepos = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(GithubReposDocument, undefined, request?.options);

/** Updates a GitHub repo through the linked template */
export const githubRepoUpdate = (
  client: RailwayClient,
  request: {
    variables: GithubRepoUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(GithubRepoUpdateDocument, request.variables, request?.options);

/** Get a list of scopes the user has installed the installation to */
export const githubWritableScopes = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(GithubWritableScopesDocument, undefined, request?.options);

/** Get the Herokus apps for the current user */
export const herokuApps = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(HerokuAppsDocument, undefined, request?.options);

/** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
export const herokuImportVariables = (
  client: RailwayClient,
  request: {
    variables: HerokuImportVariablesMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(HerokuImportVariablesDocument, request.variables, request?.options);

/** Fetch HTTP logs for a deployment */
export const httpLogs = (
  client: RailwayClient,
  request: { variables: HttpLogsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(HttpLogsDocument, request.variables, request?.options);

/** Get an integration auth by provider providerId */
export const integrationAuth = (
  client: RailwayClient,
  request: { variables: IntegrationAuthQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(IntegrationAuthDocument, request.variables, request?.options);

/** Get all integration auths for a user */
export const integrationAuths = (
  client: RailwayClient,
  request?: { variables?: IntegrationAuthsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(IntegrationAuthsDocument, request?.variables, request?.options);

/** Create an integration for a project */
export const integrationCreate = (
  client: RailwayClient,
  request: {
    variables: IntegrationCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(IntegrationCreateDocument, request.variables, request?.options);

/** Delete an integration for a project */
export const integrationDelete = (
  client: RailwayClient,
  request: {
    variables: IntegrationDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(IntegrationDeleteDocument, request.variables, request?.options);

/** Get all integrations for a project */
export const integrations = (
  client: RailwayClient,
  request: { variables: IntegrationsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(IntegrationsDocument, request.variables, request?.options);

/** Update an integration for a project */
export const integrationUpdate = (
  client: RailwayClient,
  request: {
    variables: IntegrationUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(IntegrationUpdateDocument, request.variables, request?.options);

/** Get an invite code by the code */
export const inviteCode = (
  client: RailwayClient,
  request: { variables: InviteCodeQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(InviteCodeDocument, request.variables, request?.options);

/** Join a project using an invite code */
export const inviteCodeUse = (
  client: RailwayClient,
  request: { variables: InviteCodeUseMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(InviteCodeUseDocument, request.variables, request?.options);

/** Creates a new job application. */
export const jobApplicationCreate = (
  client: RailwayClient,
  request: {
    variables: JobApplicationCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(JobApplicationCreateDocument, request.variables, request?.options);

/** Auth a login session for a user */
export const loginSessionAuth = (
  client: RailwayClient,
  request: {
    variables: LoginSessionAuthMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(LoginSessionAuthDocument, request.variables, request?.options);

/** Cancel a login session */
export const loginSessionCancel = (
  client: RailwayClient,
  request: {
    variables: LoginSessionCancelMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(LoginSessionCancelDocument, request.variables, request?.options);

/** Get a token for a login session if it exists */
export const loginSessionConsume = (
  client: RailwayClient,
  request: {
    variables: LoginSessionConsumeMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(LoginSessionConsumeDocument, request.variables, request?.options);

/** Start a CLI login session */
export const loginSessionCreate = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(LoginSessionCreateDocument, undefined, request?.options);

/** Verify if a login session is valid */
export const loginSessionVerify = (
  client: RailwayClient,
  request: {
    variables: LoginSessionVerifyMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(LoginSessionVerifyDocument, request.variables, request?.options);

/** Gets the authenticated user. */
export const me = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }) =>
  client.requestDocument(MeDocument, undefined, request?.options);

export const node = (
  client: RailwayClient,
  request: { variables: NodeQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(NodeDocument, request.variables, request?.options);

export const nodes = (
  client: RailwayClient,
  request: { variables: NodesQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(NodesDocument, request.variables, request?.options);

/** Create an observability dashboard */
export const observabilityDashboardCreate = (
  client: RailwayClient,
  request: {
    variables: ObservabilityDashboardCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ObservabilityDashboardCreateDocument, request.variables, request?.options);

/** Reset an observability dashboard to default dashboard items */
export const observabilityDashboardReset = (
  client: RailwayClient,
  request: {
    variables: ObservabilityDashboardResetMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ObservabilityDashboardResetDocument, request.variables, request?.options);

/** Get all observability dashboards for an environment */
export const observabilityDashboards = (
  client: RailwayClient,
  request: {
    variables: ObservabilityDashboardsQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ObservabilityDashboardsDocument, request.variables, request?.options);

/** Update an observability dashboard */
export const observabilityDashboardUpdate = (
  client: RailwayClient,
  request: {
    variables: ObservabilityDashboardUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ObservabilityDashboardUpdateDocument, request.variables, request?.options);

/** Get the current status of the platform */
export const platformStatus = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(PlatformStatusDocument, undefined, request?.options);

/** Create/Updates preferences overrides for a specific resource belonging to a user */
export const preferenceOverridesCreateUpdate = (
  client: RailwayClient,
  request: {
    variables: PreferenceOverridesCreateUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    PreferenceOverridesCreateUpdateDocument,
    request.variables,
    request?.options,
  );

/** Destroy preferences overrides for a specific resource belonging to a user */
export const preferenceOverridesDestroyForResource = (
  client: RailwayClient,
  request: {
    variables: PreferenceOverridesDestroyForResourceMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    PreferenceOverridesDestroyForResourceDocument,
    request.variables,
    request?.options,
  );

/** Get the email preferences for a user */
export const preferences = (
  client: RailwayClient,
  request?: { variables?: PreferencesQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(PreferencesDocument, request?.variables, request?.options);

/** Update the email preferences for a user */
export const preferencesUpdate = (
  client: RailwayClient,
  request: {
    variables: PreferencesUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(PreferencesUpdateDocument, request.variables, request?.options);

/** Create or get a private network. */
export const privateNetworkCreateOrGet = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworkCreateOrGetMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(PrivateNetworkCreateOrGetDocument, request.variables, request?.options);

/** Get a private network endpoint for a service instance. */
export const privateNetworkEndpoint = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworkEndpointQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(PrivateNetworkEndpointDocument, request.variables, request?.options);

/** Create or get a private network endpoint. */
export const privateNetworkEndpointCreateOrGet = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworkEndpointCreateOrGetMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    PrivateNetworkEndpointCreateOrGetDocument,
    request.variables,
    request?.options,
  );

/** Delete a private network endpoint. */
export const privateNetworkEndpointDelete = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworkEndpointDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(PrivateNetworkEndpointDeleteDocument, request.variables, request?.options);

/** Check if an endpoint name is available. */
export const privateNetworkEndpointNameAvailable = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworkEndpointNameAvailableQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    PrivateNetworkEndpointNameAvailableDocument,
    request.variables,
    request?.options,
  );

/** Rename a private network endpoint. */
export const privateNetworkEndpointRename = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworkEndpointRenameMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(PrivateNetworkEndpointRenameDocument, request.variables, request?.options);

/** List private networks for an environment. */
export const privateNetworks = (
  client: RailwayClient,
  request: { variables: PrivateNetworksQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(PrivateNetworksDocument, request.variables, request?.options);

/** Delete all private networks for an environment. */
export const privateNetworksForEnvironmentDelete = (
  client: RailwayClient,
  request: {
    variables: PrivateNetworksForEnvironmentDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    PrivateNetworksForEnvironmentDeleteDocument,
    request.variables,
    request?.options,
  );

/** Get a project by ID */
export const project = (
  client: RailwayClient,
  request: { variables: ProjectQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectDocument, request.variables, request?.options);

/** Claims a project. */
export const projectClaim = (
  client: RailwayClient,
  request: { variables: ProjectClaimMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectClaimDocument, request.variables, request?.options);

/** Creates a new project. */
export const projectCreate = (
  client: RailwayClient,
  request: { variables: ProjectCreateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectCreateDocument, request.variables, request?.options);

/** Deletes a project. */
export const projectDelete = (
  client: RailwayClient,
  request: { variables: ProjectDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectDeleteDocument, request.variables, request?.options);

/** Get a project invitation by code */
export const projectInvitation = (
  client: RailwayClient,
  request: { variables: ProjectInvitationQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectInvitationDocument, request.variables, request?.options);

/** Accept a project invitation using the invite code */
export const projectInvitationAccept = (
  client: RailwayClient,
  request: {
    variables: ProjectInvitationAcceptMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectInvitationAcceptDocument, request.variables, request?.options);

/** Create an invitation for a project */
export const projectInvitationCreate = (
  client: RailwayClient,
  request: {
    variables: ProjectInvitationCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectInvitationCreateDocument, request.variables, request?.options);

/** Delete an invitation for a project */
export const projectInvitationDelete = (
  client: RailwayClient,
  request: {
    variables: ProjectInvitationDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectInvitationDeleteDocument, request.variables, request?.options);

/** Resend an invitation for a project */
export const projectInvitationResend = (
  client: RailwayClient,
  request: {
    variables: ProjectInvitationResendMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectInvitationResendDocument, request.variables, request?.options);

/** Get invitations for a project */
export const projectInvitations = (
  client: RailwayClient,
  request: { variables: ProjectInvitationsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectInvitationsDocument, request.variables, request?.options);

/** Get an invite code for a project for a specifc role */
export const projectInviteCode = (
  client: RailwayClient,
  request: { variables: ProjectInviteCodeQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectInviteCodeDocument, request.variables, request?.options);

/** Invite a user by email to a project */
export const projectInviteUser = (
  client: RailwayClient,
  request: {
    variables: ProjectInviteUserMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectInviteUserDocument, request.variables, request?.options);

/** Leave project as currently authenticated user */
export const projectLeave = (
  client: RailwayClient,
  request: { variables: ProjectLeaveMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectLeaveDocument, request.variables, request?.options);

/** Remove user from a project */
export const projectMemberRemove = (
  client: RailwayClient,
  request: {
    variables: ProjectMemberRemoveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectMemberRemoveDocument, request.variables, request?.options);

/** Gets users who belong to a project along with their role */
export const projectMembers = (
  client: RailwayClient,
  request: { variables: ProjectMembersQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectMembersDocument, request.variables, request?.options);

/** Change the role for a user within a project */
export const projectMemberUpdate = (
  client: RailwayClient,
  request: {
    variables: ProjectMemberUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectMemberUpdateDocument, request.variables, request?.options);

/** Get resource access rules for project-specific actions */
export const projectResourceAccess = (
  client: RailwayClient,
  request: {
    variables: ProjectResourceAccessQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectResourceAccessDocument, request.variables, request?.options);

/** Gets all projects for a user or workspace */
export const projects = (
  client: RailwayClient,
  request?: { variables?: ProjectsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectsDocument, request?.variables, request?.options);

/** Deletes a project with a 48 hour grace period. */
export const projectScheduleDelete = (
  client: RailwayClient,
  request: {
    variables: ProjectScheduleDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectScheduleDeleteDocument, request.variables, request?.options);

/** Cancel scheduled deletion of a project */
export const projectScheduleDeleteCancel = (
  client: RailwayClient,
  request: {
    variables: ProjectScheduleDeleteCancelMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ProjectScheduleDeleteCancelDocument, request.variables, request?.options);

/** Force delete a scheduled deletion of a project (skips the grace period) */
export const projectScheduleDeleteForce = (
  client: RailwayClient,
  request: {
    variables: ProjectScheduleDeleteForceMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ProjectScheduleDeleteForceDocument, request.variables, request?.options);

/** Get a single project token by the value in the header */
export const projectToken = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectTokenDocument, undefined, request?.options);

/** Create a token for a project that has access to a specific environment */
export const projectTokenCreate = (
  client: RailwayClient,
  request: {
    variables: ProjectTokenCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectTokenCreateDocument, request.variables, request?.options);

/** Delete a project token */
export const projectTokenDelete = (
  client: RailwayClient,
  request: {
    variables: ProjectTokenDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectTokenDeleteDocument, request.variables, request?.options);

/** Get all project tokens for a project */
export const projectTokens = (
  client: RailwayClient,
  request: { variables: ProjectTokensQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectTokensDocument, request.variables, request?.options);

/** Confirm the transfer of project ownership */
export const projectTransferConfirm = (
  client: RailwayClient,
  request: {
    variables: ProjectTransferConfirmMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectTransferConfirmDocument, request.variables, request?.options);

/** Initiate the transfer of project ownership */
export const projectTransferInitiate = (
  client: RailwayClient,
  request: {
    variables: ProjectTransferInitiateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProjectTransferInitiateDocument, request.variables, request?.options);

/** Updates a project. */
export const projectUpdate = (
  client: RailwayClient,
  request: { variables: ProjectUpdateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ProjectUpdateDocument, request.variables, request?.options);

/** Deletes a ProviderAuth. */
export const providerAuthRemove = (
  client: RailwayClient,
  request: {
    variables: ProviderAuthRemoveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ProviderAuthRemoveDocument, request.variables, request?.options);

/** Get public Railway stats. */
export const publicStats = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(PublicStatsDocument, undefined, request?.options);

/** Generates a new set of recovery codes for the authenticated user. */
export const recoveryCodeGenerate = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(RecoveryCodeGenerateDocument, undefined, request?.options);

/** Validates a recovery code. */
export const recoveryCodeValidate = (
  client: RailwayClient,
  request: {
    variables: RecoveryCodeValidateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(RecoveryCodeValidateDocument, request.variables, request?.options);

/** Gets the ReferralInfo for the authenticated user. */
export const referralInfo = (
  client: RailwayClient,
  request: { variables: ReferralInfoQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ReferralInfoDocument, request.variables, request?.options);

/** Updates the ReferralInfo for the authenticated user. */
export const referralInfoUpdate = (
  client: RailwayClient,
  request: {
    variables: ReferralInfoUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ReferralInfoUpdateDocument, request.variables, request?.options);

/** Get resource access for the current user or team */
export const resourceAccess = (
  client: RailwayClient,
  request: { variables: ResourceAccessQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ResourceAccessDocument, request.variables, request?.options);

/** Get a service by ID */
export const service = (
  client: RailwayClient,
  request: { variables: ServiceQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ServiceDocument, request.variables, request?.options);

/** Connect a service to a source */
export const serviceConnect = (
  client: RailwayClient,
  request: { variables: ServiceConnectMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ServiceConnectDocument, request.variables, request?.options);

/** Creates a new service. */
export const serviceCreate = (
  client: RailwayClient,
  request: { variables: ServiceCreateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ServiceCreateDocument, request.variables, request?.options);

/** Deletes a service. */
export const serviceDelete = (
  client: RailwayClient,
  request: { variables: ServiceDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ServiceDeleteDocument, request.variables, request?.options);

/** Disconnect a service from a repo */
export const serviceDisconnect = (
  client: RailwayClient,
  request: {
    variables: ServiceDisconnectMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceDisconnectDocument, request.variables, request?.options);

/** Checks if a service domain is available */
export const serviceDomainAvailable = (
  client: RailwayClient,
  request: {
    variables: ServiceDomainAvailableQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceDomainAvailableDocument, request.variables, request?.options);

/** Creates a new service domain. */
export const serviceDomainCreate = (
  client: RailwayClient,
  request: {
    variables: ServiceDomainCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceDomainCreateDocument, request.variables, request?.options);

/** Deletes a service domain. */
export const serviceDomainDelete = (
  client: RailwayClient,
  request: {
    variables: ServiceDomainDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceDomainDeleteDocument, request.variables, request?.options);

/** Updates a service domain. */
export const serviceDomainUpdate = (
  client: RailwayClient,
  request: {
    variables: ServiceDomainUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceDomainUpdateDocument, request.variables, request?.options);

/** Add a feature flag for a service */
export const serviceFeatureFlagAdd = (
  client: RailwayClient,
  request: {
    variables: ServiceFeatureFlagAddMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceFeatureFlagAddDocument, request.variables, request?.options);

/** Remove a feature flag for a service */
export const serviceFeatureFlagRemove = (
  client: RailwayClient,
  request: {
    variables: ServiceFeatureFlagRemoveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceFeatureFlagRemoveDocument, request.variables, request?.options);

/** Get a service instance belonging to a service and environment */
export const serviceInstance = (
  client: RailwayClient,
  request: { variables: ServiceInstanceQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ServiceInstanceDocument, request.variables, request?.options);

/** Deploy a service instance */
export const serviceInstanceDeploy = (
  client: RailwayClient,
  request: {
    variables: ServiceInstanceDeployMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceInstanceDeployDocument, request.variables, request?.options);

/** Deploy a service instance. Returns a deployment ID */
export const serviceInstanceDeployV2 = (
  client: RailwayClient,
  request: {
    variables: ServiceInstanceDeployV2MutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceInstanceDeployV2Document, request.variables, request?.options);

/** Check if the upstream repo for a service has an update available */
export const serviceInstanceIsUpdatable = (
  client: RailwayClient,
  request: {
    variables: ServiceInstanceIsUpdatableQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ServiceInstanceIsUpdatableDocument, request.variables, request?.options);

/** Update the resource limits for a service instance */
export const serviceInstanceLimitsUpdate = (
  client: RailwayClient,
  request: {
    variables: ServiceInstanceLimitsUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(ServiceInstanceLimitsUpdateDocument, request.variables, request?.options);

/** Redeploy a service instance */
export const serviceInstanceRedeploy = (
  client: RailwayClient,
  request: {
    variables: ServiceInstanceRedeployMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceInstanceRedeployDocument, request.variables, request?.options);

/** Update a service instance */
export const serviceInstanceUpdate = (
  client: RailwayClient,
  request: {
    variables: ServiceInstanceUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceInstanceUpdateDocument, request.variables, request?.options);

/** Remove the upstream URL from all service instances for this service */
export const serviceRemoveUpstreamUrl = (
  client: RailwayClient,
  request: {
    variables: ServiceRemoveUpstreamUrlMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(ServiceRemoveUpstreamUrlDocument, request.variables, request?.options);

/** Updates a service. */
export const serviceUpdate = (
  client: RailwayClient,
  request: { variables: ServiceUpdateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(ServiceUpdateDocument, request.variables, request?.options);

/** Deletes a session. */
export const sessionDelete = (
  client: RailwayClient,
  request: { variables: SessionDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(SessionDeleteDocument, request.variables, request?.options);

/** Gets all sessions for authenticated user. */
export const sessions = (
  client: RailwayClient,
  request?: { variables?: SessionsQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(SessionsDocument, request?.variables, request?.options);

/** Configure a shared variable. */
export const sharedVariableConfigure = (
  client: RailwayClient,
  request: {
    variables: SharedVariableConfigureMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(SharedVariableConfigureDocument, request.variables, request?.options);

/** All TCP proxies for a service instance */
export const tcpProxies = (
  client: RailwayClient,
  request: { variables: TcpProxiesQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TcpProxiesDocument, request.variables, request?.options);

/** Deletes a TCP proxy by id */
export const tcpProxyDelete = (
  client: RailwayClient,
  request: { variables: TcpProxyDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TcpProxyDeleteDocument, request.variables, request?.options);

/** Get a template by code or GitHub owner and repo. */
export const template = (
  client: RailwayClient,
  request?: { variables?: TemplateQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TemplateDocument, request?.variables, request?.options);

/** Duplicates an existing template */
export const templateClone = (
  client: RailwayClient,
  request: { variables: TemplateCloneMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TemplateCloneDocument, request.variables, request?.options);

/** Deletes a template. */
export const templateDelete = (
  client: RailwayClient,
  request: { variables: TemplateDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TemplateDeleteDocument, request.variables, request?.options);

/** Deploys a template using the serialized template config */
export const templateDeployV2 = (
  client: RailwayClient,
  request: {
    variables: TemplateDeployV2MutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(TemplateDeployV2Document, request.variables, request?.options);

/** Generate a template for a project */
export const templateGenerate = (
  client: RailwayClient,
  request: {
    variables: TemplateGenerateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(TemplateGenerateDocument, request.variables, request?.options);

/** Publishes a template. */
export const templatePublish = (
  client: RailwayClient,
  request: { variables: TemplatePublishMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TemplatePublishDocument, request.variables, request?.options);

/** Get all published templates. */
export const templates = (
  client: RailwayClient,
  request?: { variables?: TemplatesQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TemplatesDocument, request?.variables, request?.options);

/** Count all published templates. */
export const templatesCount = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TemplatesCountDocument, undefined, request?.options);

/** Ejects a service from the template and creates a new repo in the provided org. */
export const templateServiceSourceEject = (
  client: RailwayClient,
  request: {
    variables: TemplateServiceSourceEjectMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(TemplateServiceSourceEjectDocument, request.variables, request?.options);

/** Get the source template for a project. */
export const templateSourceForProject = (
  client: RailwayClient,
  request: {
    variables: TemplateSourceForProjectQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(TemplateSourceForProjectDocument, request.variables, request?.options);

/** Unpublishes a template. */
export const templateUnpublish = (
  client: RailwayClient,
  request: {
    variables: TemplateUnpublishMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(TemplateUnpublishDocument, request.variables, request?.options);

/** Gets the TwoFactorInfo for the authenticated user. */
export const twoFactorInfo = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TwoFactorInfoDocument, undefined, request?.options);

/** Setup 2FA authorization for authenticated user. */
export const twoFactorInfoCreate = (
  client: RailwayClient,
  request: {
    variables: TwoFactorInfoCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(TwoFactorInfoCreateDocument, request.variables, request?.options);

/** Deletes the TwoFactorInfo for the authenticated user. */
export const twoFactorInfoDelete = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TwoFactorInfoDeleteDocument, undefined, request?.options);

/** Generates the 2FA app secret for the authenticated user. */
export const twoFactorInfoSecret = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(TwoFactorInfoSecretDocument, undefined, request?.options);

/** Validates the token for a 2FA action or for a login request. */
export const twoFactorInfoValidate = (
  client: RailwayClient,
  request: {
    variables: TwoFactorInfoValidateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(TwoFactorInfoValidateDocument, request.variables, request?.options);

/** Remove the usage limit for a customer */
export const usageLimitRemove = (
  client: RailwayClient,
  request: {
    variables: UsageLimitRemoveMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(UsageLimitRemoveDocument, request.variables, request?.options);

/** Set the usage limit for a customer */
export const usageLimitSet = (
  client: RailwayClient,
  request: { variables: UsageLimitSetMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UsageLimitSetDocument, request.variables, request?.options);

/** Unsubscribe from the Beta program. */
export const userBetaLeave = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserBetaLeaveDocument, undefined, request?.options);

/** Delete the currently authenticated user */
export const userDelete = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserDeleteDocument, undefined, request?.options);

/** Disconnect your Railway account from Discord. */
export const userDiscordDisconnect = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserDiscordDisconnectDocument, undefined, request?.options);

/** Remove a flag on the user. */
export const userFlagsRemove = (
  client: RailwayClient,
  request: { variables: UserFlagsRemoveMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserFlagsRemoveDocument, request.variables, request?.options);

/** Set flags on the authenticated user. */
export const userFlagsSet = (
  client: RailwayClient,
  request: { variables: UserFlagsSetMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserFlagsSetDocument, request.variables, request?.options);

/** Get the public profile for a user */
export const userProfile = (
  client: RailwayClient,
  request: { variables: UserProfileQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserProfileDocument, request.variables, request?.options);

/** Updates the profile for the authenticated user */
export const userProfileUpdate = (
  client: RailwayClient,
  request: {
    variables: UserProfileUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(UserProfileUpdateDocument, request.variables, request?.options);

/** Update date of TermsAgreedOn */
export const userTermsUpdate = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(UserTermsUpdateDocument, undefined, request?.options);

/** Upserts a collection of variables. */
export const variableCollectionUpsert = (
  client: RailwayClient,
  request: {
    variables: VariableCollectionUpsertMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(VariableCollectionUpsertDocument, request.variables, request?.options);

/** Deletes a variable. */
export const variableDelete = (
  client: RailwayClient,
  request: { variables: VariableDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(VariableDeleteDocument, request.variables, request?.options);

/** All rendered variables that are required for a service deployment. */
export const variablesForServiceDeployment = (
  client: RailwayClient,
  request: {
    variables: VariablesForServiceDeploymentQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    VariablesForServiceDeploymentDocument,
    request.variables,
    request?.options,
  );

/** Upserts a variable. */
export const variableUpsert = (
  client: RailwayClient,
  request: { variables: VariableUpsertMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(VariableUpsertDocument, request.variables, request?.options);

/** Get information about the user's Vercel accounts */
export const vercelInfo = (
  client: RailwayClient,
  request?: { options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(VercelInfoDocument, undefined, request?.options);

/** Create a persistent volume in a project */
export const volumeCreate = (
  client: RailwayClient,
  request: { variables: VolumeCreateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(VolumeCreateDocument, request.variables, request?.options);

/** Delete a persistent volume in a project */
export const volumeDelete = (
  client: RailwayClient,
  request: { variables: VolumeDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(VolumeDeleteDocument, request.variables, request?.options);

/** Create backup of a volume instance */
export const volumeInstanceBackupCreate = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupCreateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(VolumeInstanceBackupCreateDocument, request.variables, request?.options);

/** Deletes volume instance backup */
export const volumeInstanceBackupDelete = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupDeleteMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(VolumeInstanceBackupDeleteDocument, request.variables, request?.options);

/** List backups of a volume instance */
export const volumeInstanceBackupList = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupListQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(VolumeInstanceBackupListDocument, request.variables, request?.options);

/** Removes backup expiration date */
export const volumeInstanceBackupLock = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupLockMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(VolumeInstanceBackupLockDocument, request.variables, request?.options);

/** Restore a volume instance from a backup */
export const volumeInstanceBackupRestore = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupRestoreMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(VolumeInstanceBackupRestoreDocument, request.variables, request?.options);

/** List backups schedules of a volume instance */
export const volumeInstanceBackupScheduleList = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupScheduleListQueryVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    VolumeInstanceBackupScheduleListDocument,
    request.variables,
    request?.options,
  );

/** Manage schedule for backups of a volume instance */
export const volumeInstanceBackupScheduleUpdate = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceBackupScheduleUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(
    VolumeInstanceBackupScheduleUpdateDocument,
    request.variables,
    request?.options,
  );

/** Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated. */
export const volumeInstanceUpdate = (
  client: RailwayClient,
  request: {
    variables: VolumeInstanceUpdateMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) => client.requestDocument(VolumeInstanceUpdateDocument, request.variables, request?.options);

/** Update a persistent volume in a project */
export const volumeUpdate = (
  client: RailwayClient,
  request: { variables: VolumeUpdateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(VolumeUpdateDocument, request.variables, request?.options);

/** Create a webhook on a project */
export const webhookCreate = (
  client: RailwayClient,
  request: { variables: WebhookCreateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WebhookCreateDocument, request.variables, request?.options);

/** Delete a webhook from a project */
export const webhookDelete = (
  client: RailwayClient,
  request: { variables: WebhookDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WebhookDeleteDocument, request.variables, request?.options);

/** Get all webhooks for a project */
export const webhooks = (
  client: RailwayClient,
  request: { variables: WebhooksQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WebhooksDocument, request.variables, request?.options);

/** Update a webhook on a project */
export const webhookUpdate = (
  client: RailwayClient,
  request: { variables: WebhookUpdateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WebhookUpdateDocument, request.variables, request?.options);

/** Gets the status of a workflow */
export const workflowStatus = (
  client: RailwayClient,
  request: { variables: WorkflowStatusQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WorkflowStatusDocument, request.variables, request?.options);

/** Get the workspace */
export const workspace = (
  client: RailwayClient,
  request: { variables: WorkspaceQueryVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WorkspaceDocument, request.variables, request?.options);

/** Delete a workspace and all data associated with it */
export const workspaceDelete = (
  client: RailwayClient,
  request: { variables: WorkspaceDeleteMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WorkspaceDeleteDocument, request.variables, request?.options);

/** Leave a workspace */
export const workspaceLeave = (
  client: RailwayClient,
  request: { variables: WorkspaceLeaveMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WorkspaceLeaveDocument, request.variables, request?.options);

/** Update a workspace by id */
export const workspaceUpdate = (
  client: RailwayClient,
  request: { variables: WorkspaceUpdateMutationVariables; options?: GraphQLDocumentRequestOptions },
) => client.requestDocument(WorkspaceUpdateDocument, request.variables, request?.options);

/** Generate a Slack channel for a workspace */
export const workspaceUpsertSlackChannel = (
  client: RailwayClient,
  request: {
    variables: WorkspaceUpsertSlackChannelMutationVariables;
    options?: GraphQLDocumentRequestOptions;
  },
) =>
  client.requestDocument(WorkspaceUpsertSlackChannelDocument, request.variables, request?.options);
