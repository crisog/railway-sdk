import * as operations from './generated/operations';
import type { RailwayClient } from './client';

type BindShape<Shape> = Shape extends (...args: infer Params) => infer Result
  ? Params extends [RailwayClient, ...infer Tail]
    ? (...args: Tail) => Result
    : never
  : Shape extends Record<string, unknown>
    ? { [Key in keyof Shape]: BindShape<Shape[Key]> }
    : never;

const bindShape = <Shape>(client: RailwayClient, shape: Shape): BindShape<Shape> => {
  if (typeof shape === 'function') {
    const operation = shape as (client: RailwayClient, ...args: unknown[]) => unknown;
    return ((...args: unknown[]) => operation(client, ...args)) as unknown as BindShape<Shape>;
  }

  const entries = Object.entries(shape as Record<string, unknown>);
  const boundEntries = entries.map(([key, value]) => [key, bindShape(client, value)]);
  return Object.fromEntries(boundEntries) as BindShape<Shape>;
};

const namespaceShape = {
  apiTokens: {
    list: operations.apiTokens,
    create: operations.apiTokenCreate,
    delete: operations.apiTokenDelete,
  },
  account: {
    me: operations.me,
    passkeys: {
      list: operations.passkeys,
      delete: operations.passkeyDelete,
    },
    email: {
      initiateChange: operations.emailChangeInitiate,
      confirmChange: operations.emailChangeConfirm,
    },
    invites: {
      current: operations.inviteCode,
      redeem: operations.inviteCodeUse,
    },
    profile: {
      get: operations.userProfile,
      update: operations.userProfileUpdate,
    },
    flags: {
      set: operations.userFlagsSet,
      remove: operations.userFlagsRemove,
    },
    discord: {
      disconnect: operations.userDiscordDisconnect,
    },
    beta: {
      leave: operations.userBetaLeave,
    },
    terms: {
      update: operations.userTermsUpdate,
    },
    delete: operations.userDelete,
    application: {
      submit: operations.jobApplicationCreate,
    },
  },
  auth: {
    loginSessions: {
      create: operations.loginSessionCreate,
      verify: operations.loginSessionVerify,
      consume: operations.loginSessionConsume,
      cancel: operations.loginSessionCancel,
      auth: operations.loginSessionAuth,
    },
    sessions: {
      list: operations.sessions,
      delete: operations.sessionDelete,
    },
    recoveryCodes: {
      generate: operations.recoveryCodeGenerate,
      validate: operations.recoveryCodeValidate,
    },
    twoFactor: {
      info: operations.twoFactorInfo,
      create: operations.twoFactorInfoCreate,
      delete: operations.twoFactorInfoDelete,
      secret: operations.twoFactorInfoSecret,
      validate: operations.twoFactorInfoValidate,
    },
  },
  billing: {
    customers: {
      createFreePlanSubscription: operations.customerCreateFreePlanSubscription,
      togglePayoutsToCredits: operations.customerTogglePayoutsToCredits,
    },
    usageLimits: {
      set: operations.usageLimitSet,
      remove: operations.usageLimitRemove,
    },
    referrals: {
      get: operations.referralInfo,
      update: operations.referralInfoUpdate,
    },
    fairUse: {
      agree: operations.fairUseAgree,
    },
  },
  deployments: {
    get: operations.deployment,
    list: operations.deployments,
    approve: operations.deploymentApprove,
    cancel: operations.deploymentCancel,
    stop: operations.deploymentStop,
    restart: operations.deploymentRestart,
    rollback: operations.deploymentRollback,
    remove: operations.deploymentRemove,
    redeploy: operations.deploymentRedeploy,
    snapshot: operations.deploymentSnapshot,
    events: operations.deploymentEvents,
    logs: operations.deploymentLogs,
    triggers: {
      list: operations.deploymentTriggers,
      create: operations.deploymentTriggerCreate,
      update: operations.deploymentTriggerUpdate,
      delete: operations.deploymentTriggerDelete,
      baseEnvironmentOverride: operations.baseEnvironmentOverride,
    },
    instanceExecutions: {
      list: operations.deploymentInstanceExecutions,
      create: operations.deploymentInstanceExecutionCreate,
    },
  },
  domains: {
    list: operations.domains,
    custom: {
      get: operations.customDomain,
      available: operations.customDomainAvailable,
      create: operations.customDomainCreate,
      update: operations.customDomainUpdate,
      delete: operations.customDomainDelete,
    },
  },
  environments: {
    get: operations.environment,
    list: operations.environments,
    create: operations.environmentCreate,
    delete: operations.environmentDelete,
    rename: operations.environmentRename,
    logs: operations.environmentLogs,
    patch: operations.environmentPatch,
    stagedChanges: operations.environmentStagedChanges,
    patches: {
      list: operations.environmentPatches,
      commit: operations.environmentPatchCommit,
    },
    triggers: {
      deploy: operations.environmentTriggersDeploy,
    },
  },
  integrations: {
    list: operations.integrations,
    getAuth: operations.integrationAuth,
    listAuths: operations.integrationAuths,
    create: operations.integrationCreate,
    update: operations.integrationUpdate,
    delete: operations.integrationDelete,
    provider: {
      removeAuth: operations.providerAuthRemove,
    },
    github: {
      isRepoNameAvailable: operations.githubIsRepoNameAvailable,
      getRepo: operations.githubRepo,
      listRepos: operations.githubRepos,
      listBranches: operations.githubRepoBranches,
      deployRepo: operations.githubRepoDeploy,
      updateRepo: operations.githubRepoUpdate,
      writableScopes: operations.githubWritableScopes,
      accessAvailable: operations.gitHubRepoAccessAvailable,
    },
    heroku: {
      apps: operations.herokuApps,
      importVariables: operations.herokuImportVariables,
    },
    vercel: {
      info: operations.vercelInfo,
    },
  },
  networking: {
    privateNetworks: {
      createOrGet: operations.privateNetworkCreateOrGet,
      list: operations.privateNetworks,
      deleteForEnvironment: operations.privateNetworksForEnvironmentDelete,
      endpoints: {
        get: operations.privateNetworkEndpoint,
        createOrGet: operations.privateNetworkEndpointCreateOrGet,
        delete: operations.privateNetworkEndpointDelete,
        rename: operations.privateNetworkEndpointRename,
        nameAvailable: operations.privateNetworkEndpointNameAvailable,
      },
    },
    egressGateways: {
      list: operations.egressGateways,
      associate: operations.egressGatewayAssociationCreate,
      clearAssociations: operations.egressGatewayAssociationsClear,
    },
    tcpProxies: {
      list: operations.tcpProxies,
      delete: operations.tcpProxyDelete,
    },
    nodes: {
      get: operations.node,
      list: operations.nodes,
    },
  },
  notifications: {
    deliveries: operations.notificationDeliveries,
    markAsRead: operations.notificationDeliveriesMarkAsRead,
  },
  observability: {
    dashboards: {
      create: operations.observabilityDashboardCreate,
      list: operations.observabilityDashboards,
      update: operations.observabilityDashboardUpdate,
      reset: operations.observabilityDashboardReset,
    },
    events: operations.events,
    logs: {
      http: operations.httpLogs,
      build: operations.buildLogs,
    },
    metrics: operations.metrics,
    usage: {
      get: operations.usage,
      estimated: operations.estimatedUsage,
    },
  },
  preferences: {
    get: operations.preferences,
    update: operations.preferencesUpdate,
    overrides: {
      upsert: operations.preferenceOverridesCreateUpdate,
      destroyForResource: operations.preferenceOverridesDestroyForResource,
    },
  },
  projects: {
    get: operations.project,
    list: operations.projects,
    create: operations.projectCreate,
    claim: operations.projectClaim,
    update: operations.projectUpdate,
    delete: operations.projectDelete,
    leave: operations.projectLeave,
    transfer: {
      initiate: operations.projectTransferInitiate,
      confirm: operations.projectTransferConfirm,
      transfer: operations.projectTransfer,
    },
    docker: {
      composeImport: operations.dockerComposeImport,
    },
    invitations: {
      get: operations.projectInvitation,
      list: operations.projectInvitations,
      create: operations.projectInvitationCreate,
      resend: operations.projectInvitationResend,
      delete: operations.projectInvitationDelete,
      accept: operations.projectInvitationAccept,
      inviteUser: operations.projectInviteUser,
      code: operations.projectInviteCode,
    },
    members: {
      list: operations.projectMembers,
      update: operations.projectMemberUpdate,
      remove: operations.projectMemberRemove,
    },
    featureFlags: {
      add: operations.featureFlagAdd,
      remove: operations.featureFlagRemove,
    },
    schedules: {
      delete: operations.projectScheduleDelete,
      cancelDeletion: operations.projectScheduleDeleteCancel,
      forceDelete: operations.projectScheduleDeleteForce,
    },
    tokens: {
      get: operations.projectToken,
      list: operations.projectTokens,
      create: operations.projectTokenCreate,
      delete: operations.projectTokenDelete,
    },
    access: {
      project: operations.projectResourceAccess,
      resource: operations.resourceAccess,
    },
    workflows: {
      status: operations.workflowStatus,
    },
  },
  services: {
    get: operations.service,
    list: operations.services,
    create: operations.serviceCreate,
    update: operations.serviceUpdate,
    delete: operations.serviceDelete,
    connect: operations.serviceConnect,
    disconnect: operations.serviceDisconnect,
    removeUpstreamUrl: operations.serviceRemoveUpstreamUrl,
    domains: {
      available: operations.serviceDomainAvailable,
      create: operations.serviceDomainCreate,
      update: operations.serviceDomainUpdate,
      delete: operations.serviceDomainDelete,
    },
    featureFlags: {
      add: operations.serviceFeatureFlagAdd,
      remove: operations.serviceFeatureFlagRemove,
    },
    instances: {
      get: operations.serviceInstance,
      deploy: operations.serviceInstanceDeploy,
      deployV2: operations.serviceInstanceDeployV2,
      isUpdatable: operations.serviceInstanceIsUpdatable,
      limits: operations.serviceInstanceLimits,
      limitsUpdate: operations.serviceInstanceLimitsUpdate,
      limitOverride: operations.serviceInstanceLimitOverride,
      redeploy: operations.serviceInstanceRedeploy,
      update: operations.serviceInstanceUpdate,
    },
    functions: {
      runtime: operations.functionRuntime,
      runtimes: operations.functionRuntimes,
    },
  },
  templates: {
    get: operations.template,
    list: operations.templates,
    count: operations.templatesCount,
    clone: operations.templateClone,
    delete: operations.templateDelete,
    deploy: operations.templateDeployV2,
    generate: operations.templateGenerate,
    publish: operations.templatePublish,
    unpublish: operations.templateUnpublish,
    source: {
      forProject: operations.templateSourceForProject,
      ejectService: operations.templateServiceSourceEject,
    },
  },
  variables: {
    list: operations.variables,
    upsert: operations.variableUpsert,
    delete: operations.variableDelete,
    collectionUpsert: operations.variableCollectionUpsert,
    shared: {
      configure: operations.sharedVariableConfigure,
    },
    serviceDeployment: {
      variables: operations.variablesForServiceDeployment,
    },
  },
  volumes: {
    create: operations.volumeCreate,
    update: operations.volumeUpdate,
    delete: operations.volumeDelete,
    instance: {
      get: operations.volumeInstance,
      update: operations.volumeInstanceUpdate,
      backups: {
        create: operations.volumeInstanceBackupCreate,
        delete: operations.volumeInstanceBackupDelete,
        list: operations.volumeInstanceBackupList,
        lock: operations.volumeInstanceBackupLock,
        restore: operations.volumeInstanceBackupRestore,
        schedule: {
          list: operations.volumeInstanceBackupScheduleList,
          update: operations.volumeInstanceBackupScheduleUpdate,
        },
      },
    },
  },
  webhooks: {
    create: operations.webhookCreate,
    update: operations.webhookUpdate,
    delete: operations.webhookDelete,
    list: operations.webhooks,
  },
  workspaces: {
    get: operations.workspace,
    list: operations.externalWorkspaces,
    findByCode: operations.workspaceByCode,
    update: operations.workspaceUpdate,
    delete: operations.workspaceDelete,
    leave: operations.workspaceLeave,
    upsertSlackChannel: operations.workspaceUpsertSlackChannel,
    identityProviders: operations.workspaceIdentityProviders,
    inviteCode: {
      create: operations.workspaceInviteCodeCreate,
      use: operations.workspaceInviteCodeUse,
    },
    users: {
      invite: operations.workspaceUserInvite,
      remove: operations.workspaceUserRemove,
    },
    permissionChange: operations.workspacePermissionChange,
    templates: operations.workspaceTemplates,
    trustedDomains: {
      list: operations.trustedDomains,
      create: operations.trustedDomainCreate,
      delete: operations.trustedDomainDelete,
    },
  },
  regions: {
    list: operations.regions,
  },
  misc: {
    changelogBlockImage: operations.changelogBlockImage,
    platformStatus: operations.platformStatus,
    publicStats: operations.publicStats,
    allPlatformFeatureFlags: operations.allPlatformFeatureFlags,
  },
} as const;

export type RailwayApi = BindShape<typeof namespaceShape>;

export const createRailwayApi = (client: RailwayClient): RailwayApi =>
  bindShape(client, namespaceShape);
