import { RailwayClient } from '../client';
import type { GraphQLDocumentRequestOptions } from '../types';
import type { ResultAsync } from 'neverthrow';
import type { GraphQLRequestError } from '../errors';
import {
  AdminVolumeInstancesForVolumeDocument,
  AllPlatformFeatureFlagsDocument,
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
  EnvironmentPatchDocument,
  EnvironmentPatchCommitDocument,
  EnvironmentPatchesDocument,
  EnvironmentRenameDocument,
  EnvironmentsDocument,
  EnvironmentStagedChangesDocument,
  EnvironmentTriggersDeployDocument,
  EstimatedUsageDocument,
  EventsDocument,
  ExternalWorkspacesDocument,
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
  MetricsDocument,
  NodeDocument,
  NodesDocument,
  NotificationDeliveriesDocument,
  NotificationDeliveriesMarkAsReadDocument,
  ObservabilityDashboardCreateDocument,
  ObservabilityDashboardResetDocument,
  ObservabilityDashboardsDocument,
  ObservabilityDashboardUpdateDocument,
  PasskeyDeleteDocument,
  PasskeysDocument,
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
  ProjectTransferDocument,
  ProjectTransferConfirmDocument,
  ProjectTransferInitiateDocument,
  ProjectUpdateDocument,
  ProviderAuthRemoveDocument,
  PublicStatsDocument,
  RecoveryCodeGenerateDocument,
  RecoveryCodeValidateDocument,
  ReferralInfoDocument,
  ReferralInfoUpdateDocument,
  RegionsDocument,
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
  ServiceInstanceLimitOverrideDocument,
  ServiceInstanceLimitsDocument,
  ServiceInstanceLimitsUpdateDocument,
  ServiceInstanceRedeployDocument,
  ServiceInstanceUpdateDocument,
  ServiceRemoveUpstreamUrlDocument,
  ServicesDocument,
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
  TrustedDomainCreateDocument,
  TrustedDomainDeleteDocument,
  TrustedDomainsDocument,
  TwoFactorInfoDocument,
  TwoFactorInfoCreateDocument,
  TwoFactorInfoDeleteDocument,
  TwoFactorInfoSecretDocument,
  TwoFactorInfoValidateDocument,
  UpsertSlackChannelDocument,
  UsageDocument,
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
  VariablesDocument,
  VariablesForServiceDeploymentDocument,
  VariableUpsertDocument,
  VercelInfoDocument,
  VolumeCreateDocument,
  VolumeDeleteDocument,
  VolumeInstanceDocument,
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
  WorkspaceByCodeDocument,
  WorkspaceDeleteDocument,
  WorkspaceIdentityProvidersDocument,
  WorkspaceInviteCodeCreateDocument,
  WorkspaceInviteCodeUseDocument,
  WorkspaceLeaveDocument,
  WorkspacePermissionChangeDocument,
  WorkspaceTemplatesDocument,
  WorkspaceUpdateDocument,
  WorkspaceUpsertSlackChannelDocument,
  WorkspaceUserInviteDocument,
  WorkspaceUserRemoveDocument,
  type AdminVolumeInstancesForVolumeQuery,
  type AllPlatformFeatureFlagsQuery,
  type ApiTokenCreateMutation,
  type ApiTokenDeleteMutation,
  type ApiTokensQuery,
  type BaseEnvironmentOverrideMutation,
  type BuildLogsQuery,
  type ChangelogBlockImageQuery,
  type CustomDomainQuery,
  type CustomDomainAvailableQuery,
  type CustomDomainCreateMutation,
  type CustomDomainDeleteMutation,
  type CustomDomainUpdateMutation,
  type CustomerCreateFreePlanSubscriptionMutation,
  type CustomerTogglePayoutsToCreditsMutation,
  type DeploymentQuery,
  type DeploymentApproveMutation,
  type DeploymentCancelMutation,
  type DeploymentEventsQuery,
  type DeploymentInstanceExecutionCreateMutation,
  type DeploymentInstanceExecutionsQuery,
  type DeploymentLogsQuery,
  type DeploymentRedeployMutation,
  type DeploymentRemoveMutation,
  type DeploymentRestartMutation,
  type DeploymentRollbackMutation,
  type DeploymentsQuery,
  type DeploymentSnapshotQuery,
  type DeploymentStopMutation,
  type DeploymentTriggerCreateMutation,
  type DeploymentTriggerDeleteMutation,
  type DeploymentTriggersQuery,
  type DeploymentTriggerUpdateMutation,
  type DockerComposeImportMutation,
  type DomainsQuery,
  type EgressGatewayAssociationCreateMutation,
  type EgressGatewayAssociationsClearMutation,
  type EgressGatewaysQuery,
  type EmailChangeConfirmMutation,
  type EmailChangeInitiateMutation,
  type EnvironmentQuery,
  type EnvironmentCreateMutation,
  type EnvironmentDeleteMutation,
  type EnvironmentLogsQuery,
  type EnvironmentPatchQuery,
  type EnvironmentPatchCommitMutation,
  type EnvironmentPatchesQuery,
  type EnvironmentRenameMutation,
  type EnvironmentsQuery,
  type EnvironmentStagedChangesQuery,
  type EnvironmentTriggersDeployMutation,
  type EstimatedUsageQuery,
  type EventsQuery,
  type ExternalWorkspacesQuery,
  type FairUseAgreeMutation,
  type FeatureFlagAddMutation,
  type FeatureFlagRemoveMutation,
  type FunctionRuntimeQuery,
  type FunctionRuntimesQuery,
  type GithubIsRepoNameAvailableQuery,
  type GithubRepoQuery,
  type GitHubRepoAccessAvailableQuery,
  type GithubRepoBranchesQuery,
  type GithubRepoDeployMutation,
  type GithubReposQuery,
  type GithubRepoUpdateMutation,
  type GithubWritableScopesQuery,
  type HerokuAppsQuery,
  type HerokuImportVariablesMutation,
  type HttpLogsQuery,
  type IntegrationAuthQuery,
  type IntegrationAuthsQuery,
  type IntegrationCreateMutation,
  type IntegrationDeleteMutation,
  type IntegrationsQuery,
  type IntegrationUpdateMutation,
  type InviteCodeQuery,
  type InviteCodeUseMutation,
  type JobApplicationCreateMutation,
  type LoginSessionAuthMutation,
  type LoginSessionCancelMutation,
  type LoginSessionConsumeMutation,
  type LoginSessionCreateMutation,
  type LoginSessionVerifyMutation,
  type MeQuery,
  type MetricsQuery,
  type NodeQuery,
  type NodesQuery,
  type NotificationDeliveriesQuery,
  type NotificationDeliveriesMarkAsReadMutation,
  type ObservabilityDashboardCreateMutation,
  type ObservabilityDashboardResetMutation,
  type ObservabilityDashboardsQuery,
  type ObservabilityDashboardUpdateMutation,
  type PasskeyDeleteMutation,
  type PasskeysQuery,
  type PlatformStatusQuery,
  type PreferenceOverridesCreateUpdateMutation,
  type PreferenceOverridesDestroyForResourceMutation,
  type PreferencesQuery,
  type PreferencesUpdateMutation,
  type PrivateNetworkCreateOrGetMutation,
  type PrivateNetworkEndpointQuery,
  type PrivateNetworkEndpointCreateOrGetMutation,
  type PrivateNetworkEndpointDeleteMutation,
  type PrivateNetworkEndpointNameAvailableQuery,
  type PrivateNetworkEndpointRenameMutation,
  type PrivateNetworksQuery,
  type PrivateNetworksForEnvironmentDeleteMutation,
  type ProjectQuery,
  type ProjectClaimMutation,
  type ProjectCreateMutation,
  type ProjectDeleteMutation,
  type ProjectInvitationQuery,
  type ProjectInvitationAcceptMutation,
  type ProjectInvitationCreateMutation,
  type ProjectInvitationDeleteMutation,
  type ProjectInvitationResendMutation,
  type ProjectInvitationsQuery,
  type ProjectInviteCodeQuery,
  type ProjectInviteUserMutation,
  type ProjectLeaveMutation,
  type ProjectMemberRemoveMutation,
  type ProjectMembersQuery,
  type ProjectMemberUpdateMutation,
  type ProjectResourceAccessQuery,
  type ProjectsQuery,
  type ProjectScheduleDeleteMutation,
  type ProjectScheduleDeleteCancelMutation,
  type ProjectScheduleDeleteForceMutation,
  type ProjectTokenQuery,
  type ProjectTokenCreateMutation,
  type ProjectTokenDeleteMutation,
  type ProjectTokensQuery,
  type ProjectTransferMutation,
  type ProjectTransferConfirmMutation,
  type ProjectTransferInitiateMutation,
  type ProjectUpdateMutation,
  type ProviderAuthRemoveMutation,
  type PublicStatsQuery,
  type RecoveryCodeGenerateMutation,
  type RecoveryCodeValidateMutation,
  type ReferralInfoQuery,
  type ReferralInfoUpdateMutation,
  type RegionsQuery,
  type ResourceAccessQuery,
  type ServiceQuery,
  type ServiceConnectMutation,
  type ServiceCreateMutation,
  type ServiceDeleteMutation,
  type ServiceDisconnectMutation,
  type ServiceDomainAvailableQuery,
  type ServiceDomainCreateMutation,
  type ServiceDomainDeleteMutation,
  type ServiceDomainUpdateMutation,
  type ServiceFeatureFlagAddMutation,
  type ServiceFeatureFlagRemoveMutation,
  type ServiceInstanceQuery,
  type ServiceInstanceDeployMutation,
  type ServiceInstanceDeployV2Mutation,
  type ServiceInstanceIsUpdatableQuery,
  type ServiceInstanceLimitOverrideQuery,
  type ServiceInstanceLimitsQuery,
  type ServiceInstanceLimitsUpdateMutation,
  type ServiceInstanceRedeployMutation,
  type ServiceInstanceUpdateMutation,
  type ServiceRemoveUpstreamUrlMutation,
  type ServicesQuery,
  type ServiceUpdateMutation,
  type SessionDeleteMutation,
  type SessionsQuery,
  type SharedVariableConfigureMutation,
  type TcpProxiesQuery,
  type TcpProxyDeleteMutation,
  type TemplateQuery,
  type TemplateCloneMutation,
  type TemplateDeleteMutation,
  type TemplateDeployV2Mutation,
  type TemplateGenerateMutation,
  type TemplatePublishMutation,
  type TemplatesQuery,
  type TemplatesCountQuery,
  type TemplateServiceSourceEjectMutation,
  type TemplateSourceForProjectQuery,
  type TemplateUnpublishMutation,
  type TrustedDomainCreateMutation,
  type TrustedDomainDeleteMutation,
  type TrustedDomainsQuery,
  type TwoFactorInfoQuery,
  type TwoFactorInfoCreateMutation,
  type TwoFactorInfoDeleteMutation,
  type TwoFactorInfoSecretMutation,
  type TwoFactorInfoValidateMutation,
  type UpsertSlackChannelMutation,
  type UsageQuery,
  type UsageLimitRemoveMutation,
  type UsageLimitSetMutation,
  type UserBetaLeaveMutation,
  type UserDeleteMutation,
  type UserDiscordDisconnectMutation,
  type UserFlagsRemoveMutation,
  type UserFlagsSetMutation,
  type UserProfileQuery,
  type UserProfileUpdateMutation,
  type UserTermsUpdateMutation,
  type VariableCollectionUpsertMutation,
  type VariableDeleteMutation,
  type VariablesQuery,
  type VariablesForServiceDeploymentQuery,
  type VariableUpsertMutation,
  type VercelInfoQuery,
  type VolumeCreateMutation,
  type VolumeDeleteMutation,
  type VolumeInstanceQuery,
  type VolumeInstanceBackupCreateMutation,
  type VolumeInstanceBackupDeleteMutation,
  type VolumeInstanceBackupListQuery,
  type VolumeInstanceBackupLockMutation,
  type VolumeInstanceBackupRestoreMutation,
  type VolumeInstanceBackupScheduleListQuery,
  type VolumeInstanceBackupScheduleUpdateMutation,
  type VolumeInstanceUpdateMutation,
  type VolumeUpdateMutation,
  type WebhookCreateMutation,
  type WebhookDeleteMutation,
  type WebhooksQuery,
  type WebhookUpdateMutation,
  type WorkflowStatusQuery,
  type WorkspaceQuery,
  type WorkspaceByCodeQuery,
  type WorkspaceDeleteMutation,
  type WorkspaceIdentityProvidersQuery,
  type WorkspaceInviteCodeCreateMutation,
  type WorkspaceInviteCodeUseMutation,
  type WorkspaceLeaveMutation,
  type WorkspacePermissionChangeMutation,
  type WorkspaceTemplatesQuery,
  type WorkspaceUpdateMutation,
  type WorkspaceUpsertSlackChannelMutation,
  type WorkspaceUserInviteMutation,
  type WorkspaceUserRemoveMutation,
  type AdminVolumeInstancesForVolumeQueryVariables,
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
  type EnvironmentPatchQueryVariables,
  type EnvironmentPatchCommitMutationVariables,
  type EnvironmentPatchesQueryVariables,
  type EnvironmentRenameMutationVariables,
  type EnvironmentsQueryVariables,
  type EnvironmentStagedChangesQueryVariables,
  type EnvironmentTriggersDeployMutationVariables,
  type EstimatedUsageQueryVariables,
  type EventsQueryVariables,
  type ExternalWorkspacesQueryVariables,
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
  type MetricsQueryVariables,
  type NodeQueryVariables,
  type NodesQueryVariables,
  type NotificationDeliveriesQueryVariables,
  type NotificationDeliveriesMarkAsReadMutationVariables,
  type ObservabilityDashboardCreateMutationVariables,
  type ObservabilityDashboardResetMutationVariables,
  type ObservabilityDashboardsQueryVariables,
  type ObservabilityDashboardUpdateMutationVariables,
  type PasskeyDeleteMutationVariables,
  type PasskeysQueryVariables,
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
  type ProjectTransferMutationVariables,
  type ProjectTransferConfirmMutationVariables,
  type ProjectTransferInitiateMutationVariables,
  type ProjectUpdateMutationVariables,
  type ProviderAuthRemoveMutationVariables,
  type RecoveryCodeValidateMutationVariables,
  type ReferralInfoQueryVariables,
  type ReferralInfoUpdateMutationVariables,
  type RegionsQueryVariables,
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
  type ServiceInstanceLimitOverrideQueryVariables,
  type ServiceInstanceLimitsQueryVariables,
  type ServiceInstanceLimitsUpdateMutationVariables,
  type ServiceInstanceRedeployMutationVariables,
  type ServiceInstanceUpdateMutationVariables,
  type ServiceRemoveUpstreamUrlMutationVariables,
  type ServicesQueryVariables,
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
  type TrustedDomainCreateMutationVariables,
  type TrustedDomainDeleteMutationVariables,
  type TrustedDomainsQueryVariables,
  type TwoFactorInfoCreateMutationVariables,
  type TwoFactorInfoValidateMutationVariables,
  type UpsertSlackChannelMutationVariables,
  type UsageQueryVariables,
  type UsageLimitRemoveMutationVariables,
  type UsageLimitSetMutationVariables,
  type UserFlagsRemoveMutationVariables,
  type UserFlagsSetMutationVariables,
  type UserProfileQueryVariables,
  type UserProfileUpdateMutationVariables,
  type VariableCollectionUpsertMutationVariables,
  type VariableDeleteMutationVariables,
  type VariablesQueryVariables,
  type VariablesForServiceDeploymentQueryVariables,
  type VariableUpsertMutationVariables,
  type VolumeCreateMutationVariables,
  type VolumeDeleteMutationVariables,
  type VolumeInstanceQueryVariables,
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
  type WorkspaceByCodeQueryVariables,
  type WorkspaceDeleteMutationVariables,
  type WorkspaceIdentityProvidersQueryVariables,
  type WorkspaceInviteCodeCreateMutationVariables,
  type WorkspaceInviteCodeUseMutationVariables,
  type WorkspaceLeaveMutationVariables,
  type WorkspacePermissionChangeMutationVariables,
  type WorkspaceTemplatesQueryVariables,
  type WorkspaceUpdateMutationVariables,
  type WorkspaceUpsertSlackChannelMutationVariables,
  type WorkspaceUserInviteMutationVariables,
  type WorkspaceUserRemoveMutationVariables,
} from './graphql';
/** Get all volume instances for a given volume */
export const adminVolumeInstancesForVolume = (client: RailwayClient, request: { variables: AdminVolumeInstancesForVolumeQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<AdminVolumeInstancesForVolumeQuery, GraphQLRequestError> => client.requestDocument(AdminVolumeInstancesForVolumeDocument, request.variables, request?.options);

/** Returns the platform feature flags enabled for the current user */
export const allPlatformFeatureFlags = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<AllPlatformFeatureFlagsQuery, GraphQLRequestError> => client.requestDocument(AllPlatformFeatureFlagsDocument, undefined, request?.options);

/** Creates a new API token. */
export const apiTokenCreate = (client: RailwayClient, request: { variables: ApiTokenCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ApiTokenCreateMutation, GraphQLRequestError> => client.requestDocument(ApiTokenCreateDocument, request.variables, request?.options);

/** Deletes an API token. */
export const apiTokenDelete = (client: RailwayClient, request: { variables: ApiTokenDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ApiTokenDeleteMutation, GraphQLRequestError> => client.requestDocument(ApiTokenDeleteDocument, request.variables, request?.options);

/** Gets all API tokens for the authenticated user. */
export const apiTokens = (client: RailwayClient, request?: { variables?: ApiTokensQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ApiTokensQuery, GraphQLRequestError> => client.requestDocument(ApiTokensDocument, request?.variables, request?.options);

/** Sets the base environment override for a deployment trigger. */
export const baseEnvironmentOverride = (client: RailwayClient, request: { variables: BaseEnvironmentOverrideMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<BaseEnvironmentOverrideMutation, GraphQLRequestError> => client.requestDocument(BaseEnvironmentOverrideDocument, request.variables, request?.options);

/** Fetch logs for a build */
export const buildLogs = (client: RailwayClient, request: { variables: BuildLogsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<BuildLogsQuery, GraphQLRequestError> => client.requestDocument(BuildLogsDocument, request.variables, request?.options);

/** Gets the image URL for a Notion image block */
export const changelogBlockImage = (client: RailwayClient, request: { variables: ChangelogBlockImageQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ChangelogBlockImageQuery, GraphQLRequestError> => client.requestDocument(ChangelogBlockImageDocument, request.variables, request?.options);

/** Fetch details for a custom domain */
export const customDomain = (client: RailwayClient, request: { variables: CustomDomainQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomDomainQuery, GraphQLRequestError> => client.requestDocument(CustomDomainDocument, request.variables, request?.options);

/** Checks if a custom domain is available. */
export const customDomainAvailable = (client: RailwayClient, request: { variables: CustomDomainAvailableQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomDomainAvailableQuery, GraphQLRequestError> => client.requestDocument(CustomDomainAvailableDocument, request.variables, request?.options);

/** Creates a new custom domain. */
export const customDomainCreate = (client: RailwayClient, request: { variables: CustomDomainCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomDomainCreateMutation, GraphQLRequestError> => client.requestDocument(CustomDomainCreateDocument, request.variables, request?.options);

/** Deletes a custom domain. */
export const customDomainDelete = (client: RailwayClient, request: { variables: CustomDomainDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomDomainDeleteMutation, GraphQLRequestError> => client.requestDocument(CustomDomainDeleteDocument, request.variables, request?.options);

/** Updates a custom domain. */
export const customDomainUpdate = (client: RailwayClient, request: { variables: CustomDomainUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomDomainUpdateMutation, GraphQLRequestError> => client.requestDocument(CustomDomainUpdateDocument, request.variables, request?.options);

/** Create a free plan subscription for a customer */
export const customerCreateFreePlanSubscription = (client: RailwayClient, request: { variables: CustomerCreateFreePlanSubscriptionMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomerCreateFreePlanSubscriptionMutation, GraphQLRequestError> => client.requestDocument(CustomerCreateFreePlanSubscriptionDocument, request.variables, request?.options);

/** Toggle whether a customer is automatically withdrawing to credits */
export const customerTogglePayoutsToCredits = (client: RailwayClient, request: { variables: CustomerTogglePayoutsToCreditsMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<CustomerTogglePayoutsToCreditsMutation, GraphQLRequestError> => client.requestDocument(CustomerTogglePayoutsToCreditsDocument, request.variables, request?.options);

/** Find a single deployment */
export const deployment = (client: RailwayClient, request: { variables: DeploymentQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentQuery, GraphQLRequestError> => client.requestDocument(DeploymentDocument, request.variables, request?.options);

/** Approves a deployment. */
export const deploymentApprove = (client: RailwayClient, request: { variables: DeploymentApproveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentApproveMutation, GraphQLRequestError> => client.requestDocument(DeploymentApproveDocument, request.variables, request?.options);

/** Cancels a deployment. */
export const deploymentCancel = (client: RailwayClient, request: { variables: DeploymentCancelMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentCancelMutation, GraphQLRequestError> => client.requestDocument(DeploymentCancelDocument, request.variables, request?.options);

/** Get the deployment events for a deployment */
export const deploymentEvents = (client: RailwayClient, request: { variables: DeploymentEventsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentEventsQuery, GraphQLRequestError> => client.requestDocument(DeploymentEventsDocument, request.variables, request?.options);

/** Invoke a deployment instance execution. */
export const deploymentInstanceExecutionCreate = (client: RailwayClient, request: { variables: DeploymentInstanceExecutionCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentInstanceExecutionCreateMutation, GraphQLRequestError> => client.requestDocument(DeploymentInstanceExecutionCreateDocument, request.variables, request?.options);

/** Get the deployment instance executions for a deployment. */
export const deploymentInstanceExecutions = (client: RailwayClient, request: { variables: DeploymentInstanceExecutionsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentInstanceExecutionsQuery, GraphQLRequestError> => client.requestDocument(DeploymentInstanceExecutionsDocument, request.variables, request?.options);

/** Fetch logs for a deployment */
export const deploymentLogs = (client: RailwayClient, request: { variables: DeploymentLogsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentLogsQuery, GraphQLRequestError> => client.requestDocument(DeploymentLogsDocument, request.variables, request?.options);

/** Redeploys a deployment. */
export const deploymentRedeploy = (client: RailwayClient, request: { variables: DeploymentRedeployMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentRedeployMutation, GraphQLRequestError> => client.requestDocument(DeploymentRedeployDocument, request.variables, request?.options);

/** Removes a deployment. */
export const deploymentRemove = (client: RailwayClient, request: { variables: DeploymentRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentRemoveMutation, GraphQLRequestError> => client.requestDocument(DeploymentRemoveDocument, request.variables, request?.options);

/** Restarts a deployment. */
export const deploymentRestart = (client: RailwayClient, request: { variables: DeploymentRestartMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentRestartMutation, GraphQLRequestError> => client.requestDocument(DeploymentRestartDocument, request.variables, request?.options);

/** Rolls back to a deployment. */
export const deploymentRollback = (client: RailwayClient, request: { variables: DeploymentRollbackMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentRollbackMutation, GraphQLRequestError> => client.requestDocument(DeploymentRollbackDocument, request.variables, request?.options);

/** Get all deployments */
export const deployments = (client: RailwayClient, request: { variables: DeploymentsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentsQuery, GraphQLRequestError> => client.requestDocument(DeploymentsDocument, request.variables, request?.options);

/** Find a single DeploymentSnapshot */
export const deploymentSnapshot = (client: RailwayClient, request: { variables: DeploymentSnapshotQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentSnapshotQuery, GraphQLRequestError> => client.requestDocument(DeploymentSnapshotDocument, request.variables, request?.options);

/** Stops a deployment. */
export const deploymentStop = (client: RailwayClient, request: { variables: DeploymentStopMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentStopMutation, GraphQLRequestError> => client.requestDocument(DeploymentStopDocument, request.variables, request?.options);

/** Creates a deployment trigger. */
export const deploymentTriggerCreate = (client: RailwayClient, request: { variables: DeploymentTriggerCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentTriggerCreateMutation, GraphQLRequestError> => client.requestDocument(DeploymentTriggerCreateDocument, request.variables, request?.options);

/** Deletes a deployment trigger. */
export const deploymentTriggerDelete = (client: RailwayClient, request: { variables: DeploymentTriggerDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentTriggerDeleteMutation, GraphQLRequestError> => client.requestDocument(DeploymentTriggerDeleteDocument, request.variables, request?.options);

/** All deployment triggers. */
export const deploymentTriggers = (client: RailwayClient, request: { variables: DeploymentTriggersQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentTriggersQuery, GraphQLRequestError> => client.requestDocument(DeploymentTriggersDocument, request.variables, request?.options);

/** Updates a deployment trigger. */
export const deploymentTriggerUpdate = (client: RailwayClient, request: { variables: DeploymentTriggerUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DeploymentTriggerUpdateMutation, GraphQLRequestError> => client.requestDocument(DeploymentTriggerUpdateDocument, request.variables, request?.options);

/** Create services and volumes from docker compose */
export const dockerComposeImport = (client: RailwayClient, request: { variables: DockerComposeImportMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DockerComposeImportMutation, GraphQLRequestError> => client.requestDocument(DockerComposeImportDocument, request.variables, request?.options);

/** All domains for a service instance */
export const domains = (client: RailwayClient, request: { variables: DomainsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<DomainsQuery, GraphQLRequestError> => client.requestDocument(DomainsDocument, request.variables, request?.options);

/** Create a new egress gateway association for a service instance */
export const egressGatewayAssociationCreate = (client: RailwayClient, request: { variables: EgressGatewayAssociationCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EgressGatewayAssociationCreateMutation, GraphQLRequestError> => client.requestDocument(EgressGatewayAssociationCreateDocument, request.variables, request?.options);

/** Clear all egress gateway associations for a service instance */
export const egressGatewayAssociationsClear = (client: RailwayClient, request: { variables: EgressGatewayAssociationsClearMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EgressGatewayAssociationsClearMutation, GraphQLRequestError> => client.requestDocument(EgressGatewayAssociationsClearDocument, request.variables, request?.options);

/** All egress gateways assigned to a service instance */
export const egressGateways = (client: RailwayClient, request: { variables: EgressGatewaysQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EgressGatewaysQuery, GraphQLRequestError> => client.requestDocument(EgressGatewaysDocument, request.variables, request?.options);

/** Change the User's account email if there is a valid change email request. */
export const emailChangeConfirm = (client: RailwayClient, request: { variables: EmailChangeConfirmMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EmailChangeConfirmMutation, GraphQLRequestError> => client.requestDocument(EmailChangeConfirmDocument, request.variables, request?.options);

/** Initiate an email change request for a user */
export const emailChangeInitiate = (client: RailwayClient, request: { variables: EmailChangeInitiateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EmailChangeInitiateMutation, GraphQLRequestError> => client.requestDocument(EmailChangeInitiateDocument, request.variables, request?.options);

/** Find a single environment */
export const environment = (client: RailwayClient, request: { variables: EnvironmentQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentQuery, GraphQLRequestError> => client.requestDocument(EnvironmentDocument, request.variables, request?.options);

/** Creates a new environment. */
export const environmentCreate = (client: RailwayClient, request: { variables: EnvironmentCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentCreateMutation, GraphQLRequestError> => client.requestDocument(EnvironmentCreateDocument, request.variables, request?.options);

/** Deletes an environment. */
export const environmentDelete = (client: RailwayClient, request: { variables: EnvironmentDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentDeleteMutation, GraphQLRequestError> => client.requestDocument(EnvironmentDeleteDocument, request.variables, request?.options);

/** Fetch logs for a project environment. Build logs are excluded unless a snapshot ID is explicitly provided in the filter */
export const environmentLogs = (client: RailwayClient, request: { variables: EnvironmentLogsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentLogsQuery, GraphQLRequestError> => client.requestDocument(EnvironmentLogsDocument, request.variables, request?.options);

/** Get a single environment patch by ID */
export const environmentPatch = (client: RailwayClient, request: { variables: EnvironmentPatchQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentPatchQuery, GraphQLRequestError> => client.requestDocument(EnvironmentPatchDocument, request.variables, request?.options);

/** Commit the provided patch to the environment. */
export const environmentPatchCommit = (client: RailwayClient, request: { variables: EnvironmentPatchCommitMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentPatchCommitMutation, GraphQLRequestError> => client.requestDocument(EnvironmentPatchCommitDocument, request.variables, request?.options);

/** Get the patches for an environment */
export const environmentPatches = (client: RailwayClient, request: { variables: EnvironmentPatchesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentPatchesQuery, GraphQLRequestError> => client.requestDocument(EnvironmentPatchesDocument, request.variables, request?.options);

/** Renames an environment. */
export const environmentRename = (client: RailwayClient, request: { variables: EnvironmentRenameMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentRenameMutation, GraphQLRequestError> => client.requestDocument(EnvironmentRenameDocument, request.variables, request?.options);

/** Gets all environments for a project. */
export const environments = (client: RailwayClient, request: { variables: EnvironmentsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentsQuery, GraphQLRequestError> => client.requestDocument(EnvironmentsDocument, request.variables, request?.options);

/** Get the latest staged commit for an environment */
export const environmentStagedChanges = (client: RailwayClient, request: { variables: EnvironmentStagedChangesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentStagedChangesQuery, GraphQLRequestError> => client.requestDocument(EnvironmentStagedChangesDocument, request.variables, request?.options);

/** Deploys all connected triggers for an environment. */
export const environmentTriggersDeploy = (client: RailwayClient, request: { variables: EnvironmentTriggersDeployMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EnvironmentTriggersDeployMutation, GraphQLRequestError> => client.requestDocument(EnvironmentTriggersDeployDocument, request.variables, request?.options);

/** Get the estimated total cost of a project */
export const estimatedUsage = (client: RailwayClient, request: { variables: EstimatedUsageQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EstimatedUsageQuery, GraphQLRequestError> => client.requestDocument(EstimatedUsageDocument, request.variables, request?.options);

/** Gets the events for a project. */
export const events = (client: RailwayClient, request: { variables: EventsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<EventsQuery, GraphQLRequestError> => client.requestDocument(EventsDocument, request.variables, request?.options);

/** Get workspaces the user can access externally */
export const externalWorkspaces = (client: RailwayClient, request?: { variables?: ExternalWorkspacesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ExternalWorkspacesQuery, GraphQLRequestError> => client.requestDocument(ExternalWorkspacesDocument, request?.variables, request?.options);

/** Agree to the fair use policy for the currently authenticated user */
export const fairUseAgree = (client: RailwayClient, request: { variables: FairUseAgreeMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<FairUseAgreeMutation, GraphQLRequestError> => client.requestDocument(FairUseAgreeDocument, request.variables, request?.options);

/** Add a feature flag for a user */
export const featureFlagAdd = (client: RailwayClient, request: { variables: FeatureFlagAddMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<FeatureFlagAddMutation, GraphQLRequestError> => client.requestDocument(FeatureFlagAddDocument, request.variables, request?.options);

/** Remove a feature flag for a user */
export const featureFlagRemove = (client: RailwayClient, request: { variables: FeatureFlagRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<FeatureFlagRemoveMutation, GraphQLRequestError> => client.requestDocument(FeatureFlagRemoveDocument, request.variables, request?.options);

/** Get information about a specific function runtime */
export const functionRuntime = (client: RailwayClient, request: { variables: FunctionRuntimeQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<FunctionRuntimeQuery, GraphQLRequestError> => client.requestDocument(FunctionRuntimeDocument, request.variables, request?.options);

/** List available function runtimes */
export const functionRuntimes = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<FunctionRuntimesQuery, GraphQLRequestError> => client.requestDocument(FunctionRuntimesDocument, undefined, request?.options);

/** Check if a repo name is available */
export const githubIsRepoNameAvailable = (client: RailwayClient, request: { variables: GithubIsRepoNameAvailableQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubIsRepoNameAvailableQuery, GraphQLRequestError> => client.requestDocument(GithubIsRepoNameAvailableDocument, request.variables, request?.options);

/** Checks if user has access to GitHub repository */
export const githubRepo = (client: RailwayClient, request: { variables: GithubRepoQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubRepoQuery, GraphQLRequestError> => client.requestDocument(GithubRepoDocument, request.variables, request?.options);

/** Checks if user has access to GitHub repository */
export const gitHubRepoAccessAvailable = (client: RailwayClient, request: { variables: GitHubRepoAccessAvailableQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<GitHubRepoAccessAvailableQuery, GraphQLRequestError> => client.requestDocument(GitHubRepoAccessAvailableDocument, request.variables, request?.options);

/** Get branches for a GitHub repo that the authenticated user has access to */
export const githubRepoBranches = (client: RailwayClient, request: { variables: GithubRepoBranchesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubRepoBranchesQuery, GraphQLRequestError> => client.requestDocument(GithubRepoBranchesDocument, request.variables, request?.options);

/** Deploys a GitHub repo */
export const githubRepoDeploy = (client: RailwayClient, request: { variables: GithubRepoDeployMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubRepoDeployMutation, GraphQLRequestError> => client.requestDocument(GithubRepoDeployDocument, request.variables, request?.options);

/** Get a list of repos for a user that Railway has access to */
export const githubRepos = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubReposQuery, GraphQLRequestError> => client.requestDocument(GithubReposDocument, undefined, request?.options);

/** Updates a GitHub repo through the linked template */
export const githubRepoUpdate = (client: RailwayClient, request: { variables: GithubRepoUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubRepoUpdateMutation, GraphQLRequestError> => client.requestDocument(GithubRepoUpdateDocument, request.variables, request?.options);

/** Get a list of scopes the user has installed the installation to */
export const githubWritableScopes = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<GithubWritableScopesQuery, GraphQLRequestError> => client.requestDocument(GithubWritableScopesDocument, undefined, request?.options);

/** Get the Herokus apps for the current user */
export const herokuApps = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<HerokuAppsQuery, GraphQLRequestError> => client.requestDocument(HerokuAppsDocument, undefined, request?.options);

/** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
export const herokuImportVariables = (client: RailwayClient, request: { variables: HerokuImportVariablesMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<HerokuImportVariablesMutation, GraphQLRequestError> => client.requestDocument(HerokuImportVariablesDocument, request.variables, request?.options);

/** Fetch HTTP logs for a deployment */
export const httpLogs = (client: RailwayClient, request: { variables: HttpLogsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<HttpLogsQuery, GraphQLRequestError> => client.requestDocument(HttpLogsDocument, request.variables, request?.options);

/** Get an integration auth by provider providerId */
export const integrationAuth = (client: RailwayClient, request: { variables: IntegrationAuthQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<IntegrationAuthQuery, GraphQLRequestError> => client.requestDocument(IntegrationAuthDocument, request.variables, request?.options);

/** Get all integration auths for a user */
export const integrationAuths = (client: RailwayClient, request?: { variables?: IntegrationAuthsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<IntegrationAuthsQuery, GraphQLRequestError> => client.requestDocument(IntegrationAuthsDocument, request?.variables, request?.options);

/** Create an integration for a project */
export const integrationCreate = (client: RailwayClient, request: { variables: IntegrationCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<IntegrationCreateMutation, GraphQLRequestError> => client.requestDocument(IntegrationCreateDocument, request.variables, request?.options);

/** Delete an integration for a project */
export const integrationDelete = (client: RailwayClient, request: { variables: IntegrationDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<IntegrationDeleteMutation, GraphQLRequestError> => client.requestDocument(IntegrationDeleteDocument, request.variables, request?.options);

/** Get all integrations for a project */
export const integrations = (client: RailwayClient, request: { variables: IntegrationsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<IntegrationsQuery, GraphQLRequestError> => client.requestDocument(IntegrationsDocument, request.variables, request?.options);

/** Update an integration for a project */
export const integrationUpdate = (client: RailwayClient, request: { variables: IntegrationUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<IntegrationUpdateMutation, GraphQLRequestError> => client.requestDocument(IntegrationUpdateDocument, request.variables, request?.options);

/** Get an invite code by the code */
export const inviteCode = (client: RailwayClient, request: { variables: InviteCodeQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<InviteCodeQuery, GraphQLRequestError> => client.requestDocument(InviteCodeDocument, request.variables, request?.options);

/** Join a project using an invite code */
export const inviteCodeUse = (client: RailwayClient, request: { variables: InviteCodeUseMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<InviteCodeUseMutation, GraphQLRequestError> => client.requestDocument(InviteCodeUseDocument, request.variables, request?.options);

/** Creates a new job application. */
export const jobApplicationCreate = (client: RailwayClient, request: { variables: JobApplicationCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<JobApplicationCreateMutation, GraphQLRequestError> => client.requestDocument(JobApplicationCreateDocument, request.variables, request?.options);

/** Auth a login session for a user */
export const loginSessionAuth = (client: RailwayClient, request: { variables: LoginSessionAuthMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<LoginSessionAuthMutation, GraphQLRequestError> => client.requestDocument(LoginSessionAuthDocument, request.variables, request?.options);

/** Cancel a login session */
export const loginSessionCancel = (client: RailwayClient, request: { variables: LoginSessionCancelMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<LoginSessionCancelMutation, GraphQLRequestError> => client.requestDocument(LoginSessionCancelDocument, request.variables, request?.options);

/** Get a token for a login session if it exists */
export const loginSessionConsume = (client: RailwayClient, request: { variables: LoginSessionConsumeMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<LoginSessionConsumeMutation, GraphQLRequestError> => client.requestDocument(LoginSessionConsumeDocument, request.variables, request?.options);

/** Start a CLI login session */
export const loginSessionCreate = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<LoginSessionCreateMutation, GraphQLRequestError> => client.requestDocument(LoginSessionCreateDocument, undefined, request?.options);

/** Verify if a login session is valid */
export const loginSessionVerify = (client: RailwayClient, request: { variables: LoginSessionVerifyMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<LoginSessionVerifyMutation, GraphQLRequestError> => client.requestDocument(LoginSessionVerifyDocument, request.variables, request?.options);

/** Gets the authenticated user. */
export const me = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<MeQuery, GraphQLRequestError> => client.requestDocument(MeDocument, undefined, request?.options);

/** Get metrics for the provided scope */
export const metrics = (client: RailwayClient, request: { variables: MetricsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<MetricsQuery, GraphQLRequestError> => client.requestDocument(MetricsDocument, request.variables, request?.options);

export const node = (client: RailwayClient, request: { variables: NodeQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<NodeQuery, GraphQLRequestError> => client.requestDocument(NodeDocument, request.variables, request?.options);

export const nodes = (client: RailwayClient, request: { variables: NodesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<NodesQuery, GraphQLRequestError> => client.requestDocument(NodesDocument, request.variables, request?.options);

/** Gets notification deliveries for the authenticated user */
export const notificationDeliveries = (client: RailwayClient, request?: { variables?: NotificationDeliveriesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<NotificationDeliveriesQuery, GraphQLRequestError> => client.requestDocument(NotificationDeliveriesDocument, request?.variables, request?.options);

/** Marks notification deliveries as read */
export const notificationDeliveriesMarkAsRead = (client: RailwayClient, request: { variables: NotificationDeliveriesMarkAsReadMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<NotificationDeliveriesMarkAsReadMutation, GraphQLRequestError> => client.requestDocument(NotificationDeliveriesMarkAsReadDocument, request.variables, request?.options);

/** Create an observability dashboard */
export const observabilityDashboardCreate = (client: RailwayClient, request: { variables: ObservabilityDashboardCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ObservabilityDashboardCreateMutation, GraphQLRequestError> => client.requestDocument(ObservabilityDashboardCreateDocument, request.variables, request?.options);

/** Reset an observability dashboard to default dashboard items */
export const observabilityDashboardReset = (client: RailwayClient, request: { variables: ObservabilityDashboardResetMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ObservabilityDashboardResetMutation, GraphQLRequestError> => client.requestDocument(ObservabilityDashboardResetDocument, request.variables, request?.options);

/** Get all observability dashboards for an environment */
export const observabilityDashboards = (client: RailwayClient, request: { variables: ObservabilityDashboardsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ObservabilityDashboardsQuery, GraphQLRequestError> => client.requestDocument(ObservabilityDashboardsDocument, request.variables, request?.options);

/** Update an observability dashboard */
export const observabilityDashboardUpdate = (client: RailwayClient, request: { variables: ObservabilityDashboardUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ObservabilityDashboardUpdateMutation, GraphQLRequestError> => client.requestDocument(ObservabilityDashboardUpdateDocument, request.variables, request?.options);

/** Deletes a Passkey */
export const passkeyDelete = (client: RailwayClient, request: { variables: PasskeyDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PasskeyDeleteMutation, GraphQLRequestError> => client.requestDocument(PasskeyDeleteDocument, request.variables, request?.options);

/** Gets all passkeys for the authenticated user. */
export const passkeys = (client: RailwayClient, request?: { variables?: PasskeysQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PasskeysQuery, GraphQLRequestError> => client.requestDocument(PasskeysDocument, request?.variables, request?.options);

/** Get the current status of the platform */
export const platformStatus = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<PlatformStatusQuery, GraphQLRequestError> => client.requestDocument(PlatformStatusDocument, undefined, request?.options);

/** Create/Updates preferences overrides for a specific resource belonging to a user */
export const preferenceOverridesCreateUpdate = (client: RailwayClient, request: { variables: PreferenceOverridesCreateUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PreferenceOverridesCreateUpdateMutation, GraphQLRequestError> => client.requestDocument(PreferenceOverridesCreateUpdateDocument, request.variables, request?.options);

/** Destroy preferences overrides for a specific resource belonging to a user */
export const preferenceOverridesDestroyForResource = (client: RailwayClient, request: { variables: PreferenceOverridesDestroyForResourceMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PreferenceOverridesDestroyForResourceMutation, GraphQLRequestError> => client.requestDocument(PreferenceOverridesDestroyForResourceDocument, request.variables, request?.options);

/** Get the email preferences for a user */
export const preferences = (client: RailwayClient, request?: { variables?: PreferencesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PreferencesQuery, GraphQLRequestError> => client.requestDocument(PreferencesDocument, request?.variables, request?.options);

/** Update the email preferences for a user */
export const preferencesUpdate = (client: RailwayClient, request: { variables: PreferencesUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PreferencesUpdateMutation, GraphQLRequestError> => client.requestDocument(PreferencesUpdateDocument, request.variables, request?.options);

/** Create or get a private network. */
export const privateNetworkCreateOrGet = (client: RailwayClient, request: { variables: PrivateNetworkCreateOrGetMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworkCreateOrGetMutation, GraphQLRequestError> => client.requestDocument(PrivateNetworkCreateOrGetDocument, request.variables, request?.options);

/** Get a private network endpoint for a service instance. */
export const privateNetworkEndpoint = (client: RailwayClient, request: { variables: PrivateNetworkEndpointQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworkEndpointQuery, GraphQLRequestError> => client.requestDocument(PrivateNetworkEndpointDocument, request.variables, request?.options);

/** Create or get a private network endpoint. */
export const privateNetworkEndpointCreateOrGet = (client: RailwayClient, request: { variables: PrivateNetworkEndpointCreateOrGetMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworkEndpointCreateOrGetMutation, GraphQLRequestError> => client.requestDocument(PrivateNetworkEndpointCreateOrGetDocument, request.variables, request?.options);

/** Delete a private network endpoint. */
export const privateNetworkEndpointDelete = (client: RailwayClient, request: { variables: PrivateNetworkEndpointDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworkEndpointDeleteMutation, GraphQLRequestError> => client.requestDocument(PrivateNetworkEndpointDeleteDocument, request.variables, request?.options);

/** Check if an endpoint name is available. */
export const privateNetworkEndpointNameAvailable = (client: RailwayClient, request: { variables: PrivateNetworkEndpointNameAvailableQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworkEndpointNameAvailableQuery, GraphQLRequestError> => client.requestDocument(PrivateNetworkEndpointNameAvailableDocument, request.variables, request?.options);

/** Rename a private network endpoint. */
export const privateNetworkEndpointRename = (client: RailwayClient, request: { variables: PrivateNetworkEndpointRenameMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworkEndpointRenameMutation, GraphQLRequestError> => client.requestDocument(PrivateNetworkEndpointRenameDocument, request.variables, request?.options);

/** List private networks for an environment. */
export const privateNetworks = (client: RailwayClient, request: { variables: PrivateNetworksQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworksQuery, GraphQLRequestError> => client.requestDocument(PrivateNetworksDocument, request.variables, request?.options);

/** Delete all private networks for an environment. */
export const privateNetworksForEnvironmentDelete = (client: RailwayClient, request: { variables: PrivateNetworksForEnvironmentDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<PrivateNetworksForEnvironmentDeleteMutation, GraphQLRequestError> => client.requestDocument(PrivateNetworksForEnvironmentDeleteDocument, request.variables, request?.options);

/** Get a project by ID */
export const project = (client: RailwayClient, request: { variables: ProjectQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectQuery, GraphQLRequestError> => client.requestDocument(ProjectDocument, request.variables, request?.options);

/** Claims a project. */
export const projectClaim = (client: RailwayClient, request: { variables: ProjectClaimMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectClaimMutation, GraphQLRequestError> => client.requestDocument(ProjectClaimDocument, request.variables, request?.options);

/** Creates a new project. */
export const projectCreate = (client: RailwayClient, request: { variables: ProjectCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectCreateMutation, GraphQLRequestError> => client.requestDocument(ProjectCreateDocument, request.variables, request?.options);

/** Deletes a project. */
export const projectDelete = (client: RailwayClient, request: { variables: ProjectDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectDeleteMutation, GraphQLRequestError> => client.requestDocument(ProjectDeleteDocument, request.variables, request?.options);

/** Get a project invitation by code */
export const projectInvitation = (client: RailwayClient, request: { variables: ProjectInvitationQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInvitationQuery, GraphQLRequestError> => client.requestDocument(ProjectInvitationDocument, request.variables, request?.options);

/** Accept a project invitation using the invite code */
export const projectInvitationAccept = (client: RailwayClient, request: { variables: ProjectInvitationAcceptMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInvitationAcceptMutation, GraphQLRequestError> => client.requestDocument(ProjectInvitationAcceptDocument, request.variables, request?.options);

/** Create an invitation for a project */
export const projectInvitationCreate = (client: RailwayClient, request: { variables: ProjectInvitationCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInvitationCreateMutation, GraphQLRequestError> => client.requestDocument(ProjectInvitationCreateDocument, request.variables, request?.options);

/** Delete an invitation for a project */
export const projectInvitationDelete = (client: RailwayClient, request: { variables: ProjectInvitationDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInvitationDeleteMutation, GraphQLRequestError> => client.requestDocument(ProjectInvitationDeleteDocument, request.variables, request?.options);

/** Resend an invitation for a project */
export const projectInvitationResend = (client: RailwayClient, request: { variables: ProjectInvitationResendMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInvitationResendMutation, GraphQLRequestError> => client.requestDocument(ProjectInvitationResendDocument, request.variables, request?.options);

/** Get invitations for a project */
export const projectInvitations = (client: RailwayClient, request: { variables: ProjectInvitationsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInvitationsQuery, GraphQLRequestError> => client.requestDocument(ProjectInvitationsDocument, request.variables, request?.options);

/** Get an invite code for a project for a specifc role */
export const projectInviteCode = (client: RailwayClient, request: { variables: ProjectInviteCodeQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInviteCodeQuery, GraphQLRequestError> => client.requestDocument(ProjectInviteCodeDocument, request.variables, request?.options);

/** Invite a user by email to a project */
export const projectInviteUser = (client: RailwayClient, request: { variables: ProjectInviteUserMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectInviteUserMutation, GraphQLRequestError> => client.requestDocument(ProjectInviteUserDocument, request.variables, request?.options);

/** Leave project as currently authenticated user */
export const projectLeave = (client: RailwayClient, request: { variables: ProjectLeaveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectLeaveMutation, GraphQLRequestError> => client.requestDocument(ProjectLeaveDocument, request.variables, request?.options);

/** Remove user from a project */
export const projectMemberRemove = (client: RailwayClient, request: { variables: ProjectMemberRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectMemberRemoveMutation, GraphQLRequestError> => client.requestDocument(ProjectMemberRemoveDocument, request.variables, request?.options);

/** Gets users who belong to a project along with their role */
export const projectMembers = (client: RailwayClient, request: { variables: ProjectMembersQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectMembersQuery, GraphQLRequestError> => client.requestDocument(ProjectMembersDocument, request.variables, request?.options);

/** Change the role for a user within a project */
export const projectMemberUpdate = (client: RailwayClient, request: { variables: ProjectMemberUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectMemberUpdateMutation, GraphQLRequestError> => client.requestDocument(ProjectMemberUpdateDocument, request.variables, request?.options);

/** Get resource access rules for project-specific actions */
export const projectResourceAccess = (client: RailwayClient, request: { variables: ProjectResourceAccessQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectResourceAccessQuery, GraphQLRequestError> => client.requestDocument(ProjectResourceAccessDocument, request.variables, request?.options);

/** Gets all projects for a user or workspace */
export const projects = (client: RailwayClient, request?: { variables?: ProjectsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectsQuery, GraphQLRequestError> => client.requestDocument(ProjectsDocument, request?.variables, request?.options);

/** Deletes a project with a 48 hour grace period. */
export const projectScheduleDelete = (client: RailwayClient, request: { variables: ProjectScheduleDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectScheduleDeleteMutation, GraphQLRequestError> => client.requestDocument(ProjectScheduleDeleteDocument, request.variables, request?.options);

/** Cancel scheduled deletion of a project */
export const projectScheduleDeleteCancel = (client: RailwayClient, request: { variables: ProjectScheduleDeleteCancelMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectScheduleDeleteCancelMutation, GraphQLRequestError> => client.requestDocument(ProjectScheduleDeleteCancelDocument, request.variables, request?.options);

/** Force delete a scheduled deletion of a project (skips the grace period) */
export const projectScheduleDeleteForce = (client: RailwayClient, request: { variables: ProjectScheduleDeleteForceMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectScheduleDeleteForceMutation, GraphQLRequestError> => client.requestDocument(ProjectScheduleDeleteForceDocument, request.variables, request?.options);

/** Get a single project token by the value in the header */
export const projectToken = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTokenQuery, GraphQLRequestError> => client.requestDocument(ProjectTokenDocument, undefined, request?.options);

/** Create a token for a project that has access to a specific environment */
export const projectTokenCreate = (client: RailwayClient, request: { variables: ProjectTokenCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTokenCreateMutation, GraphQLRequestError> => client.requestDocument(ProjectTokenCreateDocument, request.variables, request?.options);

/** Delete a project token */
export const projectTokenDelete = (client: RailwayClient, request: { variables: ProjectTokenDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTokenDeleteMutation, GraphQLRequestError> => client.requestDocument(ProjectTokenDeleteDocument, request.variables, request?.options);

/** Get all project tokens for a project */
export const projectTokens = (client: RailwayClient, request: { variables: ProjectTokensQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTokensQuery, GraphQLRequestError> => client.requestDocument(ProjectTokensDocument, request.variables, request?.options);

/** Transfer a project to a workspace */
export const projectTransfer = (client: RailwayClient, request: { variables: ProjectTransferMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTransferMutation, GraphQLRequestError> => client.requestDocument(ProjectTransferDocument, request.variables, request?.options);

/** Confirm the transfer of project ownership */
export const projectTransferConfirm = (client: RailwayClient, request: { variables: ProjectTransferConfirmMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTransferConfirmMutation, GraphQLRequestError> => client.requestDocument(ProjectTransferConfirmDocument, request.variables, request?.options);

/** Initiate the transfer of project ownership */
export const projectTransferInitiate = (client: RailwayClient, request: { variables: ProjectTransferInitiateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectTransferInitiateMutation, GraphQLRequestError> => client.requestDocument(ProjectTransferInitiateDocument, request.variables, request?.options);

/** Updates a project. */
export const projectUpdate = (client: RailwayClient, request: { variables: ProjectUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProjectUpdateMutation, GraphQLRequestError> => client.requestDocument(ProjectUpdateDocument, request.variables, request?.options);

/** Deletes a ProviderAuth. */
export const providerAuthRemove = (client: RailwayClient, request: { variables: ProviderAuthRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ProviderAuthRemoveMutation, GraphQLRequestError> => client.requestDocument(ProviderAuthRemoveDocument, request.variables, request?.options);

/** Get public Railway stats. */
export const publicStats = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<PublicStatsQuery, GraphQLRequestError> => client.requestDocument(PublicStatsDocument, undefined, request?.options);

/** Generates a new set of recovery codes for the authenticated user. */
export const recoveryCodeGenerate = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<RecoveryCodeGenerateMutation, GraphQLRequestError> => client.requestDocument(RecoveryCodeGenerateDocument, undefined, request?.options);

/** Validates a recovery code. */
export const recoveryCodeValidate = (client: RailwayClient, request: { variables: RecoveryCodeValidateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<RecoveryCodeValidateMutation, GraphQLRequestError> => client.requestDocument(RecoveryCodeValidateDocument, request.variables, request?.options);

/** Gets the ReferralInfo for the authenticated user. */
export const referralInfo = (client: RailwayClient, request: { variables: ReferralInfoQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ReferralInfoQuery, GraphQLRequestError> => client.requestDocument(ReferralInfoDocument, request.variables, request?.options);

/** Updates the ReferralInfo for the authenticated user. */
export const referralInfoUpdate = (client: RailwayClient, request: { variables: ReferralInfoUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ReferralInfoUpdateMutation, GraphQLRequestError> => client.requestDocument(ReferralInfoUpdateDocument, request.variables, request?.options);

/** List available regions */
export const regions = (client: RailwayClient, request?: { variables?: RegionsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<RegionsQuery, GraphQLRequestError> => client.requestDocument(RegionsDocument, request?.variables, request?.options);

/** Get resource access for the current user or team */
export const resourceAccess = (client: RailwayClient, request: { variables: ResourceAccessQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ResourceAccessQuery, GraphQLRequestError> => client.requestDocument(ResourceAccessDocument, request.variables, request?.options);

/** Get a service by ID */
export const service = (client: RailwayClient, request: { variables: ServiceQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceQuery, GraphQLRequestError> => client.requestDocument(ServiceDocument, request.variables, request?.options);

/** Connect a service to a source */
export const serviceConnect = (client: RailwayClient, request: { variables: ServiceConnectMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceConnectMutation, GraphQLRequestError> => client.requestDocument(ServiceConnectDocument, request.variables, request?.options);

/** Creates a new service. */
export const serviceCreate = (client: RailwayClient, request: { variables: ServiceCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceCreateMutation, GraphQLRequestError> => client.requestDocument(ServiceCreateDocument, request.variables, request?.options);

/** Deletes a service. */
export const serviceDelete = (client: RailwayClient, request: { variables: ServiceDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceDeleteMutation, GraphQLRequestError> => client.requestDocument(ServiceDeleteDocument, request.variables, request?.options);

/** Disconnect a service from a repo */
export const serviceDisconnect = (client: RailwayClient, request: { variables: ServiceDisconnectMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceDisconnectMutation, GraphQLRequestError> => client.requestDocument(ServiceDisconnectDocument, request.variables, request?.options);

/** Checks if a service domain is available */
export const serviceDomainAvailable = (client: RailwayClient, request: { variables: ServiceDomainAvailableQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceDomainAvailableQuery, GraphQLRequestError> => client.requestDocument(ServiceDomainAvailableDocument, request.variables, request?.options);

/** Creates a new service domain. */
export const serviceDomainCreate = (client: RailwayClient, request: { variables: ServiceDomainCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceDomainCreateMutation, GraphQLRequestError> => client.requestDocument(ServiceDomainCreateDocument, request.variables, request?.options);

/** Deletes a service domain. */
export const serviceDomainDelete = (client: RailwayClient, request: { variables: ServiceDomainDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceDomainDeleteMutation, GraphQLRequestError> => client.requestDocument(ServiceDomainDeleteDocument, request.variables, request?.options);

/** Updates a service domain. */
export const serviceDomainUpdate = (client: RailwayClient, request: { variables: ServiceDomainUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceDomainUpdateMutation, GraphQLRequestError> => client.requestDocument(ServiceDomainUpdateDocument, request.variables, request?.options);

/** Add a feature flag for a service */
export const serviceFeatureFlagAdd = (client: RailwayClient, request: { variables: ServiceFeatureFlagAddMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceFeatureFlagAddMutation, GraphQLRequestError> => client.requestDocument(ServiceFeatureFlagAddDocument, request.variables, request?.options);

/** Remove a feature flag for a service */
export const serviceFeatureFlagRemove = (client: RailwayClient, request: { variables: ServiceFeatureFlagRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceFeatureFlagRemoveMutation, GraphQLRequestError> => client.requestDocument(ServiceFeatureFlagRemoveDocument, request.variables, request?.options);

/** Get a service instance belonging to a service and environment */
export const serviceInstance = (client: RailwayClient, request: { variables: ServiceInstanceQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceQuery, GraphQLRequestError> => client.requestDocument(ServiceInstanceDocument, request.variables, request?.options);

/** Deploy a service instance */
export const serviceInstanceDeploy = (client: RailwayClient, request: { variables: ServiceInstanceDeployMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceDeployMutation, GraphQLRequestError> => client.requestDocument(ServiceInstanceDeployDocument, request.variables, request?.options);

/** Deploy a service instance. Returns a deployment ID */
export const serviceInstanceDeployV2 = (client: RailwayClient, request: { variables: ServiceInstanceDeployV2MutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceDeployV2Mutation, GraphQLRequestError> => client.requestDocument(ServiceInstanceDeployV2Document, request.variables, request?.options);

/** Check if the upstream repo for a service has an update available */
export const serviceInstanceIsUpdatable = (client: RailwayClient, request: { variables: ServiceInstanceIsUpdatableQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceIsUpdatableQuery, GraphQLRequestError> => client.requestDocument(ServiceInstanceIsUpdatableDocument, request.variables, request?.options);

/** Get the resource limit overrides for a service instance */
export const serviceInstanceLimitOverride = (client: RailwayClient, request: { variables: ServiceInstanceLimitOverrideQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceLimitOverrideQuery, GraphQLRequestError> => client.requestDocument(ServiceInstanceLimitOverrideDocument, request.variables, request?.options);

/** Get the merged resource limits for a service instance */
export const serviceInstanceLimits = (client: RailwayClient, request: { variables: ServiceInstanceLimitsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceLimitsQuery, GraphQLRequestError> => client.requestDocument(ServiceInstanceLimitsDocument, request.variables, request?.options);

/** Update the resource limits for a service instance */
export const serviceInstanceLimitsUpdate = (client: RailwayClient, request: { variables: ServiceInstanceLimitsUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceLimitsUpdateMutation, GraphQLRequestError> => client.requestDocument(ServiceInstanceLimitsUpdateDocument, request.variables, request?.options);

/** Redeploy a service instance */
export const serviceInstanceRedeploy = (client: RailwayClient, request: { variables: ServiceInstanceRedeployMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceRedeployMutation, GraphQLRequestError> => client.requestDocument(ServiceInstanceRedeployDocument, request.variables, request?.options);

/** Update a service instance */
export const serviceInstanceUpdate = (client: RailwayClient, request: { variables: ServiceInstanceUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceInstanceUpdateMutation, GraphQLRequestError> => client.requestDocument(ServiceInstanceUpdateDocument, request.variables, request?.options);

/** Remove the upstream URL from all service instances for this service */
export const serviceRemoveUpstreamUrl = (client: RailwayClient, request: { variables: ServiceRemoveUpstreamUrlMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceRemoveUpstreamUrlMutation, GraphQLRequestError> => client.requestDocument(ServiceRemoveUpstreamUrlDocument, request.variables, request?.options);

/** Get services for a project */
export const services = (client: RailwayClient, request: { variables: ServicesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServicesQuery, GraphQLRequestError> => client.requestDocument(ServicesDocument, request.variables, request?.options);

/** Updates a service. */
export const serviceUpdate = (client: RailwayClient, request: { variables: ServiceUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<ServiceUpdateMutation, GraphQLRequestError> => client.requestDocument(ServiceUpdateDocument, request.variables, request?.options);

/** Deletes a session. */
export const sessionDelete = (client: RailwayClient, request: { variables: SessionDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<SessionDeleteMutation, GraphQLRequestError> => client.requestDocument(SessionDeleteDocument, request.variables, request?.options);

/** Gets all sessions for authenticated user. */
export const sessions = (client: RailwayClient, request?: { variables?: SessionsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<SessionsQuery, GraphQLRequestError> => client.requestDocument(SessionsDocument, request?.variables, request?.options);

/** Configure a shared variable. */
export const sharedVariableConfigure = (client: RailwayClient, request: { variables: SharedVariableConfigureMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<SharedVariableConfigureMutation, GraphQLRequestError> => client.requestDocument(SharedVariableConfigureDocument, request.variables, request?.options);

/** All TCP proxies for a service instance */
export const tcpProxies = (client: RailwayClient, request: { variables: TcpProxiesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TcpProxiesQuery, GraphQLRequestError> => client.requestDocument(TcpProxiesDocument, request.variables, request?.options);

/** Deletes a TCP proxy by id */
export const tcpProxyDelete = (client: RailwayClient, request: { variables: TcpProxyDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TcpProxyDeleteMutation, GraphQLRequestError> => client.requestDocument(TcpProxyDeleteDocument, request.variables, request?.options);

/** Get a template by code or GitHub owner and repo. */
export const template = (client: RailwayClient, request?: { variables?: TemplateQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateQuery, GraphQLRequestError> => client.requestDocument(TemplateDocument, request?.variables, request?.options);

/** Duplicates an existing template */
export const templateClone = (client: RailwayClient, request: { variables: TemplateCloneMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateCloneMutation, GraphQLRequestError> => client.requestDocument(TemplateCloneDocument, request.variables, request?.options);

/** Deletes a template. */
export const templateDelete = (client: RailwayClient, request: { variables: TemplateDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateDeleteMutation, GraphQLRequestError> => client.requestDocument(TemplateDeleteDocument, request.variables, request?.options);

/** Deploys a template using the serialized template config */
export const templateDeployV2 = (client: RailwayClient, request: { variables: TemplateDeployV2MutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateDeployV2Mutation, GraphQLRequestError> => client.requestDocument(TemplateDeployV2Document, request.variables, request?.options);

/** Generate a template for a project */
export const templateGenerate = (client: RailwayClient, request: { variables: TemplateGenerateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateGenerateMutation, GraphQLRequestError> => client.requestDocument(TemplateGenerateDocument, request.variables, request?.options);

/** Publishes a template. */
export const templatePublish = (client: RailwayClient, request: { variables: TemplatePublishMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplatePublishMutation, GraphQLRequestError> => client.requestDocument(TemplatePublishDocument, request.variables, request?.options);

/** Get all published templates. */
export const templates = (client: RailwayClient, request?: { variables?: TemplatesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplatesQuery, GraphQLRequestError> => client.requestDocument(TemplatesDocument, request?.variables, request?.options);

/** Count all published templates. */
export const templatesCount = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplatesCountQuery, GraphQLRequestError> => client.requestDocument(TemplatesCountDocument, undefined, request?.options);

/** Ejects a service from the template and creates a new repo in the provided org. */
export const templateServiceSourceEject = (client: RailwayClient, request: { variables: TemplateServiceSourceEjectMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateServiceSourceEjectMutation, GraphQLRequestError> => client.requestDocument(TemplateServiceSourceEjectDocument, request.variables, request?.options);

/** Get the source template for a project. */
export const templateSourceForProject = (client: RailwayClient, request: { variables: TemplateSourceForProjectQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateSourceForProjectQuery, GraphQLRequestError> => client.requestDocument(TemplateSourceForProjectDocument, request.variables, request?.options);

/** Unpublishes a template. */
export const templateUnpublish = (client: RailwayClient, request: { variables: TemplateUnpublishMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TemplateUnpublishMutation, GraphQLRequestError> => client.requestDocument(TemplateUnpublishDocument, request.variables, request?.options);

/** Create a new trusted domain for a workspace */
export const trustedDomainCreate = (client: RailwayClient, request: { variables: TrustedDomainCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TrustedDomainCreateMutation, GraphQLRequestError> => client.requestDocument(TrustedDomainCreateDocument, request.variables, request?.options);

/** Delete a trusted domain */
export const trustedDomainDelete = (client: RailwayClient, request: { variables: TrustedDomainDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TrustedDomainDeleteMutation, GraphQLRequestError> => client.requestDocument(TrustedDomainDeleteDocument, request.variables, request?.options);

/** Get all trusted domains for a workspace */
export const trustedDomains = (client: RailwayClient, request: { variables: TrustedDomainsQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TrustedDomainsQuery, GraphQLRequestError> => client.requestDocument(TrustedDomainsDocument, request.variables, request?.options);

/** Gets the TwoFactorInfo for the authenticated user. */
export const twoFactorInfo = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<TwoFactorInfoQuery, GraphQLRequestError> => client.requestDocument(TwoFactorInfoDocument, undefined, request?.options);

/** Setup 2FA authorization for authenticated user. */
export const twoFactorInfoCreate = (client: RailwayClient, request: { variables: TwoFactorInfoCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TwoFactorInfoCreateMutation, GraphQLRequestError> => client.requestDocument(TwoFactorInfoCreateDocument, request.variables, request?.options);

/** Deletes the TwoFactorInfo for the authenticated user. */
export const twoFactorInfoDelete = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<TwoFactorInfoDeleteMutation, GraphQLRequestError> => client.requestDocument(TwoFactorInfoDeleteDocument, undefined, request?.options);

/** Generates the 2FA app secret for the authenticated user. */
export const twoFactorInfoSecret = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<TwoFactorInfoSecretMutation, GraphQLRequestError> => client.requestDocument(TwoFactorInfoSecretDocument, undefined, request?.options);

/** Validates the token for a 2FA action or for a login request. */
export const twoFactorInfoValidate = (client: RailwayClient, request: { variables: TwoFactorInfoValidateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<TwoFactorInfoValidateMutation, GraphQLRequestError> => client.requestDocument(TwoFactorInfoValidateDocument, request.variables, request?.options);

/** Generate a Slack channel for a workspace */
export const upsertSlackChannel = (client: RailwayClient, request: { variables: UpsertSlackChannelMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UpsertSlackChannelMutation, GraphQLRequestError> => client.requestDocument(UpsertSlackChannelDocument, request.variables, request?.options);

/** Get aggregated usage for a project or workspace */
export const usage = (client: RailwayClient, request: { variables: UsageQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UsageQuery, GraphQLRequestError> => client.requestDocument(UsageDocument, request.variables, request?.options);

/** Remove the usage limit for a customer */
export const usageLimitRemove = (client: RailwayClient, request: { variables: UsageLimitRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UsageLimitRemoveMutation, GraphQLRequestError> => client.requestDocument(UsageLimitRemoveDocument, request.variables, request?.options);

/** Set the usage limit for a customer */
export const usageLimitSet = (client: RailwayClient, request: { variables: UsageLimitSetMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UsageLimitSetMutation, GraphQLRequestError> => client.requestDocument(UsageLimitSetDocument, request.variables, request?.options);

/** Unsubscribe from the Beta program. */
export const userBetaLeave = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<UserBetaLeaveMutation, GraphQLRequestError> => client.requestDocument(UserBetaLeaveDocument, undefined, request?.options);

/** Delete the currently authenticated user */
export const userDelete = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<UserDeleteMutation, GraphQLRequestError> => client.requestDocument(UserDeleteDocument, undefined, request?.options);

/** Disconnect your Railway account from Discord. */
export const userDiscordDisconnect = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<UserDiscordDisconnectMutation, GraphQLRequestError> => client.requestDocument(UserDiscordDisconnectDocument, undefined, request?.options);

/** Remove a flag on the user. */
export const userFlagsRemove = (client: RailwayClient, request: { variables: UserFlagsRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UserFlagsRemoveMutation, GraphQLRequestError> => client.requestDocument(UserFlagsRemoveDocument, request.variables, request?.options);

/** Set flags on the authenticated user. */
export const userFlagsSet = (client: RailwayClient, request: { variables: UserFlagsSetMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UserFlagsSetMutation, GraphQLRequestError> => client.requestDocument(UserFlagsSetDocument, request.variables, request?.options);

/** Get the public profile for a user */
export const userProfile = (client: RailwayClient, request: { variables: UserProfileQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UserProfileQuery, GraphQLRequestError> => client.requestDocument(UserProfileDocument, request.variables, request?.options);

/** Updates the profile for the authenticated user */
export const userProfileUpdate = (client: RailwayClient, request: { variables: UserProfileUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<UserProfileUpdateMutation, GraphQLRequestError> => client.requestDocument(UserProfileUpdateDocument, request.variables, request?.options);

/** Update date of TermsAgreedOn */
export const userTermsUpdate = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<UserTermsUpdateMutation, GraphQLRequestError> => client.requestDocument(UserTermsUpdateDocument, undefined, request?.options);

/** Upserts a collection of variables. */
export const variableCollectionUpsert = (client: RailwayClient, request: { variables: VariableCollectionUpsertMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VariableCollectionUpsertMutation, GraphQLRequestError> => client.requestDocument(VariableCollectionUpsertDocument, request.variables, request?.options);

/** Deletes a variable. */
export const variableDelete = (client: RailwayClient, request: { variables: VariableDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VariableDeleteMutation, GraphQLRequestError> => client.requestDocument(VariableDeleteDocument, request.variables, request?.options);

/** Get environment variables for a project or service */
export const variables = (client: RailwayClient, request: { variables: VariablesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VariablesQuery, GraphQLRequestError> => client.requestDocument(VariablesDocument, request.variables, request?.options);

/** All rendered variables that are required for a service deployment. */
export const variablesForServiceDeployment = (client: RailwayClient, request: { variables: VariablesForServiceDeploymentQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VariablesForServiceDeploymentQuery, GraphQLRequestError> => client.requestDocument(VariablesForServiceDeploymentDocument, request.variables, request?.options);

/** Upserts a variable. */
export const variableUpsert = (client: RailwayClient, request: { variables: VariableUpsertMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VariableUpsertMutation, GraphQLRequestError> => client.requestDocument(VariableUpsertDocument, request.variables, request?.options);

/** Get information about the user's Vercel accounts */
export const vercelInfo = (client: RailwayClient, request?: { options?: GraphQLDocumentRequestOptions }): ResultAsync<VercelInfoQuery, GraphQLRequestError> => client.requestDocument(VercelInfoDocument, undefined, request?.options);

/** Create a persistent volume in a project */
export const volumeCreate = (client: RailwayClient, request: { variables: VolumeCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeCreateMutation, GraphQLRequestError> => client.requestDocument(VolumeCreateDocument, request.variables, request?.options);

/** Delete a persistent volume in a project */
export const volumeDelete = (client: RailwayClient, request: { variables: VolumeDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeDeleteMutation, GraphQLRequestError> => client.requestDocument(VolumeDeleteDocument, request.variables, request?.options);

/** Get a single volume instance by ID */
export const volumeInstance = (client: RailwayClient, request: { variables: VolumeInstanceQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceQuery, GraphQLRequestError> => client.requestDocument(VolumeInstanceDocument, request.variables, request?.options);

/** Create backup of a volume instance */
export const volumeInstanceBackupCreate = (client: RailwayClient, request: { variables: VolumeInstanceBackupCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupCreateMutation, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupCreateDocument, request.variables, request?.options);

/** Deletes volume instance backup */
export const volumeInstanceBackupDelete = (client: RailwayClient, request: { variables: VolumeInstanceBackupDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupDeleteMutation, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupDeleteDocument, request.variables, request?.options);

/** List backups of a volume instance */
export const volumeInstanceBackupList = (client: RailwayClient, request: { variables: VolumeInstanceBackupListQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupListQuery, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupListDocument, request.variables, request?.options);

/** Removes backup expiration date */
export const volumeInstanceBackupLock = (client: RailwayClient, request: { variables: VolumeInstanceBackupLockMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupLockMutation, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupLockDocument, request.variables, request?.options);

/** Restore a volume instance from a backup */
export const volumeInstanceBackupRestore = (client: RailwayClient, request: { variables: VolumeInstanceBackupRestoreMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupRestoreMutation, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupRestoreDocument, request.variables, request?.options);

/** List backups schedules of a volume instance */
export const volumeInstanceBackupScheduleList = (client: RailwayClient, request: { variables: VolumeInstanceBackupScheduleListQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupScheduleListQuery, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupScheduleListDocument, request.variables, request?.options);

/** Manage schedule for backups of a volume instance */
export const volumeInstanceBackupScheduleUpdate = (client: RailwayClient, request: { variables: VolumeInstanceBackupScheduleUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceBackupScheduleUpdateMutation, GraphQLRequestError> => client.requestDocument(VolumeInstanceBackupScheduleUpdateDocument, request.variables, request?.options);

/** Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated. */
export const volumeInstanceUpdate = (client: RailwayClient, request: { variables: VolumeInstanceUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeInstanceUpdateMutation, GraphQLRequestError> => client.requestDocument(VolumeInstanceUpdateDocument, request.variables, request?.options);

/** Update a persistent volume in a project */
export const volumeUpdate = (client: RailwayClient, request: { variables: VolumeUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<VolumeUpdateMutation, GraphQLRequestError> => client.requestDocument(VolumeUpdateDocument, request.variables, request?.options);

/** Create a webhook on a project */
export const webhookCreate = (client: RailwayClient, request: { variables: WebhookCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WebhookCreateMutation, GraphQLRequestError> => client.requestDocument(WebhookCreateDocument, request.variables, request?.options);

/** Delete a webhook from a project */
export const webhookDelete = (client: RailwayClient, request: { variables: WebhookDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WebhookDeleteMutation, GraphQLRequestError> => client.requestDocument(WebhookDeleteDocument, request.variables, request?.options);

/** Get all webhooks for a project */
export const webhooks = (client: RailwayClient, request: { variables: WebhooksQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WebhooksQuery, GraphQLRequestError> => client.requestDocument(WebhooksDocument, request.variables, request?.options);

/** Update a webhook on a project */
export const webhookUpdate = (client: RailwayClient, request: { variables: WebhookUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WebhookUpdateMutation, GraphQLRequestError> => client.requestDocument(WebhookUpdateDocument, request.variables, request?.options);

/** Gets the status of a workflow */
export const workflowStatus = (client: RailwayClient, request: { variables: WorkflowStatusQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkflowStatusQuery, GraphQLRequestError> => client.requestDocument(WorkflowStatusDocument, request.variables, request?.options);

/** Get the workspace */
export const workspace = (client: RailwayClient, request: { variables: WorkspaceQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceQuery, GraphQLRequestError> => client.requestDocument(WorkspaceDocument, request.variables, request?.options);

/** Find a workspace by invite code */
export const workspaceByCode = (client: RailwayClient, request: { variables: WorkspaceByCodeQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceByCodeQuery, GraphQLRequestError> => client.requestDocument(WorkspaceByCodeDocument, request.variables, request?.options);

/** Delete a workspace and all data associated with it */
export const workspaceDelete = (client: RailwayClient, request: { variables: WorkspaceDeleteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceDeleteMutation, GraphQLRequestError> => client.requestDocument(WorkspaceDeleteDocument, request.variables, request?.options);

/** Gets all identity providers of a workspace */
export const workspaceIdentityProviders = (client: RailwayClient, request: { variables: WorkspaceIdentityProvidersQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceIdentityProvidersQuery, GraphQLRequestError> => client.requestDocument(WorkspaceIdentityProvidersDocument, request.variables, request?.options);

/** Get an invite code for a workspace and role */
export const workspaceInviteCodeCreate = (client: RailwayClient, request: { variables: WorkspaceInviteCodeCreateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceInviteCodeCreateMutation, GraphQLRequestError> => client.requestDocument(WorkspaceInviteCodeCreateDocument, request.variables, request?.options);

/** Use an invite code to join a workspace */
export const workspaceInviteCodeUse = (client: RailwayClient, request: { variables: WorkspaceInviteCodeUseMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceInviteCodeUseMutation, GraphQLRequestError> => client.requestDocument(WorkspaceInviteCodeUseDocument, request.variables, request?.options);

/** Leave a workspace */
export const workspaceLeave = (client: RailwayClient, request: { variables: WorkspaceLeaveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceLeaveMutation, GraphQLRequestError> => client.requestDocument(WorkspaceLeaveDocument, request.variables, request?.options);

/** Change permissions for a user in a workspace */
export const workspacePermissionChange = (client: RailwayClient, request: { variables: WorkspacePermissionChangeMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspacePermissionChangeMutation, GraphQLRequestError> => client.requestDocument(WorkspacePermissionChangeDocument, request.variables, request?.options);

/** Get all templates for a workspace */
export const workspaceTemplates = (client: RailwayClient, request: { variables: WorkspaceTemplatesQueryVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceTemplatesQuery, GraphQLRequestError> => client.requestDocument(WorkspaceTemplatesDocument, request.variables, request?.options);

/** Update a workspace by id */
export const workspaceUpdate = (client: RailwayClient, request: { variables: WorkspaceUpdateMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceUpdateMutation, GraphQLRequestError> => client.requestDocument(WorkspaceUpdateDocument, request.variables, request?.options);

/** Generate a Slack channel for a workspace */
export const workspaceUpsertSlackChannel = (client: RailwayClient, request: { variables: WorkspaceUpsertSlackChannelMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceUpsertSlackChannelMutation, GraphQLRequestError> => client.requestDocument(WorkspaceUpsertSlackChannelDocument, request.variables, request?.options);

/** Invite a user by email to a workspace */
export const workspaceUserInvite = (client: RailwayClient, request: { variables: WorkspaceUserInviteMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceUserInviteMutation, GraphQLRequestError> => client.requestDocument(WorkspaceUserInviteDocument, request.variables, request?.options);

/** Remove a user from a workspace */
export const workspaceUserRemove = (client: RailwayClient, request: { variables: WorkspaceUserRemoveMutationVariables; options?: GraphQLDocumentRequestOptions }): ResultAsync<WorkspaceUserRemoveMutation, GraphQLRequestError> => client.requestDocument(WorkspaceUserRemoveDocument, request.variables, request?.options);
