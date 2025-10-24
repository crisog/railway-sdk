import { RailwayClient, type GraphQLDocumentRequestOptions } from '../client';
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
  DomainStatusDocument,
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
  PluginDocument,
  PluginCreateDocument,
  PluginDeleteDocument,
  PluginLogsDocument,
  PluginResetDocument,
  PluginResetCredentialsDocument,
  PluginRestartDocument,
  PluginStartDocument,
  PluginUpdateDocument,
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
  ProjectTransferToTeamDocument,
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
  ServiceDuplicateDocument,
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
  TcpProxyCreateDocument,
  TcpProxyDeleteDocument,
  TeamDocument,
  TeamTemplatesDocument,
  TemplateDocument,
  TemplateCloneDocument,
  TemplateDeleteDocument,
  TemplateDeployDocument,
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
  UserKickbackEarningsDocument,
  UserProfileDocument,
  UserProfileUpdateDocument,
  UserTemplatesDocument,
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
  type DomainStatusQueryVariables,
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
  type PluginQueryVariables,
  type PluginCreateMutationVariables,
  type PluginDeleteMutationVariables,
  type PluginLogsQueryVariables,
  type PluginResetMutationVariables,
  type PluginResetCredentialsMutationVariables,
  type PluginRestartMutationVariables,
  type PluginStartMutationVariables,
  type PluginUpdateMutationVariables,
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
  type ProjectTransferToTeamMutationVariables,
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
  type ServiceDuplicateMutationVariables,
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
  type TcpProxyCreateMutationVariables,
  type TcpProxyDeleteMutationVariables,
  type TeamQueryVariables,
  type TeamTemplatesQueryVariables,
  type TemplateQueryVariables,
  type TemplateCloneMutationVariables,
  type TemplateDeleteMutationVariables,
  type TemplateDeployMutationVariables,
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
  type UserKickbackEarningsQueryVariables,
  type UserProfileQueryVariables,
  type UserProfileUpdateMutationVariables,
  type UserTemplatesQueryVariables,
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
  variables: ApiTokenCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ApiTokenCreateDocument, variables, options);

/** Deletes an API token. */
export const apiTokenDelete = (
  client: RailwayClient,
  variables: ApiTokenDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ApiTokenDeleteDocument, variables, options);

/** Gets all API tokens for the authenticated user. */
export const apiTokens = (
  client: RailwayClient,
  variables?: ApiTokensQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ApiTokensDocument, variables, options);

/** Sets the base environment override for a deployment trigger. */
export const baseEnvironmentOverride = (
  client: RailwayClient,
  variables: BaseEnvironmentOverrideMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(BaseEnvironmentOverrideDocument, variables, options);

/** Fetch logs for a build */
export const buildLogs = (
  client: RailwayClient,
  variables: BuildLogsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(BuildLogsDocument, variables, options);

/** Gets the image URL for a Notion image block */
export const changelogBlockImage = (
  client: RailwayClient,
  variables: ChangelogBlockImageQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ChangelogBlockImageDocument, variables, options);

/** Fetch details for a custom domain */
export const customDomain = (
  client: RailwayClient,
  variables: CustomDomainQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomDomainDocument, variables, options);

/** Checks if a custom domain is available. */
export const customDomainAvailable = (
  client: RailwayClient,
  variables: CustomDomainAvailableQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomDomainAvailableDocument, variables, options);

/** Creates a new custom domain. */
export const customDomainCreate = (
  client: RailwayClient,
  variables: CustomDomainCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomDomainCreateDocument, variables, options);

/** Deletes a custom domain. */
export const customDomainDelete = (
  client: RailwayClient,
  variables: CustomDomainDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomDomainDeleteDocument, variables, options);

/** Updates a custom domain. */
export const customDomainUpdate = (
  client: RailwayClient,
  variables: CustomDomainUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomDomainUpdateDocument, variables, options);

/** Create a free plan subscription for a customer */
export const customerCreateFreePlanSubscription = (
  client: RailwayClient,
  variables: CustomerCreateFreePlanSubscriptionMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomerCreateFreePlanSubscriptionDocument, variables, options);

/** Toggle whether a customer is automatically withdrawing to credits */
export const customerTogglePayoutsToCredits = (
  client: RailwayClient,
  variables: CustomerTogglePayoutsToCreditsMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(CustomerTogglePayoutsToCreditsDocument, variables, options);

/** Find a single deployment */
export const deployment = (
  client: RailwayClient,
  variables: DeploymentQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentDocument, variables, options);

/** Approves a deployment. */
export const deploymentApprove = (
  client: RailwayClient,
  variables: DeploymentApproveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentApproveDocument, variables, options);

/** Cancels a deployment. */
export const deploymentCancel = (
  client: RailwayClient,
  variables: DeploymentCancelMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentCancelDocument, variables, options);

/** Get the deployment events for a deployment */
export const deploymentEvents = (
  client: RailwayClient,
  variables: DeploymentEventsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentEventsDocument, variables, options);

/** Invoke a deployment instance execution. */
export const deploymentInstanceExecutionCreate = (
  client: RailwayClient,
  variables: DeploymentInstanceExecutionCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentInstanceExecutionCreateDocument, variables, options);

/** Get the deployment instance executions for a deployment. */
export const deploymentInstanceExecutions = (
  client: RailwayClient,
  variables: DeploymentInstanceExecutionsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentInstanceExecutionsDocument, variables, options);

/** Fetch logs for a deployment */
export const deploymentLogs = (
  client: RailwayClient,
  variables: DeploymentLogsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentLogsDocument, variables, options);

/** Redeploys a deployment. */
export const deploymentRedeploy = (
  client: RailwayClient,
  variables: DeploymentRedeployMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentRedeployDocument, variables, options);

/** Removes a deployment. */
export const deploymentRemove = (
  client: RailwayClient,
  variables: DeploymentRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentRemoveDocument, variables, options);

/** Restarts a deployment. */
export const deploymentRestart = (
  client: RailwayClient,
  variables: DeploymentRestartMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentRestartDocument, variables, options);

/** Rolls back to a deployment. */
export const deploymentRollback = (
  client: RailwayClient,
  variables: DeploymentRollbackMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentRollbackDocument, variables, options);

/** Get all deployments */
export const deployments = (
  client: RailwayClient,
  variables: DeploymentsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentsDocument, variables, options);

/** Find a single DeploymentSnapshot */
export const deploymentSnapshot = (
  client: RailwayClient,
  variables: DeploymentSnapshotQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentSnapshotDocument, variables, options);

/** Stops a deployment. */
export const deploymentStop = (
  client: RailwayClient,
  variables: DeploymentStopMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentStopDocument, variables, options);

/** Creates a deployment trigger. */
export const deploymentTriggerCreate = (
  client: RailwayClient,
  variables: DeploymentTriggerCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentTriggerCreateDocument, variables, options);

/** Deletes a deployment trigger. */
export const deploymentTriggerDelete = (
  client: RailwayClient,
  variables: DeploymentTriggerDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentTriggerDeleteDocument, variables, options);

/** All deployment triggers. */
export const deploymentTriggers = (
  client: RailwayClient,
  variables: DeploymentTriggersQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentTriggersDocument, variables, options);

/** Updates a deployment trigger. */
export const deploymentTriggerUpdate = (
  client: RailwayClient,
  variables: DeploymentTriggerUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DeploymentTriggerUpdateDocument, variables, options);

/** Create services and volumes from docker compose */
export const dockerComposeImport = (
  client: RailwayClient,
  variables: DockerComposeImportMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DockerComposeImportDocument, variables, options);

/** All domains for a service instance */
export const domains = (
  client: RailwayClient,
  variables: DomainsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DomainsDocument, variables, options);

/** Domain with status */
export const domainStatus = (
  client: RailwayClient,
  variables: DomainStatusQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(DomainStatusDocument, variables, options);

/** Create a new egress gateway association for a service instance */
export const egressGatewayAssociationCreate = (
  client: RailwayClient,
  variables: EgressGatewayAssociationCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EgressGatewayAssociationCreateDocument, variables, options);

/** Clear all egress gateway associations for a service instance */
export const egressGatewayAssociationsClear = (
  client: RailwayClient,
  variables: EgressGatewayAssociationsClearMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EgressGatewayAssociationsClearDocument, variables, options);

/** All egress gateways assigned to a service instance */
export const egressGateways = (
  client: RailwayClient,
  variables: EgressGatewaysQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EgressGatewaysDocument, variables, options);

/** Change the User's account email if there is a valid change email request. */
export const emailChangeConfirm = (
  client: RailwayClient,
  variables: EmailChangeConfirmMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EmailChangeConfirmDocument, variables, options);

/** Initiate an email change request for a user */
export const emailChangeInitiate = (
  client: RailwayClient,
  variables: EmailChangeInitiateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EmailChangeInitiateDocument, variables, options);

/** Find a single environment */
export const environment = (
  client: RailwayClient,
  variables: EnvironmentQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentDocument, variables, options);

/** Creates a new environment. */
export const environmentCreate = (
  client: RailwayClient,
  variables: EnvironmentCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentCreateDocument, variables, options);

/** Deletes an environment. */
export const environmentDelete = (
  client: RailwayClient,
  variables: EnvironmentDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentDeleteDocument, variables, options);

/** Fetch logs for a project environment. Build logs are excluded unless a snapshot ID is explicitly provided in the filter */
export const environmentLogs = (
  client: RailwayClient,
  variables: EnvironmentLogsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentLogsDocument, variables, options);

/** Commit the provided patch to the environment. */
export const environmentPatchCommit = (
  client: RailwayClient,
  variables: EnvironmentPatchCommitMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentPatchCommitDocument, variables, options);

/** Get the patches for an environment */
export const environmentPatches = (
  client: RailwayClient,
  variables: EnvironmentPatchesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentPatchesDocument, variables, options);

/** Renames an environment. */
export const environmentRename = (
  client: RailwayClient,
  variables: EnvironmentRenameMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentRenameDocument, variables, options);

/** Gets all environments for a project. */
export const environments = (
  client: RailwayClient,
  variables: EnvironmentsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentsDocument, variables, options);

/** Deploys all connected triggers for an environment. */
export const environmentTriggersDeploy = (
  client: RailwayClient,
  variables: EnvironmentTriggersDeployMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EnvironmentTriggersDeployDocument, variables, options);

/** Gets the events for a project. */
export const events = (
  client: RailwayClient,
  variables: EventsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(EventsDocument, variables, options);

/** Agree to the fair use policy for the currently authenticated user */
export const fairUseAgree = (
  client: RailwayClient,
  variables: FairUseAgreeMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(FairUseAgreeDocument, variables, options);

/** Add a feature flag for a user */
export const featureFlagAdd = (
  client: RailwayClient,
  variables: FeatureFlagAddMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(FeatureFlagAddDocument, variables, options);

/** Remove a feature flag for a user */
export const featureFlagRemove = (
  client: RailwayClient,
  variables: FeatureFlagRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(FeatureFlagRemoveDocument, variables, options);

/** Get information about a specific function runtime */
export const functionRuntime = (
  client: RailwayClient,
  variables: FunctionRuntimeQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(FunctionRuntimeDocument, variables, options);

/** List available function runtimes */
export const functionRuntimes = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(FunctionRuntimesDocument, undefined, options);

/** Check if a repo name is available */
export const githubIsRepoNameAvailable = (
  client: RailwayClient,
  variables: GithubIsRepoNameAvailableQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GithubIsRepoNameAvailableDocument, variables, options);

/** Checks if user has access to GitHub repository */
export const githubRepo = (
  client: RailwayClient,
  variables: GithubRepoQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GithubRepoDocument, variables, options);

/** Checks if user has access to GitHub repository */
export const gitHubRepoAccessAvailable = (
  client: RailwayClient,
  variables: GitHubRepoAccessAvailableQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GitHubRepoAccessAvailableDocument, variables, options);

/** Get branches for a GitHub repo that the authenticated user has access to */
export const githubRepoBranches = (
  client: RailwayClient,
  variables: GithubRepoBranchesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GithubRepoBranchesDocument, variables, options);

/** Deploys a GitHub repo */
export const githubRepoDeploy = (
  client: RailwayClient,
  variables: GithubRepoDeployMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GithubRepoDeployDocument, variables, options);

/** Get a list of repos for a user that Railway has access to */
export const githubRepos = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(GithubReposDocument, undefined, options);

/** Updates a GitHub repo through the linked template */
export const githubRepoUpdate = (
  client: RailwayClient,
  variables: GithubRepoUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GithubRepoUpdateDocument, variables, options);

/** Get a list of scopes the user has installed the installation to */
export const githubWritableScopes = (
  client: RailwayClient,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(GithubWritableScopesDocument, undefined, options);

/** Get the Herokus apps for the current user */
export const herokuApps = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(HerokuAppsDocument, undefined, options);

/** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
export const herokuImportVariables = (
  client: RailwayClient,
  variables: HerokuImportVariablesMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(HerokuImportVariablesDocument, variables, options);

/** Fetch HTTP logs for a deployment */
export const httpLogs = (
  client: RailwayClient,
  variables: HttpLogsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(HttpLogsDocument, variables, options);

/** Get an integration auth by provider providerId */
export const integrationAuth = (
  client: RailwayClient,
  variables: IntegrationAuthQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(IntegrationAuthDocument, variables, options);

/** Get all integration auths for a user */
export const integrationAuths = (
  client: RailwayClient,
  variables?: IntegrationAuthsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(IntegrationAuthsDocument, variables, options);

/** Create an integration for a project */
export const integrationCreate = (
  client: RailwayClient,
  variables: IntegrationCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(IntegrationCreateDocument, variables, options);

/** Delete an integration for a project */
export const integrationDelete = (
  client: RailwayClient,
  variables: IntegrationDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(IntegrationDeleteDocument, variables, options);

/** Get all integrations for a project */
export const integrations = (
  client: RailwayClient,
  variables: IntegrationsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(IntegrationsDocument, variables, options);

/** Update an integration for a project */
export const integrationUpdate = (
  client: RailwayClient,
  variables: IntegrationUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(IntegrationUpdateDocument, variables, options);

/** Get an invite code by the code */
export const inviteCode = (
  client: RailwayClient,
  variables: InviteCodeQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(InviteCodeDocument, variables, options);

/** Join a project using an invite code */
export const inviteCodeUse = (
  client: RailwayClient,
  variables: InviteCodeUseMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(InviteCodeUseDocument, variables, options);

/** Creates a new job application. */
export const jobApplicationCreate = (
  client: RailwayClient,
  variables: JobApplicationCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(JobApplicationCreateDocument, variables, options);

/** Auth a login session for a user */
export const loginSessionAuth = (
  client: RailwayClient,
  variables: LoginSessionAuthMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(LoginSessionAuthDocument, variables, options);

/** Cancel a login session */
export const loginSessionCancel = (
  client: RailwayClient,
  variables: LoginSessionCancelMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(LoginSessionCancelDocument, variables, options);

/** Get a token for a login session if it exists */
export const loginSessionConsume = (
  client: RailwayClient,
  variables: LoginSessionConsumeMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(LoginSessionConsumeDocument, variables, options);

/** Start a CLI login session */
export const loginSessionCreate = (
  client: RailwayClient,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(LoginSessionCreateDocument, undefined, options);

/** Verify if a login session is valid */
export const loginSessionVerify = (
  client: RailwayClient,
  variables: LoginSessionVerifyMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(LoginSessionVerifyDocument, variables, options);

/** Gets the authenticated user. */
export const me = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(MeDocument, undefined, options);

export const node = (
  client: RailwayClient,
  variables: NodeQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(NodeDocument, variables, options);

export const nodes = (
  client: RailwayClient,
  variables: NodesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(NodesDocument, variables, options);

/** Create an observability dashboard */
export const observabilityDashboardCreate = (
  client: RailwayClient,
  variables: ObservabilityDashboardCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ObservabilityDashboardCreateDocument, variables, options);

/** Reset an observability dashboard to default dashboard items */
export const observabilityDashboardReset = (
  client: RailwayClient,
  variables: ObservabilityDashboardResetMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ObservabilityDashboardResetDocument, variables, options);

/** Get all observability dashboards for an environment */
export const observabilityDashboards = (
  client: RailwayClient,
  variables: ObservabilityDashboardsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ObservabilityDashboardsDocument, variables, options);

/** Update an observability dashboard */
export const observabilityDashboardUpdate = (
  client: RailwayClient,
  variables: ObservabilityDashboardUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ObservabilityDashboardUpdateDocument, variables, options);

/** Get the current status of the platform */
export const platformStatus = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(PlatformStatusDocument, undefined, options);

/** Get a plugin by ID. */
export const plugin = (
  client: RailwayClient,
  variables: PluginQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginDocument, variables, options);

/** Creates a new plugin. */
export const pluginCreate = (
  client: RailwayClient,
  variables: PluginCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginCreateDocument, variables, options);

/** Deletes a plugin. */
export const pluginDelete = (
  client: RailwayClient,
  variables: PluginDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginDeleteDocument, variables, options);

/** Fetch logs for a plugin */
export const pluginLogs = (
  client: RailwayClient,
  variables: PluginLogsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginLogsDocument, variables, options);

/** Reset envs and container for a plugin in an environment */
export const pluginReset = (
  client: RailwayClient,
  variables: PluginResetMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginResetDocument, variables, options);

/** Resets the credentials for a plugin in an environment */
export const pluginResetCredentials = (
  client: RailwayClient,
  variables: PluginResetCredentialsMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginResetCredentialsDocument, variables, options);

/** Restarts a plugin. */
export const pluginRestart = (
  client: RailwayClient,
  variables: PluginRestartMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginRestartDocument, variables, options);

/** Force start a plugin */
export const pluginStart = (
  client: RailwayClient,
  variables: PluginStartMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginStartDocument, variables, options);

/** Updates an existing plugin. */
export const pluginUpdate = (
  client: RailwayClient,
  variables: PluginUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PluginUpdateDocument, variables, options);

/** Create/Updates preferences overrides for a specific resource belonging to a user */
export const preferenceOverridesCreateUpdate = (
  client: RailwayClient,
  variables: PreferenceOverridesCreateUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PreferenceOverridesCreateUpdateDocument, variables, options);

/** Destroy preferences overrides for a specific resource belonging to a user */
export const preferenceOverridesDestroyForResource = (
  client: RailwayClient,
  variables: PreferenceOverridesDestroyForResourceMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PreferenceOverridesDestroyForResourceDocument, variables, options);

/** Get the email preferences for a user */
export const preferences = (
  client: RailwayClient,
  variables?: PreferencesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PreferencesDocument, variables, options);

/** Update the email preferences for a user */
export const preferencesUpdate = (
  client: RailwayClient,
  variables: PreferencesUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PreferencesUpdateDocument, variables, options);

/** Create or get a private network. */
export const privateNetworkCreateOrGet = (
  client: RailwayClient,
  variables: PrivateNetworkCreateOrGetMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworkCreateOrGetDocument, variables, options);

/** Get a private network endpoint for a service instance. */
export const privateNetworkEndpoint = (
  client: RailwayClient,
  variables: PrivateNetworkEndpointQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworkEndpointDocument, variables, options);

/** Create or get a private network endpoint. */
export const privateNetworkEndpointCreateOrGet = (
  client: RailwayClient,
  variables: PrivateNetworkEndpointCreateOrGetMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworkEndpointCreateOrGetDocument, variables, options);

/** Delete a private network endpoint. */
export const privateNetworkEndpointDelete = (
  client: RailwayClient,
  variables: PrivateNetworkEndpointDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworkEndpointDeleteDocument, variables, options);

/** Check if an endpoint name is available. */
export const privateNetworkEndpointNameAvailable = (
  client: RailwayClient,
  variables: PrivateNetworkEndpointNameAvailableQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworkEndpointNameAvailableDocument, variables, options);

/** Rename a private network endpoint. */
export const privateNetworkEndpointRename = (
  client: RailwayClient,
  variables: PrivateNetworkEndpointRenameMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworkEndpointRenameDocument, variables, options);

/** List private networks for an environment. */
export const privateNetworks = (
  client: RailwayClient,
  variables: PrivateNetworksQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworksDocument, variables, options);

/** Delete all private networks for an environment. */
export const privateNetworksForEnvironmentDelete = (
  client: RailwayClient,
  variables: PrivateNetworksForEnvironmentDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(PrivateNetworksForEnvironmentDeleteDocument, variables, options);

/** Get a project by ID */
export const project = (
  client: RailwayClient,
  variables: ProjectQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectDocument, variables, options);

/** Claims a project. */
export const projectClaim = (
  client: RailwayClient,
  variables: ProjectClaimMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectClaimDocument, variables, options);

/** Creates a new project. */
export const projectCreate = (
  client: RailwayClient,
  variables: ProjectCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectCreateDocument, variables, options);

/** Deletes a project. */
export const projectDelete = (
  client: RailwayClient,
  variables: ProjectDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectDeleteDocument, variables, options);

/** Get a project invitation by code */
export const projectInvitation = (
  client: RailwayClient,
  variables: ProjectInvitationQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInvitationDocument, variables, options);

/** Accept a project invitation using the invite code */
export const projectInvitationAccept = (
  client: RailwayClient,
  variables: ProjectInvitationAcceptMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInvitationAcceptDocument, variables, options);

/** Create an invitation for a project */
export const projectInvitationCreate = (
  client: RailwayClient,
  variables: ProjectInvitationCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInvitationCreateDocument, variables, options);

/** Delete an invitation for a project */
export const projectInvitationDelete = (
  client: RailwayClient,
  variables: ProjectInvitationDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInvitationDeleteDocument, variables, options);

/** Resend an invitation for a project */
export const projectInvitationResend = (
  client: RailwayClient,
  variables: ProjectInvitationResendMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInvitationResendDocument, variables, options);

/** Get invitations for a project */
export const projectInvitations = (
  client: RailwayClient,
  variables: ProjectInvitationsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInvitationsDocument, variables, options);

/** Get an invite code for a project for a specifc role */
export const projectInviteCode = (
  client: RailwayClient,
  variables: ProjectInviteCodeQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInviteCodeDocument, variables, options);

/** Invite a user by email to a project */
export const projectInviteUser = (
  client: RailwayClient,
  variables: ProjectInviteUserMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectInviteUserDocument, variables, options);

/** Leave project as currently authenticated user */
export const projectLeave = (
  client: RailwayClient,
  variables: ProjectLeaveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectLeaveDocument, variables, options);

/** Remove user from a project */
export const projectMemberRemove = (
  client: RailwayClient,
  variables: ProjectMemberRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectMemberRemoveDocument, variables, options);

/** Gets users who belong to a project along with their role */
export const projectMembers = (
  client: RailwayClient,
  variables: ProjectMembersQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectMembersDocument, variables, options);

/** Change the role for a user within a project */
export const projectMemberUpdate = (
  client: RailwayClient,
  variables: ProjectMemberUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectMemberUpdateDocument, variables, options);

/** Get resource access rules for project-specific actions */
export const projectResourceAccess = (
  client: RailwayClient,
  variables: ProjectResourceAccessQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectResourceAccessDocument, variables, options);

/** Gets all projects for a user or workspace */
export const projects = (
  client: RailwayClient,
  variables?: ProjectsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectsDocument, variables, options);

/** Deletes a project with a 48 hour grace period. */
export const projectScheduleDelete = (
  client: RailwayClient,
  variables: ProjectScheduleDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectScheduleDeleteDocument, variables, options);

/** Cancel scheduled deletion of a project */
export const projectScheduleDeleteCancel = (
  client: RailwayClient,
  variables: ProjectScheduleDeleteCancelMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectScheduleDeleteCancelDocument, variables, options);

/** Force delete a scheduled deletion of a project (skips the grace period) */
export const projectScheduleDeleteForce = (
  client: RailwayClient,
  variables: ProjectScheduleDeleteForceMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectScheduleDeleteForceDocument, variables, options);

/** Get a single project token by the value in the header */
export const projectToken = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(ProjectTokenDocument, undefined, options);

/** Create a token for a project that has access to a specific environment */
export const projectTokenCreate = (
  client: RailwayClient,
  variables: ProjectTokenCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectTokenCreateDocument, variables, options);

/** Delete a project token */
export const projectTokenDelete = (
  client: RailwayClient,
  variables: ProjectTokenDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectTokenDeleteDocument, variables, options);

/** Get all project tokens for a project */
export const projectTokens = (
  client: RailwayClient,
  variables: ProjectTokensQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectTokensDocument, variables, options);

/** Confirm the transfer of project ownership */
export const projectTransferConfirm = (
  client: RailwayClient,
  variables: ProjectTransferConfirmMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectTransferConfirmDocument, variables, options);

/** Initiate the transfer of project ownership */
export const projectTransferInitiate = (
  client: RailwayClient,
  variables: ProjectTransferInitiateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectTransferInitiateDocument, variables, options);

/** Transfer a project to a team */
export const projectTransferToTeam = (
  client: RailwayClient,
  variables: ProjectTransferToTeamMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectTransferToTeamDocument, variables, options);

/** Updates a project. */
export const projectUpdate = (
  client: RailwayClient,
  variables: ProjectUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProjectUpdateDocument, variables, options);

/** Deletes a ProviderAuth. */
export const providerAuthRemove = (
  client: RailwayClient,
  variables: ProviderAuthRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ProviderAuthRemoveDocument, variables, options);

/** Get public Railway stats. */
export const publicStats = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(PublicStatsDocument, undefined, options);

/** Generates a new set of recovery codes for the authenticated user. */
export const recoveryCodeGenerate = (
  client: RailwayClient,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(RecoveryCodeGenerateDocument, undefined, options);

/** Validates a recovery code. */
export const recoveryCodeValidate = (
  client: RailwayClient,
  variables: RecoveryCodeValidateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(RecoveryCodeValidateDocument, variables, options);

/** Gets the ReferralInfo for the authenticated user. */
export const referralInfo = (
  client: RailwayClient,
  variables: ReferralInfoQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ReferralInfoDocument, variables, options);

/** Updates the ReferralInfo for the authenticated user. */
export const referralInfoUpdate = (
  client: RailwayClient,
  variables: ReferralInfoUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ReferralInfoUpdateDocument, variables, options);

/** Get resource access for the current user or team */
export const resourceAccess = (
  client: RailwayClient,
  variables: ResourceAccessQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ResourceAccessDocument, variables, options);

/** Get a service by ID */
export const service = (
  client: RailwayClient,
  variables: ServiceQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDocument, variables, options);

/** Connect a service to a source */
export const serviceConnect = (
  client: RailwayClient,
  variables: ServiceConnectMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceConnectDocument, variables, options);

/** Creates a new service. */
export const serviceCreate = (
  client: RailwayClient,
  variables: ServiceCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceCreateDocument, variables, options);

/** Deletes a service. */
export const serviceDelete = (
  client: RailwayClient,
  variables: ServiceDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDeleteDocument, variables, options);

/** Disconnect a service from a repo */
export const serviceDisconnect = (
  client: RailwayClient,
  variables: ServiceDisconnectMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDisconnectDocument, variables, options);

/** Checks if a service domain is available */
export const serviceDomainAvailable = (
  client: RailwayClient,
  variables: ServiceDomainAvailableQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDomainAvailableDocument, variables, options);

/** Creates a new service domain. */
export const serviceDomainCreate = (
  client: RailwayClient,
  variables: ServiceDomainCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDomainCreateDocument, variables, options);

/** Deletes a service domain. */
export const serviceDomainDelete = (
  client: RailwayClient,
  variables: ServiceDomainDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDomainDeleteDocument, variables, options);

/** Updates a service domain. */
export const serviceDomainUpdate = (
  client: RailwayClient,
  variables: ServiceDomainUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDomainUpdateDocument, variables, options);

/** Duplicate a service, including its configuration, variables, and volumes. */
export const serviceDuplicate = (
  client: RailwayClient,
  variables: ServiceDuplicateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceDuplicateDocument, variables, options);

/** Add a feature flag for a service */
export const serviceFeatureFlagAdd = (
  client: RailwayClient,
  variables: ServiceFeatureFlagAddMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceFeatureFlagAddDocument, variables, options);

/** Remove a feature flag for a service */
export const serviceFeatureFlagRemove = (
  client: RailwayClient,
  variables: ServiceFeatureFlagRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceFeatureFlagRemoveDocument, variables, options);

/** Get a service instance belonging to a service and environment */
export const serviceInstance = (
  client: RailwayClient,
  variables: ServiceInstanceQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceDocument, variables, options);

/** Deploy a service instance */
export const serviceInstanceDeploy = (
  client: RailwayClient,
  variables: ServiceInstanceDeployMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceDeployDocument, variables, options);

/** Deploy a service instance. Returns a deployment ID */
export const serviceInstanceDeployV2 = (
  client: RailwayClient,
  variables: ServiceInstanceDeployV2MutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceDeployV2Document, variables, options);

/** Check if the upstream repo for a service has an update available */
export const serviceInstanceIsUpdatable = (
  client: RailwayClient,
  variables: ServiceInstanceIsUpdatableQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceIsUpdatableDocument, variables, options);

/** Update the resource limits for a service instance */
export const serviceInstanceLimitsUpdate = (
  client: RailwayClient,
  variables: ServiceInstanceLimitsUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceLimitsUpdateDocument, variables, options);

/** Redeploy a service instance */
export const serviceInstanceRedeploy = (
  client: RailwayClient,
  variables: ServiceInstanceRedeployMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceRedeployDocument, variables, options);

/** Update a service instance */
export const serviceInstanceUpdate = (
  client: RailwayClient,
  variables: ServiceInstanceUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceInstanceUpdateDocument, variables, options);

/** Remove the upstream URL from all service instances for this service */
export const serviceRemoveUpstreamUrl = (
  client: RailwayClient,
  variables: ServiceRemoveUpstreamUrlMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceRemoveUpstreamUrlDocument, variables, options);

/** Updates a service. */
export const serviceUpdate = (
  client: RailwayClient,
  variables: ServiceUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(ServiceUpdateDocument, variables, options);

/** Deletes a session. */
export const sessionDelete = (
  client: RailwayClient,
  variables: SessionDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(SessionDeleteDocument, variables, options);

/** Gets all sessions for authenticated user. */
export const sessions = (
  client: RailwayClient,
  variables?: SessionsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(SessionsDocument, variables, options);

/** Configure a shared variable. */
export const sharedVariableConfigure = (
  client: RailwayClient,
  variables: SharedVariableConfigureMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(SharedVariableConfigureDocument, variables, options);

/** All TCP proxies for a service instance */
export const tcpProxies = (
  client: RailwayClient,
  variables: TcpProxiesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TcpProxiesDocument, variables, options);

/** Creates a new TCP proxy for a service instance. */
export const tcpProxyCreate = (
  client: RailwayClient,
  variables: TcpProxyCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TcpProxyCreateDocument, variables, options);

/** Deletes a TCP proxy by id */
export const tcpProxyDelete = (
  client: RailwayClient,
  variables: TcpProxyDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TcpProxyDeleteDocument, variables, options);

/** Find a team by ID */
export const team = (
  client: RailwayClient,
  variables: TeamQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TeamDocument, variables, options);

/** Get all templates for a team. */
export const teamTemplates = (
  client: RailwayClient,
  variables: TeamTemplatesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TeamTemplatesDocument, variables, options);

/** Get a template by code or GitHub owner and repo. */
export const template = (
  client: RailwayClient,
  variables?: TemplateQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateDocument, variables, options);

/** Duplicates an existing template */
export const templateClone = (
  client: RailwayClient,
  variables: TemplateCloneMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateCloneDocument, variables, options);

/** Deletes a template. */
export const templateDelete = (
  client: RailwayClient,
  variables: TemplateDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateDeleteDocument, variables, options);

/** Deploys a template. */
export const templateDeploy = (
  client: RailwayClient,
  variables: TemplateDeployMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateDeployDocument, variables, options);

/** Deploys a template using the serialized template config */
export const templateDeployV2 = (
  client: RailwayClient,
  variables: TemplateDeployV2MutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateDeployV2Document, variables, options);

/** Generate a template for a project */
export const templateGenerate = (
  client: RailwayClient,
  variables: TemplateGenerateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateGenerateDocument, variables, options);

/** Publishes a template. */
export const templatePublish = (
  client: RailwayClient,
  variables: TemplatePublishMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplatePublishDocument, variables, options);

/** Get all published templates. */
export const templates = (
  client: RailwayClient,
  variables?: TemplatesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplatesDocument, variables, options);

/** Count all published templates. */
export const templatesCount = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(TemplatesCountDocument, undefined, options);

/** Ejects a service from the template and creates a new repo in the provided org. */
export const templateServiceSourceEject = (
  client: RailwayClient,
  variables: TemplateServiceSourceEjectMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateServiceSourceEjectDocument, variables, options);

/** Get the source template for a project. */
export const templateSourceForProject = (
  client: RailwayClient,
  variables: TemplateSourceForProjectQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateSourceForProjectDocument, variables, options);

/** Unpublishes a template. */
export const templateUnpublish = (
  client: RailwayClient,
  variables: TemplateUnpublishMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TemplateUnpublishDocument, variables, options);

/** Gets the TwoFactorInfo for the authenticated user. */
export const twoFactorInfo = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(TwoFactorInfoDocument, undefined, options);

/** Setup 2FA authorization for authenticated user. */
export const twoFactorInfoCreate = (
  client: RailwayClient,
  variables: TwoFactorInfoCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TwoFactorInfoCreateDocument, variables, options);

/** Deletes the TwoFactorInfo for the authenticated user. */
export const twoFactorInfoDelete = (
  client: RailwayClient,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TwoFactorInfoDeleteDocument, undefined, options);

/** Generates the 2FA app secret for the authenticated user. */
export const twoFactorInfoSecret = (
  client: RailwayClient,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TwoFactorInfoSecretDocument, undefined, options);

/** Validates the token for a 2FA action or for a login request. */
export const twoFactorInfoValidate = (
  client: RailwayClient,
  variables: TwoFactorInfoValidateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(TwoFactorInfoValidateDocument, variables, options);

/** Remove the usage limit for a customer */
export const usageLimitRemove = (
  client: RailwayClient,
  variables: UsageLimitRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UsageLimitRemoveDocument, variables, options);

/** Set the usage limit for a customer */
export const usageLimitSet = (
  client: RailwayClient,
  variables: UsageLimitSetMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UsageLimitSetDocument, variables, options);

/** Unsubscribe from the Beta program. */
export const userBetaLeave = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(UserBetaLeaveDocument, undefined, options);

/** Delete the currently authenticated user */
export const userDelete = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(UserDeleteDocument, undefined, options);

/** Disconnect your Railway account from Discord. */
export const userDiscordDisconnect = (
  client: RailwayClient,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserDiscordDisconnectDocument, undefined, options);

/** Remove a flag on the user. */
export const userFlagsRemove = (
  client: RailwayClient,
  variables: UserFlagsRemoveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserFlagsRemoveDocument, variables, options);

/** Set flags on the authenticated user. */
export const userFlagsSet = (
  client: RailwayClient,
  variables: UserFlagsSetMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserFlagsSetDocument, variables, options);

/** Get the total kickback earnings for a user. */
export const userKickbackEarnings = (
  client: RailwayClient,
  variables: UserKickbackEarningsQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserKickbackEarningsDocument, variables, options);

/** Get the public profile for a user */
export const userProfile = (
  client: RailwayClient,
  variables: UserProfileQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserProfileDocument, variables, options);

/** Updates the profile for the authenticated user */
export const userProfileUpdate = (
  client: RailwayClient,
  variables: UserProfileUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserProfileUpdateDocument, variables, options);

/** Get all templates for the current user. */
export const userTemplates = (
  client: RailwayClient,
  variables?: UserTemplatesQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(UserTemplatesDocument, variables, options);

/** Update date of TermsAgreedOn */
export const userTermsUpdate = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(UserTermsUpdateDocument, undefined, options);

/** Upserts a collection of variables. */
export const variableCollectionUpsert = (
  client: RailwayClient,
  variables: VariableCollectionUpsertMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VariableCollectionUpsertDocument, variables, options);

/** Deletes a variable. */
export const variableDelete = (
  client: RailwayClient,
  variables: VariableDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VariableDeleteDocument, variables, options);

/** All rendered variables that are required for a service deployment. */
export const variablesForServiceDeployment = (
  client: RailwayClient,
  variables: VariablesForServiceDeploymentQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VariablesForServiceDeploymentDocument, variables, options);

/** Upserts a variable. */
export const variableUpsert = (
  client: RailwayClient,
  variables: VariableUpsertMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VariableUpsertDocument, variables, options);

/** Get information about the user's Vercel accounts */
export const vercelInfo = (client: RailwayClient, options?: GraphQLDocumentRequestOptions) =>
  client.requestDocument(VercelInfoDocument, undefined, options);

/** Create a persistent volume in a project */
export const volumeCreate = (
  client: RailwayClient,
  variables: VolumeCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeCreateDocument, variables, options);

/** Delete a persistent volume in a project */
export const volumeDelete = (
  client: RailwayClient,
  variables: VolumeDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeDeleteDocument, variables, options);

/** Create backup of a volume instance */
export const volumeInstanceBackupCreate = (
  client: RailwayClient,
  variables: VolumeInstanceBackupCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupCreateDocument, variables, options);

/** Deletes volume instance backup */
export const volumeInstanceBackupDelete = (
  client: RailwayClient,
  variables: VolumeInstanceBackupDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupDeleteDocument, variables, options);

/** List backups of a volume instance */
export const volumeInstanceBackupList = (
  client: RailwayClient,
  variables: VolumeInstanceBackupListQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupListDocument, variables, options);

/** Removes backup expiration date */
export const volumeInstanceBackupLock = (
  client: RailwayClient,
  variables: VolumeInstanceBackupLockMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupLockDocument, variables, options);

/** Restore a volume instance from a backup */
export const volumeInstanceBackupRestore = (
  client: RailwayClient,
  variables: VolumeInstanceBackupRestoreMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupRestoreDocument, variables, options);

/** List backups schedules of a volume instance */
export const volumeInstanceBackupScheduleList = (
  client: RailwayClient,
  variables: VolumeInstanceBackupScheduleListQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupScheduleListDocument, variables, options);

/** Manage schedule for backups of a volume instance */
export const volumeInstanceBackupScheduleUpdate = (
  client: RailwayClient,
  variables: VolumeInstanceBackupScheduleUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceBackupScheduleUpdateDocument, variables, options);

/** Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated. */
export const volumeInstanceUpdate = (
  client: RailwayClient,
  variables: VolumeInstanceUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeInstanceUpdateDocument, variables, options);

/** Update a persistent volume in a project */
export const volumeUpdate = (
  client: RailwayClient,
  variables: VolumeUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(VolumeUpdateDocument, variables, options);

/** Create a webhook on a project */
export const webhookCreate = (
  client: RailwayClient,
  variables: WebhookCreateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WebhookCreateDocument, variables, options);

/** Delete a webhook from a project */
export const webhookDelete = (
  client: RailwayClient,
  variables: WebhookDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WebhookDeleteDocument, variables, options);

/** Get all webhooks for a project */
export const webhooks = (
  client: RailwayClient,
  variables: WebhooksQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WebhooksDocument, variables, options);

/** Update a webhook on a project */
export const webhookUpdate = (
  client: RailwayClient,
  variables: WebhookUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WebhookUpdateDocument, variables, options);

/** Gets the status of a workflow */
export const workflowStatus = (
  client: RailwayClient,
  variables: WorkflowStatusQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WorkflowStatusDocument, variables, options);

/** Get the workspace */
export const workspace = (
  client: RailwayClient,
  variables: WorkspaceQueryVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WorkspaceDocument, variables, options);

/** Delete a workspace and all data associated with it */
export const workspaceDelete = (
  client: RailwayClient,
  variables: WorkspaceDeleteMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WorkspaceDeleteDocument, variables, options);

/** Leave a workspace */
export const workspaceLeave = (
  client: RailwayClient,
  variables: WorkspaceLeaveMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WorkspaceLeaveDocument, variables, options);

/** Update a workspace by id */
export const workspaceUpdate = (
  client: RailwayClient,
  variables: WorkspaceUpdateMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WorkspaceUpdateDocument, variables, options);

/** Generate a Slack channel for a workspace */
export const workspaceUpsertSlackChannel = (
  client: RailwayClient,
  variables: WorkspaceUpsertSlackChannelMutationVariables,
  options?: GraphQLDocumentRequestOptions,
) => client.requestDocument(WorkspaceUpsertSlackChannelDocument, variables, options);
