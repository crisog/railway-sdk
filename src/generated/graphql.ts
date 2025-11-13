import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  CanvasConfig: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DeploymentMeta: { input: any; output: any; }
  DisplayConfig: { input: any; output: any; }
  EnvironmentConfig: { input: any; output: any; }
  EnvironmentVariables: { input: any; output: any; }
  JSON: { input: any; output: any; }
  NotificationPayload: { input: any; output: any; }
  RailpackInfo: { input: any; output: any; }
  SerializedTemplateConfig: { input: any; output: any; }
  ServiceInstanceLimit: { input: any; output: any; }
  SubscriptionPlanLimit: { input: any; output: any; }
  SupportHealthMetrics: { input: any; output: any; }
  TemplateConfig: { input: any; output: any; }
  TemplateMetadata: { input: any; output: any; }
  TemplateServiceConfig: { input: any; output: any; }
  TemplateVolume: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AccessRule = {
  __typename?: 'AccessRule';
  disallowed?: Maybe<Scalars['String']['output']>;
};

export type ActiveFeatureFlag =
  | 'BUCKETS'
  | 'BUCKET_FILE_BROWSER'
  | 'DATA_UI_SSH'
  | 'HTTP_SERVICE_METRICS'
  | 'MAGIC_CONFIG'
  | 'MONOREPO_SUPPORT'
  | 'NOTIFICATIONS'
  | 'PRIORITY_BOARDING'
  | 'RAW_SQL_QUERIES'
  | 'UNIFIED_TEMPLATE_EDITOR';

export type ActivePlatformFlag =
  | 'ALLOW_REPLICA_METRICS'
  | 'BUCKETS'
  | 'BUILDER_V3_ROLLOUT_EXISTING_SERVICES'
  | 'BUILDER_V3_ROLLOUT_NEW_SERVICES'
  | 'DATA_UI_SSH'
  | 'DEMO_PERCENTAGE_ROLLOUT'
  | 'ENABLE_RAW_SQL_QUERIES'
  | 'MONOREPO_SUPPORT'
  | 'NEW_BILLING_FLOW'
  | 'NOTIFICATION_ENGINE'
  | 'UPDATED_VM_QUERIES'
  | 'USE_GH_WEBHOOKS_FOR_CHANGE_DETECTION'
  | 'VM_TIME_RANGE_QUERY';

export type ActiveServiceFeatureFlag =
  | 'COPY_VOLUME_TO_ENVIRONMENT'
  | 'PLACEHOLDER'
  | 'USE_GH_WEBHOOKS_FOR_CHANGE_DETECTION';

export type AdoptionInfo = Node & {
  __typename?: 'AdoptionInfo';
  adoptionLevel?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deltaLevel?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  matchedIcpEmail?: Maybe<Scalars['String']['output']>;
  monthlyEstimatedUsage?: Maybe<Scalars['Float']['output']>;
  numConfigFile: Scalars['Int']['output'];
  numCronSchedule: Scalars['Int']['output'];
  numDeploys: Scalars['Int']['output'];
  numEnvs: Scalars['Int']['output'];
  numFailedDeploys: Scalars['Int']['output'];
  numHealthcheck: Scalars['Int']['output'];
  numIconConfig: Scalars['Int']['output'];
  numRegion: Scalars['Int']['output'];
  numReplicas: Scalars['Int']['output'];
  numRootDirectory: Scalars['Int']['output'];
  numSeats: Scalars['Int']['output'];
  numServices: Scalars['Int']['output'];
  numVariables: Scalars['Int']['output'];
  numWatchPatterns: Scalars['Int']['output'];
  totalCores?: Maybe<Scalars['Float']['output']>;
  totalDisk?: Maybe<Scalars['Float']['output']>;
  totalNetwork?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  workspace: Workspace;
};

/** The aggregated usage of a single measurement. */
export type AggregatedUsage = {
  __typename?: 'AggregatedUsage';
  /** The measurement that was aggregated. */
  measurement: MetricMeasurement;
  /** The tags that were used to group the metric. Only the tags that were used in the `groupBy` will be present. */
  tags: MetricTags;
  /** The aggregated value. */
  value: Scalars['Float']['output'];
};

export type AllDomains = {
  __typename?: 'AllDomains';
  customDomains: Array<CustomDomain>;
  serviceDomains: Array<ServiceDomain>;
};

export type ApiToken = Node & {
  __typename?: 'ApiToken';
  displayToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type ApiTokenCreateInput = {
  name: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type ApiTokenRateLimit = {
  __typename?: 'ApiTokenRateLimit';
  remainingPoints: Scalars['Int']['output'];
  resetsAt: Scalars['String']['output'];
};

export type AppliedByMember = {
  __typename?: 'AppliedByMember';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type BanReasonHistory = Node & {
  __typename?: 'BanReasonHistory';
  actor?: Maybe<User>;
  banReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type BaseEnvironmentOverrideInput = {
  baseEnvironmentOverrideId?: InputMaybe<Scalars['String']['input']>;
};

/** The billing period for a customers subscription. */
export type BillingPeriod = {
  __typename?: 'BillingPeriod';
  end: Scalars['DateTime']['output'];
  start: Scalars['DateTime']['output'];
};

export type Builder =
  | 'HEROKU'
  | 'NIXPACKS'
  | 'PAKETO'
  | 'RAILPACK';

export type CdnProvider =
  | 'DETECTED_CDN_PROVIDER_CLOUDFLARE'
  | 'DETECTED_CDN_PROVIDER_UNSPECIFIED'
  | 'UNRECOGNIZED';

export type CertificatePublicData = {
  __typename?: 'CertificatePublicData';
  domainNames: Array<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  fingerprintSha256: Scalars['String']['output'];
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  keyType: KeyType;
};

export type CertificateStatus =
  | 'CERTIFICATE_STATUS_TYPE_ISSUE_FAILED'
  | 'CERTIFICATE_STATUS_TYPE_ISSUING'
  | 'CERTIFICATE_STATUS_TYPE_UNSPECIFIED'
  | 'CERTIFICATE_STATUS_TYPE_VALID'
  | 'CERTIFICATE_STATUS_TYPE_VALIDATING_OWNERSHIP'
  | 'UNRECOGNIZED';

export type CnameCheck = {
  __typename?: 'CnameCheck';
  link?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  status: CnameCheckStatus;
};

export type CnameCheckStatus =
  | 'ERROR'
  | 'INFO'
  | 'INVALID'
  | 'VALID'
  | 'WAITING';

export type Container = Node & {
  __typename?: 'Container';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  environment: Environment;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  migratedAt?: Maybe<Scalars['DateTime']['output']>;
  plugin: Plugin;
  pluginId: Scalars['String']['output'];
};

export type Credit = Node & {
  __typename?: 'Credit';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  type: CreditType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreditType =
  | 'APPLIED'
  | 'CREDIT'
  | 'DEBIT'
  | 'STRIPE'
  | 'TRANSFER'
  | 'WAIVED';

export type CustomDomain = Domain & {
  __typename?: 'CustomDomain';
  /** @deprecated Use the `status` field instead. */
  cnameCheck: CnameCheck;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  domain: Scalars['String']['output'];
  edgeId?: Maybe<Scalars['String']['output']>;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  serviceId: Scalars['String']['output'];
  status: CustomDomainStatus;
  targetPort?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomDomainCreateInput = {
  domain: Scalars['String']['input'];
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomDomainStatus = {
  __typename?: 'CustomDomainStatus';
  cdnProvider?: Maybe<CdnProvider>;
  certificateStatus: CertificateStatus;
  certificates?: Maybe<Array<CertificatePublicData>>;
  dnsRecords: Array<DnsRecords>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  /** The total amount of credits that have been applied during the current billing period. */
  appliedCredits: Scalars['Float']['output'];
  billingAddress?: Maybe<CustomerAddress>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingPeriod: BillingPeriod;
  /** The total amount of unused credits for the customer. */
  creditBalance: Scalars['Float']['output'];
  credits: CustomerCreditsConnection;
  /** The current usage for the customer. This value is cached and may not be up to date. */
  currentUsage: Scalars['Float']['output'];
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  defaultPaymentMethodId?: Maybe<Scalars['String']['output']>;
  hasExhaustedFreePlan: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  invoices: Array<CustomerInvoice>;
  isPrepaying: Scalars['Boolean']['output'];
  isTrialing: Scalars['Boolean']['output'];
  isUsageSubscriber: Scalars['Boolean']['output'];
  isWithdrawingToCredits: Scalars['Boolean']['output'];
  planLimitOverride?: Maybe<PlanLimitOverride>;
  remainingUsageCreditBalance: Scalars['Float']['output'];
  state: SubscriptionState;
  stripeCustomerId: Scalars['String']['output'];
  subscriptions: Array<CustomerSubscription>;
  supportedWithdrawalPlatforms: Array<WithdrawalPlatformTypes>;
  taxIds: Array<CustomerTaxId>;
  trialDaysRemaining: Scalars['Int']['output'];
  usageLimit?: Maybe<UsageLimit>;
  workspace: Workspace;
};


export type CustomerCreditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type CustomerCreditsConnection = {
  __typename?: 'CustomerCreditsConnection';
  edges: Array<CustomerCreditsConnectionEdge>;
  pageInfo: PageInfo;
};

export type CustomerCreditsConnectionEdge = {
  __typename?: 'CustomerCreditsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Credit;
};

export type CustomerInvoice = {
  __typename?: 'CustomerInvoice';
  amountDue: Scalars['Float']['output'];
  amountPaid: Scalars['Float']['output'];
  hostedURL?: Maybe<Scalars['String']['output']>;
  invoiceId: Scalars['String']['output'];
  items: Array<SubscriptionItem>;
  lastPaymentError?: Maybe<Scalars['String']['output']>;
  paymentIntentStatus?: Maybe<Scalars['String']['output']>;
  pdfURL?: Maybe<Scalars['String']['output']>;
  periodEnd: Scalars['String']['output'];
  periodStart: Scalars['String']['output'];
  reissuedInvoiceFrom?: Maybe<Scalars['String']['output']>;
  reissuedInvoiceOf?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type CustomerSubscription = {
  __typename?: 'CustomerSubscription';
  billingCycleAnchor: Scalars['DateTime']['output'];
  cancelAt?: Maybe<Scalars['String']['output']>;
  cancelAtPeriodEnd: Scalars['Boolean']['output'];
  couponId?: Maybe<Scalars['String']['output']>;
  discounts: Array<SubscriptionDiscount>;
  id: Scalars['String']['output'];
  items: Array<SubscriptionItem>;
  latestInvoiceId: Scalars['String']['output'];
  nextInvoiceCurrentTotal: Scalars['Int']['output'];
  nextInvoiceDate: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type CustomerTaxId = {
  __typename?: 'CustomerTaxId';
  id: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type DnsRecordPurpose =
  | 'DNS_RECORD_PURPOSE_ACME_DNS01_CHALLENGE'
  | 'DNS_RECORD_PURPOSE_TRAFFIC_ROUTE'
  | 'DNS_RECORD_PURPOSE_UNSPECIFIED'
  | 'UNRECOGNIZED';

export type DnsRecordStatus =
  | 'DNS_RECORD_STATUS_PROPAGATED'
  | 'DNS_RECORD_STATUS_REQUIRES_UPDATE'
  | 'DNS_RECORD_STATUS_UNSPECIFIED'
  | 'UNRECOGNIZED';

export type DnsRecordType =
  | 'DNS_RECORD_TYPE_A'
  | 'DNS_RECORD_TYPE_CNAME'
  | 'DNS_RECORD_TYPE_NS'
  | 'DNS_RECORD_TYPE_UNSPECIFIED'
  | 'UNRECOGNIZED';

export type DnsRecords = {
  __typename?: 'DNSRecords';
  currentValue: Scalars['String']['output'];
  fqdn: Scalars['String']['output'];
  hostlabel: Scalars['String']['output'];
  purpose: DnsRecordPurpose;
  recordType: DnsRecordType;
  requiredValue: Scalars['String']['output'];
  status: DnsRecordStatus;
  zone: Scalars['String']['output'];
};

export type Deployment = Node & {
  __typename?: 'Deployment';
  canRedeploy: Scalars['Boolean']['output'];
  canRollback: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<DeploymentCreator>;
  /** Check if a deployment's instances have all stopped */
  deploymentStopped: Scalars['Boolean']['output'];
  environment: Environment;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instances: Array<DeploymentDeploymentInstance>;
  meta?: Maybe<Scalars['DeploymentMeta']['output']>;
  projectId: Scalars['String']['output'];
  service: Service;
  serviceId?: Maybe<Scalars['String']['output']>;
  snapshotId?: Maybe<Scalars['String']['output']>;
  sockets: Array<DeploymentSocket>;
  staticUrl?: Maybe<Scalars['String']['output']>;
  status: DeploymentStatus;
  statusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  suggestAddServiceDomain: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type DeploymentCreator = {
  __typename?: 'DeploymentCreator';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type DeploymentDeploymentInstance = {
  __typename?: 'DeploymentDeploymentInstance';
  id: Scalars['String']['output'];
  status: DeploymentInstanceStatus;
};

export type DeploymentEvent = Node & {
  __typename?: 'DeploymentEvent';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payload?: Maybe<DeploymentEventPayload>;
  step: DeploymentEventStep;
};

export type DeploymentEventPayload = {
  __typename?: 'DeploymentEventPayload';
  error?: Maybe<Scalars['String']['output']>;
};

export type DeploymentEventStep =
  | 'BUILD_IMAGE'
  | 'CREATE_CONTAINER'
  | 'DRAIN_INSTANCES'
  | 'HEALTHCHECK'
  | 'MIGRATE_VOLUMES'
  | 'PRE_DEPLOY_COMMAND'
  | 'PUBLISH_IMAGE'
  | 'SNAPSHOT_CODE'
  | 'WAIT_FOR_DEPENDENCIES';

export type DeploymentInstanceExecution = Node & {
  __typename?: 'DeploymentInstanceExecution';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deploymentId: Scalars['String']['output'];
  deploymentMeta: Scalars['DeploymentMeta']['output'];
  id: Scalars['ID']['output'];
  status: DeploymentInstanceStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type DeploymentInstanceExecutionCreateInput = {
  serviceInstanceId: Scalars['String']['input'];
};

export type DeploymentInstanceExecutionInput = {
  deploymentId: Scalars['String']['input'];
};

export type DeploymentInstanceExecutionListInput = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type DeploymentInstanceStatus =
  | 'CRASHED'
  | 'CREATED'
  | 'EXITED'
  | 'INITIALIZING'
  | 'REMOVED'
  | 'REMOVING'
  | 'RESTARTING'
  | 'RUNNING'
  | 'SKIPPED'
  | 'STOPPED';

export type DeploymentListInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DeploymentStatusInput>;
};

export type DeploymentSnapshot = Node & {
  __typename?: 'DeploymentSnapshot';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variables: Scalars['EnvironmentVariables']['output'];
};

export type DeploymentSocket = {
  __typename?: 'DeploymentSocket';
  ipv6: Scalars['Boolean']['output'];
  port: Scalars['Int']['output'];
  processName: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type DeploymentStatus =
  | 'BUILDING'
  | 'CRASHED'
  | 'DEPLOYING'
  | 'FAILED'
  | 'INITIALIZING'
  | 'NEEDS_APPROVAL'
  | 'QUEUED'
  | 'REMOVED'
  | 'REMOVING'
  | 'SKIPPED'
  | 'SLEEPING'
  | 'SUCCESS'
  | 'WAITING';

export type DeploymentStatusInput = {
  in?: InputMaybe<Array<DeploymentStatus>>;
  notIn?: InputMaybe<Array<DeploymentStatus>>;
};

export type DeploymentTrigger = Node & {
  __typename?: 'DeploymentTrigger';
  baseEnvironmentOverrideId?: Maybe<Scalars['String']['output']>;
  branch: Scalars['String']['output'];
  checkSuites: Scalars['Boolean']['output'];
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  projectId: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  repository: Scalars['String']['output'];
  serviceId?: Maybe<Scalars['String']['output']>;
  validCheckSuites: Scalars['Int']['output'];
};

export type DeploymentTriggerCreateInput = {
  branch: Scalars['String']['input'];
  checkSuites?: InputMaybe<Scalars['Boolean']['input']>;
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  repository: Scalars['String']['input'];
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
};

export type DeploymentTriggerUpdateInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  checkSuites?: InputMaybe<Scalars['Boolean']['input']>;
  repository?: InputMaybe<Scalars['String']['input']>;
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
};

export type DockerComposeImport = {
  __typename?: 'DockerComposeImport';
  errors: Array<Scalars['String']['output']>;
  patch?: Maybe<Scalars['EnvironmentConfig']['output']>;
};

export type Domain = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  domain: Scalars['String']['output'];
  edgeId?: Maybe<Scalars['String']['output']>;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  serviceId: Scalars['String']['output'];
  targetPort?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DomainAvailable = {
  __typename?: 'DomainAvailable';
  available: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
};

export type DomainWithStatus = {
  __typename?: 'DomainWithStatus';
  cdnProvider?: Maybe<CdnProvider>;
  certificateStatus: CertificateStatus;
  certificates?: Maybe<Array<CertificatePublicData>>;
  dnsRecords: Array<DnsRecords>;
  domain?: Maybe<Domain>;
};

export type EgressGateway = {
  __typename?: 'EgressGateway';
  ipv4: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type EgressGatewayCreateInput = {
  environmentId: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
};

export type EgressGatewayServiceTargetInput = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type Environment = Node & {
  __typename?: 'Environment';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deploymentTriggers: EnvironmentDeploymentTriggersConnection;
  deployments: EnvironmentDeploymentsConnection;
  id: Scalars['ID']['output'];
  isEphemeral: Scalars['Boolean']['output'];
  meta?: Maybe<EnvironmentMeta>;
  name: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  serviceInstances: EnvironmentServiceInstancesConnection;
  sourceEnvironment?: Maybe<Environment>;
  unmergedChangesCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  variables: EnvironmentVariablesConnection;
  volumeInstances: EnvironmentVolumeInstancesConnection;
};


export type EnvironmentDeploymentTriggersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EnvironmentDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EnvironmentServiceInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EnvironmentVariablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EnvironmentVolumeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type EnvironmentCreateInput = {
  /** If true, the changes will be applied in the background and the mutation will return immediately. If false, the mutation will wait for the changes to be applied before returning. */
  applyChangesInBackground?: InputMaybe<Scalars['Boolean']['input']>;
  ephemeral?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  /** When committing the changes immediately, skip any initial deployments. */
  skipInitialDeploys?: InputMaybe<Scalars['Boolean']['input']>;
  /** Create the environment with all of the services, volumes, configuration, and variables from this source environment. */
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  /** Stage the initial changes for the environment. If false (default), the changes will be committed immediately. */
  stageInitialChanges?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentDeploymentTriggersConnection = {
  __typename?: 'EnvironmentDeploymentTriggersConnection';
  edges: Array<EnvironmentDeploymentTriggersConnectionEdge>;
  pageInfo: PageInfo;
};

export type EnvironmentDeploymentTriggersConnectionEdge = {
  __typename?: 'EnvironmentDeploymentTriggersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: DeploymentTrigger;
};

export type EnvironmentDeploymentsConnection = {
  __typename?: 'EnvironmentDeploymentsConnection';
  edges: Array<EnvironmentDeploymentsConnectionEdge>;
  pageInfo: PageInfo;
};

export type EnvironmentDeploymentsConnectionEdge = {
  __typename?: 'EnvironmentDeploymentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Deployment;
};

export type EnvironmentMeta = {
  __typename?: 'EnvironmentMeta';
  baseBranch?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['String']['output']>;
  prCommentId?: Maybe<Scalars['Int']['output']>;
  prNumber?: Maybe<Scalars['Int']['output']>;
  prRepo?: Maybe<Scalars['String']['output']>;
  prTitle?: Maybe<Scalars['String']['output']>;
};

export type EnvironmentPatch = Node & {
  __typename?: 'EnvironmentPatch';
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  appliedBy?: Maybe<AppliedByMember>;
  createdAt: Scalars['DateTime']['output'];
  environment: Environment;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastAppliedError?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: EnvironmentPatchStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type EnvironmentPatchStatus =
  | 'APPLYING'
  | 'COMMITTED'
  | 'STAGED';

export type EnvironmentRenameInput = {
  name: Scalars['String']['input'];
};

export type EnvironmentServiceInstancesConnection = {
  __typename?: 'EnvironmentServiceInstancesConnection';
  edges: Array<EnvironmentServiceInstancesConnectionEdge>;
  pageInfo: PageInfo;
};

export type EnvironmentServiceInstancesConnectionEdge = {
  __typename?: 'EnvironmentServiceInstancesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ServiceInstance;
};

export type EnvironmentTriggersDeployInput = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type EnvironmentVariablesConnection = {
  __typename?: 'EnvironmentVariablesConnection';
  edges: Array<EnvironmentVariablesConnectionEdge>;
  pageInfo: PageInfo;
};

export type EnvironmentVariablesConnectionEdge = {
  __typename?: 'EnvironmentVariablesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Variable;
};

export type EnvironmentVolumeInstancesConnection = {
  __typename?: 'EnvironmentVolumeInstancesConnection';
  edges: Array<EnvironmentVolumeInstancesConnectionEdge>;
  pageInfo: PageInfo;
};

export type EnvironmentVolumeInstancesConnectionEdge = {
  __typename?: 'EnvironmentVolumeInstancesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: VolumeInstance;
};

/** The estimated usage of a single measurement. */
export type EstimatedUsage = {
  __typename?: 'EstimatedUsage';
  /** The estimated value. */
  estimatedValue: Scalars['Float']['output'];
  /** The measurement that was estimated. */
  measurement: MetricMeasurement;
  projectId: Scalars['String']['output'];
};

export type Event = Node & {
  __typename?: 'Event';
  action: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  environment?: Maybe<Environment>;
  environmentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  object: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  project: Project;
  projectId?: Maybe<Scalars['String']['output']>;
  severity: EventSeverity;
};

export type EventFilterInput = {
  action?: InputMaybe<EventStringListFilter>;
  object?: InputMaybe<EventStringListFilter>;
};

export type EventSeverity =
  | 'CRITICAL'
  | 'INFO'
  | 'NOTICE'
  | 'WARNING';

export type EventStringListFilter = {
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ExplicitOwnerInput = {
  /** The ID of the owner */
  id: Scalars['String']['input'];
  /** The type of owner */
  type?: InputMaybe<ResourceOwnerType>;
};

export type ExternalWorkspace = {
  __typename?: 'ExternalWorkspace';
  allowDeprecatedRegions?: Maybe<Scalars['Boolean']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  banReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currentSessionHasAccess?: Maybe<Scalars['Boolean']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  customerState: SubscriptionState;
  discordRole?: Maybe<Scalars['String']['output']>;
  hasBAA: Scalars['Boolean']['output'];
  hasSAML: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isTrialing?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  plan: Plan;
  preferredRegion?: Maybe<Scalars['String']['output']>;
  projects: Array<Project>;
  supportTierOverride?: Maybe<Scalars['String']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
};

export type FeatureFlagToggleInput = {
  flag: ActiveFeatureFlag;
};

export type FunctionRuntime = {
  __typename?: 'FunctionRuntime';
  /** The image of the function runtime */
  image: Scalars['String']['output'];
  /** The latest version of the function runtime */
  latestVersion: FunctionRuntimeVersion;
  /** The name of the function runtime */
  name: FunctionRuntimeName;
  /** The versions of the function runtime */
  versions: Array<FunctionRuntimeVersion>;
};

/** Supported function runtime environments */
export type FunctionRuntimeName =
  | 'bun';

export type FunctionRuntimeVersion = {
  __typename?: 'FunctionRuntimeVersion';
  image: Scalars['String']['output'];
  tag: Scalars['String']['output'];
};

export type GitHubAccess = {
  __typename?: 'GitHubAccess';
  hasAccess: Scalars['Boolean']['output'];
  isPublic: Scalars['Boolean']['output'];
};

export type GitHubBranch = {
  __typename?: 'GitHubBranch';
  name: Scalars['String']['output'];
};

export type GitHubRepo = {
  __typename?: 'GitHubRepo';
  defaultBranch: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  installationId: Scalars['String']['output'];
  isPrivate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerAvatarUrl?: Maybe<Scalars['String']['output']>;
};

export type GitHubRepoDeployInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  repo: Scalars['String']['input'];
};

export type GitHubRepoUpdateInput = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type GitHubRepoWithoutInstallation = {
  __typename?: 'GitHubRepoWithoutInstallation';
  defaultBranch: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isPrivate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type HerokuApp = {
  __typename?: 'HerokuApp';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type HerokuImportVariablesInput = {
  environmentId: Scalars['String']['input'];
  herokuAppId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

/** The result of a http logs query. */
export type HttpLog = {
  __typename?: 'HttpLog';
  /** The client user agent */
  clientUa: Scalars['String']['output'];
  /** The deployment ID that was requested */
  deploymentId: Scalars['String']['output'];
  /** The deployment instance ID that was requested */
  deploymentInstanceId: Scalars['String']['output'];
  /** The downstream HTTP protocol version */
  downstreamProto: Scalars['String']['output'];
  /** The edge region the client connected to */
  edgeRegion: Scalars['String']['output'];
  /** The requested host */
  host: Scalars['String']['output'];
  /** The http status of the log */
  httpStatus: Scalars['Int']['output'];
  /** The request HTTP method */
  method: Scalars['String']['output'];
  /** The requested path */
  path: Scalars['String']['output'];
  /** The unique request ID */
  requestId: Scalars['String']['output'];
  /** Details about the upstream response */
  responseDetails: Scalars['String']['output'];
  /** Received bytes */
  rxBytes: Scalars['Int']['output'];
  /** The source IP of the request */
  srcIp: Scalars['String']['output'];
  /** The timestamp the log was created */
  timestamp: Scalars['String']['output'];
  /** The total duration the request took */
  totalDuration: Scalars['Int']['output'];
  /** Outgoing bytes */
  txBytes: Scalars['Int']['output'];
  /** The upstream address */
  upstreamAddress: Scalars['String']['output'];
  /** Any upstream errors that occurred */
  upstreamErrors: Scalars['String']['output'];
  /** The upstream HTTP protocol version */
  upstreamProto: Scalars['String']['output'];
  /** How long the upstream request took to respond */
  upstreamRqDuration: Scalars['Int']['output'];
};

export type Incident = {
  __typename?: 'Incident';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: IncidentStatus;
  url: Scalars['String']['output'];
};

export type IncidentStatus =
  | 'IDENTIFIED'
  | 'INVESTIGATING'
  | 'MONITORING'
  | 'RESOLVED';

export type Integration = Node & {
  __typename?: 'Integration';
  config: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
};

export type IntegrationAuth = Node & {
  __typename?: 'IntegrationAuth';
  id: Scalars['ID']['output'];
  integrations: IntegrationAuthIntegrationsConnection;
  provider: Scalars['String']['output'];
  providerId: Scalars['String']['output'];
};


export type IntegrationAuthIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type IntegrationAuthIntegrationsConnection = {
  __typename?: 'IntegrationAuthIntegrationsConnection';
  edges: Array<IntegrationAuthIntegrationsConnectionEdge>;
  pageInfo: PageInfo;
};

export type IntegrationAuthIntegrationsConnectionEdge = {
  __typename?: 'IntegrationAuthIntegrationsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Integration;
};

export type IntegrationCreateInput = {
  config: Scalars['JSON']['input'];
  integrationAuthId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type IntegrationUpdateInput = {
  config: Scalars['JSON']['input'];
  integrationAuthId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type InviteCode = Node & {
  __typename?: 'InviteCode';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  projectId: Scalars['String']['output'];
  role: ProjectRole;
};

export type JobApplicationCreateInput = {
  email: Scalars['String']['input'];
  jobId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  why: Scalars['String']['input'];
};

export type KeyType =
  | 'KEY_TYPE_ECDSA'
  | 'KEY_TYPE_RSA_2048'
  | 'KEY_TYPE_RSA_4096'
  | 'KEY_TYPE_UNSPECIFIED'
  | 'UNRECOGNIZED';

/** The result of a logs query. */
export type Log = {
  __typename?: 'Log';
  /** The attributes that were parsed from a structured log */
  attributes: Array<LogAttribute>;
  /** The contents of the log message */
  message: Scalars['String']['output'];
  /** The severity of the log message (eg. err) */
  severity?: Maybe<Scalars['String']['output']>;
  /** The tags that were associated with the log */
  tags?: Maybe<LogTags>;
  /** The timestamp of the log message in format RFC3339 (nano) */
  timestamp: Scalars['String']['output'];
};

/** The attributes associated with a structured log */
export type LogAttribute = {
  __typename?: 'LogAttribute';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** The tags associated with a specific log */
export type LogTags = {
  __typename?: 'LogTags';
  deploymentId?: Maybe<Scalars['String']['output']>;
  deploymentInstanceId?: Maybe<Scalars['String']['output']>;
  environmentId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Plugins have been removed */
  pluginId?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  snapshotId?: Maybe<Scalars['String']['output']>;
};

export type LoginSessionAuthInput = {
  code: Scalars['String']['input'];
  hostname?: InputMaybe<Scalars['String']['input']>;
};

export type Maintenance = {
  __typename?: 'Maintenance';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: MaintenanceStatus;
  url: Scalars['String']['output'];
};

export type MaintenanceStatus =
  | 'COMPLETED'
  | 'INPROGRESS'
  | 'NOTSTARTEDYET';

/** A single sample of a metric. */
export type Metric = {
  __typename?: 'Metric';
  /** The timestamp of the sample. Represented has number of seconds since the Unix epoch. */
  ts: Scalars['Int']['output'];
  /** The value of the sample. */
  value: Scalars['Float']['output'];
};

/** A thing that can be measured on Railway. */
export type MetricMeasurement =
  | 'BACKUP_USAGE_GB'
  | 'CPU_LIMIT'
  | 'CPU_USAGE'
  | 'CPU_USAGE_2'
  | 'DISK_USAGE_GB'
  | 'EPHEMERAL_DISK_USAGE_GB'
  | 'MEASUREMENT_UNSPECIFIED'
  | 'MEMORY_LIMIT_GB'
  | 'MEMORY_USAGE_GB'
  | 'NETWORK_RX_GB'
  | 'NETWORK_TX_GB'
  | 'UNRECOGNIZED';

/** A property that can be used to group metrics. */
export type MetricTag =
  | 'DEPLOYMENT_ID'
  | 'DEPLOYMENT_INSTANCE_ID'
  | 'ENVIRONMENT_ID'
  | 'HOST_TYPE'
  | 'KEY_UNSPECIFIED'
  | 'PLUGIN_ID'
  | 'PROJECT_ID'
  | 'REGION'
  | 'SERVICE_ID'
  | 'UNRECOGNIZED'
  | 'VOLUME_ID'
  | 'VOLUME_INSTANCE_ID';

/** The tags that were used to group the metric. */
export type MetricTags = {
  __typename?: 'MetricTags';
  deploymentId?: Maybe<Scalars['String']['output']>;
  deploymentInstanceId?: Maybe<Scalars['String']['output']>;
  environmentId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Plugins have been removed */
  pluginId?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  volumeId?: Maybe<Scalars['String']['output']>;
  volumeInstanceId?: Maybe<Scalars['String']['output']>;
};

/** The result of a metrics query. */
export type MetricsResult = {
  __typename?: 'MetricsResult';
  /** The measurement of the metric. */
  measurement: MetricMeasurement;
  /** The tags that were used to group the metric. Only the tags that were used to by will be present. */
  tags: MetricTags;
  /** The samples of the metric. */
  values: Array<Metric>;
};

export type MonitorAlertResourceType =
  | 'SERVICE'
  | 'VOLUME';

export type MonitorStatus =
  | 'ALERT'
  | 'OK';

export type MonitorThresholdCondition =
  | 'above'
  | 'below';

export type MonitorThresholdConfig = {
  __typename?: 'MonitorThresholdConfig';
  condition: MonitorThresholdCondition;
  measurement?: Maybe<MetricMeasurement>;
  threshold: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new API token. */
  apiTokenCreate: Scalars['String']['output'];
  /** Deletes an API token. */
  apiTokenDelete: Scalars['Boolean']['output'];
  /** Sets the base environment override for a deployment trigger. */
  baseEnvironmentOverride: Scalars['Boolean']['output'];
  /** Creates a new custom domain. */
  customDomainCreate: CustomDomain;
  /** Deletes a custom domain. */
  customDomainDelete: Scalars['Boolean']['output'];
  /** Updates a custom domain. */
  customDomainUpdate: Scalars['Boolean']['output'];
  /** Create a free plan subscription for a customer */
  customerCreateFreePlanSubscription: Scalars['Boolean']['output'];
  /** Toggle whether a customer is automatically withdrawing to credits */
  customerTogglePayoutsToCredits: Scalars['Boolean']['output'];
  /** Approves a deployment. */
  deploymentApprove: Scalars['Boolean']['output'];
  /** Cancels a deployment. */
  deploymentCancel: Scalars['Boolean']['output'];
  /** Invoke a deployment instance execution. */
  deploymentInstanceExecutionCreate: Scalars['Boolean']['output'];
  /** Redeploys a deployment. */
  deploymentRedeploy: Deployment;
  /** Removes a deployment. */
  deploymentRemove: Scalars['Boolean']['output'];
  /** Restarts a deployment. */
  deploymentRestart: Scalars['Boolean']['output'];
  /** Rolls back to a deployment. */
  deploymentRollback: Scalars['Boolean']['output'];
  /** Stops a deployment. */
  deploymentStop: Scalars['Boolean']['output'];
  /** Creates a deployment trigger. */
  deploymentTriggerCreate: DeploymentTrigger;
  /** Deletes a deployment trigger. */
  deploymentTriggerDelete: Scalars['Boolean']['output'];
  /** Updates a deployment trigger. */
  deploymentTriggerUpdate: DeploymentTrigger;
  /** Create services and volumes from docker compose */
  dockerComposeImport: DockerComposeImport;
  /** Create a new egress gateway association for a service instance */
  egressGatewayAssociationCreate: Array<EgressGateway>;
  /** Clear all egress gateway associations for a service instance */
  egressGatewayAssociationsClear: Scalars['Boolean']['output'];
  /** Change the User's account email if there is a valid change email request. */
  emailChangeConfirm: Scalars['Boolean']['output'];
  /** Initiate an email change request for a user */
  emailChangeInitiate: Scalars['Boolean']['output'];
  /** Creates a new environment. */
  environmentCreate: Environment;
  /** Deletes an environment. */
  environmentDelete: Scalars['Boolean']['output'];
  /** Commit the provided patch to the environment. */
  environmentPatchCommit: Scalars['String']['output'];
  /** Renames an environment. */
  environmentRename: Environment;
  /** Deploys all connected triggers for an environment. */
  environmentTriggersDeploy: Scalars['Boolean']['output'];
  /** Agree to the fair use policy for the currently authenticated user */
  fairUseAgree: Scalars['Boolean']['output'];
  /** Add a feature flag for a user */
  featureFlagAdd: Scalars['Boolean']['output'];
  /** Remove a feature flag for a user */
  featureFlagRemove: Scalars['Boolean']['output'];
  /** Deploys a GitHub repo */
  githubRepoDeploy: Scalars['String']['output'];
  /** Updates a GitHub repo through the linked template */
  githubRepoUpdate: Scalars['Boolean']['output'];
  /** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
  herokuImportVariables: Scalars['Int']['output'];
  /** Create an integration for a project */
  integrationCreate: Integration;
  /** Delete an integration for a project */
  integrationDelete: Scalars['Boolean']['output'];
  /** Update an integration for a project */
  integrationUpdate: Integration;
  /** Join a project using an invite code */
  inviteCodeUse: Project;
  /** Creates a new job application. */
  jobApplicationCreate: Scalars['Boolean']['output'];
  /** Auth a login session for a user */
  loginSessionAuth: Scalars['Boolean']['output'];
  /** Cancel a login session */
  loginSessionCancel: Scalars['Boolean']['output'];
  /** Get a token for a login session if it exists */
  loginSessionConsume?: Maybe<Scalars['String']['output']>;
  /** Start a CLI login session */
  loginSessionCreate: Scalars['String']['output'];
  /** Verify if a login session is valid */
  loginSessionVerify: Scalars['Boolean']['output'];
  /** Marks notification deliveries as read */
  notificationDeliveriesMarkAsRead: Scalars['Boolean']['output'];
  /** Create an observability dashboard */
  observabilityDashboardCreate: Scalars['Boolean']['output'];
  /** Reset an observability dashboard to default dashboard items */
  observabilityDashboardReset: Scalars['Boolean']['output'];
  /** Update an observability dashboard */
  observabilityDashboardUpdate: Scalars['Boolean']['output'];
  /** Deletes a Passkey */
  passkeyDelete: Scalars['Boolean']['output'];
  /**
   * Creates a new plugin.
   * @deprecated Plugins are deprecated on Railway. Use database templates instead.
   */
  pluginCreate: Plugin;
  /**
   * Deletes a plugin.
   * @deprecated Plugins are deprecated
   */
  pluginDelete: Scalars['Boolean']['output'];
  /**
   * Reset envs and container for a plugin in an environment
   * @deprecated Plugins are deprecated
   */
  pluginReset: Scalars['Boolean']['output'];
  /**
   * Resets the credentials for a plugin in an environment
   * @deprecated Plugins are deprecated
   */
  pluginResetCredentials: Scalars['String']['output'];
  /**
   * Restarts a plugin.
   * @deprecated Plugins are deprecated
   */
  pluginRestart: Plugin;
  /**
   * Force start a plugin
   * @deprecated Plugins are deprecated
   */
  pluginStart: Scalars['Boolean']['output'];
  /**
   * Updates an existing plugin.
   * @deprecated Plugins are deprecated
   */
  pluginUpdate: Plugin;
  /** Create/Updates preferences overrides for a specific resource belonging to a user */
  preferenceOverridesCreateUpdate: Scalars['Boolean']['output'];
  /** Destroy preferences overrides for a specific resource belonging to a user */
  preferenceOverridesDestroyForResource: Scalars['Boolean']['output'];
  /** Update the email preferences for a user */
  preferencesUpdate: Preferences;
  /** Create or get a private network. */
  privateNetworkCreateOrGet: PrivateNetwork;
  /** Create or get a private network endpoint. */
  privateNetworkEndpointCreateOrGet: PrivateNetworkEndpoint;
  /** Delete a private network endpoint. */
  privateNetworkEndpointDelete: Scalars['Boolean']['output'];
  /** Rename a private network endpoint. */
  privateNetworkEndpointRename: Scalars['Boolean']['output'];
  /** Delete all private networks for an environment. */
  privateNetworksForEnvironmentDelete: Scalars['Boolean']['output'];
  /** Claims a project. */
  projectClaim: Project;
  /** Creates a new project. */
  projectCreate: Project;
  /** Deletes a project. */
  projectDelete: Scalars['Boolean']['output'];
  /** Accept a project invitation using the invite code */
  projectInvitationAccept: ProjectPermission;
  /** Create an invitation for a project */
  projectInvitationCreate: ProjectInvitation;
  /** Delete an invitation for a project */
  projectInvitationDelete: Scalars['Boolean']['output'];
  /** Resend an invitation for a project */
  projectInvitationResend: ProjectInvitation;
  /** Invite a user by email to a project */
  projectInviteUser: Scalars['Boolean']['output'];
  /** Leave project as currently authenticated user */
  projectLeave: Scalars['Boolean']['output'];
  /** Remove user from a project */
  projectMemberRemove: Array<ProjectMember>;
  /** Change the role for a user within a project */
  projectMemberUpdate: ProjectMember;
  /** Deletes a project with a 48 hour grace period. */
  projectScheduleDelete: Scalars['Boolean']['output'];
  /** Cancel scheduled deletion of a project */
  projectScheduleDeleteCancel: Scalars['Boolean']['output'];
  /** Force delete a scheduled deletion of a project (skips the grace period) */
  projectScheduleDeleteForce: Scalars['Boolean']['output'];
  /** Create a token for a project that has access to a specific environment */
  projectTokenCreate: Scalars['String']['output'];
  /** Delete a project token */
  projectTokenDelete: Scalars['Boolean']['output'];
  /** Transfer a project to a workspace */
  projectTransfer: Scalars['Boolean']['output'];
  /** Confirm the transfer of project ownership */
  projectTransferConfirm: Scalars['Boolean']['output'];
  /** Initiate the transfer of project ownership */
  projectTransferInitiate: Scalars['Boolean']['output'];
  /**
   * Transfer a project to a team
   * @deprecated Use projectTransfer instead
   */
  projectTransferToTeam: Scalars['Boolean']['output'];
  /** Updates a project. */
  projectUpdate: Project;
  /** Deletes a ProviderAuth. */
  providerAuthRemove: Scalars['Boolean']['output'];
  /** Generates a new set of recovery codes for the authenticated user. */
  recoveryCodeGenerate: RecoveryCodes;
  /** Validates a recovery code. */
  recoveryCodeValidate: Scalars['Boolean']['output'];
  /** Updates the ReferralInfo for the authenticated user. */
  referralInfoUpdate: ReferralInfo;
  /** Connect a service to a source */
  serviceConnect: Service;
  /** Creates a new service. */
  serviceCreate: Service;
  /** Deletes a service. */
  serviceDelete: Scalars['Boolean']['output'];
  /** Disconnect a service from a repo */
  serviceDisconnect: Service;
  /** Creates a new service domain. */
  serviceDomainCreate: ServiceDomain;
  /** Deletes a service domain. */
  serviceDomainDelete: Scalars['Boolean']['output'];
  /** Updates a service domain. */
  serviceDomainUpdate: Scalars['Boolean']['output'];
  /**
   * Duplicate a service, including its configuration, variables, and volumes.
   * @deprecated This API route is used only by the CLI. We plan to remove it in a future version. Please use the UI to duplicate services.
   */
  serviceDuplicate: Service;
  /** Add a feature flag for a service */
  serviceFeatureFlagAdd: Scalars['Boolean']['output'];
  /** Remove a feature flag for a service */
  serviceFeatureFlagRemove: Scalars['Boolean']['output'];
  /** Deploy a service instance */
  serviceInstanceDeploy: Scalars['Boolean']['output'];
  /** Deploy a service instance. Returns a deployment ID */
  serviceInstanceDeployV2: Scalars['String']['output'];
  /** Update the resource limits for a service instance */
  serviceInstanceLimitsUpdate: Scalars['Boolean']['output'];
  /** Redeploy a service instance */
  serviceInstanceRedeploy: Scalars['Boolean']['output'];
  /** Update a service instance */
  serviceInstanceUpdate: Scalars['Boolean']['output'];
  /** Remove the upstream URL from all service instances for this service */
  serviceRemoveUpstreamUrl: Service;
  /** Updates a service. */
  serviceUpdate: Service;
  /** Deletes a session. */
  sessionDelete: Scalars['Boolean']['output'];
  /** Configure a shared variable. */
  sharedVariableConfigure: Variable;
  /**
   * Creates a new TCP proxy for a service instance.
   * @deprecated Use staged changes and apply them. Creating a TCP proxy with this endpoint requires you to redeploy the service for it to be active.
   */
  tcpProxyCreate: TcpProxy;
  /** Deletes a TCP proxy by id */
  tcpProxyDelete: Scalars['Boolean']['output'];
  /** Duplicates an existing template */
  templateClone: Template;
  /** Deletes a template. */
  templateDelete: Scalars['Boolean']['output'];
  /**
   * Deploys a template.
   * @deprecated Deprecated in favor of templateDeployV2
   */
  templateDeploy: TemplateDeployPayload;
  /** Deploys a template using the serialized template config */
  templateDeployV2: TemplateDeployPayload;
  /** Generate a template for a project */
  templateGenerate: Template;
  /** Publishes a template. */
  templatePublish: Template;
  /** Ejects a service from the template and creates a new repo in the provided org. */
  templateServiceSourceEject: Scalars['Boolean']['output'];
  /** Unpublishes a template. */
  templateUnpublish: Scalars['Boolean']['output'];
  /** Create a new trusted domain for this workspace */
  trustedDomainCreate: Scalars['Boolean']['output'];
  /** Delete a trusted domain */
  trustedDomainDelete: Scalars['Boolean']['output'];
  /** Setup 2FA authorization for authenticated user. */
  twoFactorInfoCreate: RecoveryCodes;
  /** Deletes the TwoFactorInfo for the authenticated user. */
  twoFactorInfoDelete: Scalars['Boolean']['output'];
  /** Generates the 2FA app secret for the authenticated user. */
  twoFactorInfoSecret: TwoFactorInfoSecret;
  /** Validates the token for a 2FA action or for a login request. */
  twoFactorInfoValidate: Scalars['Boolean']['output'];
  /** Generate a Slack channel for a workspace */
  upsertSlackChannel: Scalars['Boolean']['output'];
  /** Remove the usage limit for a customer */
  usageLimitRemove: Scalars['Boolean']['output'];
  /** Set the usage limit for a customer */
  usageLimitSet: Scalars['Boolean']['output'];
  /** Unsubscribe from the Beta program. */
  userBetaLeave: Scalars['Boolean']['output'];
  /** Delete the currently authenticated user */
  userDelete: Scalars['Boolean']['output'];
  /** Disconnect your Railway account from Discord. */
  userDiscordDisconnect: Scalars['Boolean']['output'];
  /** Remove a flag on the user. */
  userFlagsRemove: Scalars['Boolean']['output'];
  /** Set flags on the authenticated user. */
  userFlagsSet: Scalars['Boolean']['output'];
  /** Updates the profile for the authenticated user */
  userProfileUpdate: Scalars['Boolean']['output'];
  /** Update date of TermsAgreedOn */
  userTermsUpdate?: Maybe<User>;
  /** Upserts a collection of variables. */
  variableCollectionUpsert: Scalars['Boolean']['output'];
  /** Deletes a variable. */
  variableDelete: Scalars['Boolean']['output'];
  /** Upserts a variable. */
  variableUpsert: Scalars['Boolean']['output'];
  /** Create a persistent volume in a project */
  volumeCreate: Volume;
  /** Delete a persistent volume in a project */
  volumeDelete: Scalars['Boolean']['output'];
  /** Create backup of a volume instance */
  volumeInstanceBackupCreate: WorkflowId;
  /** Deletes volume instance backup */
  volumeInstanceBackupDelete: WorkflowId;
  /** Removes backup expiration date */
  volumeInstanceBackupLock: Scalars['Boolean']['output'];
  /** Restore a volume instance from a backup */
  volumeInstanceBackupRestore: WorkflowId;
  /** Manage schedule for backups of a volume instance */
  volumeInstanceBackupScheduleUpdate: Scalars['Boolean']['output'];
  /** Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated. */
  volumeInstanceUpdate: Scalars['Boolean']['output'];
  /** Update a persistent volume in a project */
  volumeUpdate: Volume;
  /** Create a webhook on a project */
  webhookCreate: ProjectWebhook;
  /** Delete a webhook from a project */
  webhookDelete: Scalars['Boolean']['output'];
  /** Update a webhook on a project */
  webhookUpdate: ProjectWebhook;
  /** Delete a workspace and all data associated with it */
  workspaceDelete: Scalars['Boolean']['output'];
  /** Get an invite code for a workspace and role */
  workspaceInviteCodeCreate: Scalars['String']['output'];
  /** Use an invite code to join a workspace */
  workspaceInviteCodeUse: Workspace;
  /** Leave a workspace */
  workspaceLeave: Scalars['Boolean']['output'];
  /** Changes a user workspace permissions. */
  workspacePermissionChange: Scalars['Boolean']['output'];
  /** Update a workspace by id */
  workspaceUpdate: Scalars['Boolean']['output'];
  /** Generate a Slack channel for a workspace */
  workspaceUpsertSlackChannel: Scalars['Boolean']['output'];
  /** Invite a user by email to a workspace */
  workspaceUserInvite: Scalars['Boolean']['output'];
  /** Remove a user from a workspace */
  workspaceUserRemove: Scalars['Boolean']['output'];
};


export type MutationApiTokenCreateArgs = {
  input: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationBaseEnvironmentOverrideArgs = {
  id: Scalars['String']['input'];
  input: BaseEnvironmentOverrideInput;
};


export type MutationCustomDomainCreateArgs = {
  input: CustomDomainCreateInput;
};


export type MutationCustomDomainDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomDomainUpdateArgs = {
  environmentId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCustomerCreateFreePlanSubscriptionArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomerTogglePayoutsToCreditsArgs = {
  customerId: Scalars['String']['input'];
  input: CustomerTogglePayoutsToCreditsInput;
};


export type MutationDeploymentApproveArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentCancelArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentInstanceExecutionCreateArgs = {
  input: DeploymentInstanceExecutionCreateInput;
};


export type MutationDeploymentRedeployArgs = {
  id: Scalars['String']['input'];
  usePreviousImageTag?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeploymentRemoveArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentRestartArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentRollbackArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentStopArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentTriggerCreateArgs = {
  input: DeploymentTriggerCreateInput;
};


export type MutationDeploymentTriggerDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeploymentTriggerUpdateArgs = {
  id: Scalars['String']['input'];
  input: DeploymentTriggerUpdateInput;
};


export type MutationDockerComposeImportArgs = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  skipStagingPatch?: InputMaybe<Scalars['Boolean']['input']>;
  yaml: Scalars['String']['input'];
};


export type MutationEgressGatewayAssociationCreateArgs = {
  input: EgressGatewayCreateInput;
};


export type MutationEgressGatewayAssociationsClearArgs = {
  input: EgressGatewayServiceTargetInput;
};


export type MutationEmailChangeConfirmArgs = {
  nonce: Scalars['String']['input'];
};


export type MutationEmailChangeInitiateArgs = {
  newEmail: Scalars['String']['input'];
};


export type MutationEnvironmentCreateArgs = {
  input: EnvironmentCreateInput;
};


export type MutationEnvironmentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentPatchCommitArgs = {
  commitMessage?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['EnvironmentConfig']['input']>;
};


export type MutationEnvironmentRenameArgs = {
  id: Scalars['String']['input'];
  input: EnvironmentRenameInput;
};


export type MutationEnvironmentTriggersDeployArgs = {
  input: EnvironmentTriggersDeployInput;
};


export type MutationFairUseAgreeArgs = {
  agree: Scalars['Boolean']['input'];
};


export type MutationFeatureFlagAddArgs = {
  input: FeatureFlagToggleInput;
};


export type MutationFeatureFlagRemoveArgs = {
  input: FeatureFlagToggleInput;
};


export type MutationGithubRepoDeployArgs = {
  input: GitHubRepoDeployInput;
};


export type MutationGithubRepoUpdateArgs = {
  input: GitHubRepoUpdateInput;
};


export type MutationHerokuImportVariablesArgs = {
  input: HerokuImportVariablesInput;
};


export type MutationIntegrationCreateArgs = {
  input: IntegrationCreateInput;
};


export type MutationIntegrationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIntegrationUpdateArgs = {
  id: Scalars['String']['input'];
  input: IntegrationUpdateInput;
};


export type MutationInviteCodeUseArgs = {
  code: Scalars['String']['input'];
};


export type MutationJobApplicationCreateArgs = {
  input: JobApplicationCreateInput;
  resume: Scalars['Upload']['input'];
};


export type MutationLoginSessionAuthArgs = {
  input: LoginSessionAuthInput;
};


export type MutationLoginSessionCancelArgs = {
  code: Scalars['String']['input'];
};


export type MutationLoginSessionConsumeArgs = {
  code: Scalars['String']['input'];
};


export type MutationLoginSessionVerifyArgs = {
  code: Scalars['String']['input'];
};


export type MutationNotificationDeliveriesMarkAsReadArgs = {
  deliveryIds: Array<Scalars['String']['input']>;
};


export type MutationObservabilityDashboardCreateArgs = {
  input: ObservabilityDashboardCreateInput;
};


export type MutationObservabilityDashboardResetArgs = {
  id: Scalars['String']['input'];
};


export type MutationObservabilityDashboardUpdateArgs = {
  id: Scalars['String']['input'];
  input: Array<ObservabilityDashboardUpdateInput>;
};


export type MutationPasskeyDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationPluginCreateArgs = {
  input: PluginCreateInput;
};


export type MutationPluginDeleteArgs = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};


export type MutationPluginResetArgs = {
  id: Scalars['String']['input'];
  input: ResetPluginInput;
};


export type MutationPluginResetCredentialsArgs = {
  id: Scalars['String']['input'];
  input: ResetPluginCredentialsInput;
};


export type MutationPluginRestartArgs = {
  id: Scalars['String']['input'];
  input: PluginRestartInput;
};


export type MutationPluginStartArgs = {
  id: Scalars['String']['input'];
  input: PluginRestartInput;
};


export type MutationPluginUpdateArgs = {
  id: Scalars['String']['input'];
  input: PluginUpdateInput;
};


export type MutationPreferenceOverridesCreateUpdateArgs = {
  input: PreferenceOverridesCreateUpdateData;
};


export type MutationPreferenceOverridesDestroyForResourceArgs = {
  input: PreferenceOverridesDestroyData;
};


export type MutationPreferencesUpdateArgs = {
  input: PreferencesUpdateData;
};


export type MutationPrivateNetworkCreateOrGetArgs = {
  input: PrivateNetworkCreateOrGetInput;
};


export type MutationPrivateNetworkEndpointCreateOrGetArgs = {
  input: PrivateNetworkEndpointCreateOrGetInput;
};


export type MutationPrivateNetworkEndpointDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationPrivateNetworkEndpointRenameArgs = {
  dnsName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
};


export type MutationPrivateNetworksForEnvironmentDeleteArgs = {
  environmentId: Scalars['String']['input'];
};


export type MutationProjectClaimArgs = {
  id: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};


export type MutationProjectDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectInvitationAcceptArgs = {
  code: Scalars['String']['input'];
};


export type MutationProjectInvitationCreateArgs = {
  id: Scalars['String']['input'];
  input: ProjectInvitee;
};


export type MutationProjectInvitationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectInvitationResendArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectInviteUserArgs = {
  id: Scalars['String']['input'];
  input: ProjectInviteUserInput;
};


export type MutationProjectLeaveArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectMemberRemoveArgs = {
  input: ProjectMemberRemoveInput;
};


export type MutationProjectMemberUpdateArgs = {
  input: ProjectMemberUpdateInput;
};


export type MutationProjectScheduleDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectScheduleDeleteCancelArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectScheduleDeleteForceArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectTokenCreateArgs = {
  input: ProjectTokenCreateInput;
};


export type MutationProjectTokenDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectTransferArgs = {
  input: ProjectTransferInput;
  projectId: Scalars['String']['input'];
};


export type MutationProjectTransferConfirmArgs = {
  input: ProjectTransferConfirmInput;
};


export type MutationProjectTransferInitiateArgs = {
  input: ProjectTransferInitiateInput;
};


export type MutationProjectTransferToTeamArgs = {
  id: Scalars['String']['input'];
  input: ProjectTransferToTeamInput;
};


export type MutationProjectUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectUpdateInput;
};


export type MutationProviderAuthRemoveArgs = {
  id: Scalars['String']['input'];
};


export type MutationRecoveryCodeValidateArgs = {
  input: RecoveryCodeValidateInput;
};


export type MutationReferralInfoUpdateArgs = {
  input: ReferralInfoUpdateInput;
};


export type MutationServiceConnectArgs = {
  id: Scalars['String']['input'];
  input: ServiceConnectInput;
};


export type MutationServiceCreateArgs = {
  input: ServiceCreateInput;
};


export type MutationServiceDeleteArgs = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};


export type MutationServiceDisconnectArgs = {
  id: Scalars['String']['input'];
};


export type MutationServiceDomainCreateArgs = {
  input: ServiceDomainCreateInput;
};


export type MutationServiceDomainDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationServiceDomainUpdateArgs = {
  input: ServiceDomainUpdateInput;
};


export type MutationServiceDuplicateArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type MutationServiceFeatureFlagAddArgs = {
  input: ServiceFeatureFlagToggleInput;
};


export type MutationServiceFeatureFlagRemoveArgs = {
  input: ServiceFeatureFlagToggleInput;
};


export type MutationServiceInstanceDeployArgs = {
  commitSha?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  latestCommit?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId: Scalars['String']['input'];
};


export type MutationServiceInstanceDeployV2Args = {
  commitSha?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type MutationServiceInstanceLimitsUpdateArgs = {
  input: ServiceInstanceLimitsUpdateInput;
};


export type MutationServiceInstanceRedeployArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type MutationServiceInstanceUpdateArgs = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  input: ServiceInstanceUpdateInput;
  serviceId: Scalars['String']['input'];
};


export type MutationServiceRemoveUpstreamUrlArgs = {
  id: Scalars['String']['input'];
};


export type MutationServiceUpdateArgs = {
  id: Scalars['String']['input'];
  input: ServiceUpdateInput;
};


export type MutationSessionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationSharedVariableConfigureArgs = {
  input: SharedVariableConfigureInput;
};


export type MutationTcpProxyCreateArgs = {
  input: TcpProxyCreateInput;
};


export type MutationTcpProxyDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTemplateCloneArgs = {
  input: TemplateCloneInput;
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['String']['input'];
  input: TemplateDeleteInput;
};


export type MutationTemplateDeployArgs = {
  input: TemplateDeployInput;
};


export type MutationTemplateDeployV2Args = {
  input: TemplateDeployV2Input;
};


export type MutationTemplateGenerateArgs = {
  input: TemplateGenerateInput;
};


export type MutationTemplatePublishArgs = {
  id: Scalars['String']['input'];
  input: TemplatePublishInput;
};


export type MutationTemplateServiceSourceEjectArgs = {
  input: TemplateServiceSourceEjectInput;
};


export type MutationTemplateUnpublishArgs = {
  id: Scalars['String']['input'];
};


export type MutationTrustedDomainCreateArgs = {
  input: WorkspaceTrustedDomainCreateInput;
};


export type MutationTrustedDomainDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTwoFactorInfoCreateArgs = {
  input: TwoFactorInfoCreateInput;
};


export type MutationTwoFactorInfoValidateArgs = {
  input: TwoFactorInfoValidateInput;
};


export type MutationUpsertSlackChannelArgs = {
  workspaceId: Scalars['String']['input'];
};


export type MutationUsageLimitRemoveArgs = {
  input: UsageLimitRemoveInput;
};


export type MutationUsageLimitSetArgs = {
  input: UsageLimitSetInput;
};


export type MutationUserFlagsRemoveArgs = {
  input: UserFlagsRemoveInput;
};


export type MutationUserFlagsSetArgs = {
  input: UserFlagsSetInput;
};


export type MutationUserProfileUpdateArgs = {
  input: UserProfileUpdateInput;
};


export type MutationVariableCollectionUpsertArgs = {
  input: VariableCollectionUpsertInput;
};


export type MutationVariableDeleteArgs = {
  input: VariableDeleteInput;
};


export type MutationVariableUpsertArgs = {
  input: VariableUpsertInput;
};


export type MutationVolumeCreateArgs = {
  input: VolumeCreateInput;
};


export type MutationVolumeDeleteArgs = {
  volumeId: Scalars['String']['input'];
};


export type MutationVolumeInstanceBackupCreateArgs = {
  volumeInstanceId: Scalars['String']['input'];
};


export type MutationVolumeInstanceBackupDeleteArgs = {
  volumeInstanceBackupId: Scalars['String']['input'];
  volumeInstanceId: Scalars['String']['input'];
};


export type MutationVolumeInstanceBackupLockArgs = {
  volumeInstanceBackupId: Scalars['String']['input'];
  volumeInstanceId: Scalars['String']['input'];
};


export type MutationVolumeInstanceBackupRestoreArgs = {
  volumeInstanceBackupId: Scalars['String']['input'];
  volumeInstanceId: Scalars['String']['input'];
};


export type MutationVolumeInstanceBackupScheduleUpdateArgs = {
  kinds: Array<VolumeInstanceBackupScheduleKind>;
  volumeInstanceId: Scalars['String']['input'];
};


export type MutationVolumeInstanceUpdateArgs = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  input: VolumeInstanceUpdateInput;
  volumeId: Scalars['String']['input'];
};


export type MutationVolumeUpdateArgs = {
  input: VolumeUpdateInput;
  volumeId: Scalars['String']['input'];
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['String']['input'];
  input: WebhookUpdateInput;
};


export type MutationWorkspaceDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationWorkspaceInviteCodeCreateArgs = {
  input: WorkspaceInviteCodeCreateInput;
  workspaceId: Scalars['String']['input'];
};


export type MutationWorkspaceInviteCodeUseArgs = {
  code: Scalars['String']['input'];
};


export type MutationWorkspaceLeaveArgs = {
  id: Scalars['String']['input'];
};


export type MutationWorkspacePermissionChangeArgs = {
  input: WorkspacePermissionChangeInput;
};


export type MutationWorkspaceUpdateArgs = {
  id: Scalars['String']['input'];
  input: WorkspaceUpdateInput;
};


export type MutationWorkspaceUpsertSlackChannelArgs = {
  id: Scalars['String']['input'];
};


export type MutationWorkspaceUserInviteArgs = {
  input: WorkspaceUserInviteInput;
  workspaceId: Scalars['String']['input'];
};


export type MutationWorkspaceUserRemoveArgs = {
  input: WorkspaceUserRemoveInput;
  workspaceId: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type NotificationDelivery = Node & {
  __typename?: 'NotificationDelivery';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  notificationInstance: NotificationInstance;
  readAt?: Maybe<Scalars['DateTime']['output']>;
  status: NotificationDeliveryStatus;
  type: NotificationDeliveryType;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type NotificationDeliveryCreated = {
  __typename?: 'NotificationDeliveryCreated';
  delivery: NotificationDelivery;
  type: Scalars['String']['output'];
};

export type NotificationDeliveryFilterInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  onlyUnread?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<NotificationStatus>;
  type?: InputMaybe<NotificationDeliveryType>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationDeliveryResolved = {
  __typename?: 'NotificationDeliveryResolved';
  deliveryIds: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type NotificationDeliveryStatus =
  | 'FAILED'
  | 'PENDING'
  | 'SENT';

export type NotificationDeliveryType =
  | 'EMAIL'
  | 'INAPP'
  | 'WEBHOOK';

export type NotificationDeliveryUpdate = NotificationDeliveryCreated | NotificationDeliveryResolved;

export type NotificationInstance = Node & {
  __typename?: 'NotificationInstance';
  createdAt: Scalars['DateTime']['output'];
  environmentId?: Maybe<Scalars['String']['output']>;
  event: Event;
  eventId: Scalars['String']['output'];
  eventType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  payload: Scalars['NotificationPayload']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resourceId?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  severity: NotificationSeverity;
  status: NotificationStatus;
  updatedAt: Scalars['DateTime']['output'];
  volumeId?: Maybe<Scalars['String']['output']>;
  workspaceId: Scalars['String']['output'];
};

export type NotificationSeverity =
  | 'CRITICAL'
  | 'INFO'
  | 'NOTICE'
  | 'WARNING';

export type NotificationStatus =
  | 'ACTIVE'
  | 'RESOLVED';

export type ObservabilityDashboard = Node & {
  __typename?: 'ObservabilityDashboard';
  id: Scalars['ID']['output'];
  items: Array<ObservabilityDashboardItemInstance>;
};

export type ObservabilityDashboardAlert = Node & {
  __typename?: 'ObservabilityDashboardAlert';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resourceId?: Maybe<Scalars['String']['output']>;
  resourceType: MonitorAlertResourceType;
  status: MonitorStatus;
};

export type ObservabilityDashboardCreateInput = {
  environmentId: Scalars['String']['input'];
  /** If no items are provided, a default dashboard will be created. */
  items?: InputMaybe<Array<ObservabilityDashboardUpdateInput>>;
};

export type ObservabilityDashboardItem = Node & {
  __typename?: 'ObservabilityDashboardItem';
  config: ObservabilityDashboardItemConfig;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  monitors: Array<ObservabilityDashboardMonitor>;
  name: Scalars['String']['output'];
  type: ObservabilityDashboardItemType;
};

export type ObservabilityDashboardItemConfig = {
  __typename?: 'ObservabilityDashboardItemConfig';
  logsFilter?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<Array<MetricMeasurement>>;
  projectUsageProperties?: Maybe<Array<ProjectUsageProperty>>;
  resourceIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type ObservabilityDashboardItemConfigInput = {
  logsFilter?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<Array<MetricMeasurement>>;
  projectUsageProperties?: InputMaybe<Array<ProjectUsageProperty>>;
  resourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ObservabilityDashboardItemCreateInput = {
  config: ObservabilityDashboardItemConfigInput;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: ObservabilityDashboardItemType;
};

export type ObservabilityDashboardItemInstance = Node & {
  __typename?: 'ObservabilityDashboardItemInstance';
  dashboardItem: ObservabilityDashboardItem;
  displayConfig: Scalars['DisplayConfig']['output'];
  id: Scalars['ID']['output'];
};

export type ObservabilityDashboardItemType =
  | 'PROJECT_USAGE_ITEM'
  | 'SERVICE_LOGS_ITEM'
  | 'SERVICE_METRICS_ITEM'
  | 'VOLUME_METRICS_ITEM';

export type ObservabilityDashboardMonitor = Node & {
  __typename?: 'ObservabilityDashboardMonitor';
  alerts: Array<ObservabilityDashboardAlert>;
  config: ObservabilityDashboardMonitorConfig;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type ObservabilityDashboardMonitorAlertsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ObservabilityDashboardMonitorConfig = MonitorThresholdConfig;

export type ObservabilityDashboardUpdateInput = {
  dashboardItem: ObservabilityDashboardItemCreateInput;
  displayConfig: Scalars['DisplayConfig']['input'];
  id: Scalars['String']['input'];
};

export type OverrideInput = {
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  resource: Scalars['String']['input'];
  resourceId: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Passkey = Node & {
  __typename?: 'Passkey';
  aaguid?: Maybe<Scalars['String']['output']>;
  backedUp: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  credentialId: Scalars['String']['output'];
  deviceName: Scalars['String']['output'];
  deviceType: Scalars['String']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastUsedAt?: Maybe<Scalars['DateTime']['output']>;
  lastUsedDevice?: Maybe<Scalars['String']['output']>;
  transports: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  card?: Maybe<PaymentMethodCard>;
  id: Scalars['String']['output'];
};

export type PaymentMethodCard = {
  __typename?: 'PaymentMethodCard';
  brand: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  last4: Scalars['String']['output'];
};

export type Plan =
  | 'FREE'
  | 'HOBBY'
  | 'PRO';

export type PlanLimitOverride = Node & {
  __typename?: 'PlanLimitOverride';
  config: Scalars['SubscriptionPlanLimit']['output'];
  id: Scalars['ID']['output'];
};

export type PlatformFeatureFlag =
  | 'ALLOW_REPLICA_METRICS'
  | 'BUCKETS'
  | 'BUILDER_V3_ROLLOUT_EXISTING_SERVICES'
  | 'BUILDER_V3_ROLLOUT_NEW_SERVICES'
  | 'DATA_UI_SSH'
  | 'DEMO_PERCENTAGE_ROLLOUT'
  | 'ENABLE_RAW_SQL_QUERIES'
  | 'MONOREPO_SUPPORT'
  | 'NEW_BILLING_FLOW'
  | 'NOTIFICATION_ENGINE'
  | 'UPDATED_VM_QUERIES'
  | 'USE_GH_WEBHOOKS_FOR_CHANGE_DETECTION'
  | 'VM_TIME_RANGE_QUERY';

export type PlatformFeatureFlagStatus = {
  __typename?: 'PlatformFeatureFlagStatus';
  flag: PlatformFeatureFlag;
  rolloutPercentage: Scalars['Int']['output'];
  status: Scalars['Boolean']['output'];
  type: PlatformFeatureFlagType;
};

export type PlatformFeatureFlagType =
  | 'BOOLEAN'
  | 'PERCENTAGE';

export type PlatformStatus = {
  __typename?: 'PlatformStatus';
  incident?: Maybe<Incident>;
  isStable: Scalars['Boolean']['output'];
  maintenance?: Maybe<Maintenance>;
};

export type Plugin = Node & {
  __typename?: 'Plugin';
  containers: PluginContainersConnection;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deprecatedAt?: Maybe<Scalars['DateTime']['output']>;
  friendlyName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logsEnabled: Scalars['Boolean']['output'];
  migrationDatabaseServiceId?: Maybe<Scalars['String']['output']>;
  name: PluginType;
  project: Project;
  status: PluginStatus;
  variables: PluginVariablesConnection;
};


export type PluginContainersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PluginVariablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PluginContainersConnection = {
  __typename?: 'PluginContainersConnection';
  edges: Array<PluginContainersConnectionEdge>;
  pageInfo: PageInfo;
};

export type PluginContainersConnectionEdge = {
  __typename?: 'PluginContainersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Container;
};

export type PluginCreateInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  friendlyName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type PluginRestartInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
};

export type PluginStatus =
  | 'DEPRECATED'
  | 'LOCKED'
  | 'REMOVED'
  | 'RUNNING'
  | 'STOPPED';

export type PluginType =
  | 'mongodb'
  | 'mysql'
  | 'postgresql'
  | 'redis';

export type PluginUpdateInput = {
  friendlyName: Scalars['String']['input'];
};

export type PluginVariablesConnection = {
  __typename?: 'PluginVariablesConnection';
  edges: Array<PluginVariablesConnectionEdge>;
  pageInfo: PageInfo;
};

export type PluginVariablesConnectionEdge = {
  __typename?: 'PluginVariablesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Variable;
};

export type PreferenceOverride = Node & {
  __typename?: 'PreferenceOverride';
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  resource: Scalars['String']['output'];
  resourceId: Scalars['String']['output'];
};

export type PreferenceOverridesCreateUpdateData = {
  overrides: Array<OverrideInput>;
};

export type PreferenceOverridesDestroyData = {
  resource: Scalars['String']['input'];
  resourceId: Scalars['String']['input'];
};

export type Preferences = Node & {
  __typename?: 'Preferences';
  buildFailedEmail: Scalars['Boolean']['output'];
  changelogEmail: Scalars['Boolean']['output'];
  communityEmail: Scalars['Boolean']['output'];
  deployCrashedEmail: Scalars['Boolean']['output'];
  ephemeralEnvironmentEmail: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  marketingEmail: Scalars['Boolean']['output'];
  preferenceOverrides?: Maybe<Array<PreferenceOverride>>;
  subprocessorUpdatesEmail: Scalars['Boolean']['output'];
  usageEmail: Scalars['Boolean']['output'];
};

export type PreferencesUpdateData = {
  buildFailedEmail?: InputMaybe<Scalars['Boolean']['input']>;
  changelogEmail?: InputMaybe<Scalars['Boolean']['input']>;
  communityEmail?: InputMaybe<Scalars['Boolean']['input']>;
  deployCrashedEmail?: InputMaybe<Scalars['Boolean']['input']>;
  ephemeralEnvironmentEmail?: InputMaybe<Scalars['Boolean']['input']>;
  marketingEmail?: InputMaybe<Scalars['Boolean']['input']>;
  subprocessorUpdatesEmail?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  usageEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PrivateNetwork = {
  __typename?: 'PrivateNetwork';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dnsName: Scalars['String']['output'];
  environmentId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  networkId: Scalars['BigInt']['output'];
  projectId: Scalars['String']['output'];
  publicId: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
};

export type PrivateNetworkCreateOrGetInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type PrivateNetworkEndpoint = {
  __typename?: 'PrivateNetworkEndpoint';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dnsName: Scalars['String']['output'];
  privateIps: Array<Scalars['String']['output']>;
  publicId: Scalars['String']['output'];
  serviceInstanceId: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
};

export type PrivateNetworkEndpointCreateOrGetInput = {
  environmentId: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
  serviceName: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type Project = Node & {
  __typename?: 'Project';
  baseEnvironment?: Maybe<Environment>;
  baseEnvironmentId?: Maybe<Scalars['String']['output']>;
  botPrEnvironments: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deploymentTriggers: ProjectDeploymentTriggersConnection;
  deployments: ProjectDeploymentsConnection;
  description?: Maybe<Scalars['String']['output']>;
  environments: ProjectEnvironmentsConnection;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  groups: ProjectGroupsConnection;
  id: Scalars['ID']['output'];
  isPublic: Scalars['Boolean']['output'];
  isTempProject: Scalars['Boolean']['output'];
  members: Array<ProjectMember>;
  name: Scalars['String']['output'];
  /** @deprecated Plugins have been removed */
  plugins: ProjectPluginsConnection;
  prDeploys: Scalars['Boolean']['output'];
  projectPermissions: ProjectProjectPermissionsConnection;
  services: ProjectServicesConnection;
  subscriptionPlanLimit: Scalars['SubscriptionPlanLimit']['output'];
  subscriptionType: SubscriptionPlanType;
  /** @deprecated Use workspace */
  team?: Maybe<Team>;
  /** @deprecated Use workspaceId */
  teamId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  volumes: ProjectVolumesConnection;
  webhooks: ProjectWebhooksConnection;
  workspace?: Maybe<Workspace>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};


export type ProjectDeploymentTriggersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectEnvironmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectProjectPermissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectServicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectVolumesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectCreateInput = {
  defaultEnvironmentName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMonorepo?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prDeploys?: InputMaybe<Scalars['Boolean']['input']>;
  repo?: InputMaybe<ProjectCreateRepo>;
  runtime?: InputMaybe<PublicRuntime>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCreateRepo = {
  branch: Scalars['String']['input'];
  fullRepoName: Scalars['String']['input'];
};

export type ProjectDeploymentTriggersConnection = {
  __typename?: 'ProjectDeploymentTriggersConnection';
  edges: Array<ProjectDeploymentTriggersConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectDeploymentTriggersConnectionEdge = {
  __typename?: 'ProjectDeploymentTriggersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: DeploymentTrigger;
};

export type ProjectDeploymentsConnection = {
  __typename?: 'ProjectDeploymentsConnection';
  edges: Array<ProjectDeploymentsConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectDeploymentsConnectionEdge = {
  __typename?: 'ProjectDeploymentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Deployment;
};

export type ProjectEnvironmentsConnection = {
  __typename?: 'ProjectEnvironmentsConnection';
  edges: Array<ProjectEnvironmentsConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectEnvironmentsConnectionEdge = {
  __typename?: 'ProjectEnvironmentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Environment;
};

export type ProjectGroupsConnection = {
  __typename?: 'ProjectGroupsConnection';
  edges: Array<ProjectGroupsConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectGroupsConnectionEdge = {
  __typename?: 'ProjectGroupsConnectionEdge';
  cursor: Scalars['String']['output'];
};

export type ProjectInvitation = {
  __typename?: 'ProjectInvitation';
  email: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  inviter?: Maybe<ProjectInvitationInviter>;
  isExpired: Scalars['Boolean']['output'];
  project: PublicProjectInformation;
};

export type ProjectInvitationInviter = {
  __typename?: 'ProjectInvitationInviter';
  email: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ProjectInviteUserInput = {
  email: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type ProjectInvitee = {
  email: Scalars['String']['input'];
  role: ProjectRole;
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role: ProjectRole;
};

export type ProjectMemberRemoveInput = {
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ProjectMemberUpdateInput = {
  projectId: Scalars['String']['input'];
  role: ProjectRole;
  userId: Scalars['String']['input'];
};

export type ProjectPermission = Node & {
  __typename?: 'ProjectPermission';
  id: Scalars['ID']['output'];
  projectId: Scalars['String']['output'];
  role: ProjectRole;
  userId: Scalars['String']['output'];
};

export type ProjectPluginsConnection = {
  __typename?: 'ProjectPluginsConnection';
  edges: Array<ProjectPluginsConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectPluginsConnectionEdge = {
  __typename?: 'ProjectPluginsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Plugin;
};

export type ProjectProjectPermissionsConnection = {
  __typename?: 'ProjectProjectPermissionsConnection';
  edges: Array<ProjectProjectPermissionsConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectProjectPermissionsConnectionEdge = {
  __typename?: 'ProjectProjectPermissionsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ProjectPermission;
};

export type ProjectResourceAccess = {
  __typename?: 'ProjectResourceAccess';
  customDomain: AccessRule;
  databaseDeployment: AccessRule;
  deployment: AccessRule;
  environment: AccessRule;
  /** @deprecated Plugins have been removed */
  plugin: AccessRule;
};

export type ProjectRole =
  | 'ADMIN'
  | 'MEMBER'
  | 'VIEWER';

export type ProjectServicesConnection = {
  __typename?: 'ProjectServicesConnection';
  edges: Array<ProjectServicesConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectServicesConnectionEdge = {
  __typename?: 'ProjectServicesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Service;
};

export type ProjectToken = Node & {
  __typename?: 'ProjectToken';
  createdAt: Scalars['DateTime']['output'];
  displayToken: Scalars['String']['output'];
  environment: Environment;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['String']['output'];
};

export type ProjectTokenCreateInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type ProjectTransferConfirmInput = {
  destinationWorkspaceId?: InputMaybe<Scalars['String']['input']>;
  ownershipTransferId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type ProjectTransferInitiateInput = {
  memberId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type ProjectTransferInput = {
  workspaceId: Scalars['String']['input'];
};

export type ProjectTransferToTeamInput = {
  teamId: Scalars['String']['input'];
};

export type ProjectUpdateInput = {
  baseEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  /** Enable/disable pull request environments for PRs created by bots */
  botPrEnvironments?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prDeploys?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectUsageProperty =
  | 'BACKUP_USAGE'
  | 'CPU_USAGE'
  | 'CURRENT_USAGE'
  | 'DISK_USAGE'
  | 'ESTIMATED_USAGE'
  | 'MEMORY_USAGE'
  | 'NETWORK_USAGE';

export type ProjectVolumesConnection = {
  __typename?: 'ProjectVolumesConnection';
  edges: Array<ProjectVolumesConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectVolumesConnectionEdge = {
  __typename?: 'ProjectVolumesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Volume;
};

export type ProjectWebhook = Node & {
  __typename?: 'ProjectWebhook';
  filters?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  lastStatus?: Maybe<Scalars['Int']['output']>;
  projectId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProjectWebhooksConnection = {
  __typename?: 'ProjectWebhooksConnection';
  edges: Array<ProjectWebhooksConnectionEdge>;
  pageInfo: PageInfo;
};

export type ProjectWebhooksConnectionEdge = {
  __typename?: 'ProjectWebhooksConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ProjectWebhook;
};

export type ProviderAuth = Node & {
  __typename?: 'ProviderAuth';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isAuthEnabled: Scalars['Boolean']['output'];
  metadata: Scalars['JSON']['output'];
  provider: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type PublicProjectInformation = {
  __typename?: 'PublicProjectInformation';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PublicProjectInvitation = InviteCode | ProjectInvitation;

export type PublicRuntime =
  | 'LEGACY'
  | 'UNSPECIFIED'
  | 'V2';

export type PublicStats = {
  __typename?: 'PublicStats';
  totalDeploymentsLastMonth: Scalars['Int']['output'];
  totalLogsLastMonth: Scalars['BigInt']['output'];
  totalProjects: Scalars['Int']['output'];
  totalRequestsLastMonth: Scalars['BigInt']['output'];
  totalServices: Scalars['Int']['output'];
  totalUsers: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get all volume instances for a given volume */
  adminVolumeInstancesForVolume: Array<VolumeInstance>;
  /** Returns the platform feature flags enabled for the current user */
  allPlatformFeatureFlags: Array<PlatformFeatureFlagStatus>;
  /** Gets all API tokens for the authenticated user. */
  apiTokens: QueryApiTokensConnection;
  /** Fetch logs for a build */
  buildLogs: Array<Log>;
  /** Gets the image URL for a Notion image block */
  changelogBlockImage: Scalars['String']['output'];
  /** Fetch details for a custom domain */
  customDomain: CustomDomain;
  /** Checks if a custom domain is available. */
  customDomainAvailable: DomainAvailable;
  /** Find a single deployment */
  deployment: Deployment;
  /** Get the deployment events for a deployment */
  deploymentEvents: QueryDeploymentEventsConnection;
  /** Get the deployment instance executions for a deployment. */
  deploymentInstanceExecutions: QueryDeploymentInstanceExecutionsConnection;
  /** Fetch logs for a deployment */
  deploymentLogs: Array<Log>;
  /** Find a single DeploymentSnapshot */
  deploymentSnapshot?: Maybe<DeploymentSnapshot>;
  /** All deployment triggers. */
  deploymentTriggers: QueryDeploymentTriggersConnection;
  /** Get all deployments */
  deployments: QueryDeploymentsConnection;
  /**
   * Domain with status
   * @deprecated Use the `status` field within the `domain` query instead
   */
  domainStatus: DomainWithStatus;
  /** All domains for a service instance */
  domains: AllDomains;
  /** All egress gateways assigned to a service instance */
  egressGateways: Array<EgressGateway>;
  /** Find a single environment */
  environment: Environment;
  /** Fetch logs for a project environment. Build logs are excluded unless a snapshot ID is explicitly provided in the filter */
  environmentLogs: Array<Log>;
  /** Get a single environment patch by ID */
  environmentPatch: EnvironmentPatch;
  /** Get the patches for an environment */
  environmentPatches: QueryEnvironmentPatchesConnection;
  /** Get the latest staged commit for a single environment. */
  environmentStagedChanges: EnvironmentPatch;
  /** Gets all environments for a project. */
  environments: QueryEnvironmentsConnection;
  /** Get the estimated total cost of the project at the end of the current billing cycle. If no `startDate` is provided, the usage for the current billing period of the project owner is returned. */
  estimatedUsage: Array<EstimatedUsage>;
  /** Gets the events for a project. */
  events: QueryEventsConnection;
  /** Get the workspaces the user doesn't belong to, but needs access (like when invited to a project) */
  externalWorkspaces: Array<ExternalWorkspace>;
  /** Get information about a specific function runtime */
  functionRuntime: FunctionRuntime;
  /** List available function runtimes */
  functionRuntimes: Array<FunctionRuntime>;
  /** Checks if user has access to GitHub repository */
  gitHubRepoAccessAvailable: GitHubAccess;
  /** Check if a repo name is available */
  githubIsRepoNameAvailable: Scalars['Boolean']['output'];
  /** Checks if user has access to GitHub repository */
  githubRepo: GitHubRepoWithoutInstallation;
  /** Get branches for a GitHub repo that the authenticated user has access to */
  githubRepoBranches: Array<GitHubBranch>;
  /** Get a list of repos for a user that Railway has access to */
  githubRepos: Array<GitHubRepo>;
  /** Get a list of scopes the user has installed the installation to */
  githubWritableScopes: Array<Scalars['String']['output']>;
  /** Get the Herokus apps for the current user */
  herokuApps: Array<HerokuApp>;
  /** Fetch HTTP logs for a deployment */
  httpLogs: Array<HttpLog>;
  /** Get an integration auth by provider providerId */
  integrationAuth: IntegrationAuth;
  /** Get all integration auths for a user */
  integrationAuths: QueryIntegrationAuthsConnection;
  /** Get all integrations for a project */
  integrations: QueryIntegrationsConnection;
  /** Get an invite code by the code */
  inviteCode: InviteCode;
  /** Gets the authenticated user. */
  me: User;
  /** Get metrics for a project, environment, and service */
  metrics: Array<MetricsResult>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  /** Gets notification deliveries for the authenticated user */
  notificationDeliveries: QueryNotificationDeliveriesConnection;
  /** Get all observability dashboards for an environment */
  observabilityDashboards: QueryObservabilityDashboardsConnection;
  /** Gets all passkeys for the authenticated user */
  passkeys: QueryPasskeysConnection;
  /** Get the current status of the platform */
  platformStatus: PlatformStatus;
  /**
   * Get a plugin by ID.
   * @deprecated Plugins are deprecated
   */
  plugin: Plugin;
  /**
   * Fetch logs for a plugin
   * @deprecated Plugins are deprecated
   */
  pluginLogs: Array<Log>;
  /** Get the email preferences for a user */
  preferences: Preferences;
  /** Get a private network endpoint for a service instance. */
  privateNetworkEndpoint?: Maybe<PrivateNetworkEndpoint>;
  /** Check if an endpoint name is available. */
  privateNetworkEndpointNameAvailable: Scalars['Boolean']['output'];
  /** List private networks for an environment. */
  privateNetworks: Array<PrivateNetwork>;
  /** Get a project by ID */
  project: Project;
  /** Get a project invitation by code */
  projectInvitation: PublicProjectInvitation;
  /** Get invitations for a project */
  projectInvitations: Array<ProjectInvitation>;
  /** Get an invite code for a project for a specifc role */
  projectInviteCode: InviteCode;
  /** Gets users who belong to a project along with their role */
  projectMembers: Array<ProjectMember>;
  /** Get resource access rules for project-specific actions */
  projectResourceAccess: ProjectResourceAccess;
  /** Get a single project token by the value in the header */
  projectToken: ProjectToken;
  /** Get all project tokens for a project */
  projectTokens: QueryProjectTokensConnection;
  /** Gets all projects for a user or workspace. */
  projects: QueryProjectsConnection;
  /** Get public Railway stats. */
  publicStats: PublicStats;
  /** Gets the ReferralInfo for the authenticated user. */
  referralInfo: ReferralInfo;
  /** List available regions */
  regions: Array<Region>;
  /** Get resource access for the current user or workspace */
  resourceAccess: ResourceAccess;
  /** Get a service by ID */
  service: Service;
  /** Checks if a service domain is available */
  serviceDomainAvailable: DomainAvailable;
  /** Get a service instance belonging to a service and environment */
  serviceInstance: ServiceInstance;
  /** Check if the upstream repo for a service has an update available */
  serviceInstanceIsUpdatable: Scalars['Boolean']['output'];
  /** Get the service instance resource limit overrides (null if no overrides set) */
  serviceInstanceLimitOverride?: Maybe<Scalars['ServiceInstanceLimit']['output']>;
  /** Get the merged resource limits for a service instance (includes plan defaults) */
  serviceInstanceLimits: Scalars['ServiceInstanceLimit']['output'];
  /** Gets all sessions for authenticated user. */
  sessions: QuerySessionsConnection;
  /** All TCP proxies for a service instance */
  tcpProxies: Array<TcpProxy>;
  /**
   * Find a team by ID
   * @deprecated Teams are now workspaces. Use the workspace query instead.
   */
  team: Team;
  /**
   * Get all templates for a team.
   * @deprecated Use templates instead - teams are now workspaces
   */
  teamTemplates: QueryTeamTemplatesConnection;
  /** Get a template by code or ID or GitHub owner and repo. */
  template: Template;
  /** Get the source template for a project. */
  templateSourceForProject?: Maybe<Template>;
  /** Get all published templates. */
  templates: QueryTemplatesConnection;
  /** Count all published templates. */
  templatesCount: Scalars['Int']['output'];
  /** Get all trusted domains for a workspace */
  trustedDomains: QueryTrustedDomainsConnection;
  /** Gets the TwoFactorInfo for the authenticated user. */
  twoFactorInfo: TwoFactorInfo;
  /** Get the usage for a single project or all projects for a user/workspace. If no `projectId` or `workspaceId` is provided, the usage for the current user is returned. If no `startDate` is provided, the usage for the current billing period of the project owner is returned. */
  usage: Array<AggregatedUsage>;
  /**
   * Get the total kickback earnings for a user.
   * @deprecated This field is deprecated and will be removed in future versions.
   */
  userKickbackEarnings: UserKickbackEarnings;
  /** Get the public profile for a user */
  userProfile: UserProfileResponse;
  /**
   * Get all templates for the current user.
   * @deprecated Users don't have personal templates anymore, they belong to their team now
   */
  userTemplates: QueryUserTemplatesConnection;
  /** All variables by pluginId or serviceId. If neither are provided, all shared variables are returned. */
  variables: Scalars['EnvironmentVariables']['output'];
  /** All rendered variables that are required for a service deployment. */
  variablesForServiceDeployment: Scalars['EnvironmentVariables']['output'];
  /** Get information about the user's Vercel accounts */
  vercelInfo: VercelInfo;
  /** Get a single volume instance by id */
  volumeInstance: VolumeInstance;
  /** List backups of a volume instance */
  volumeInstanceBackupList: Array<VolumeInstanceBackup>;
  /** List backups schedules of a volume instance */
  volumeInstanceBackupScheduleList: Array<VolumeInstanceBackupSchedule>;
  /** Get all webhooks for a project */
  webhooks: QueryWebhooksConnection;
  /** Gets the status of a workflow */
  workflowStatus: WorkflowResult;
  /** Get the workspace */
  workspace: Workspace;
  /** Find a workspace by invite code */
  workspaceByCode: Workspace;
  /** Gets all identity providers of a workspace */
  workspaceIdentityProviders: QueryWorkspaceIdentityProvidersConnection;
  /** Get all templates for a workspace. */
  workspaceTemplates: QueryWorkspaceTemplatesConnection;
};


export type QueryAdminVolumeInstancesForVolumeArgs = {
  volumeId: Scalars['String']['input'];
};


export type QueryApiTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBuildLogsArgs = {
  deploymentId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryChangelogBlockImageArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomDomainArgs = {
  id: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};


export type QueryCustomDomainAvailableArgs = {
  domain: Scalars['String']['input'];
};


export type QueryDeploymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDeploymentEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDeploymentInstanceExecutionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input: DeploymentInstanceExecutionListInput;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDeploymentLogsArgs = {
  deploymentId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDeploymentSnapshotArgs = {
  deploymentId: Scalars['String']['input'];
};


export type QueryDeploymentTriggersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input: DeploymentListInput;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDomainStatusArgs = {
  id: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};


export type QueryDomainsArgs = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryEgressGatewaysArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryEnvironmentArgs = {
  id: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEnvironmentLogsArgs = {
  afterDate?: InputMaybe<Scalars['String']['input']>;
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  anchorDate?: InputMaybe<Scalars['String']['input']>;
  beforeDate?: InputMaybe<Scalars['String']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  environmentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEnvironmentPatchArgs = {
  id: Scalars['String']['input'];
};


export type QueryEnvironmentPatchesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEnvironmentStagedChangesArgs = {
  environmentId: Scalars['String']['input'];
};


export type QueryEnvironmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isEphemeral?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
};


export type QueryEstimatedUsageArgs = {
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  measurements: Array<MetricMeasurement>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
};


export type QueryExternalWorkspacesArgs = {
  projectId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFunctionRuntimeArgs = {
  name: FunctionRuntimeName;
};


export type QueryGitHubRepoAccessAvailableArgs = {
  fullRepoName: Scalars['String']['input'];
};


export type QueryGithubIsRepoNameAvailableArgs = {
  fullRepoName: Scalars['String']['input'];
};


export type QueryGithubRepoArgs = {
  fullRepoName: Scalars['String']['input'];
};


export type QueryGithubRepoBranchesArgs = {
  owner: Scalars['String']['input'];
  repo: Scalars['String']['input'];
};


export type QueryHttpLogsArgs = {
  afterDate?: InputMaybe<Scalars['String']['input']>;
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  anchorDate?: InputMaybe<Scalars['String']['input']>;
  beforeDate?: InputMaybe<Scalars['String']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  deploymentId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntegrationAuthArgs = {
  provider: Scalars['String']['input'];
  providerId: Scalars['String']['input'];
};


export type QueryIntegrationAuthsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
};


export type QueryInviteCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryMetricsArgs = {
  averagingWindowSeconds?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  environmentId?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Array<MetricTag>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  measurements: Array<MetricMeasurement>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  sampleRateSeconds?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  volumeId?: InputMaybe<Scalars['String']['input']>;
  volumeInstanceExternalId?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryNotificationDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationDeliveryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryObservabilityDashboardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPasskeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPluginArgs = {
  id: Scalars['String']['input'];
};


export type QueryPluginLogsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  environmentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pluginId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPreferencesArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPrivateNetworkEndpointArgs = {
  environmentId: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryPrivateNetworkEndpointNameAvailableArgs = {
  environmentId: Scalars['String']['input'];
  prefix: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
};


export type QueryPrivateNetworksArgs = {
  environmentId: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectInvitationArgs = {
  code: Scalars['String']['input'];
};


export type QueryProjectInvitationsArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectInviteCodeArgs = {
  projectId: Scalars['String']['input'];
  role: ProjectRole;
};


export type QueryProjectMembersArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryProjectResourceAccessArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryProjectTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReferralInfoArgs = {
  workspaceId: Scalars['String']['input'];
};


export type QueryRegionsArgs = {
  projectId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryResourceAccessArgs = {
  explicitResourceOwner: ExplicitOwnerInput;
};


export type QueryServiceArgs = {
  id: Scalars['String']['input'];
};


export type QueryServiceDomainAvailableArgs = {
  domain: Scalars['String']['input'];
};


export type QueryServiceInstanceArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryServiceInstanceIsUpdatableArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryServiceInstanceLimitOverrideArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryServiceInstanceLimitsArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QuerySessionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTcpProxiesArgs = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryTeamArgs = {
  id: Scalars['String']['input'];
};


export type QueryTeamTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  teamId: Scalars['String']['input'];
};


export type QueryTemplateArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTemplateSourceForProjectArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  recommended?: InputMaybe<Scalars['Boolean']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTrustedDomainsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['String']['input'];
};


export type QueryUsageArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  groupBy?: InputMaybe<Array<MetricTag>>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  measurements: Array<MetricMeasurement>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserKickbackEarningsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserProfileArgs = {
  username: Scalars['String']['input'];
};


export type QueryUserTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVariablesArgs = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['String']['input']>;
  unrendered?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVariablesForServiceDeploymentArgs = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryVolumeInstanceArgs = {
  id: Scalars['String']['input'];
};


export type QueryVolumeInstanceBackupListArgs = {
  volumeInstanceId: Scalars['String']['input'];
};


export type QueryVolumeInstanceBackupScheduleListArgs = {
  volumeInstanceId: Scalars['String']['input'];
};


export type QueryWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
};


export type QueryWorkflowStatusArgs = {
  workflowId: Scalars['String']['input'];
};


export type QueryWorkspaceArgs = {
  workspaceId: Scalars['String']['input'];
};


export type QueryWorkspaceByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryWorkspaceIdentityProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['String']['input'];
};


export type QueryWorkspaceTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type QueryApiTokensConnection = {
  __typename?: 'QueryApiTokensConnection';
  edges: Array<QueryApiTokensConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryApiTokensConnectionEdge = {
  __typename?: 'QueryApiTokensConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ApiToken;
};

export type QueryDeploymentEventsConnection = {
  __typename?: 'QueryDeploymentEventsConnection';
  edges: Array<QueryDeploymentEventsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryDeploymentEventsConnectionEdge = {
  __typename?: 'QueryDeploymentEventsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: DeploymentEvent;
};

export type QueryDeploymentInstanceExecutionsConnection = {
  __typename?: 'QueryDeploymentInstanceExecutionsConnection';
  edges: Array<QueryDeploymentInstanceExecutionsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryDeploymentInstanceExecutionsConnectionEdge = {
  __typename?: 'QueryDeploymentInstanceExecutionsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: DeploymentInstanceExecution;
};

export type QueryDeploymentTriggersConnection = {
  __typename?: 'QueryDeploymentTriggersConnection';
  edges: Array<QueryDeploymentTriggersConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryDeploymentTriggersConnectionEdge = {
  __typename?: 'QueryDeploymentTriggersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: DeploymentTrigger;
};

export type QueryDeploymentsConnection = {
  __typename?: 'QueryDeploymentsConnection';
  edges: Array<QueryDeploymentsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryDeploymentsConnectionEdge = {
  __typename?: 'QueryDeploymentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Deployment;
};

export type QueryEnvironmentPatchesConnection = {
  __typename?: 'QueryEnvironmentPatchesConnection';
  edges: Array<QueryEnvironmentPatchesConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryEnvironmentPatchesConnectionEdge = {
  __typename?: 'QueryEnvironmentPatchesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: EnvironmentPatch;
};

export type QueryEnvironmentsConnection = {
  __typename?: 'QueryEnvironmentsConnection';
  edges: Array<QueryEnvironmentsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryEnvironmentsConnectionEdge = {
  __typename?: 'QueryEnvironmentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Environment;
};

export type QueryEventsConnection = {
  __typename?: 'QueryEventsConnection';
  edges: Array<QueryEventsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryEventsConnectionEdge = {
  __typename?: 'QueryEventsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type QueryIntegrationAuthsConnection = {
  __typename?: 'QueryIntegrationAuthsConnection';
  edges: Array<QueryIntegrationAuthsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryIntegrationAuthsConnectionEdge = {
  __typename?: 'QueryIntegrationAuthsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: IntegrationAuth;
};

export type QueryIntegrationsConnection = {
  __typename?: 'QueryIntegrationsConnection';
  edges: Array<QueryIntegrationsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryIntegrationsConnectionEdge = {
  __typename?: 'QueryIntegrationsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Integration;
};

export type QueryNotificationDeliveriesConnection = {
  __typename?: 'QueryNotificationDeliveriesConnection';
  edges: Array<QueryNotificationDeliveriesConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryNotificationDeliveriesConnectionEdge = {
  __typename?: 'QueryNotificationDeliveriesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: NotificationDelivery;
};

export type QueryObservabilityDashboardsConnection = {
  __typename?: 'QueryObservabilityDashboardsConnection';
  edges: Array<QueryObservabilityDashboardsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryObservabilityDashboardsConnectionEdge = {
  __typename?: 'QueryObservabilityDashboardsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ObservabilityDashboard;
};

export type QueryPasskeysConnection = {
  __typename?: 'QueryPasskeysConnection';
  edges: Array<QueryPasskeysConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryPasskeysConnectionEdge = {
  __typename?: 'QueryPasskeysConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Passkey;
};

export type QueryProjectTokensConnection = {
  __typename?: 'QueryProjectTokensConnection';
  edges: Array<QueryProjectTokensConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryProjectTokensConnectionEdge = {
  __typename?: 'QueryProjectTokensConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ProjectToken;
};

export type QueryProjectsConnection = {
  __typename?: 'QueryProjectsConnection';
  edges: Array<QueryProjectsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryProjectsConnectionEdge = {
  __typename?: 'QueryProjectsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type QuerySessionsConnection = {
  __typename?: 'QuerySessionsConnection';
  edges: Array<QuerySessionsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QuerySessionsConnectionEdge = {
  __typename?: 'QuerySessionsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Session;
};

export type QueryTeamTemplatesConnection = {
  __typename?: 'QueryTeamTemplatesConnection';
  edges: Array<QueryTeamTemplatesConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryTeamTemplatesConnectionEdge = {
  __typename?: 'QueryTeamTemplatesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Template;
};

export type QueryTemplatesConnection = {
  __typename?: 'QueryTemplatesConnection';
  edges: Array<QueryTemplatesConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryTemplatesConnectionEdge = {
  __typename?: 'QueryTemplatesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Template;
};

export type QueryTrustedDomainsConnection = {
  __typename?: 'QueryTrustedDomainsConnection';
  edges: Array<QueryTrustedDomainsConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryTrustedDomainsConnectionEdge = {
  __typename?: 'QueryTrustedDomainsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: TrustedDomain;
};

export type QueryUserTemplatesConnection = {
  __typename?: 'QueryUserTemplatesConnection';
  edges: Array<QueryUserTemplatesConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryUserTemplatesConnectionEdge = {
  __typename?: 'QueryUserTemplatesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Template;
};

export type QueryWebhooksConnection = {
  __typename?: 'QueryWebhooksConnection';
  edges: Array<QueryWebhooksConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryWebhooksConnectionEdge = {
  __typename?: 'QueryWebhooksConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ProjectWebhook;
};

export type QueryWorkspaceIdentityProvidersConnection = {
  __typename?: 'QueryWorkspaceIdentityProvidersConnection';
  edges: Array<QueryWorkspaceIdentityProvidersConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryWorkspaceIdentityProvidersConnectionEdge = {
  __typename?: 'QueryWorkspaceIdentityProvidersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceIdentityProvider;
};

export type QueryWorkspaceTemplatesConnection = {
  __typename?: 'QueryWorkspaceTemplatesConnection';
  edges: Array<QueryWorkspaceTemplatesConnectionEdge>;
  pageInfo: PageInfo;
};

export type QueryWorkspaceTemplatesConnectionEdge = {
  __typename?: 'QueryWorkspaceTemplatesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Template;
};

export type RecoveryCodeValidateInput = {
  code: Scalars['String']['input'];
  twoFactorLinkingKey?: InputMaybe<Scalars['String']['input']>;
};

export type RecoveryCodes = {
  __typename?: 'RecoveryCodes';
  recoveryCodes: Array<Scalars['String']['output']>;
};

export type ReferralInfo = Node & {
  __typename?: 'ReferralInfo';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  referralStats: ReferralStats;
  status: Scalars['String']['output'];
};

export type ReferralInfoUpdateInput = {
  code: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type ReferralStats = {
  __typename?: 'ReferralStats';
  credited: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
};

export type ReferralStatus =
  | 'REFEREE_CREDITED'
  | 'REFERRER_CREDITED'
  | 'REGISTERED';

export type ReferralUser = {
  __typename?: 'ReferralUser';
  code: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: ReferralStatus;
};

export type RefundRequest = Node & {
  __typename?: 'RefundRequest';
  amount: Scalars['Int']['output'];
  decision?: Maybe<RefundRequestDecisionEnum>;
  id: Scalars['ID']['output'];
  invoiceId: Scalars['String']['output'];
  plainThreadId?: Maybe<Scalars['String']['output']>;
  reason: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  workspace: Workspace;
};

/** Possible decisions for a RefundRequest */
export type RefundRequestDecisionEnum =
  | 'AUTO_REFUNDED'
  | 'AUTO_REJECTED'
  | 'MANUALLY_REFUNDED';

export type Region = {
  __typename?: 'Region';
  /** Region country */
  country: Scalars['String']['output'];
  deploymentConstraints?: Maybe<RegionDeploymentConstraints>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Region is on Railway Metal */
  railwayMetal?: Maybe<Scalars['Boolean']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type RegionDeploymentConstraints = {
  __typename?: 'RegionDeploymentConstraints';
  /** Admin only region */
  adminOnly?: Maybe<Scalars['Boolean']['output']>;
  /** Deprecation information for the region */
  deprecationInfo?: Maybe<RegionDeprecationInfo>;
  runtimeExclusivity?: Maybe<Array<Scalars['String']['output']>>;
  /** Staging only region */
  stagingOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type RegionDeprecationInfo = {
  __typename?: 'RegionDeprecationInfo';
  /** Specifies if the region is deprecated */
  isDeprecated: Scalars['Boolean']['output'];
  /** Replacement region for the deprecated region */
  replacementRegion: Scalars['String']['output'];
};

export type RegistrationStatus =
  | 'ONBOARDED'
  | 'REGISTERED'
  | 'WAITLISTED';

/** Private Docker registry credentials. Only available for Pro plan deployments. */
export type RegistryCredentialsInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ReissuedInvoice = Node & {
  __typename?: 'ReissuedInvoice';
  id: Scalars['ID']['output'];
  originalInvoiceId: Scalars['String']['output'];
  reissuedInvoiceId?: Maybe<Scalars['String']['output']>;
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type ReplicateVolumeInstanceSnapshotStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'INITIATED'
  | 'TRANSFERRING'
  | 'UNRECOGNIZED';

/** The status of a volume instance replication */
export type ReplicateVolumeInstanceStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'QUEUED'
  | 'TRANSFERRING_OFFLINE'
  | 'TRANSFERRING_ONLINE';

export type ResetPluginCredentialsInput = {
  environmentId: Scalars['String']['input'];
};

export type ResetPluginInput = {
  environmentId: Scalars['String']['input'];
};

export type ResourceAccess = {
  __typename?: 'ResourceAccess';
  deployment: AccessRule;
  project: AccessRule;
};

export type ResourceOwnerType =
  | 'WORKSPACE';

export type RestartPolicyType =
  | 'ALWAYS'
  | 'NEVER'
  | 'ON_FAILURE';

export type Service = Node & {
  __typename?: 'Service';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deployments: ServiceDeploymentsConnection;
  featureFlags: Array<ActiveServiceFeatureFlag>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['String']['output'];
  repoTriggers: ServiceRepoTriggersConnection;
  serviceInstances: ServiceServiceInstancesConnection;
  templateServiceId?: Maybe<Scalars['String']['output']>;
  templateThreadSlug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type ServiceDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceRepoTriggersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceServiceInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceConnectInput = {
  /** The branch to connect to. e.g. 'main' */
  branch?: InputMaybe<Scalars['String']['input']>;
  /** Name of the Dockerhub or GHCR image to connect this service to. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the repo to connect to. e.g. 'railwayapp/starters' */
  repo?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceCreateInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  /** Environment ID. If the specified environment is a fork, the service will only be created in it. Otherwise it will created in all environments that are not forks of other environments */
  environmentId?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  registryCredentials?: InputMaybe<RegistryCredentialsInput>;
  source?: InputMaybe<ServiceSourceInput>;
  templateServiceId?: InputMaybe<Scalars['String']['input']>;
  variables?: InputMaybe<Scalars['EnvironmentVariables']['input']>;
};

export type ServiceDeploymentsConnection = {
  __typename?: 'ServiceDeploymentsConnection';
  edges: Array<ServiceDeploymentsConnectionEdge>;
  pageInfo: PageInfo;
};

export type ServiceDeploymentsConnectionEdge = {
  __typename?: 'ServiceDeploymentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Deployment;
};

export type ServiceDomain = Domain & {
  __typename?: 'ServiceDomain';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  domain: Scalars['String']['output'];
  edgeId?: Maybe<Scalars['String']['output']>;
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  serviceId: Scalars['String']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  targetPort?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceDomainCreateInput = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceDomainUpdateInput = {
  domain: Scalars['String']['input'];
  environmentId: Scalars['String']['input'];
  serviceDomainId?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceFeatureFlagToggleInput = {
  flag: ActiveServiceFeatureFlag;
  serviceId: Scalars['String']['input'];
};

export type ServiceInstance = Node & {
  __typename?: 'ServiceInstance';
  buildCommand?: Maybe<Scalars['String']['output']>;
  builder: Builder;
  createdAt: Scalars['DateTime']['output'];
  cronSchedule?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dockerfilePath?: Maybe<Scalars['String']['output']>;
  domains: AllDomains;
  drainingSeconds?: Maybe<Scalars['Int']['output']>;
  environmentId: Scalars['String']['output'];
  healthcheckPath?: Maybe<Scalars['String']['output']>;
  healthcheckTimeout?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isUpdatable: Scalars['Boolean']['output'];
  latestDeployment?: Maybe<Deployment>;
  nextCronRunAt?: Maybe<Scalars['DateTime']['output']>;
  nixpacksPlan?: Maybe<Scalars['JSON']['output']>;
  numReplicas?: Maybe<Scalars['Int']['output']>;
  overlapSeconds?: Maybe<Scalars['Int']['output']>;
  preDeployCommand?: Maybe<Scalars['JSON']['output']>;
  railpackInfo?: Maybe<Scalars['RailpackInfo']['output']>;
  railwayConfigFile?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  restartPolicyMaxRetries: Scalars['Int']['output'];
  restartPolicyType: RestartPolicyType;
  rootDirectory?: Maybe<Scalars['String']['output']>;
  serviceId: Scalars['String']['output'];
  serviceName: Scalars['String']['output'];
  sleepApplication?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<ServiceSource>;
  startCommand?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  upstreamUrl?: Maybe<Scalars['String']['output']>;
  watchPatterns: Array<Scalars['String']['output']>;
};

export type ServiceInstanceLimitsUpdateInput = {
  environmentId: Scalars['String']['input'];
  /** Amount of memory in GB to allocate to the service instance */
  memoryGB?: InputMaybe<Scalars['Float']['input']>;
  serviceId: Scalars['String']['input'];
  /** Number of vCPUs to allocate to the service instance */
  vCPUs?: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceInstanceUpdateInput = {
  buildCommand?: InputMaybe<Scalars['String']['input']>;
  builder?: InputMaybe<Builder>;
  cronSchedule?: InputMaybe<Scalars['String']['input']>;
  dockerfilePath?: InputMaybe<Scalars['String']['input']>;
  drainingSeconds?: InputMaybe<Scalars['Int']['input']>;
  healthcheckPath?: InputMaybe<Scalars['String']['input']>;
  healthcheckTimeout?: InputMaybe<Scalars['Int']['input']>;
  multiRegionConfig?: InputMaybe<Scalars['JSON']['input']>;
  nixpacksPlan?: InputMaybe<Scalars['JSON']['input']>;
  numReplicas?: InputMaybe<Scalars['Int']['input']>;
  overlapSeconds?: InputMaybe<Scalars['Int']['input']>;
  preDeployCommand?: InputMaybe<Array<Scalars['String']['input']>>;
  railwayConfigFile?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  registryCredentials?: InputMaybe<RegistryCredentialsInput>;
  restartPolicyMaxRetries?: InputMaybe<Scalars['Int']['input']>;
  restartPolicyType?: InputMaybe<RestartPolicyType>;
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
  sleepApplication?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<ServiceSourceInput>;
  startCommand?: InputMaybe<Scalars['String']['input']>;
  watchPatterns?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ServiceRepoTriggersConnection = {
  __typename?: 'ServiceRepoTriggersConnection';
  edges: Array<ServiceRepoTriggersConnectionEdge>;
  pageInfo: PageInfo;
};

export type ServiceRepoTriggersConnectionEdge = {
  __typename?: 'ServiceRepoTriggersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: DeploymentTrigger;
};

export type ServiceServiceInstancesConnection = {
  __typename?: 'ServiceServiceInstancesConnection';
  edges: Array<ServiceServiceInstancesConnectionEdge>;
  pageInfo: PageInfo;
};

export type ServiceServiceInstancesConnectionEdge = {
  __typename?: 'ServiceServiceInstancesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ServiceInstance;
};

export type ServiceSource = {
  __typename?: 'ServiceSource';
  image?: Maybe<Scalars['String']['output']>;
  repo?: Maybe<Scalars['String']['output']>;
};

export type ServiceSourceInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceUpdateInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Session = Node & {
  __typename?: 'Session';
  createdAt: Scalars['DateTime']['output'];
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isCurrent: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: SessionType;
  updatedAt: Scalars['DateTime']['output'];
};

export type SessionType =
  | 'BROWSER'
  | 'CLI'
  | 'FORUMS';

export type SharedVariableConfigureInput = {
  disabledServiceIds: Array<Scalars['String']['input']>;
  enabledServiceIds: Array<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type SimilarTemplate = {
  __typename?: 'SimilarTemplate';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<TemplateCreator>;
  deploys: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** @deprecated Use workspaceId */
  teamId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Stream logs for a build */
  buildLogs: Array<Log>;
  /** Subscribe to updates for a specific deployment */
  deployment: Deployment;
  /** Subscribe to deployment events for a specific deployment */
  deploymentEvents: DeploymentEvent;
  /** Subscribe to deployment instance executions for a specific deployment */
  deploymentInstanceExecutions: DeploymentInstanceExecution;
  /** Stream logs for a deployment */
  deploymentLogs: Array<Log>;
  /** Stream logs for a project environment */
  environmentLogs: Array<Log>;
  /** Subscribe to updates for the staged patch for a single environment. */
  environmentStagedPatch: EnvironmentPatch;
  /** Stream HTTP logs for a deployment */
  httpLogs: Array<HttpLog>;
  /** Subscribe to notification delivery updates (created and resolved) for the authenticated user */
  notificationDeliveryUpdated: NotificationDeliveryUpdate;
  /**
   * Stream logs for a plugin
   * @deprecated Plugins are deprecated
   */
  pluginLogs: Array<Log>;
  /** Subscribe to migration progress updates for a volume */
  replicationProgress: VolumeReplicationProgressUpdate;
};


export type SubscriptionBuildLogsArgs = {
  deploymentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionDeploymentArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDeploymentEventsArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDeploymentInstanceExecutionsArgs = {
  input: DeploymentInstanceExecutionInput;
};


export type SubscriptionDeploymentLogsArgs = {
  deploymentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionEnvironmentLogsArgs = {
  afterDate?: InputMaybe<Scalars['String']['input']>;
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  anchorDate?: InputMaybe<Scalars['String']['input']>;
  beforeDate?: InputMaybe<Scalars['String']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  environmentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionEnvironmentStagedPatchArgs = {
  environmentId: Scalars['String']['input'];
};


export type SubscriptionHttpLogsArgs = {
  afterDate?: InputMaybe<Scalars['String']['input']>;
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  anchorDate?: InputMaybe<Scalars['String']['input']>;
  beforeDate?: InputMaybe<Scalars['String']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  deploymentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionPluginLogsArgs = {
  environmentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pluginId: Scalars['String']['input'];
};


export type SubscriptionReplicationProgressArgs = {
  volumeInstanceId: Scalars['String']['input'];
};

export type SubscriptionDiscount = {
  __typename?: 'SubscriptionDiscount';
  couponId: Scalars['String']['output'];
};

export type SubscriptionItem = {
  __typename?: 'SubscriptionItem';
  itemId: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  quantity?: Maybe<Scalars['BigInt']['output']>;
};

export type SubscriptionModel =
  | 'FREE'
  | 'TEAM'
  | 'USER';

export type SubscriptionPlanType =
  | 'free'
  | 'hobby'
  | 'pro'
  | 'trial';

export type SubscriptionState =
  | 'ACTIVE'
  | 'CANCELLED'
  | 'INACTIVE'
  | 'PAST_DUE'
  | 'UNPAID';

export type SupportTierOverride =
  | 'BUSINESS_CLASS'
  | 'BUSINESS_CLASS_TRIAL';

export type TcpProxy = {
  __typename?: 'TCPProxy';
  applicationPort: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  domain: Scalars['String']['output'];
  environmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  proxyPort: Scalars['Int']['output'];
  serviceId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TcpProxyCreateInput = {
  applicationPort: Scalars['Int']['input'];
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type Team = Node & {
  __typename?: 'Team';
  /** @deprecated Use workspace object instead */
  adoptionHistory: Array<AdoptionInfo>;
  /** @deprecated Use workspace object instead */
  adoptionLevel: Scalars['Float']['output'];
  /** @deprecated Use workspace object instead */
  apiTokenRateLimit?: Maybe<ApiTokenRateLimit>;
  /** @deprecated Use workspace object instead */
  avatar?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use workspace object instead */
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Use workspace object instead */
  customer: Customer;
  /** @deprecated Use workspace object instead */
  id: Scalars['ID']['output'];
  /** @deprecated Use workspace object instead */
  members: Array<TeamMember>;
  /** @deprecated Use workspace object instead */
  name: Scalars['String']['output'];
  /** @deprecated Use workspace object instead */
  preferredRegion?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use workspace object instead */
  projects: TeamProjectsConnection;
  /** @deprecated Use workspace object instead */
  slackChannelId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use workspace object instead */
  supportTierOverride?: Maybe<SupportTierOverride>;
  /** @deprecated Use workspace object instead */
  teamPermissions: Array<TeamPermission>;
  /** @deprecated Use workspace object instead */
  updatedAt: Scalars['DateTime']['output'];
  /** @deprecated Use workspace object instead */
  workspace: Workspace;
};


export type TeamProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  /** Only retrieved if requested by an admin */
  featureFlags?: Maybe<Array<ActiveFeatureFlag>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role: TeamRole;
};

export type TeamPermission = Node & {
  __typename?: 'TeamPermission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  role: TeamRole;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  workspaceId: Scalars['String']['output'];
};

export type TeamProjectsConnection = {
  __typename?: 'TeamProjectsConnection';
  edges: Array<TeamProjectsConnectionEdge>;
  pageInfo: PageInfo;
};

export type TeamProjectsConnectionEdge = {
  __typename?: 'TeamProjectsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type TeamRole =
  | 'ADMIN'
  | 'MEMBER'
  | 'VIEWER';

export type Template = Node & {
  __typename?: 'Template';
  activeProjects: Scalars['Int']['output'];
  canvasConfig?: Maybe<Scalars['CanvasConfig']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  communityThreadSlug?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use serializedConfig instead */
  config: Scalars['TemplateConfig']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<TemplateCreator>;
  demoProjectId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  guides?: Maybe<TemplateGuide>;
  health?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isApproved: Scalars['Boolean']['output'];
  isV2Template: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  languages?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Deprecated in favor of listing the fields individually. */
  metadata: Scalars['TemplateMetadata']['output'];
  name: Scalars['String']['output'];
  projects: Scalars['Int']['output'];
  readme?: Maybe<Scalars['String']['output']>;
  recentProjects: Scalars['Int']['output'];
  serializedConfig?: Maybe<Scalars['SerializedTemplateConfig']['output']>;
  services: TemplateServicesConnection;
  similarTemplates: Array<SimilarTemplate>;
  status: TemplateStatus;
  supportHealthMetrics?: Maybe<Scalars['SupportHealthMetrics']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Use workspaceId */
  teamId?: Maybe<Scalars['String']['output']>;
  totalPayout: Scalars['Float']['output'];
  workspaceId?: Maybe<Scalars['String']['output']>;
};


export type TemplateServicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TemplateCloneInput = {
  code: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateCreator = {
  __typename?: 'TemplateCreator';
  avatar?: Maybe<Scalars['String']['output']>;
  hasPublicProfile: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type TemplateDeleteInput = {
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateDeployInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  services: Array<TemplateDeployService>;
  templateCode?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateDeployPayload = {
  __typename?: 'TemplateDeployPayload';
  projectId: Scalars['String']['output'];
  workflowId?: Maybe<Scalars['String']['output']>;
};

export type TemplateDeployService = {
  commit?: InputMaybe<Scalars['String']['input']>;
  hasDomain?: InputMaybe<Scalars['Boolean']['input']>;
  healthcheckPath?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  preDeployCommand?: InputMaybe<Array<Scalars['String']['input']>>;
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
  serviceIcon?: InputMaybe<Scalars['String']['input']>;
  serviceName: Scalars['String']['input'];
  startCommand?: InputMaybe<Scalars['String']['input']>;
  tcpProxyApplicationPort?: InputMaybe<Scalars['Int']['input']>;
  template: Scalars['String']['input'];
  variables?: InputMaybe<Scalars['EnvironmentVariables']['input']>;
  volumes?: InputMaybe<Array<Scalars['TemplateVolume']['input']>>;
};

export type TemplateDeployV2Input = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  serializedConfig: Scalars['SerializedTemplateConfig']['input'];
  templateId: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateGenerateInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
};

export type TemplateGuide = {
  __typename?: 'TemplateGuide';
  post?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

export type TemplatePublishInput = {
  category: Scalars['String']['input'];
  demoProjectId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  readme: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateService = Node & {
  __typename?: 'TemplateService';
  config: Scalars['TemplateServiceConfig']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  templateId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TemplateServiceSourceEjectInput = {
  projectId: Scalars['String']['input'];
  repoName: Scalars['String']['input'];
  repoOwner: Scalars['String']['input'];
  /** Provide multiple serviceIds when ejecting services from a monorepo. */
  serviceIds: Array<Scalars['String']['input']>;
  upstreamUrl: Scalars['String']['input'];
};

export type TemplateServicesConnection = {
  __typename?: 'TemplateServicesConnection';
  edges: Array<TemplateServicesConnectionEdge>;
  pageInfo: PageInfo;
};

export type TemplateServicesConnectionEdge = {
  __typename?: 'TemplateServicesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: TemplateService;
};

export type TemplateStatus =
  | 'HIDDEN'
  | 'PUBLISHED'
  | 'UNPUBLISHED';

export type TrustedDomain = {
  __typename?: 'TrustedDomain';
  domainName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  verificationData: TrustedDomainVerificationData;
  verificationType: Scalars['String']['output'];
  workspaceId: Scalars['String']['output'];
};

export type TrustedDomainVerificationData = {
  __typename?: 'TrustedDomainVerificationData';
  domainMatch?: Maybe<Domain>;
  domainStatus?: Maybe<CustomDomainStatus>;
};

export type TwoFactorInfo = {
  __typename?: 'TwoFactorInfo';
  hasRecoveryCodes: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
};

export type TwoFactorInfoCreateInput = {
  token: Scalars['String']['input'];
};

export type TwoFactorInfoSecret = {
  __typename?: 'TwoFactorInfoSecret';
  secret: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type TwoFactorInfoValidateInput = {
  token: Scalars['String']['input'];
  twoFactorLinkingKey?: InputMaybe<Scalars['String']['input']>;
};

export type UsageAnomaly = Node & {
  __typename?: 'UsageAnomaly';
  actedOn?: Maybe<Scalars['DateTime']['output']>;
  action?: Maybe<UsageAnomalyAction>;
  actorId?: Maybe<Scalars['String']['output']>;
  flaggedAt: Scalars['DateTime']['output'];
  flaggedFor: UsageAnomalyFlagReason;
  id: Scalars['ID']['output'];
};

/** Possible actions for a UsageAnomaly. */
export type UsageAnomalyAction =
  | 'ALLOWED'
  | 'AUTOBANNED'
  | 'BANNED';

/** Possible flag reasons for a UsageAnomaly. */
export type UsageAnomalyFlagReason =
  | 'HIGH_CPU_USAGE'
  | 'HIGH_DISK_USAGE'
  | 'HIGH_NETWORK_USAGE';

export type UsageLimit = Node & {
  __typename?: 'UsageLimit';
  customerId: Scalars['String']['output'];
  hardLimit?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isOverLimit: Scalars['Boolean']['output'];
  softLimit: Scalars['Int']['output'];
};

export type UsageLimitRemoveInput = {
  customerId: Scalars['String']['input'];
};

export type UsageLimitSetInput = {
  customerId: Scalars['String']['input'];
  hardLimitDollars?: InputMaybe<Scalars['Int']['input']>;
  softLimitDollars: Scalars['Int']['input'];
};

export type User = Node & {
  __typename?: 'User';
  agreedFairUse: Scalars['Boolean']['output'];
  apiTokenRateLimit?: Maybe<ApiTokenRateLimit>;
  avatar?: Maybe<Scalars['String']['output']>;
  banReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  featureFlags: Array<ActiveFeatureFlag>;
  flags: Array<UserFlag>;
  has2FA: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isConductor: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastLogin: Scalars['DateTime']['output'];
  name?: Maybe<Scalars['String']['output']>;
  platformFeatureFlags: Array<ActivePlatformFlag>;
  profile?: Maybe<UserProfile>;
  /** @deprecated This field will not return anything anymore, go through the workspace's projects */
  projects: UserProjectsConnection;
  providerAuths: UserProviderAuthsConnection;
  registrationStatus: RegistrationStatus;
  riskLevel?: Maybe<Scalars['Float']['output']>;
  termsAgreedOn?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use user.workspaces instead, no user are associated to a workspace */
  workspace?: Maybe<Workspace>;
  /** Workspaces user is member of */
  workspaces: Array<Workspace>;
};


export type UserProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserProviderAuthsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserFlag =
  | 'BETA';

export type UserFlagsRemoveInput = {
  flags: Array<UserFlag>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserFlagsSetInput = {
  flags: Array<UserFlag>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserGithubRepo = Node & {
  __typename?: 'UserGithubRepo';
  createdAt: Scalars['DateTime']['output'];
  defaultBranch: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  installationId: Scalars['String']['output'];
  isPrivate: Scalars['Boolean']['output'];
  lastPushedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  ownerAvatarUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserKickbackEarnings = {
  __typename?: 'UserKickbackEarnings';
  total_amount: Scalars['Float']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  bio?: Maybe<Scalars['String']['output']>;
  isPublic: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type UserProfileResponse = {
  __typename?: 'UserProfileResponse';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isTrialing?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile: UserProfile;
  /** Gets all public projects for a user. */
  publicProjects: UserProfileResponsePublicProjectsConnection;
  /** @deprecated There are no personal templates anymore, they all belong to a workspace */
  publishedTemplates: Array<SimilarTemplate>;
  state?: Maybe<Scalars['String']['output']>;
  totalDeploys: Scalars['Int']['output'];
  username?: Maybe<Scalars['String']['output']>;
};


export type UserProfileResponsePublicProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserProfileResponsePublicProjectsConnection = {
  __typename?: 'UserProfileResponsePublicProjectsConnection';
  edges: Array<UserProfileResponsePublicProjectsConnectionEdge>;
  pageInfo: PageInfo;
};

export type UserProfileResponsePublicProjectsConnectionEdge = {
  __typename?: 'UserProfileResponsePublicProjectsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type UserProfileUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  isPublic: Scalars['Boolean']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UserProjectsConnection = {
  __typename?: 'UserProjectsConnection';
  edges: Array<UserProjectsConnectionEdge>;
  pageInfo: PageInfo;
};

export type UserProjectsConnectionEdge = {
  __typename?: 'UserProjectsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type UserProviderAuthsConnection = {
  __typename?: 'UserProviderAuthsConnection';
  edges: Array<UserProviderAuthsConnectionEdge>;
  pageInfo: PageInfo;
};

export type UserProviderAuthsConnectionEdge = {
  __typename?: 'UserProviderAuthsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: ProviderAuth;
};

export type Variable = Node & {
  __typename?: 'Variable';
  createdAt: Scalars['DateTime']['output'];
  environment: Environment;
  environmentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isSealed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  plugin: Plugin;
  /** @deprecated Plugins have been removed */
  pluginId?: Maybe<Scalars['String']['output']>;
  references: Array<Scalars['String']['output']>;
  service: Service;
  serviceId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type VariableCollectionUpsertInput = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  /** When set to true, removes all existing variables before upserting the new collection. */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  /** Skip deploys for affected services */
  skipDeploys?: InputMaybe<Scalars['Boolean']['input']>;
  variables: Scalars['EnvironmentVariables']['input'];
};

export type VariableDeleteInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type VariableUpsertInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['String']['input']>;
  /** Skip deploys for affected services */
  skipDeploys?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['String']['input'];
};

export type VercelAccount = {
  __typename?: 'VercelAccount';
  id: Scalars['String']['output'];
  integrationAuthId: Scalars['String']['output'];
  isUser: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  projects: Array<VercelProject>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type VercelInfo = {
  __typename?: 'VercelInfo';
  accounts: Array<VercelAccount>;
};

export type VercelProject = {
  __typename?: 'VercelProject';
  accountId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Volume = Node & {
  __typename?: 'Volume';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['String']['output'];
  volumeInstances: VolumeVolumeInstancesConnection;
};


export type VolumeVolumeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type VolumeCreateInput = {
  /** The environment to deploy the volume instances into. If `null`, the volume will not be deployed to any environment. `undefined` will deploy to all environments. */
  environmentId?: InputMaybe<Scalars['String']['input']>;
  /** The path in the container to mount the volume to */
  mountPath: Scalars['String']['input'];
  /** The project to create the volume in */
  projectId: Scalars['String']['input'];
  /** The region to create the volume instances in. If not provided, the default region will be used. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The service to attach the volume to. If not provided, the volume will be disconnected. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type VolumeInstance = Node & {
  __typename?: 'VolumeInstance';
  createdAt: Scalars['DateTime']['output'];
  currentSizeMB: Scalars['Float']['output'];
  environment: Environment;
  environmentId: Scalars['String']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mountPath: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
  service: Service;
  serviceId?: Maybe<Scalars['String']['output']>;
  sizeMB: Scalars['Int']['output'];
  state?: Maybe<VolumeState>;
  volume: Volume;
  volumeId: Scalars['String']['output'];
};

export type VolumeInstanceBackup = {
  __typename?: 'VolumeInstanceBackup';
  createdAt: Scalars['DateTime']['output'];
  creatorId?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  externalId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  referencedMB?: Maybe<Scalars['Int']['output']>;
  scheduleId?: Maybe<Scalars['String']['output']>;
  usedMB?: Maybe<Scalars['Int']['output']>;
};

export type VolumeInstanceBackupSchedule = Node & {
  __typename?: 'VolumeInstanceBackupSchedule';
  createdAt: Scalars['DateTime']['output'];
  cron: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  kind: VolumeInstanceBackupScheduleKind;
  name: Scalars['String']['output'];
  retentionSeconds?: Maybe<Scalars['Int']['output']>;
};

export type VolumeInstanceBackupScheduleKind =
  | 'DAILY'
  | 'MONTHLY'
  | 'WEEKLY';

export type VolumeInstanceReplicationProgress = {
  __typename?: 'VolumeInstanceReplicationProgress';
  bytesTransferred: Scalars['BigInt']['output'];
  percentComplete: Scalars['Float']['output'];
  timestamp: Scalars['DateTime']['output'];
  transferRateMbps?: Maybe<Scalars['Float']['output']>;
};

export type VolumeInstanceUpdateInput = {
  /** The mount path of the volume instance. If not provided, the mount path will not be updated. */
  mountPath?: InputMaybe<Scalars['String']['input']>;
  /** The service to attach the volume to. If not provided, the volume will be disconnected. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
  /** The state of the volume instance. If not provided, the state will not be updated. */
  state?: InputMaybe<VolumeState>;
};

export type VolumeReplicationProgressUpdate = {
  __typename?: 'VolumeReplicationProgressUpdate';
  currentSnapshot: VolumeSnapshotReplicationProgressUpdate;
  destExternalId: Scalars['String']['output'];
  destRegion?: Maybe<Scalars['String']['output']>;
  destStackerId?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  estimatedTimeRemainingMs?: Maybe<Scalars['BigInt']['output']>;
  history: Array<VolumeInstanceReplicationProgress>;
  nbSnapshots: Scalars['Int']['output'];
  offlineBytesTransferred: Scalars['BigInt']['output'];
  offlineTotalBytes: Scalars['BigInt']['output'];
  onlineBytesTransferred: Scalars['BigInt']['output'];
  onlineTotalBytes: Scalars['BigInt']['output'];
  percentComplete: Scalars['Float']['output'];
  snapshotsSizes: Array<Scalars['BigInt']['output']>;
  srcExternalId: Scalars['String']['output'];
  srcRegion?: Maybe<Scalars['String']['output']>;
  srcStackerId?: Maybe<Scalars['String']['output']>;
  status: ReplicateVolumeInstanceStatus;
  transferRateMbps?: Maybe<Scalars['Float']['output']>;
};

export type VolumeSnapshotReplicationProgressUpdate = {
  __typename?: 'VolumeSnapshotReplicationProgressUpdate';
  bytesTransferred: Scalars['BigInt']['output'];
  compressedBytesTransferred: Scalars['BigInt']['output'];
  compressedTransferRateMbps?: Maybe<Scalars['Float']['output']>;
  elapsedMs: Scalars['Int']['output'];
  error?: Maybe<Scalars['String']['output']>;
  estimatedTimeRemainingMs?: Maybe<Scalars['BigInt']['output']>;
  index: Scalars['Int']['output'];
  percentComplete: Scalars['Float']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: ReplicateVolumeInstanceSnapshotStatus;
  totalBytes: Scalars['BigInt']['output'];
  transferRateMbps?: Maybe<Scalars['Float']['output']>;
};

export type VolumeState =
  | 'DELETED'
  | 'DELETING'
  | 'ERROR'
  | 'MIGRATING'
  | 'MIGRATION_PENDING'
  | 'READY'
  | 'RESTORING'
  | 'UPDATING';

export type VolumeUpdateInput = {
  /** The name of the volume */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VolumeVolumeInstancesConnection = {
  __typename?: 'VolumeVolumeInstancesConnection';
  edges: Array<VolumeVolumeInstancesConnectionEdge>;
  pageInfo: PageInfo;
};

export type VolumeVolumeInstancesConnectionEdge = {
  __typename?: 'VolumeVolumeInstancesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: VolumeInstance;
};

export type WebhookCreateInput = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  projectId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type WebhookUpdateInput = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  url: Scalars['String']['input'];
};

export type Withdrawal = Node & {
  __typename?: 'Withdrawal';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: WithdrawalStatusType;
  updatedAt: Scalars['DateTime']['output'];
  withdrawalAccount: WithdrawalAccount;
  withdrawalAccountId: Scalars['String']['output'];
};

export type WithdrawalAccount = Node & {
  __typename?: 'WithdrawalAccount';
  customerId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  platform: WithdrawalPlatformTypes;
  platformDetails: Scalars['String']['output'];
  stripeConnectInfo?: Maybe<WithdrawalAccountStripeConnectInfo>;
};

export type WithdrawalAccountStripeConnectInfo = {
  __typename?: 'WithdrawalAccountStripeConnectInfo';
  bankLast4?: Maybe<Scalars['String']['output']>;
  cardLast4?: Maybe<Scalars['String']['output']>;
  hasOnboarded: Scalars['Boolean']['output'];
  needsAttention: Scalars['Boolean']['output'];
};

export type WithdrawalPlatformTypes =
  | 'BMAC'
  | 'GITHUB'
  | 'PAYPAL'
  | 'STRIPE_CONNECT';

export type WithdrawalStatusType =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED'
  | 'PENDING';

export type WorkflowId = {
  __typename?: 'WorkflowId';
  workflowId?: Maybe<Scalars['String']['output']>;
};

export type WorkflowResult = {
  __typename?: 'WorkflowResult';
  error?: Maybe<Scalars['String']['output']>;
  status: WorkflowStatus;
};

export type WorkflowStatus =
  | 'Complete'
  | 'Error'
  | 'NotFound'
  | 'Running';

export type Workspace = Node & {
  __typename?: 'Workspace';
  adoptionHistory: Array<AdoptionInfo>;
  adoptionLevel: Scalars['Float']['output'];
  allowDeprecatedRegions?: Maybe<Scalars['Boolean']['output']>;
  apiTokenRateLimit?: Maybe<ApiTokenRateLimit>;
  avatar?: Maybe<Scalars['String']['output']>;
  banReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  discordRole?: Maybe<Scalars['String']['output']>;
  hasSAML: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  identityProviders: WorkspaceIdentityProvidersConnection;
  members: Array<WorkspaceMember>;
  name: Scalars['String']['output'];
  plan: Plan;
  preferredRegion?: Maybe<Scalars['String']['output']>;
  projects: WorkspaceProjectsConnection;
  referredUsers: Array<ReferralUser>;
  slackChannelId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use plan field instead */
  subscriptionModel: SubscriptionModel;
  supportTierOverride?: Maybe<SupportTierOverride>;
  /** @deprecated Teams are being removed from the system, don't use it */
  team?: Maybe<Team>;
  updatedAt: Scalars['DateTime']['output'];
};


export type WorkspaceIdentityProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type WorkspaceProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkspaceIdPConnection = {
  __typename?: 'WorkspaceIdPConnection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  status: WorkspaceIdPConnectionStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WorkspaceIdPConnectionStatus =
  | 'ACTIVE'
  | 'DRAFT'
  | 'INACTIVE'
  | 'PENDING'
  | 'VALIDATING';

export type WorkspaceIdentityProvider = Node & {
  __typename?: 'WorkspaceIdentityProvider';
  connection: WorkspaceIdPConnection;
  createdAt: Scalars['DateTime']['output'];
  enforcementEnabledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type WorkspaceIdentityProvidersConnection = {
  __typename?: 'WorkspaceIdentityProvidersConnection';
  edges: Array<WorkspaceIdentityProvidersConnectionEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceIdentityProvidersConnectionEdge = {
  __typename?: 'WorkspaceIdentityProvidersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceIdentityProvider;
};

export type WorkspaceInviteCodeCreateInput = {
  role: Scalars['String']['input'];
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  /** Only retrieved if requested by an admin */
  featureFlags?: Maybe<Array<ActiveFeatureFlag>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role: TeamRole;
};

export type WorkspacePermissionChangeInput = {
  role: TeamRole;
  userId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type WorkspaceProjectsConnection = {
  __typename?: 'WorkspaceProjectsConnection';
  edges: Array<WorkspaceProjectsConnectionEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceProjectsConnectionEdge = {
  __typename?: 'WorkspaceProjectsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type WorkspaceTrustedDomainCreateInput = {
  domainName: Scalars['String']['input'];
  role: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type WorkspaceUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferredRegion?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceUserInviteInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type WorkspaceUserRemoveInput = {
  userId: Scalars['String']['input'];
};

export type CustomerTogglePayoutsToCreditsInput = {
  isWithdrawingToCredits: Scalars['Boolean']['input'];
};

export type ApiTokenCreateMutationVariables = Exact<{
  input: ApiTokenCreateInput;
}>;


export type ApiTokenCreateMutation = { __typename?: 'Mutation', apiTokenCreate: string };

export type ApiTokenDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ApiTokenDeleteMutation = { __typename?: 'Mutation', apiTokenDelete: boolean };

export type BaseEnvironmentOverrideMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: BaseEnvironmentOverrideInput;
}>;


export type BaseEnvironmentOverrideMutation = { __typename?: 'Mutation', baseEnvironmentOverride: boolean };

export type CustomDomainCreateMutationVariables = Exact<{
  input: CustomDomainCreateInput;
}>;


export type CustomDomainCreateMutation = { __typename?: 'Mutation', customDomainCreate: { __typename: 'CustomDomain', createdAt?: any | null, deletedAt?: any | null, domain: string, edgeId?: string | null, environmentId: string, id: string, projectId?: string | null, serviceId: string, targetPort?: number | null, updatedAt?: any | null } };

export type CustomDomainDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CustomDomainDeleteMutation = { __typename?: 'Mutation', customDomainDelete: boolean };

export type CustomDomainUpdateMutationVariables = Exact<{
  environmentId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CustomDomainUpdateMutation = { __typename?: 'Mutation', customDomainUpdate: boolean };

export type CustomerCreateFreePlanSubscriptionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CustomerCreateFreePlanSubscriptionMutation = { __typename?: 'Mutation', customerCreateFreePlanSubscription: boolean };

export type CustomerTogglePayoutsToCreditsMutationVariables = Exact<{
  customerId: Scalars['String']['input'];
  input: CustomerTogglePayoutsToCreditsInput;
}>;


export type CustomerTogglePayoutsToCreditsMutation = { __typename?: 'Mutation', customerTogglePayoutsToCredits: boolean };

export type DeploymentApproveMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentApproveMutation = { __typename?: 'Mutation', deploymentApprove: boolean };

export type DeploymentCancelMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentCancelMutation = { __typename?: 'Mutation', deploymentCancel: boolean };

export type DeploymentInstanceExecutionCreateMutationVariables = Exact<{
  input: DeploymentInstanceExecutionCreateInput;
}>;


export type DeploymentInstanceExecutionCreateMutation = { __typename?: 'Mutation', deploymentInstanceExecutionCreate: boolean };

export type DeploymentRedeployMutationVariables = Exact<{
  id: Scalars['String']['input'];
  usePreviousImageTag?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type DeploymentRedeployMutation = { __typename?: 'Mutation', deploymentRedeploy: { __typename: 'Deployment', canRedeploy: boolean, canRollback: boolean, createdAt: any, deploymentStopped: boolean, environmentId: string, id: string, meta?: any | null, projectId: string, serviceId?: string | null, snapshotId?: string | null, staticUrl?: string | null, status: DeploymentStatus, suggestAddServiceDomain: boolean, updatedAt: any, url?: string | null } };

export type DeploymentRemoveMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentRemoveMutation = { __typename?: 'Mutation', deploymentRemove: boolean };

export type DeploymentRestartMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentRestartMutation = { __typename?: 'Mutation', deploymentRestart: boolean };

export type DeploymentRollbackMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentRollbackMutation = { __typename?: 'Mutation', deploymentRollback: boolean };

export type DeploymentStopMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentStopMutation = { __typename?: 'Mutation', deploymentStop: boolean };

export type DeploymentTriggerCreateMutationVariables = Exact<{
  input: DeploymentTriggerCreateInput;
}>;


export type DeploymentTriggerCreateMutation = { __typename?: 'Mutation', deploymentTriggerCreate: { __typename: 'DeploymentTrigger', baseEnvironmentOverrideId?: string | null, branch: string, checkSuites: boolean, environmentId: string, id: string, projectId: string, provider: string, repository: string, serviceId?: string | null, validCheckSuites: number } };

export type DeploymentTriggerDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentTriggerDeleteMutation = { __typename?: 'Mutation', deploymentTriggerDelete: boolean };

export type DeploymentTriggerUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: DeploymentTriggerUpdateInput;
}>;


export type DeploymentTriggerUpdateMutation = { __typename?: 'Mutation', deploymentTriggerUpdate: { __typename: 'DeploymentTrigger', baseEnvironmentOverrideId?: string | null, branch: string, checkSuites: boolean, environmentId: string, id: string, projectId: string, provider: string, repository: string, serviceId?: string | null, validCheckSuites: number } };

export type DockerComposeImportMutationVariables = Exact<{
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  skipStagingPatch?: InputMaybe<Scalars['Boolean']['input']>;
  yaml: Scalars['String']['input'];
}>;


export type DockerComposeImportMutation = { __typename?: 'Mutation', dockerComposeImport: { __typename: 'DockerComposeImport', errors: Array<string>, patch?: any | null } };

export type EgressGatewayAssociationCreateMutationVariables = Exact<{
  input: EgressGatewayCreateInput;
}>;


export type EgressGatewayAssociationCreateMutation = { __typename?: 'Mutation', egressGatewayAssociationCreate: Array<{ __typename: 'EgressGateway', ipv4: string, region: string }> };

export type EgressGatewayAssociationsClearMutationVariables = Exact<{
  input: EgressGatewayServiceTargetInput;
}>;


export type EgressGatewayAssociationsClearMutation = { __typename?: 'Mutation', egressGatewayAssociationsClear: boolean };

export type EmailChangeConfirmMutationVariables = Exact<{
  nonce: Scalars['String']['input'];
}>;


export type EmailChangeConfirmMutation = { __typename?: 'Mutation', emailChangeConfirm: boolean };

export type EmailChangeInitiateMutationVariables = Exact<{
  newEmail: Scalars['String']['input'];
}>;


export type EmailChangeInitiateMutation = { __typename?: 'Mutation', emailChangeInitiate: boolean };

export type EnvironmentCreateMutationVariables = Exact<{
  input: EnvironmentCreateInput;
}>;


export type EnvironmentCreateMutation = { __typename?: 'Mutation', environmentCreate: { __typename: 'Environment', createdAt: any, deletedAt?: any | null, id: string, isEphemeral: boolean, name: string, projectId: string, unmergedChangesCount?: number | null, updatedAt: any } };

export type EnvironmentDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type EnvironmentDeleteMutation = { __typename?: 'Mutation', environmentDelete: boolean };

export type EnvironmentPatchCommitMutationVariables = Exact<{
  commitMessage?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['EnvironmentConfig']['input']>;
}>;


export type EnvironmentPatchCommitMutation = { __typename?: 'Mutation', environmentPatchCommit: string };

export type EnvironmentRenameMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: EnvironmentRenameInput;
}>;


export type EnvironmentRenameMutation = { __typename?: 'Mutation', environmentRename: { __typename: 'Environment', createdAt: any, deletedAt?: any | null, id: string, isEphemeral: boolean, name: string, projectId: string, unmergedChangesCount?: number | null, updatedAt: any } };

export type EnvironmentTriggersDeployMutationVariables = Exact<{
  input: EnvironmentTriggersDeployInput;
}>;


export type EnvironmentTriggersDeployMutation = { __typename?: 'Mutation', environmentTriggersDeploy: boolean };

export type FairUseAgreeMutationVariables = Exact<{
  agree: Scalars['Boolean']['input'];
}>;


export type FairUseAgreeMutation = { __typename?: 'Mutation', fairUseAgree: boolean };

export type FeatureFlagAddMutationVariables = Exact<{
  input: FeatureFlagToggleInput;
}>;


export type FeatureFlagAddMutation = { __typename?: 'Mutation', featureFlagAdd: boolean };

export type FeatureFlagRemoveMutationVariables = Exact<{
  input: FeatureFlagToggleInput;
}>;


export type FeatureFlagRemoveMutation = { __typename?: 'Mutation', featureFlagRemove: boolean };

export type GithubRepoDeployMutationVariables = Exact<{
  input: GitHubRepoDeployInput;
}>;


export type GithubRepoDeployMutation = { __typename?: 'Mutation', githubRepoDeploy: string };

export type GithubRepoUpdateMutationVariables = Exact<{
  input: GitHubRepoUpdateInput;
}>;


export type GithubRepoUpdateMutation = { __typename?: 'Mutation', githubRepoUpdate: boolean };

export type HerokuImportVariablesMutationVariables = Exact<{
  input: HerokuImportVariablesInput;
}>;


export type HerokuImportVariablesMutation = { __typename?: 'Mutation', herokuImportVariables: number };

export type IntegrationCreateMutationVariables = Exact<{
  input: IntegrationCreateInput;
}>;


export type IntegrationCreateMutation = { __typename?: 'Mutation', integrationCreate: { __typename: 'Integration', config: any, id: string, name: string, projectId: string } };

export type IntegrationDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type IntegrationDeleteMutation = { __typename?: 'Mutation', integrationDelete: boolean };

export type IntegrationUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: IntegrationUpdateInput;
}>;


export type IntegrationUpdateMutation = { __typename?: 'Mutation', integrationUpdate: { __typename: 'Integration', config: any, id: string, name: string, projectId: string } };

export type InviteCodeUseMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type InviteCodeUseMutation = { __typename?: 'Mutation', inviteCodeUse: { __typename: 'Project', baseEnvironmentId?: string | null, botPrEnvironments: boolean, createdAt: any, deletedAt?: any | null, description?: string | null, expiredAt?: any | null, id: string, isPublic: boolean, isTempProject: boolean, name: string, prDeploys: boolean, subscriptionPlanLimit: any, subscriptionType: SubscriptionPlanType, teamId?: string | null, updatedAt: any } };

export type JobApplicationCreateMutationVariables = Exact<{
  input: JobApplicationCreateInput;
  resume: Scalars['Upload']['input'];
}>;


export type JobApplicationCreateMutation = { __typename?: 'Mutation', jobApplicationCreate: boolean };

export type LoginSessionAuthMutationVariables = Exact<{
  input: LoginSessionAuthInput;
}>;


export type LoginSessionAuthMutation = { __typename?: 'Mutation', loginSessionAuth: boolean };

export type LoginSessionCancelMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type LoginSessionCancelMutation = { __typename?: 'Mutation', loginSessionCancel: boolean };

export type LoginSessionConsumeMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type LoginSessionConsumeMutation = { __typename?: 'Mutation', loginSessionConsume?: string | null };

export type LoginSessionCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginSessionCreateMutation = { __typename?: 'Mutation', loginSessionCreate: string };

export type LoginSessionVerifyMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type LoginSessionVerifyMutation = { __typename?: 'Mutation', loginSessionVerify: boolean };

export type NotificationDeliveriesMarkAsReadMutationVariables = Exact<{
  deliveryIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type NotificationDeliveriesMarkAsReadMutation = { __typename?: 'Mutation', notificationDeliveriesMarkAsRead: boolean };

export type ObservabilityDashboardCreateMutationVariables = Exact<{
  input: ObservabilityDashboardCreateInput;
}>;


export type ObservabilityDashboardCreateMutation = { __typename?: 'Mutation', observabilityDashboardCreate: boolean };

export type ObservabilityDashboardResetMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ObservabilityDashboardResetMutation = { __typename?: 'Mutation', observabilityDashboardReset: boolean };

export type ObservabilityDashboardUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: Array<ObservabilityDashboardUpdateInput> | ObservabilityDashboardUpdateInput;
}>;


export type ObservabilityDashboardUpdateMutation = { __typename?: 'Mutation', observabilityDashboardUpdate: boolean };

export type PasskeyDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PasskeyDeleteMutation = { __typename?: 'Mutation', passkeyDelete: boolean };

export type PreferenceOverridesCreateUpdateMutationVariables = Exact<{
  input: PreferenceOverridesCreateUpdateData;
}>;


export type PreferenceOverridesCreateUpdateMutation = { __typename?: 'Mutation', preferenceOverridesCreateUpdate: boolean };

export type PreferenceOverridesDestroyForResourceMutationVariables = Exact<{
  input: PreferenceOverridesDestroyData;
}>;


export type PreferenceOverridesDestroyForResourceMutation = { __typename?: 'Mutation', preferenceOverridesDestroyForResource: boolean };

export type PreferencesUpdateMutationVariables = Exact<{
  input: PreferencesUpdateData;
}>;


export type PreferencesUpdateMutation = { __typename?: 'Mutation', preferencesUpdate: { __typename: 'Preferences', buildFailedEmail: boolean, changelogEmail: boolean, communityEmail: boolean, deployCrashedEmail: boolean, ephemeralEnvironmentEmail: boolean, id: string, marketingEmail: boolean, subprocessorUpdatesEmail: boolean, usageEmail: boolean } };

export type PrivateNetworkCreateOrGetMutationVariables = Exact<{
  input: PrivateNetworkCreateOrGetInput;
}>;


export type PrivateNetworkCreateOrGetMutation = { __typename?: 'Mutation', privateNetworkCreateOrGet: { __typename: 'PrivateNetwork', createdAt?: any | null, deletedAt?: any | null, dnsName: string, environmentId: string, name: string, networkId: any, projectId: string, publicId: string, tags: Array<string> } };

export type PrivateNetworkEndpointCreateOrGetMutationVariables = Exact<{
  input: PrivateNetworkEndpointCreateOrGetInput;
}>;


export type PrivateNetworkEndpointCreateOrGetMutation = { __typename?: 'Mutation', privateNetworkEndpointCreateOrGet: { __typename: 'PrivateNetworkEndpoint', createdAt?: any | null, deletedAt?: any | null, dnsName: string, privateIps: Array<string>, publicId: string, serviceInstanceId: string, tags: Array<string> } };

export type PrivateNetworkEndpointDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PrivateNetworkEndpointDeleteMutation = { __typename?: 'Mutation', privateNetworkEndpointDelete: boolean };

export type PrivateNetworkEndpointRenameMutationVariables = Exact<{
  dnsName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
}>;


export type PrivateNetworkEndpointRenameMutation = { __typename?: 'Mutation', privateNetworkEndpointRename: boolean };

export type PrivateNetworksForEnvironmentDeleteMutationVariables = Exact<{
  environmentId: Scalars['String']['input'];
}>;


export type PrivateNetworksForEnvironmentDeleteMutation = { __typename?: 'Mutation', privateNetworksForEnvironmentDelete: boolean };

export type ProjectClaimMutationVariables = Exact<{
  id: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
}>;


export type ProjectClaimMutation = { __typename?: 'Mutation', projectClaim: { __typename: 'Project', baseEnvironmentId?: string | null, botPrEnvironments: boolean, createdAt: any, deletedAt?: any | null, description?: string | null, expiredAt?: any | null, id: string, isPublic: boolean, isTempProject: boolean, name: string, prDeploys: boolean, subscriptionPlanLimit: any, subscriptionType: SubscriptionPlanType, teamId?: string | null, updatedAt: any } };

export type ProjectCreateMutationVariables = Exact<{
  input: ProjectCreateInput;
}>;


export type ProjectCreateMutation = { __typename?: 'Mutation', projectCreate: { __typename: 'Project', baseEnvironmentId?: string | null, botPrEnvironments: boolean, createdAt: any, deletedAt?: any | null, description?: string | null, expiredAt?: any | null, id: string, isPublic: boolean, isTempProject: boolean, name: string, prDeploys: boolean, subscriptionPlanLimit: any, subscriptionType: SubscriptionPlanType, teamId?: string | null, updatedAt: any } };

export type ProjectDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectDeleteMutation = { __typename?: 'Mutation', projectDelete: boolean };

export type ProjectInvitationAcceptMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type ProjectInvitationAcceptMutation = { __typename?: 'Mutation', projectInvitationAccept: { __typename: 'ProjectPermission', id: string, projectId: string, role: ProjectRole, userId: string } };

export type ProjectInvitationCreateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: ProjectInvitee;
}>;


export type ProjectInvitationCreateMutation = { __typename?: 'Mutation', projectInvitationCreate: { __typename: 'ProjectInvitation', email: string, expiresAt: any, id: string, isExpired: boolean } };

export type ProjectInvitationDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectInvitationDeleteMutation = { __typename?: 'Mutation', projectInvitationDelete: boolean };

export type ProjectInvitationResendMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectInvitationResendMutation = { __typename?: 'Mutation', projectInvitationResend: { __typename: 'ProjectInvitation', email: string, expiresAt: any, id: string, isExpired: boolean } };

export type ProjectInviteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: ProjectInviteUserInput;
}>;


export type ProjectInviteUserMutation = { __typename?: 'Mutation', projectInviteUser: boolean };

export type ProjectLeaveMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectLeaveMutation = { __typename?: 'Mutation', projectLeave: boolean };

export type ProjectMemberRemoveMutationVariables = Exact<{
  input: ProjectMemberRemoveInput;
}>;


export type ProjectMemberRemoveMutation = { __typename?: 'Mutation', projectMemberRemove: Array<{ __typename: 'ProjectMember', avatar?: string | null, email: string, id: string, name?: string | null, role: ProjectRole }> };

export type ProjectMemberUpdateMutationVariables = Exact<{
  input: ProjectMemberUpdateInput;
}>;


export type ProjectMemberUpdateMutation = { __typename?: 'Mutation', projectMemberUpdate: { __typename: 'ProjectMember', avatar?: string | null, email: string, id: string, name?: string | null, role: ProjectRole } };

export type ProjectScheduleDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectScheduleDeleteMutation = { __typename?: 'Mutation', projectScheduleDelete: boolean };

export type ProjectScheduleDeleteCancelMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectScheduleDeleteCancelMutation = { __typename?: 'Mutation', projectScheduleDeleteCancel: boolean };

export type ProjectScheduleDeleteForceMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectScheduleDeleteForceMutation = { __typename?: 'Mutation', projectScheduleDeleteForce: boolean };

export type ProjectTokenCreateMutationVariables = Exact<{
  input: ProjectTokenCreateInput;
}>;


export type ProjectTokenCreateMutation = { __typename?: 'Mutation', projectTokenCreate: string };

export type ProjectTokenDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectTokenDeleteMutation = { __typename?: 'Mutation', projectTokenDelete: boolean };

export type ProjectTransferMutationVariables = Exact<{
  input: ProjectTransferInput;
  projectId: Scalars['String']['input'];
}>;


export type ProjectTransferMutation = { __typename?: 'Mutation', projectTransfer: boolean };

export type ProjectTransferConfirmMutationVariables = Exact<{
  input: ProjectTransferConfirmInput;
}>;


export type ProjectTransferConfirmMutation = { __typename?: 'Mutation', projectTransferConfirm: boolean };

export type ProjectTransferInitiateMutationVariables = Exact<{
  input: ProjectTransferInitiateInput;
}>;


export type ProjectTransferInitiateMutation = { __typename?: 'Mutation', projectTransferInitiate: boolean };

export type ProjectUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: ProjectUpdateInput;
}>;


export type ProjectUpdateMutation = { __typename?: 'Mutation', projectUpdate: { __typename: 'Project', baseEnvironmentId?: string | null, botPrEnvironments: boolean, createdAt: any, deletedAt?: any | null, description?: string | null, expiredAt?: any | null, id: string, isPublic: boolean, isTempProject: boolean, name: string, prDeploys: boolean, subscriptionPlanLimit: any, subscriptionType: SubscriptionPlanType, teamId?: string | null, updatedAt: any } };

export type ProviderAuthRemoveMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProviderAuthRemoveMutation = { __typename?: 'Mutation', providerAuthRemove: boolean };

export type RecoveryCodeGenerateMutationVariables = Exact<{ [key: string]: never; }>;


export type RecoveryCodeGenerateMutation = { __typename?: 'Mutation', recoveryCodeGenerate: { __typename: 'RecoveryCodes', recoveryCodes: Array<string> } };

export type RecoveryCodeValidateMutationVariables = Exact<{
  input: RecoveryCodeValidateInput;
}>;


export type RecoveryCodeValidateMutation = { __typename?: 'Mutation', recoveryCodeValidate: boolean };

export type ReferralInfoUpdateMutationVariables = Exact<{
  input: ReferralInfoUpdateInput;
}>;


export type ReferralInfoUpdateMutation = { __typename?: 'Mutation', referralInfoUpdate: { __typename: 'ReferralInfo', code: string, id: string, status: string } };

export type ServiceConnectMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: ServiceConnectInput;
}>;


export type ServiceConnectMutation = { __typename?: 'Mutation', serviceConnect: { __typename: 'Service', createdAt: any, deletedAt?: any | null, featureFlags: Array<ActiveServiceFeatureFlag>, icon?: string | null, id: string, name: string, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null, updatedAt: any } };

export type ServiceCreateMutationVariables = Exact<{
  input: ServiceCreateInput;
}>;


export type ServiceCreateMutation = { __typename?: 'Mutation', serviceCreate: { __typename: 'Service', createdAt: any, deletedAt?: any | null, featureFlags: Array<ActiveServiceFeatureFlag>, icon?: string | null, id: string, name: string, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null, updatedAt: any } };

export type ServiceDeleteMutationVariables = Exact<{
  environmentId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
}>;


export type ServiceDeleteMutation = { __typename?: 'Mutation', serviceDelete: boolean };

export type ServiceDisconnectMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ServiceDisconnectMutation = { __typename?: 'Mutation', serviceDisconnect: { __typename: 'Service', createdAt: any, deletedAt?: any | null, featureFlags: Array<ActiveServiceFeatureFlag>, icon?: string | null, id: string, name: string, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null, updatedAt: any } };

export type ServiceDomainCreateMutationVariables = Exact<{
  input: ServiceDomainCreateInput;
}>;


export type ServiceDomainCreateMutation = { __typename?: 'Mutation', serviceDomainCreate: { __typename: 'ServiceDomain', createdAt?: any | null, deletedAt?: any | null, domain: string, edgeId?: string | null, environmentId: string, id: string, projectId?: string | null, serviceId: string, suffix?: string | null, targetPort?: number | null, updatedAt?: any | null } };

export type ServiceDomainDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ServiceDomainDeleteMutation = { __typename?: 'Mutation', serviceDomainDelete: boolean };

export type ServiceDomainUpdateMutationVariables = Exact<{
  input: ServiceDomainUpdateInput;
}>;


export type ServiceDomainUpdateMutation = { __typename?: 'Mutation', serviceDomainUpdate: boolean };

export type ServiceFeatureFlagAddMutationVariables = Exact<{
  input: ServiceFeatureFlagToggleInput;
}>;


export type ServiceFeatureFlagAddMutation = { __typename?: 'Mutation', serviceFeatureFlagAdd: boolean };

export type ServiceFeatureFlagRemoveMutationVariables = Exact<{
  input: ServiceFeatureFlagToggleInput;
}>;


export type ServiceFeatureFlagRemoveMutation = { __typename?: 'Mutation', serviceFeatureFlagRemove: boolean };

export type ServiceInstanceDeployMutationVariables = Exact<{
  commitSha?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  latestCommit?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceDeployMutation = { __typename?: 'Mutation', serviceInstanceDeploy: boolean };

export type ServiceInstanceDeployV2MutationVariables = Exact<{
  commitSha?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceDeployV2Mutation = { __typename?: 'Mutation', serviceInstanceDeployV2: string };

export type ServiceInstanceLimitsUpdateMutationVariables = Exact<{
  input: ServiceInstanceLimitsUpdateInput;
}>;


export type ServiceInstanceLimitsUpdateMutation = { __typename?: 'Mutation', serviceInstanceLimitsUpdate: boolean };

export type ServiceInstanceRedeployMutationVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceRedeployMutation = { __typename?: 'Mutation', serviceInstanceRedeploy: boolean };

export type ServiceInstanceUpdateMutationVariables = Exact<{
  environmentId?: InputMaybe<Scalars['String']['input']>;
  input: ServiceInstanceUpdateInput;
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceUpdateMutation = { __typename?: 'Mutation', serviceInstanceUpdate: boolean };

export type ServiceRemoveUpstreamUrlMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ServiceRemoveUpstreamUrlMutation = { __typename?: 'Mutation', serviceRemoveUpstreamUrl: { __typename: 'Service', createdAt: any, deletedAt?: any | null, featureFlags: Array<ActiveServiceFeatureFlag>, icon?: string | null, id: string, name: string, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null, updatedAt: any } };

export type ServiceUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: ServiceUpdateInput;
}>;


export type ServiceUpdateMutation = { __typename?: 'Mutation', serviceUpdate: { __typename: 'Service', createdAt: any, deletedAt?: any | null, featureFlags: Array<ActiveServiceFeatureFlag>, icon?: string | null, id: string, name: string, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null, updatedAt: any } };

export type SessionDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SessionDeleteMutation = { __typename?: 'Mutation', sessionDelete: boolean };

export type SharedVariableConfigureMutationVariables = Exact<{
  input: SharedVariableConfigureInput;
}>;


export type SharedVariableConfigureMutation = { __typename?: 'Mutation', sharedVariableConfigure: { __typename: 'Variable', createdAt: any, environmentId?: string | null, id: string, isSealed: boolean, name: string, pluginId?: string | null, references: Array<string>, serviceId?: string | null, updatedAt: any } };

export type TcpProxyDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TcpProxyDeleteMutation = { __typename?: 'Mutation', tcpProxyDelete: boolean };

export type TemplateCloneMutationVariables = Exact<{
  input: TemplateCloneInput;
}>;


export type TemplateCloneMutation = { __typename?: 'Mutation', templateClone: { __typename: 'Template', activeProjects: number, canvasConfig?: any | null, category?: string | null, code: string, communityThreadSlug?: string | null, config: any, createdAt: any, demoProjectId?: string | null, description?: string | null, health?: number | null, id: string, image?: string | null, isApproved: boolean, isV2Template: boolean, languages?: Array<string> | null, metadata: any, name: string, projects: number, readme?: string | null, serializedConfig?: any | null, status: TemplateStatus, tags?: Array<string> | null, teamId?: string | null, totalPayout: number } };

export type TemplateDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: TemplateDeleteInput;
}>;


export type TemplateDeleteMutation = { __typename?: 'Mutation', templateDelete: boolean };

export type TemplateDeployV2MutationVariables = Exact<{
  input: TemplateDeployV2Input;
}>;


export type TemplateDeployV2Mutation = { __typename?: 'Mutation', templateDeployV2: { __typename: 'TemplateDeployPayload', projectId: string, workflowId?: string | null } };

export type TemplateGenerateMutationVariables = Exact<{
  input: TemplateGenerateInput;
}>;


export type TemplateGenerateMutation = { __typename?: 'Mutation', templateGenerate: { __typename: 'Template', activeProjects: number, canvasConfig?: any | null, category?: string | null, code: string, communityThreadSlug?: string | null, config: any, createdAt: any, demoProjectId?: string | null, description?: string | null, health?: number | null, id: string, image?: string | null, isApproved: boolean, isV2Template: boolean, languages?: Array<string> | null, metadata: any, name: string, projects: number, readme?: string | null, serializedConfig?: any | null, status: TemplateStatus, tags?: Array<string> | null, teamId?: string | null, totalPayout: number } };

export type TemplatePublishMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: TemplatePublishInput;
}>;


export type TemplatePublishMutation = { __typename?: 'Mutation', templatePublish: { __typename: 'Template', activeProjects: number, canvasConfig?: any | null, category?: string | null, code: string, communityThreadSlug?: string | null, config: any, createdAt: any, demoProjectId?: string | null, description?: string | null, health?: number | null, id: string, image?: string | null, isApproved: boolean, isV2Template: boolean, languages?: Array<string> | null, metadata: any, name: string, projects: number, readme?: string | null, serializedConfig?: any | null, status: TemplateStatus, tags?: Array<string> | null, teamId?: string | null, totalPayout: number } };

export type TemplateServiceSourceEjectMutationVariables = Exact<{
  input: TemplateServiceSourceEjectInput;
}>;


export type TemplateServiceSourceEjectMutation = { __typename?: 'Mutation', templateServiceSourceEject: boolean };

export type TemplateUnpublishMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TemplateUnpublishMutation = { __typename?: 'Mutation', templateUnpublish: boolean };

export type TrustedDomainCreateMutationVariables = Exact<{
  input: WorkspaceTrustedDomainCreateInput;
}>;


export type TrustedDomainCreateMutation = { __typename?: 'Mutation', trustedDomainCreate: boolean };

export type TrustedDomainDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TrustedDomainDeleteMutation = { __typename?: 'Mutation', trustedDomainDelete: boolean };

export type TwoFactorInfoCreateMutationVariables = Exact<{
  input: TwoFactorInfoCreateInput;
}>;


export type TwoFactorInfoCreateMutation = { __typename?: 'Mutation', twoFactorInfoCreate: { __typename: 'RecoveryCodes', recoveryCodes: Array<string> } };

export type TwoFactorInfoDeleteMutationVariables = Exact<{ [key: string]: never; }>;


export type TwoFactorInfoDeleteMutation = { __typename?: 'Mutation', twoFactorInfoDelete: boolean };

export type TwoFactorInfoSecretMutationVariables = Exact<{ [key: string]: never; }>;


export type TwoFactorInfoSecretMutation = { __typename?: 'Mutation', twoFactorInfoSecret: { __typename: 'TwoFactorInfoSecret', secret: string, uri: string } };

export type TwoFactorInfoValidateMutationVariables = Exact<{
  input: TwoFactorInfoValidateInput;
}>;


export type TwoFactorInfoValidateMutation = { __typename?: 'Mutation', twoFactorInfoValidate: boolean };

export type UpsertSlackChannelMutationVariables = Exact<{
  workspaceId: Scalars['String']['input'];
}>;


export type UpsertSlackChannelMutation = { __typename?: 'Mutation', upsertSlackChannel: boolean };

export type UsageLimitRemoveMutationVariables = Exact<{
  input: UsageLimitRemoveInput;
}>;


export type UsageLimitRemoveMutation = { __typename?: 'Mutation', usageLimitRemove: boolean };

export type UsageLimitSetMutationVariables = Exact<{
  input: UsageLimitSetInput;
}>;


export type UsageLimitSetMutation = { __typename?: 'Mutation', usageLimitSet: boolean };

export type UserBetaLeaveMutationVariables = Exact<{ [key: string]: never; }>;


export type UserBetaLeaveMutation = { __typename?: 'Mutation', userBetaLeave: boolean };

export type UserDeleteMutationVariables = Exact<{ [key: string]: never; }>;


export type UserDeleteMutation = { __typename?: 'Mutation', userDelete: boolean };

export type UserDiscordDisconnectMutationVariables = Exact<{ [key: string]: never; }>;


export type UserDiscordDisconnectMutation = { __typename?: 'Mutation', userDiscordDisconnect: boolean };

export type UserFlagsRemoveMutationVariables = Exact<{
  input: UserFlagsRemoveInput;
}>;


export type UserFlagsRemoveMutation = { __typename?: 'Mutation', userFlagsRemove: boolean };

export type UserFlagsSetMutationVariables = Exact<{
  input: UserFlagsSetInput;
}>;


export type UserFlagsSetMutation = { __typename?: 'Mutation', userFlagsSet: boolean };

export type UserProfileUpdateMutationVariables = Exact<{
  input: UserProfileUpdateInput;
}>;


export type UserProfileUpdateMutation = { __typename?: 'Mutation', userProfileUpdate: boolean };

export type UserTermsUpdateMutationVariables = Exact<{ [key: string]: never; }>;


export type UserTermsUpdateMutation = { __typename?: 'Mutation', userTermsUpdate?: { __typename: 'User', agreedFairUse: boolean, avatar?: string | null, banReason?: string | null, createdAt: any, email: string, featureFlags: Array<ActiveFeatureFlag>, flags: Array<UserFlag>, has2FA: boolean, id: string, isAdmin: boolean, isConductor: boolean, isVerified: boolean, lastLogin: any, name?: string | null, registrationStatus: RegistrationStatus, riskLevel?: number | null, termsAgreedOn?: any | null, username?: string | null } | null };

export type VariableCollectionUpsertMutationVariables = Exact<{
  input: VariableCollectionUpsertInput;
}>;


export type VariableCollectionUpsertMutation = { __typename?: 'Mutation', variableCollectionUpsert: boolean };

export type VariableDeleteMutationVariables = Exact<{
  input: VariableDeleteInput;
}>;


export type VariableDeleteMutation = { __typename?: 'Mutation', variableDelete: boolean };

export type VariableUpsertMutationVariables = Exact<{
  input: VariableUpsertInput;
}>;


export type VariableUpsertMutation = { __typename?: 'Mutation', variableUpsert: boolean };

export type VolumeCreateMutationVariables = Exact<{
  input: VolumeCreateInput;
}>;


export type VolumeCreateMutation = { __typename?: 'Mutation', volumeCreate: { __typename: 'Volume', createdAt: any, id: string, name: string, projectId: string } };

export type VolumeDeleteMutationVariables = Exact<{
  volumeId: Scalars['String']['input'];
}>;


export type VolumeDeleteMutation = { __typename?: 'Mutation', volumeDelete: boolean };

export type VolumeInstanceBackupCreateMutationVariables = Exact<{
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupCreateMutation = { __typename?: 'Mutation', volumeInstanceBackupCreate: { __typename: 'WorkflowId', workflowId?: string | null } };

export type VolumeInstanceBackupDeleteMutationVariables = Exact<{
  volumeInstanceBackupId: Scalars['String']['input'];
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupDeleteMutation = { __typename?: 'Mutation', volumeInstanceBackupDelete: { __typename: 'WorkflowId', workflowId?: string | null } };

export type VolumeInstanceBackupLockMutationVariables = Exact<{
  volumeInstanceBackupId: Scalars['String']['input'];
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupLockMutation = { __typename?: 'Mutation', volumeInstanceBackupLock: boolean };

export type VolumeInstanceBackupRestoreMutationVariables = Exact<{
  volumeInstanceBackupId: Scalars['String']['input'];
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupRestoreMutation = { __typename?: 'Mutation', volumeInstanceBackupRestore: { __typename: 'WorkflowId', workflowId?: string | null } };

export type VolumeInstanceBackupScheduleUpdateMutationVariables = Exact<{
  kinds: Array<VolumeInstanceBackupScheduleKind> | VolumeInstanceBackupScheduleKind;
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupScheduleUpdateMutation = { __typename?: 'Mutation', volumeInstanceBackupScheduleUpdate: boolean };

export type VolumeInstanceUpdateMutationVariables = Exact<{
  environmentId?: InputMaybe<Scalars['String']['input']>;
  input: VolumeInstanceUpdateInput;
  volumeId: Scalars['String']['input'];
}>;


export type VolumeInstanceUpdateMutation = { __typename?: 'Mutation', volumeInstanceUpdate: boolean };

export type VolumeUpdateMutationVariables = Exact<{
  input: VolumeUpdateInput;
  volumeId: Scalars['String']['input'];
}>;


export type VolumeUpdateMutation = { __typename?: 'Mutation', volumeUpdate: { __typename: 'Volume', createdAt: any, id: string, name: string, projectId: string } };

export type WebhookCreateMutationVariables = Exact<{
  input: WebhookCreateInput;
}>;


export type WebhookCreateMutation = { __typename?: 'Mutation', webhookCreate: { __typename: 'ProjectWebhook', filters?: Array<string> | null, id: string, lastStatus?: number | null, projectId: string, url: string } };

export type WebhookDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type WebhookDeleteMutation = { __typename?: 'Mutation', webhookDelete: boolean };

export type WebhookUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: WebhookUpdateInput;
}>;


export type WebhookUpdateMutation = { __typename?: 'Mutation', webhookUpdate: { __typename: 'ProjectWebhook', filters?: Array<string> | null, id: string, lastStatus?: number | null, projectId: string, url: string } };

export type WorkspaceDeleteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type WorkspaceDeleteMutation = { __typename?: 'Mutation', workspaceDelete: boolean };

export type WorkspaceInviteCodeCreateMutationVariables = Exact<{
  input: WorkspaceInviteCodeCreateInput;
  workspaceId: Scalars['String']['input'];
}>;


export type WorkspaceInviteCodeCreateMutation = { __typename?: 'Mutation', workspaceInviteCodeCreate: string };

export type WorkspaceInviteCodeUseMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type WorkspaceInviteCodeUseMutation = { __typename?: 'Mutation', workspaceInviteCodeUse: { __typename: 'Workspace', adoptionLevel: number, allowDeprecatedRegions?: boolean | null, createdAt: any, id: string, name: string, plan: Plan, preferredRegion?: string | null, subscriptionModel: SubscriptionModel, updatedAt: any } };

export type WorkspaceLeaveMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type WorkspaceLeaveMutation = { __typename?: 'Mutation', workspaceLeave: boolean };

export type WorkspacePermissionChangeMutationVariables = Exact<{
  input: WorkspacePermissionChangeInput;
}>;


export type WorkspacePermissionChangeMutation = { __typename?: 'Mutation', workspacePermissionChange: boolean };

export type WorkspaceUpdateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: WorkspaceUpdateInput;
}>;


export type WorkspaceUpdateMutation = { __typename?: 'Mutation', workspaceUpdate: boolean };

export type WorkspaceUpsertSlackChannelMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type WorkspaceUpsertSlackChannelMutation = { __typename?: 'Mutation', workspaceUpsertSlackChannel: boolean };

export type WorkspaceUserInviteMutationVariables = Exact<{
  input: WorkspaceUserInviteInput;
  workspaceId: Scalars['String']['input'];
}>;


export type WorkspaceUserInviteMutation = { __typename?: 'Mutation', workspaceUserInvite: boolean };

export type WorkspaceUserRemoveMutationVariables = Exact<{
  input: WorkspaceUserRemoveInput;
  workspaceId: Scalars['String']['input'];
}>;


export type WorkspaceUserRemoveMutation = { __typename?: 'Mutation', workspaceUserRemove: boolean };

export type AdminVolumeInstancesForVolumeQueryVariables = Exact<{
  volumeId: Scalars['String']['input'];
}>;


export type AdminVolumeInstancesForVolumeQuery = { __typename?: 'Query', adminVolumeInstancesForVolume: Array<{ __typename: 'VolumeInstance', createdAt: any, currentSizeMB: number, environmentId: string, externalId?: string | null, id: string, mountPath: string, region?: string | null, serviceId?: string | null, sizeMB: number, state?: VolumeState | null, volumeId: string }> };

export type AllPlatformFeatureFlagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPlatformFeatureFlagsQuery = { __typename?: 'Query', allPlatformFeatureFlags: Array<{ __typename: 'PlatformFeatureFlagStatus', flag: PlatformFeatureFlag, rolloutPercentage: number, status: boolean, type: PlatformFeatureFlagType }> };

export type ApiTokensQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ApiTokensQuery = { __typename?: 'Query', apiTokens: { __typename: 'QueryApiTokensConnection' } };

export type BuildLogsQueryVariables = Exact<{
  deploymentId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type BuildLogsQuery = { __typename?: 'Query', buildLogs: Array<{ __typename: 'Log', message: string, severity?: string | null, timestamp: string }> };

export type ChangelogBlockImageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ChangelogBlockImageQuery = { __typename?: 'Query', changelogBlockImage: string };

export type CustomDomainQueryVariables = Exact<{
  id: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
}>;


export type CustomDomainQuery = { __typename?: 'Query', customDomain: { __typename: 'CustomDomain', createdAt?: any | null, deletedAt?: any | null, domain: string, edgeId?: string | null, environmentId: string, id: string, projectId?: string | null, serviceId: string, targetPort?: number | null, updatedAt?: any | null } };

export type CustomDomainAvailableQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type CustomDomainAvailableQuery = { __typename?: 'Query', customDomainAvailable: { __typename: 'DomainAvailable', available: boolean, message: string } };

export type DeploymentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeploymentQuery = { __typename?: 'Query', deployment: { __typename: 'Deployment', canRedeploy: boolean, canRollback: boolean, createdAt: any, deploymentStopped: boolean, environmentId: string, id: string, meta?: any | null, projectId: string, serviceId?: string | null, snapshotId?: string | null, staticUrl?: string | null, status: DeploymentStatus, suggestAddServiceDomain: boolean, updatedAt: any, url?: string | null } };

export type DeploymentEventsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeploymentEventsQuery = { __typename?: 'Query', deploymentEvents: { __typename: 'QueryDeploymentEventsConnection', edges: Array<{ __typename?: 'QueryDeploymentEventsConnectionEdge', cursor: string, node: { __typename?: 'DeploymentEvent', id: string, step: DeploymentEventStep, createdAt: any, completedAt?: any | null, payload?: { __typename?: 'DeploymentEventPayload', error?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type DeploymentInstanceExecutionsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input: DeploymentInstanceExecutionListInput;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeploymentInstanceExecutionsQuery = { __typename?: 'Query', deploymentInstanceExecutions: { __typename: 'QueryDeploymentInstanceExecutionsConnection' } };

export type DeploymentLogsQueryVariables = Exact<{
  deploymentId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type DeploymentLogsQuery = { __typename?: 'Query', deploymentLogs: Array<{ __typename: 'Log', message: string, severity?: string | null, timestamp: string }> };

export type DeploymentSnapshotQueryVariables = Exact<{
  deploymentId: Scalars['String']['input'];
}>;


export type DeploymentSnapshotQuery = { __typename?: 'Query', deploymentSnapshot?: { __typename: 'DeploymentSnapshot', createdAt: any, id: string, updatedAt: any, variables: any } | null };

export type DeploymentTriggersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type DeploymentTriggersQuery = { __typename?: 'Query', deploymentTriggers: { __typename: 'QueryDeploymentTriggersConnection' } };

export type DeploymentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input: DeploymentListInput;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeploymentsQuery = { __typename?: 'Query', deployments: { __typename: 'QueryDeploymentsConnection', edges: Array<{ __typename?: 'QueryDeploymentsConnectionEdge', cursor: string, node: { __typename?: 'Deployment', id: string, status: DeploymentStatus, createdAt: any, updatedAt: any, projectId: string, serviceId?: string | null, environmentId: string, url?: string | null, staticUrl?: string | null, canRedeploy: boolean, canRollback: boolean, service: { __typename?: 'Service', id: string, name: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type DomainsQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type DomainsQuery = { __typename?: 'Query', domains: { __typename: 'AllDomains' } };

export type EgressGatewaysQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type EgressGatewaysQuery = { __typename?: 'Query', egressGateways: Array<{ __typename: 'EgressGateway', ipv4: string, region: string }> };

export type EnvironmentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type EnvironmentQuery = { __typename?: 'Query', environment: { __typename: 'Environment', createdAt: any, deletedAt?: any | null, id: string, isEphemeral: boolean, name: string, projectId: string, unmergedChangesCount?: number | null, updatedAt: any, volumeInstances: { __typename?: 'EnvironmentVolumeInstancesConnection', edges: Array<{ __typename?: 'EnvironmentVolumeInstancesConnectionEdge', node: { __typename: 'VolumeInstance', id: string, environmentId: string, volumeId: string, mountPath: string, state?: VolumeState | null, createdAt: any, currentSizeMB: number, sizeMB: number, region?: string | null, serviceId?: string | null, externalId?: string | null } }> } } };

export type EnvironmentLogsQueryVariables = Exact<{
  afterDate?: InputMaybe<Scalars['String']['input']>;
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  anchorDate?: InputMaybe<Scalars['String']['input']>;
  beforeDate?: InputMaybe<Scalars['String']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  environmentId: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
}>;


export type EnvironmentLogsQuery = { __typename?: 'Query', environmentLogs: Array<{ __typename: 'Log', message: string, severity?: string | null, timestamp: string }> };

export type EnvironmentPatchQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type EnvironmentPatchQuery = { __typename?: 'Query', environmentPatch: { __typename: 'EnvironmentPatch', appliedAt?: any | null, createdAt: any, environmentId: string, id: string, lastAppliedError?: string | null, message?: string | null, status: EnvironmentPatchStatus, updatedAt: any } };

export type EnvironmentPatchesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EnvironmentPatchesQuery = { __typename?: 'Query', environmentPatches: { __typename: 'QueryEnvironmentPatchesConnection' } };

export type EnvironmentStagedChangesQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
}>;


export type EnvironmentStagedChangesQuery = { __typename?: 'Query', environmentStagedChanges: { __typename: 'EnvironmentPatch', appliedAt?: any | null, createdAt: any, environmentId: string, id: string, lastAppliedError?: string | null, message?: string | null, status: EnvironmentPatchStatus, updatedAt: any } };

export type EnvironmentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isEphemeral?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
}>;


export type EnvironmentsQuery = { __typename?: 'Query', environments: { __typename: 'QueryEnvironmentsConnection', edges: Array<{ __typename?: 'QueryEnvironmentsConnectionEdge', cursor: string, node: { __typename?: 'Environment', id: string, name: string, projectId: string, isEphemeral: boolean, createdAt: any, updatedAt: any, deletedAt?: any | null, unmergedChangesCount?: number | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type EstimatedUsageQueryVariables = Exact<{
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  measurements: Array<MetricMeasurement> | MetricMeasurement;
  projectId?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type EstimatedUsageQuery = { __typename?: 'Query', estimatedUsage: Array<{ __typename: 'EstimatedUsage', estimatedValue: number, measurement: MetricMeasurement, projectId: string }> };

export type EventsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename: 'QueryEventsConnection', edges: Array<{ __typename?: 'QueryEventsConnectionEdge', cursor: string, node: { __typename?: 'Event', id: string, action: string, createdAt: any, severity: EventSeverity, environmentId?: string | null, projectId?: string | null, payload?: any | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type ExternalWorkspacesQueryVariables = Exact<{
  projectId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ExternalWorkspacesQuery = { __typename?: 'Query', externalWorkspaces: Array<{ __typename: 'ExternalWorkspace', allowDeprecatedRegions?: boolean | null, avatar?: string | null, createdAt: any, customerState: SubscriptionState, hasBAA: boolean, id: string, isTrialing?: boolean | null, name: string, plan: Plan, preferredRegion?: string | null, teamId?: string | null }> };

export type FunctionRuntimeQueryVariables = Exact<{
  name: FunctionRuntimeName;
}>;


export type FunctionRuntimeQuery = { __typename?: 'Query', functionRuntime: { __typename: 'FunctionRuntime', image: string, name: FunctionRuntimeName } };

export type FunctionRuntimesQueryVariables = Exact<{ [key: string]: never; }>;


export type FunctionRuntimesQuery = { __typename?: 'Query', functionRuntimes: Array<{ __typename: 'FunctionRuntime', image: string, name: FunctionRuntimeName }> };

export type GitHubRepoAccessAvailableQueryVariables = Exact<{
  fullRepoName: Scalars['String']['input'];
}>;


export type GitHubRepoAccessAvailableQuery = { __typename?: 'Query', gitHubRepoAccessAvailable: { __typename: 'GitHubAccess', hasAccess: boolean, isPublic: boolean } };

export type GithubIsRepoNameAvailableQueryVariables = Exact<{
  fullRepoName: Scalars['String']['input'];
}>;


export type GithubIsRepoNameAvailableQuery = { __typename?: 'Query', githubIsRepoNameAvailable: boolean };

export type GithubRepoQueryVariables = Exact<{
  fullRepoName: Scalars['String']['input'];
}>;


export type GithubRepoQuery = { __typename?: 'Query', githubRepo: { __typename: 'GitHubRepoWithoutInstallation', defaultBranch: string, fullName: string, id: number, isPrivate: boolean, name: string } };

export type GithubRepoBranchesQueryVariables = Exact<{
  owner: Scalars['String']['input'];
  repo: Scalars['String']['input'];
}>;


export type GithubRepoBranchesQuery = { __typename?: 'Query', githubRepoBranches: Array<{ __typename: 'GitHubBranch', name: string }> };

export type GithubReposQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubReposQuery = { __typename?: 'Query', githubRepos: Array<{ __typename: 'GitHubRepo', defaultBranch: string, fullName: string, id: number, installationId: string, isPrivate: boolean, name: string }> };

export type GithubWritableScopesQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubWritableScopesQuery = { __typename?: 'Query', githubWritableScopes: Array<string> };

export type HerokuAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type HerokuAppsQuery = { __typename?: 'Query', herokuApps: Array<{ __typename: 'HerokuApp', id: string, name: string }> };

export type HttpLogsQueryVariables = Exact<{
  afterDate?: InputMaybe<Scalars['String']['input']>;
  afterLimit?: InputMaybe<Scalars['Int']['input']>;
  anchorDate?: InputMaybe<Scalars['String']['input']>;
  beforeDate?: InputMaybe<Scalars['String']['input']>;
  beforeLimit?: InputMaybe<Scalars['Int']['input']>;
  deploymentId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type HttpLogsQuery = { __typename?: 'Query', httpLogs: Array<{ __typename: 'HttpLog', clientUa: string, deploymentId: string, deploymentInstanceId: string, downstreamProto: string, edgeRegion: string, host: string, httpStatus: number, method: string, path: string, requestId: string, responseDetails: string, rxBytes: number, srcIp: string, timestamp: string, totalDuration: number, txBytes: number, upstreamAddress: string, upstreamProto: string, upstreamRqDuration: number }> };

export type IntegrationAuthQueryVariables = Exact<{
  provider: Scalars['String']['input'];
  providerId: Scalars['String']['input'];
}>;


export type IntegrationAuthQuery = { __typename?: 'Query', integrationAuth: { __typename: 'IntegrationAuth', id: string, provider: string, providerId: string } };

export type IntegrationAuthsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type IntegrationAuthsQuery = { __typename?: 'Query', integrationAuths: { __typename: 'QueryIntegrationAuthsConnection' } };

export type IntegrationsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
}>;


export type IntegrationsQuery = { __typename?: 'Query', integrations: { __typename: 'QueryIntegrationsConnection' } };

export type InviteCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type InviteCodeQuery = { __typename?: 'Query', inviteCode: { __typename: 'InviteCode', code: string, createdAt: any, id: string, projectId: string, role: ProjectRole } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename: 'User', agreedFairUse: boolean, avatar?: string | null, banReason?: string | null, createdAt: any, email: string, featureFlags: Array<ActiveFeatureFlag>, flags: Array<UserFlag>, has2FA: boolean, id: string, isAdmin: boolean, isConductor: boolean, isVerified: boolean, lastLogin: any, name?: string | null, registrationStatus: RegistrationStatus, riskLevel?: number | null, termsAgreedOn?: any | null, username?: string | null, workspaces: Array<{ __typename: 'Workspace', id: string, name: string, avatar?: string | null, createdAt: any, preferredRegion?: string | null, subscriptionModel: SubscriptionModel, supportTierOverride?: SupportTierOverride | null, banReason?: string | null, discordRole?: string | null, slackChannelId?: string | null }> } };

export type MetricsQueryVariables = Exact<{
  averagingWindowSeconds?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  environmentId?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Array<MetricTag> | MetricTag>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  measurements: Array<MetricMeasurement> | MetricMeasurement;
  projectId?: InputMaybe<Scalars['String']['input']>;
  sampleRateSeconds?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  volumeId?: InputMaybe<Scalars['String']['input']>;
  volumeInstanceExternalId?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MetricsQuery = { __typename?: 'Query', metrics: Array<{ __typename: 'MetricsResult', measurement: MetricMeasurement, tags: { __typename: 'MetricTags', deploymentId?: string | null, deploymentInstanceId?: string | null, environmentId?: string | null, pluginId?: string | null, projectId?: string | null, region?: string | null, serviceId?: string | null, volumeId?: string | null, volumeInstanceId?: string | null }, values: Array<{ __typename: 'Metric', ts: number, value: number }> }> };

export type NodeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type NodeQuery = { __typename?: 'Query', node?:
    | { __typename: 'AdoptionInfo', id: string }
    | { __typename: 'ApiToken', id: string }
    | { __typename: 'BanReasonHistory', id: string }
    | { __typename: 'Container', id: string }
    | { __typename: 'Credit', id: string }
    | { __typename: 'Customer', id: string }
    | { __typename: 'Deployment', id: string }
    | { __typename: 'DeploymentEvent', id: string }
    | { __typename: 'DeploymentInstanceExecution', id: string }
    | { __typename: 'DeploymentSnapshot', id: string }
    | { __typename: 'DeploymentTrigger', id: string }
    | { __typename: 'Environment', id: string }
    | { __typename: 'EnvironmentPatch', id: string }
    | { __typename: 'Event', id: string }
    | { __typename: 'Integration', id: string }
    | { __typename: 'IntegrationAuth', id: string }
    | { __typename: 'InviteCode', id: string }
    | { __typename: 'NotificationDelivery', id: string }
    | { __typename: 'NotificationInstance', id: string }
    | { __typename: 'ObservabilityDashboard', id: string }
    | { __typename: 'ObservabilityDashboardAlert', id: string }
    | { __typename: 'ObservabilityDashboardItem', id: string }
    | { __typename: 'ObservabilityDashboardItemInstance', id: string }
    | { __typename: 'ObservabilityDashboardMonitor', id: string }
    | { __typename: 'Passkey', id: string }
    | { __typename: 'PlanLimitOverride', id: string }
    | { __typename: 'Plugin', id: string }
    | { __typename: 'PreferenceOverride', id: string }
    | { __typename: 'Preferences', id: string }
    | { __typename: 'Project', id: string }
    | { __typename: 'ProjectPermission', id: string }
    | { __typename: 'ProjectToken', id: string }
    | { __typename: 'ProjectWebhook', id: string }
    | { __typename: 'ProviderAuth', id: string }
    | { __typename: 'ReferralInfo', id: string }
    | { __typename: 'RefundRequest', id: string }
    | { __typename: 'ReissuedInvoice', id: string }
    | { __typename: 'Service', id: string }
    | { __typename: 'ServiceInstance', id: string }
    | { __typename: 'Session', id: string }
    | { __typename: 'Team', id: string }
    | { __typename: 'TeamPermission', id: string }
    | { __typename: 'Template', id: string }
    | { __typename: 'TemplateService', id: string }
    | { __typename: 'UsageAnomaly', id: string }
    | { __typename: 'UsageLimit', id: string }
    | { __typename: 'User', id: string }
    | { __typename: 'UserGithubRepo', id: string }
    | { __typename: 'Variable', id: string }
    | { __typename: 'Volume', id: string }
    | { __typename: 'VolumeInstance', id: string }
    | { __typename: 'VolumeInstanceBackupSchedule', id: string }
    | { __typename: 'Withdrawal', id: string }
    | { __typename: 'WithdrawalAccount', id: string }
    | { __typename: 'Workspace', id: string }
    | { __typename: 'WorkspaceIdentityProvider', id: string }
   | null };

export type NodesQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type NodesQuery = { __typename?: 'Query', nodes: Array<
    | { __typename: 'AdoptionInfo', id: string }
    | { __typename: 'ApiToken', id: string }
    | { __typename: 'BanReasonHistory', id: string }
    | { __typename: 'Container', id: string }
    | { __typename: 'Credit', id: string }
    | { __typename: 'Customer', id: string }
    | { __typename: 'Deployment', id: string }
    | { __typename: 'DeploymentEvent', id: string }
    | { __typename: 'DeploymentInstanceExecution', id: string }
    | { __typename: 'DeploymentSnapshot', id: string }
    | { __typename: 'DeploymentTrigger', id: string }
    | { __typename: 'Environment', id: string }
    | { __typename: 'EnvironmentPatch', id: string }
    | { __typename: 'Event', id: string }
    | { __typename: 'Integration', id: string }
    | { __typename: 'IntegrationAuth', id: string }
    | { __typename: 'InviteCode', id: string }
    | { __typename: 'NotificationDelivery', id: string }
    | { __typename: 'NotificationInstance', id: string }
    | { __typename: 'ObservabilityDashboard', id: string }
    | { __typename: 'ObservabilityDashboardAlert', id: string }
    | { __typename: 'ObservabilityDashboardItem', id: string }
    | { __typename: 'ObservabilityDashboardItemInstance', id: string }
    | { __typename: 'ObservabilityDashboardMonitor', id: string }
    | { __typename: 'Passkey', id: string }
    | { __typename: 'PlanLimitOverride', id: string }
    | { __typename: 'Plugin', id: string }
    | { __typename: 'PreferenceOverride', id: string }
    | { __typename: 'Preferences', id: string }
    | { __typename: 'Project', id: string }
    | { __typename: 'ProjectPermission', id: string }
    | { __typename: 'ProjectToken', id: string }
    | { __typename: 'ProjectWebhook', id: string }
    | { __typename: 'ProviderAuth', id: string }
    | { __typename: 'ReferralInfo', id: string }
    | { __typename: 'RefundRequest', id: string }
    | { __typename: 'ReissuedInvoice', id: string }
    | { __typename: 'Service', id: string }
    | { __typename: 'ServiceInstance', id: string }
    | { __typename: 'Session', id: string }
    | { __typename: 'Team', id: string }
    | { __typename: 'TeamPermission', id: string }
    | { __typename: 'Template', id: string }
    | { __typename: 'TemplateService', id: string }
    | { __typename: 'UsageAnomaly', id: string }
    | { __typename: 'UsageLimit', id: string }
    | { __typename: 'User', id: string }
    | { __typename: 'UserGithubRepo', id: string }
    | { __typename: 'Variable', id: string }
    | { __typename: 'Volume', id: string }
    | { __typename: 'VolumeInstance', id: string }
    | { __typename: 'VolumeInstanceBackupSchedule', id: string }
    | { __typename: 'Withdrawal', id: string }
    | { __typename: 'WithdrawalAccount', id: string }
    | { __typename: 'Workspace', id: string }
    | { __typename: 'WorkspaceIdentityProvider', id: string }
   | null> };

export type NotificationDeliveriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<NotificationDeliveryFilterInput>;
}>;


export type NotificationDeliveriesQuery = { __typename?: 'Query', notificationDeliveries: { __typename: 'QueryNotificationDeliveriesConnection', edges: Array<{ __typename: 'QueryNotificationDeliveriesConnectionEdge', cursor: string, node: { __typename: 'NotificationDelivery', id: string, createdAt: any, readAt?: any | null, status: NotificationDeliveryStatus, type: NotificationDeliveryType, updatedAt: any, userId?: string | null, notificationInstance: { __typename: 'NotificationInstance', id: string, createdAt: any, environmentId?: string | null, eventId: string, eventType?: string | null, projectId?: string | null, resolvedAt?: any | null, resourceId?: string | null, resourceType?: string | null, serviceId?: string | null, severity: NotificationSeverity, status: NotificationStatus, updatedAt: any, volumeId?: string | null, workspaceId: string } } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type ObservabilityDashboardsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ObservabilityDashboardsQuery = { __typename?: 'Query', observabilityDashboards: { __typename: 'QueryObservabilityDashboardsConnection' } };

export type PasskeysQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PasskeysQuery = { __typename?: 'Query', passkeys: { __typename: 'QueryPasskeysConnection' } };

export type PlatformStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type PlatformStatusQuery = { __typename?: 'Query', platformStatus: { __typename: 'PlatformStatus', isStable: boolean } };

export type PreferencesQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type PreferencesQuery = { __typename?: 'Query', preferences: { __typename: 'Preferences', buildFailedEmail: boolean, changelogEmail: boolean, communityEmail: boolean, deployCrashedEmail: boolean, ephemeralEnvironmentEmail: boolean, id: string, marketingEmail: boolean, subprocessorUpdatesEmail: boolean, usageEmail: boolean } };

export type PrivateNetworkEndpointQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type PrivateNetworkEndpointQuery = { __typename?: 'Query', privateNetworkEndpoint?: { __typename: 'PrivateNetworkEndpoint', createdAt?: any | null, deletedAt?: any | null, dnsName: string, privateIps: Array<string>, publicId: string, serviceInstanceId: string, tags: Array<string> } | null };

export type PrivateNetworkEndpointNameAvailableQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  prefix: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
}>;


export type PrivateNetworkEndpointNameAvailableQuery = { __typename?: 'Query', privateNetworkEndpointNameAvailable: boolean };

export type PrivateNetworksQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
}>;


export type PrivateNetworksQuery = { __typename?: 'Query', privateNetworks: Array<{ __typename: 'PrivateNetwork', createdAt?: any | null, deletedAt?: any | null, dnsName: string, environmentId: string, name: string, networkId: any, projectId: string, publicId: string, tags: Array<string> }> };

export type ProjectQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectQuery = { __typename?: 'Query', project: { __typename: 'Project', baseEnvironmentId?: string | null, botPrEnvironments: boolean, createdAt: any, deletedAt?: any | null, description?: string | null, expiredAt?: any | null, id: string, isPublic: boolean, isTempProject: boolean, name: string, prDeploys: boolean, subscriptionPlanLimit: any, subscriptionType: SubscriptionPlanType, teamId?: string | null, updatedAt: any } };

export type ProjectInvitationQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type ProjectInvitationQuery = { __typename?: 'Query', projectInvitation:
    | { __typename: 'InviteCode', code: string, createdAt: any, id: string, projectId: string, role: ProjectRole }
    | { __typename: 'ProjectInvitation', email: string, expiresAt: any, id: string, isExpired: boolean }
   };

export type ProjectInvitationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProjectInvitationsQuery = { __typename?: 'Query', projectInvitations: Array<{ __typename: 'ProjectInvitation', email: string, expiresAt: any, id: string, isExpired: boolean }> };

export type ProjectInviteCodeQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  role: ProjectRole;
}>;


export type ProjectInviteCodeQuery = { __typename?: 'Query', projectInviteCode: { __typename: 'InviteCode', code: string, createdAt: any, id: string, projectId: string, role: ProjectRole } };

export type ProjectMembersQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type ProjectMembersQuery = { __typename?: 'Query', projectMembers: Array<{ __typename: 'ProjectMember', avatar?: string | null, email: string, id: string, name?: string | null, role: ProjectRole }> };

export type ProjectResourceAccessQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type ProjectResourceAccessQuery = { __typename?: 'Query', projectResourceAccess: { __typename: 'ProjectResourceAccess' } };

export type ProjectTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectTokenQuery = { __typename?: 'Query', projectToken: { __typename: 'ProjectToken', createdAt: any, displayToken: string, environmentId: string, id: string, name: string, projectId: string } };

export type ProjectTokensQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
}>;


export type ProjectTokensQuery = { __typename?: 'Query', projectTokens: { __typename: 'QueryProjectTokensConnection' } };

export type ProjectsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: { __typename: 'QueryProjectsConnection', edges: Array<{ __typename?: 'QueryProjectsConnectionEdge', cursor: string, node: { __typename?: 'Project', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, isPublic: boolean, isTempProject: boolean, teamId?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PublicStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicStatsQuery = { __typename?: 'Query', publicStats: { __typename: 'PublicStats', totalDeploymentsLastMonth: number, totalLogsLastMonth: any, totalProjects: number, totalRequestsLastMonth: any, totalServices: number, totalUsers: number } };

export type ReferralInfoQueryVariables = Exact<{
  workspaceId: Scalars['String']['input'];
}>;


export type ReferralInfoQuery = { __typename?: 'Query', referralInfo: { __typename: 'ReferralInfo', code: string, id: string, status: string } };

export type RegionsQueryVariables = Exact<{
  projectId?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegionsQuery = { __typename?: 'Query', regions: Array<{ __typename: 'Region', country: string, location: string, name: string, railwayMetal?: boolean | null, region?: string | null, workspaceId?: string | null }> };

export type ResourceAccessQueryVariables = Exact<{
  explicitResourceOwner: ExplicitOwnerInput;
}>;


export type ResourceAccessQuery = { __typename?: 'Query', resourceAccess: { __typename: 'ResourceAccess' } };

export type ServiceQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ServiceQuery = { __typename?: 'Query', service: { __typename: 'Service', createdAt: any, deletedAt?: any | null, featureFlags: Array<ActiveServiceFeatureFlag>, icon?: string | null, id: string, name: string, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null, updatedAt: any } };

export type ServiceDomainAvailableQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type ServiceDomainAvailableQuery = { __typename?: 'Query', serviceDomainAvailable: { __typename: 'DomainAvailable', available: boolean, message: string } };

export type ServiceInstanceQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceQuery = { __typename?: 'Query', serviceInstance: { __typename: 'ServiceInstance', buildCommand?: string | null, builder: Builder, createdAt: any, cronSchedule?: string | null, deletedAt?: any | null, environmentId: string, healthcheckPath?: string | null, healthcheckTimeout?: number | null, id: string, isUpdatable: boolean, nextCronRunAt?: any | null, nixpacksPlan?: any | null, numReplicas?: number | null, preDeployCommand?: any | null, railpackInfo?: any | null, railwayConfigFile?: string | null, region?: string | null, restartPolicyMaxRetries: number, restartPolicyType: RestartPolicyType, rootDirectory?: string | null, serviceId: string, serviceName: string, sleepApplication?: boolean | null, startCommand?: string | null, updatedAt: any, upstreamUrl?: string | null, watchPatterns: Array<string> } };

export type ServiceInstanceIsUpdatableQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceIsUpdatableQuery = { __typename?: 'Query', serviceInstanceIsUpdatable: boolean };

export type ServiceInstanceLimitOverrideQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceLimitOverrideQuery = { __typename?: 'Query', serviceInstanceLimitOverride?: any | null };

export type ServiceInstanceLimitsQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type ServiceInstanceLimitsQuery = { __typename?: 'Query', serviceInstanceLimits: any };

export type ServicesQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServicesQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: string, services: { __typename?: 'ProjectServicesConnection', edges: Array<{ __typename?: 'ProjectServicesConnectionEdge', cursor: string, node: { __typename?: 'Service', id: string, name: string, icon?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null, projectId: string, templateServiceId?: string | null, templateThreadSlug?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type SessionsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SessionsQuery = { __typename?: 'Query', sessions: { __typename: 'QuerySessionsConnection' } };

export type TcpProxiesQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type TcpProxiesQuery = { __typename?: 'Query', tcpProxies: Array<{ __typename: 'TCPProxy', applicationPort: number, createdAt?: any | null, deletedAt?: any | null, domain: string, environmentId: string, id: string, proxyPort: number, serviceId: string, updatedAt?: any | null }> };

export type TemplateQueryVariables = Exact<{
  code?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
}>;


export type TemplateQuery = { __typename?: 'Query', template: { __typename: 'Template', activeProjects: number, canvasConfig?: any | null, category?: string | null, code: string, communityThreadSlug?: string | null, config: any, createdAt: any, demoProjectId?: string | null, description?: string | null, health?: number | null, id: string, image?: string | null, isApproved: boolean, isV2Template: boolean, languages?: Array<string> | null, metadata: any, name: string, projects: number, readme?: string | null, serializedConfig?: any | null, status: TemplateStatus, tags?: Array<string> | null, teamId?: string | null, totalPayout: number } };

export type TemplateSourceForProjectQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type TemplateSourceForProjectQuery = { __typename?: 'Query', templateSourceForProject?: { __typename: 'Template', activeProjects: number, canvasConfig?: any | null, category?: string | null, code: string, communityThreadSlug?: string | null, config: any, createdAt: any, demoProjectId?: string | null, description?: string | null, health?: number | null, id: string, image?: string | null, isApproved: boolean, isV2Template: boolean, languages?: Array<string> | null, metadata: any, name: string, projects: number, readme?: string | null, serializedConfig?: any | null, status: TemplateStatus, tags?: Array<string> | null, teamId?: string | null, totalPayout: number } | null };

export type TemplatesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  recommended?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type TemplatesQuery = { __typename?: 'Query', templates: { __typename: 'QueryTemplatesConnection', edges: Array<{ __typename?: 'QueryTemplatesConnectionEdge', cursor: string, node: { __typename?: 'Template', id: string, code: string, name: string, description?: string | null, category?: string | null, image?: string | null, activeProjects: number, health?: number | null, isApproved: boolean, isV2Template: boolean, createdAt: any } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type TemplatesCountQueryVariables = Exact<{ [key: string]: never; }>;


export type TemplatesCountQuery = { __typename?: 'Query', templatesCount: number };

export type TrustedDomainsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['String']['input'];
}>;


export type TrustedDomainsQuery = { __typename?: 'Query', trustedDomains: { __typename: 'QueryTrustedDomainsConnection' } };

export type TwoFactorInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type TwoFactorInfoQuery = { __typename?: 'Query', twoFactorInfo: { __typename: 'TwoFactorInfo', hasRecoveryCodes: boolean, isVerified: boolean } };

export type UsageQueryVariables = Exact<{
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  groupBy?: InputMaybe<Array<MetricTag> | MetricTag>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  measurements: Array<MetricMeasurement> | MetricMeasurement;
  projectId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UsageQuery = { __typename?: 'Query', usage: Array<{ __typename: 'AggregatedUsage', measurement: MetricMeasurement, value: number, tags: { __typename: 'MetricTags', deploymentId?: string | null, deploymentInstanceId?: string | null, environmentId?: string | null, pluginId?: string | null, projectId?: string | null, region?: string | null, serviceId?: string | null, volumeId?: string | null, volumeInstanceId?: string | null } }> };

export type UserProfileQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type UserProfileQuery = { __typename?: 'Query', userProfile: { __typename: 'UserProfileResponse', avatar?: string | null, createdAt: any, customerId?: string | null, id: string, isTrialing?: boolean | null, name?: string | null, state?: string | null, totalDeploys: number, username?: string | null } };

export type VariablesQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['String']['input']>;
  unrendered?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type VariablesQuery = { __typename?: 'Query', variables: any };

export type VariablesForServiceDeploymentQueryVariables = Exact<{
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type VariablesForServiceDeploymentQuery = { __typename?: 'Query', variablesForServiceDeployment: any };

export type VercelInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type VercelInfoQuery = { __typename?: 'Query', vercelInfo: { __typename: 'VercelInfo' } };

export type VolumeInstanceQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type VolumeInstanceQuery = { __typename?: 'Query', volumeInstance: { __typename: 'VolumeInstance', createdAt: any, currentSizeMB: number, environmentId: string, externalId?: string | null, id: string, mountPath: string, region?: string | null, serviceId?: string | null, sizeMB: number, state?: VolumeState | null, volumeId: string } };

export type VolumeInstanceBackupListQueryVariables = Exact<{
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupListQuery = { __typename?: 'Query', volumeInstanceBackupList: Array<{ __typename: 'VolumeInstanceBackup', createdAt: any, creatorId?: string | null, expiresAt?: any | null, externalId: string, id: string, name?: string | null, referencedMB?: number | null, usedMB?: number | null }> };

export type VolumeInstanceBackupScheduleListQueryVariables = Exact<{
  volumeInstanceId: Scalars['String']['input'];
}>;


export type VolumeInstanceBackupScheduleListQuery = { __typename?: 'Query', volumeInstanceBackupScheduleList: Array<{ __typename: 'VolumeInstanceBackupSchedule', createdAt: any, cron: string, id: string, kind: VolumeInstanceBackupScheduleKind, name: string, retentionSeconds?: number | null }> };

export type WebhooksQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
}>;


export type WebhooksQuery = { __typename?: 'Query', webhooks: { __typename: 'QueryWebhooksConnection' } };

export type WorkflowStatusQueryVariables = Exact<{
  workflowId: Scalars['String']['input'];
}>;


export type WorkflowStatusQuery = { __typename?: 'Query', workflowStatus: { __typename: 'WorkflowResult', error?: string | null, status: WorkflowStatus } };

export type WorkspaceQueryVariables = Exact<{
  workspaceId: Scalars['String']['input'];
}>;


export type WorkspaceQuery = { __typename?: 'Query', workspace: { __typename: 'Workspace', avatar?: string | null, banReason?: string | null, createdAt: any, discordRole?: string | null, id: string, name: string, preferredRegion?: string | null, slackChannelId?: string | null, subscriptionModel: SubscriptionModel, supportTierOverride?: SupportTierOverride | null } };

export type WorkspaceByCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type WorkspaceByCodeQuery = { __typename?: 'Query', workspaceByCode: { __typename: 'Workspace', adoptionLevel: number, allowDeprecatedRegions?: boolean | null, createdAt: any, id: string, name: string, plan: Plan, preferredRegion?: string | null, subscriptionModel: SubscriptionModel, updatedAt: any } };

export type WorkspaceIdentityProvidersQueryVariables = Exact<{
  workspaceId: Scalars['String']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WorkspaceIdentityProvidersQuery = { __typename?: 'Query', workspaceIdentityProviders: { __typename: 'QueryWorkspaceIdentityProvidersConnection', edges: Array<{ __typename: 'QueryWorkspaceIdentityProvidersConnectionEdge', cursor: string, node: { __typename: 'WorkspaceIdentityProvider', id: string, createdAt: any, updatedAt: any, workspaceId: string, enforcementEnabledAt?: any | null, connection: { __typename: 'WorkspaceIdPConnection', provider?: string | null, status: WorkspaceIdPConnectionStatus, createdAt?: any | null, updatedAt?: any | null } } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type WorkspaceTemplatesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['String']['input'];
}>;


export type WorkspaceTemplatesQuery = { __typename?: 'Query', workspaceTemplates: { __typename: 'QueryWorkspaceTemplatesConnection' } };


export const ApiTokenCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"apiTokenCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApiTokenCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apiTokenCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ApiTokenCreateMutation, ApiTokenCreateMutationVariables>;
export const ApiTokenDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"apiTokenDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apiTokenDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ApiTokenDeleteMutation, ApiTokenDeleteMutationVariables>;
export const BaseEnvironmentOverrideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"baseEnvironmentOverride"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BaseEnvironmentOverrideInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentOverride"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<BaseEnvironmentOverrideMutation, BaseEnvironmentOverrideMutationVariables>;
export const CustomDomainCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"customDomainCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomDomainCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customDomainCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"edgeId"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"targetPort"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CustomDomainCreateMutation, CustomDomainCreateMutationVariables>;
export const CustomDomainDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"customDomainDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customDomainDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<CustomDomainDeleteMutation, CustomDomainDeleteMutationVariables>;
export const CustomDomainUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"customDomainUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetPort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customDomainUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"targetPort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetPort"}}}]}]}}]} as unknown as DocumentNode<CustomDomainUpdateMutation, CustomDomainUpdateMutationVariables>;
export const CustomerCreateFreePlanSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"customerCreateFreePlanSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerCreateFreePlanSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<CustomerCreateFreePlanSubscriptionMutation, CustomerCreateFreePlanSubscriptionMutationVariables>;
export const CustomerTogglePayoutsToCreditsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"customerTogglePayoutsToCredits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"customerTogglePayoutsToCreditsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerTogglePayoutsToCredits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CustomerTogglePayoutsToCreditsMutation, CustomerTogglePayoutsToCreditsMutationVariables>;
export const DeploymentApproveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentApprove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentApprove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentApproveMutation, DeploymentApproveMutationVariables>;
export const DeploymentCancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentCancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentCancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentCancelMutation, DeploymentCancelMutationVariables>;
export const DeploymentInstanceExecutionCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentInstanceExecutionCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentInstanceExecutionCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentInstanceExecutionCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeploymentInstanceExecutionCreateMutation, DeploymentInstanceExecutionCreateMutationVariables>;
export const DeploymentRedeployDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentRedeploy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usePreviousImageTag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentRedeploy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"usePreviousImageTag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usePreviousImageTag"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}},{"kind":"Field","name":{"kind":"Name","value":"canRollback"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentStopped"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"snapshotId"}},{"kind":"Field","name":{"kind":"Name","value":"staticUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"suggestAddServiceDomain"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<DeploymentRedeployMutation, DeploymentRedeployMutationVariables>;
export const DeploymentRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentRemoveMutation, DeploymentRemoveMutationVariables>;
export const DeploymentRestartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentRestart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentRestart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentRestartMutation, DeploymentRestartMutationVariables>;
export const DeploymentRollbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentRollback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentRollback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentRollbackMutation, DeploymentRollbackMutationVariables>;
export const DeploymentStopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentStop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentStop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentStopMutation, DeploymentStopMutationVariables>;
export const DeploymentTriggerCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentTriggerCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentTriggerCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentTriggerCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentOverrideId"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"checkSuites"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"repository"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"validCheckSuites"}}]}}]}}]} as unknown as DocumentNode<DeploymentTriggerCreateMutation, DeploymentTriggerCreateMutationVariables>;
export const DeploymentTriggerDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentTriggerDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentTriggerDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeploymentTriggerDeleteMutation, DeploymentTriggerDeleteMutationVariables>;
export const DeploymentTriggerUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deploymentTriggerUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentTriggerUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentTriggerUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentOverrideId"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"checkSuites"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"repository"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"validCheckSuites"}}]}}]}}]} as unknown as DocumentNode<DeploymentTriggerUpdateMutation, DeploymentTriggerUpdateMutationVariables>;
export const DockerComposeImportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"dockerComposeImport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skipStagingPatch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yaml"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dockerComposeImport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"skipStagingPatch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skipStagingPatch"}}},{"kind":"Argument","name":{"kind":"Name","value":"yaml"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yaml"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"patch"}}]}}]}}]} as unknown as DocumentNode<DockerComposeImportMutation, DockerComposeImportMutationVariables>;
export const EgressGatewayAssociationCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"egressGatewayAssociationCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EgressGatewayCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"egressGatewayAssociationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"ipv4"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}}]}}]} as unknown as DocumentNode<EgressGatewayAssociationCreateMutation, EgressGatewayAssociationCreateMutationVariables>;
export const EgressGatewayAssociationsClearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"egressGatewayAssociationsClear"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EgressGatewayServiceTargetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"egressGatewayAssociationsClear"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EgressGatewayAssociationsClearMutation, EgressGatewayAssociationsClearMutationVariables>;
export const EmailChangeConfirmDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"emailChangeConfirm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nonce"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailChangeConfirm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nonce"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nonce"}}}]}]}}]} as unknown as DocumentNode<EmailChangeConfirmMutation, EmailChangeConfirmMutationVariables>;
export const EmailChangeInitiateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"emailChangeInitiate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailChangeInitiate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}}}]}]}}]} as unknown as DocumentNode<EmailChangeInitiateMutation, EmailChangeInitiateMutationVariables>;
export const EnvironmentCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"environmentCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnvironmentCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEphemeral"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"unmergedChangesCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<EnvironmentCreateMutation, EnvironmentCreateMutationVariables>;
export const EnvironmentDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"environmentDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<EnvironmentDeleteMutation, EnvironmentDeleteMutationVariables>;
export const EnvironmentPatchCommitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"environmentPatchCommit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commitMessage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EnvironmentConfig"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentPatchCommit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commitMessage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commitMessage"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"patch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patch"}}}]}]}}]} as unknown as DocumentNode<EnvironmentPatchCommitMutation, EnvironmentPatchCommitMutationVariables>;
export const EnvironmentRenameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"environmentRename"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnvironmentRenameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentRename"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEphemeral"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"unmergedChangesCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<EnvironmentRenameMutation, EnvironmentRenameMutationVariables>;
export const EnvironmentTriggersDeployDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"environmentTriggersDeploy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnvironmentTriggersDeployInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentTriggersDeploy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EnvironmentTriggersDeployMutation, EnvironmentTriggersDeployMutationVariables>;
export const FairUseAgreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"fairUseAgree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agree"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairUseAgree"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agree"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agree"}}}]}]}}]} as unknown as DocumentNode<FairUseAgreeMutation, FairUseAgreeMutationVariables>;
export const FeatureFlagAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"featureFlagAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureFlagToggleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featureFlagAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<FeatureFlagAddMutation, FeatureFlagAddMutationVariables>;
export const FeatureFlagRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"featureFlagRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureFlagToggleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featureFlagRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<FeatureFlagRemoveMutation, FeatureFlagRemoveMutationVariables>;
export const GithubRepoDeployDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"githubRepoDeploy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepoDeployInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubRepoDeploy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<GithubRepoDeployMutation, GithubRepoDeployMutationVariables>;
export const GithubRepoUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"githubRepoUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepoUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubRepoUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<GithubRepoUpdateMutation, GithubRepoUpdateMutationVariables>;
export const HerokuImportVariablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"herokuImportVariables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HerokuImportVariablesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"herokuImportVariables"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<HerokuImportVariablesMutation, HerokuImportVariablesMutationVariables>;
export const IntegrationCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"integrationCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<IntegrationCreateMutation, IntegrationCreateMutationVariables>;
export const IntegrationDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"integrationDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrationDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<IntegrationDeleteMutation, IntegrationDeleteMutationVariables>;
export const IntegrationUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"integrationUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrationUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<IntegrationUpdateMutation, IntegrationUpdateMutationVariables>;
export const InviteCodeUseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"inviteCodeUse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteCodeUse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentId"}},{"kind":"Field","name":{"kind":"Name","value":"botPrEnvironments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"isTempProject"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"prDeploys"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionPlanLimit"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionType"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<InviteCodeUseMutation, InviteCodeUseMutationVariables>;
export const JobApplicationCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"jobApplicationCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobApplicationCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resume"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobApplicationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"resume"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resume"}}}]}]}}]} as unknown as DocumentNode<JobApplicationCreateMutation, JobApplicationCreateMutationVariables>;
export const LoginSessionAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginSessionAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginSessionAuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginSessionAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginSessionAuthMutation, LoginSessionAuthMutationVariables>;
export const LoginSessionCancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginSessionCancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginSessionCancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<LoginSessionCancelMutation, LoginSessionCancelMutationVariables>;
export const LoginSessionConsumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginSessionConsume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginSessionConsume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<LoginSessionConsumeMutation, LoginSessionConsumeMutationVariables>;
export const LoginSessionCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginSessionCreate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginSessionCreate"}}]}}]} as unknown as DocumentNode<LoginSessionCreateMutation, LoginSessionCreateMutationVariables>;
export const LoginSessionVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginSessionVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginSessionVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<LoginSessionVerifyMutation, LoginSessionVerifyMutationVariables>;
export const NotificationDeliveriesMarkAsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"notificationDeliveriesMarkAsRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deliveryIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationDeliveriesMarkAsRead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deliveryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deliveryIds"}}}]}]}}]} as unknown as DocumentNode<NotificationDeliveriesMarkAsReadMutation, NotificationDeliveriesMarkAsReadMutationVariables>;
export const ObservabilityDashboardCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"observabilityDashboardCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObservabilityDashboardCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observabilityDashboardCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ObservabilityDashboardCreateMutation, ObservabilityDashboardCreateMutationVariables>;
export const ObservabilityDashboardResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"observabilityDashboardReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observabilityDashboardReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ObservabilityDashboardResetMutation, ObservabilityDashboardResetMutationVariables>;
export const ObservabilityDashboardUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"observabilityDashboardUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObservabilityDashboardUpdateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observabilityDashboardUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ObservabilityDashboardUpdateMutation, ObservabilityDashboardUpdateMutationVariables>;
export const PasskeyDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"passkeyDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passkeyDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<PasskeyDeleteMutation, PasskeyDeleteMutationVariables>;
export const PreferenceOverridesCreateUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"preferenceOverridesCreateUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PreferenceOverridesCreateUpdateData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferenceOverridesCreateUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<PreferenceOverridesCreateUpdateMutation, PreferenceOverridesCreateUpdateMutationVariables>;
export const PreferenceOverridesDestroyForResourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"preferenceOverridesDestroyForResource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PreferenceOverridesDestroyData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferenceOverridesDestroyForResource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<PreferenceOverridesDestroyForResourceMutation, PreferenceOverridesDestroyForResourceMutationVariables>;
export const PreferencesUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"preferencesUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PreferencesUpdateData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferencesUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buildFailedEmail"}},{"kind":"Field","name":{"kind":"Name","value":"changelogEmail"}},{"kind":"Field","name":{"kind":"Name","value":"communityEmail"}},{"kind":"Field","name":{"kind":"Name","value":"deployCrashedEmail"}},{"kind":"Field","name":{"kind":"Name","value":"ephemeralEnvironmentEmail"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"subprocessorUpdatesEmail"}},{"kind":"Field","name":{"kind":"Name","value":"usageEmail"}}]}}]}}]} as unknown as DocumentNode<PreferencesUpdateMutation, PreferencesUpdateMutationVariables>;
export const PrivateNetworkCreateOrGetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"privateNetworkCreateOrGet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateNetworkCreateOrGetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworkCreateOrGet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsName"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<PrivateNetworkCreateOrGetMutation, PrivateNetworkCreateOrGetMutationVariables>;
export const PrivateNetworkEndpointCreateOrGetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"privateNetworkEndpointCreateOrGet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PrivateNetworkEndpointCreateOrGetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworkEndpointCreateOrGet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsName"}},{"kind":"Field","name":{"kind":"Name","value":"privateIps"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<PrivateNetworkEndpointCreateOrGetMutation, PrivateNetworkEndpointCreateOrGetMutationVariables>;
export const PrivateNetworkEndpointDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"privateNetworkEndpointDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworkEndpointDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<PrivateNetworkEndpointDeleteMutation, PrivateNetworkEndpointDeleteMutationVariables>;
export const PrivateNetworkEndpointRenameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"privateNetworkEndpointRename"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dnsName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privateNetworkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworkEndpointRename"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dnsName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dnsName"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"privateNetworkId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privateNetworkId"}}}]}]}}]} as unknown as DocumentNode<PrivateNetworkEndpointRenameMutation, PrivateNetworkEndpointRenameMutationVariables>;
export const PrivateNetworksForEnvironmentDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"privateNetworksForEnvironmentDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworksForEnvironmentDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}}]}]}}]} as unknown as DocumentNode<PrivateNetworksForEnvironmentDeleteMutation, PrivateNetworksForEnvironmentDeleteMutationVariables>;
export const ProjectClaimDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectClaim"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectClaim"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentId"}},{"kind":"Field","name":{"kind":"Name","value":"botPrEnvironments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"isTempProject"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"prDeploys"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionPlanLimit"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionType"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProjectClaimMutation, ProjectClaimMutationVariables>;
export const ProjectCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentId"}},{"kind":"Field","name":{"kind":"Name","value":"botPrEnvironments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"isTempProject"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"prDeploys"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionPlanLimit"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionType"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProjectCreateMutation, ProjectCreateMutationVariables>;
export const ProjectDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectDeleteMutation, ProjectDeleteMutationVariables>;
export const ProjectInvitationAcceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectInvitationAccept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInvitationAccept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<ProjectInvitationAcceptMutation, ProjectInvitationAcceptMutationVariables>;
export const ProjectInvitationCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectInvitationCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectInvitee"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInvitationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isExpired"}}]}}]}}]} as unknown as DocumentNode<ProjectInvitationCreateMutation, ProjectInvitationCreateMutationVariables>;
export const ProjectInvitationDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectInvitationDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInvitationDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectInvitationDeleteMutation, ProjectInvitationDeleteMutationVariables>;
export const ProjectInvitationResendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectInvitationResend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInvitationResend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isExpired"}}]}}]}}]} as unknown as DocumentNode<ProjectInvitationResendMutation, ProjectInvitationResendMutationVariables>;
export const ProjectInviteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectInviteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectInviteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInviteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ProjectInviteUserMutation, ProjectInviteUserMutationVariables>;
export const ProjectLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectLeave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectLeaveMutation, ProjectLeaveMutationVariables>;
export const ProjectMemberRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectMemberRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectMemberRemoveInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMemberRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<ProjectMemberRemoveMutation, ProjectMemberRemoveMutationVariables>;
export const ProjectMemberUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectMemberUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectMemberUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMemberUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<ProjectMemberUpdateMutation, ProjectMemberUpdateMutationVariables>;
export const ProjectScheduleDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectScheduleDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectScheduleDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectScheduleDeleteMutation, ProjectScheduleDeleteMutationVariables>;
export const ProjectScheduleDeleteCancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectScheduleDeleteCancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectScheduleDeleteCancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectScheduleDeleteCancelMutation, ProjectScheduleDeleteCancelMutationVariables>;
export const ProjectScheduleDeleteForceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectScheduleDeleteForce"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectScheduleDeleteForce"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectScheduleDeleteForceMutation, ProjectScheduleDeleteForceMutationVariables>;
export const ProjectTokenCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectTokenCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectTokenCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectTokenCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ProjectTokenCreateMutation, ProjectTokenCreateMutationVariables>;
export const ProjectTokenDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectTokenDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectTokenDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProjectTokenDeleteMutation, ProjectTokenDeleteMutationVariables>;
export const ProjectTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectTransferInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}]}}]} as unknown as DocumentNode<ProjectTransferMutation, ProjectTransferMutationVariables>;
export const ProjectTransferConfirmDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectTransferConfirm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectTransferConfirmInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectTransferConfirm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ProjectTransferConfirmMutation, ProjectTransferConfirmMutationVariables>;
export const ProjectTransferInitiateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectTransferInitiate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectTransferInitiateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectTransferInitiate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ProjectTransferInitiateMutation, ProjectTransferInitiateMutationVariables>;
export const ProjectUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"projectUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentId"}},{"kind":"Field","name":{"kind":"Name","value":"botPrEnvironments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"isTempProject"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"prDeploys"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionPlanLimit"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionType"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProjectUpdateMutation, ProjectUpdateMutationVariables>;
export const ProviderAuthRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"providerAuthRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providerAuthRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ProviderAuthRemoveMutation, ProviderAuthRemoveMutationVariables>;
export const RecoveryCodeGenerateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recoveryCodeGenerate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recoveryCodeGenerate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"recoveryCodes"}}]}}]}}]} as unknown as DocumentNode<RecoveryCodeGenerateMutation, RecoveryCodeGenerateMutationVariables>;
export const RecoveryCodeValidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recoveryCodeValidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecoveryCodeValidateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recoveryCodeValidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<RecoveryCodeValidateMutation, RecoveryCodeValidateMutationVariables>;
export const ReferralInfoUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"referralInfoUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReferralInfoUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referralInfoUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ReferralInfoUpdateMutation, ReferralInfoUpdateMutationVariables>;
export const ServiceConnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceConnect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceConnectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceConnect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceConnectMutation, ServiceConnectMutationVariables>;
export const ServiceCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceCreateMutation, ServiceCreateMutationVariables>;
export const ServiceDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ServiceDeleteMutation, ServiceDeleteMutationVariables>;
export const ServiceDisconnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceDisconnect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDisconnect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceDisconnectMutation, ServiceDisconnectMutationVariables>;
export const ServiceDomainCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceDomainCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceDomainCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDomainCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"edgeId"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"targetPort"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceDomainCreateMutation, ServiceDomainCreateMutationVariables>;
export const ServiceDomainDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceDomainDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDomainDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ServiceDomainDeleteMutation, ServiceDomainDeleteMutationVariables>;
export const ServiceDomainUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceDomainUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceDomainUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDomainUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ServiceDomainUpdateMutation, ServiceDomainUpdateMutationVariables>;
export const ServiceFeatureFlagAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceFeatureFlagAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceFeatureFlagToggleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceFeatureFlagAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ServiceFeatureFlagAddMutation, ServiceFeatureFlagAddMutationVariables>;
export const ServiceFeatureFlagRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceFeatureFlagRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceFeatureFlagToggleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceFeatureFlagRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ServiceFeatureFlagRemoveMutation, ServiceFeatureFlagRemoveMutationVariables>;
export const ServiceInstanceDeployDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceInstanceDeploy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latestCommit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceDeploy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commitSha"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"latestCommit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latestCommit"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceDeployMutation, ServiceInstanceDeployMutationVariables>;
export const ServiceInstanceDeployV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceInstanceDeployV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceDeployV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commitSha"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceDeployV2Mutation, ServiceInstanceDeployV2MutationVariables>;
export const ServiceInstanceLimitsUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceInstanceLimitsUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceInstanceLimitsUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceLimitsUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceLimitsUpdateMutation, ServiceInstanceLimitsUpdateMutationVariables>;
export const ServiceInstanceRedeployDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceInstanceRedeploy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceRedeploy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceRedeployMutation, ServiceInstanceRedeployMutationVariables>;
export const ServiceInstanceUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceInstanceUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceInstanceUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceUpdateMutation, ServiceInstanceUpdateMutationVariables>;
export const ServiceRemoveUpstreamUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceRemoveUpstreamUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceRemoveUpstreamUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceRemoveUpstreamUrlMutation, ServiceRemoveUpstreamUrlMutationVariables>;
export const ServiceUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"serviceUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceUpdateMutation, ServiceUpdateMutationVariables>;
export const SessionDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sessionDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SessionDeleteMutation, SessionDeleteMutationVariables>;
export const SharedVariableConfigureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sharedVariableConfigure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SharedVariableConfigureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sharedVariableConfigure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isSealed"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"references"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SharedVariableConfigureMutation, SharedVariableConfigureMutationVariables>;
export const TcpProxyDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"tcpProxyDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tcpProxyDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<TcpProxyDeleteMutation, TcpProxyDeleteMutationVariables>;
export const TemplateCloneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templateClone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCloneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateClone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjects"}},{"kind":"Field","name":{"kind":"Name","value":"canvasConfig"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"communityThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"demoProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isV2Template"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projects"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"serializedConfig"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayout"}}]}}]}}]} as unknown as DocumentNode<TemplateCloneMutation, TemplateCloneMutationVariables>;
export const TemplateDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templateDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateDeleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<TemplateDeleteMutation, TemplateDeleteMutationVariables>;
export const TemplateDeployV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templateDeployV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateDeployV2Input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateDeployV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"workflowId"}}]}}]}}]} as unknown as DocumentNode<TemplateDeployV2Mutation, TemplateDeployV2MutationVariables>;
export const TemplateGenerateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templateGenerate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateGenerateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateGenerate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjects"}},{"kind":"Field","name":{"kind":"Name","value":"canvasConfig"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"communityThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"demoProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isV2Template"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projects"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"serializedConfig"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayout"}}]}}]}}]} as unknown as DocumentNode<TemplateGenerateMutation, TemplateGenerateMutationVariables>;
export const TemplatePublishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templatePublish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePublishInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatePublish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjects"}},{"kind":"Field","name":{"kind":"Name","value":"canvasConfig"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"communityThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"demoProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isV2Template"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projects"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"serializedConfig"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayout"}}]}}]}}]} as unknown as DocumentNode<TemplatePublishMutation, TemplatePublishMutationVariables>;
export const TemplateServiceSourceEjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templateServiceSourceEject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateServiceSourceEjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateServiceSourceEject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<TemplateServiceSourceEjectMutation, TemplateServiceSourceEjectMutationVariables>;
export const TemplateUnpublishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"templateUnpublish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateUnpublish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<TemplateUnpublishMutation, TemplateUnpublishMutationVariables>;
export const TrustedDomainCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"trustedDomainCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceTrustedDomainCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trustedDomainCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<TrustedDomainCreateMutation, TrustedDomainCreateMutationVariables>;
export const TrustedDomainDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"trustedDomainDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trustedDomainDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<TrustedDomainDeleteMutation, TrustedDomainDeleteMutationVariables>;
export const TwoFactorInfoCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"twoFactorInfoCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TwoFactorInfoCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twoFactorInfoCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"recoveryCodes"}}]}}]}}]} as unknown as DocumentNode<TwoFactorInfoCreateMutation, TwoFactorInfoCreateMutationVariables>;
export const TwoFactorInfoDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"twoFactorInfoDelete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twoFactorInfoDelete"}}]}}]} as unknown as DocumentNode<TwoFactorInfoDeleteMutation, TwoFactorInfoDeleteMutationVariables>;
export const TwoFactorInfoSecretDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"twoFactorInfoSecret"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twoFactorInfoSecret"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]} as unknown as DocumentNode<TwoFactorInfoSecretMutation, TwoFactorInfoSecretMutationVariables>;
export const TwoFactorInfoValidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"twoFactorInfoValidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TwoFactorInfoValidateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twoFactorInfoValidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<TwoFactorInfoValidateMutation, TwoFactorInfoValidateMutationVariables>;
export const UpsertSlackChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertSlackChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertSlackChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}]}]}}]} as unknown as DocumentNode<UpsertSlackChannelMutation, UpsertSlackChannelMutationVariables>;
export const UsageLimitRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"usageLimitRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsageLimitRemoveInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usageLimitRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UsageLimitRemoveMutation, UsageLimitRemoveMutationVariables>;
export const UsageLimitSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"usageLimitSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsageLimitSetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usageLimitSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UsageLimitSetMutation, UsageLimitSetMutationVariables>;
export const UserBetaLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBetaLeave"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBetaLeave"}}]}}]} as unknown as DocumentNode<UserBetaLeaveMutation, UserBetaLeaveMutationVariables>;
export const UserDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userDelete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDelete"}}]}}]} as unknown as DocumentNode<UserDeleteMutation, UserDeleteMutationVariables>;
export const UserDiscordDisconnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userDiscordDisconnect"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDiscordDisconnect"}}]}}]} as unknown as DocumentNode<UserDiscordDisconnectMutation, UserDiscordDisconnectMutationVariables>;
export const UserFlagsRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userFlagsRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFlagsRemoveInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFlagsRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UserFlagsRemoveMutation, UserFlagsRemoveMutationVariables>;
export const UserFlagsSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userFlagsSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFlagsSetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFlagsSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UserFlagsSetMutation, UserFlagsSetMutationVariables>;
export const UserProfileUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userProfileUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfileUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfileUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UserProfileUpdateMutation, UserProfileUpdateMutationVariables>;
export const UserTermsUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userTermsUpdate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userTermsUpdate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"agreedFairUse"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"banReason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"flags"}},{"kind":"Field","name":{"kind":"Name","value":"has2FA"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isConductor"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"registrationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"riskLevel"}},{"kind":"Field","name":{"kind":"Name","value":"termsAgreedOn"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserTermsUpdateMutation, UserTermsUpdateMutationVariables>;
export const VariableCollectionUpsertDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"variableCollectionUpsert"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VariableCollectionUpsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variableCollectionUpsert"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<VariableCollectionUpsertMutation, VariableCollectionUpsertMutationVariables>;
export const VariableDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"variableDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VariableDeleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variableDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<VariableDeleteMutation, VariableDeleteMutationVariables>;
export const VariableUpsertDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"variableUpsert"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VariableUpsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variableUpsert"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<VariableUpsertMutation, VariableUpsertMutationVariables>;
export const VolumeCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VolumeCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<VolumeCreateMutation, VolumeCreateMutationVariables>;
export const VolumeDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}}}]}]}}]} as unknown as DocumentNode<VolumeDeleteMutation, VolumeDeleteMutationVariables>;
export const VolumeInstanceBackupCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeInstanceBackupCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"workflowId"}}]}}]}}]} as unknown as DocumentNode<VolumeInstanceBackupCreateMutation, VolumeInstanceBackupCreateMutationVariables>;
export const VolumeInstanceBackupDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeInstanceBackupDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceBackupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceBackupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceBackupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"workflowId"}}]}}]}}]} as unknown as DocumentNode<VolumeInstanceBackupDeleteMutation, VolumeInstanceBackupDeleteMutationVariables>;
export const VolumeInstanceBackupLockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeInstanceBackupLock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceBackupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupLock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceBackupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceBackupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}]}]}}]} as unknown as DocumentNode<VolumeInstanceBackupLockMutation, VolumeInstanceBackupLockMutationVariables>;
export const VolumeInstanceBackupRestoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeInstanceBackupRestore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceBackupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupRestore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceBackupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceBackupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"workflowId"}}]}}]}}]} as unknown as DocumentNode<VolumeInstanceBackupRestoreMutation, VolumeInstanceBackupRestoreMutationVariables>;
export const VolumeInstanceBackupScheduleUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeInstanceBackupScheduleUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kinds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VolumeInstanceBackupScheduleKind"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupScheduleUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"kinds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kinds"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}]}]}}]} as unknown as DocumentNode<VolumeInstanceBackupScheduleUpdateMutation, VolumeInstanceBackupScheduleUpdateMutationVariables>;
export const VolumeInstanceUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeInstanceUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VolumeInstanceUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}}}]}]}}]} as unknown as DocumentNode<VolumeInstanceUpdateMutation, VolumeInstanceUpdateMutationVariables>;
export const VolumeUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"volumeUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VolumeUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<VolumeUpdateMutation, VolumeUpdateMutationVariables>;
export const WebhookCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"webhookCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"filters"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastStatus"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<WebhookCreateMutation, WebhookCreateMutationVariables>;
export const WebhookDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"webhookDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<WebhookDeleteMutation, WebhookDeleteMutationVariables>;
export const WebhookUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"webhookUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"filters"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastStatus"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<WebhookUpdateMutation, WebhookUpdateMutationVariables>;
export const WorkspaceDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<WorkspaceDeleteMutation, WorkspaceDeleteMutationVariables>;
export const WorkspaceInviteCodeCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceInviteCodeCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceInviteCodeCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceInviteCodeCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}]}]}}]} as unknown as DocumentNode<WorkspaceInviteCodeCreateMutation, WorkspaceInviteCodeCreateMutationVariables>;
export const WorkspaceInviteCodeUseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceInviteCodeUse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceInviteCodeUse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"adoptionLevel"}},{"kind":"Field","name":{"kind":"Name","value":"allowDeprecatedRegions"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"plan"}},{"kind":"Field","name":{"kind":"Name","value":"preferredRegion"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionModel"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WorkspaceInviteCodeUseMutation, WorkspaceInviteCodeUseMutationVariables>;
export const WorkspaceLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceLeave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<WorkspaceLeaveMutation, WorkspaceLeaveMutationVariables>;
export const WorkspacePermissionChangeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspacePermissionChange"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspacePermissionChangeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspacePermissionChange"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<WorkspacePermissionChangeMutation, WorkspacePermissionChangeMutationVariables>;
export const WorkspaceUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<WorkspaceUpdateMutation, WorkspaceUpdateMutationVariables>;
export const WorkspaceUpsertSlackChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceUpsertSlackChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceUpsertSlackChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<WorkspaceUpsertSlackChannelMutation, WorkspaceUpsertSlackChannelMutationVariables>;
export const WorkspaceUserInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceUserInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceUserInviteInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceUserInvite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}]}]}}]} as unknown as DocumentNode<WorkspaceUserInviteMutation, WorkspaceUserInviteMutationVariables>;
export const WorkspaceUserRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"workspaceUserRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceUserRemoveInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceUserRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}]}]}}]} as unknown as DocumentNode<WorkspaceUserRemoveMutation, WorkspaceUserRemoveMutationVariables>;
export const AdminVolumeInstancesForVolumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"adminVolumeInstancesForVolume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminVolumeInstancesForVolume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentSizeMB"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mountPath"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"sizeMB"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"volumeId"}}]}}]}}]} as unknown as DocumentNode<AdminVolumeInstancesForVolumeQuery, AdminVolumeInstancesForVolumeQueryVariables>;
export const AllPlatformFeatureFlagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPlatformFeatureFlags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPlatformFeatureFlags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"rolloutPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AllPlatformFeatureFlagsQuery, AllPlatformFeatureFlagsQueryVariables>;
export const ApiTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apiTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apiTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ApiTokensQuery, ApiTokensQueryVariables>;
export const BuildLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"buildLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buildLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deploymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<BuildLogsQuery, BuildLogsQueryVariables>;
export const ChangelogBlockImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"changelogBlockImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changelogBlockImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ChangelogBlockImageQuery, ChangelogBlockImageQueryVariables>;
export const CustomDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"edgeId"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"targetPort"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CustomDomainQuery, CustomDomainQueryVariables>;
export const CustomDomainAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customDomainAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customDomainAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"domain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CustomDomainAvailableQuery, CustomDomainAvailableQueryVariables>;
export const DeploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}},{"kind":"Field","name":{"kind":"Name","value":"canRollback"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentStopped"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"snapshotId"}},{"kind":"Field","name":{"kind":"Name","value":"staticUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"suggestAddServiceDomain"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<DeploymentQuery, DeploymentQueryVariables>;
export const DeploymentEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deploymentEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"step"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"payload"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<DeploymentEventsQuery, DeploymentEventsQueryVariables>;
export const DeploymentInstanceExecutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deploymentInstanceExecutions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentInstanceExecutionListInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentInstanceExecutions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeploymentInstanceExecutionsQuery, DeploymentInstanceExecutionsQueryVariables>;
export const DeploymentLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deploymentLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deploymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<DeploymentLogsQuery, DeploymentLogsQueryVariables>;
export const DeploymentSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deploymentSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentSnapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deploymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]} as unknown as DocumentNode<DeploymentSnapshotQuery, DeploymentSnapshotQueryVariables>;
export const DeploymentTriggersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deploymentTriggers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentTriggers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeploymentTriggersQuery, DeploymentTriggersQueryVariables>;
export const DeploymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deployments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeploymentListInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"staticUrl"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}},{"kind":"Field","name":{"kind":"Name","value":"canRollback"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<DeploymentsQuery, DeploymentsQueryVariables>;
export const DomainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"domains"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domains"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DomainsQuery, DomainsQueryVariables>;
export const EgressGatewaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"egressGateways"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"egressGateways"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"ipv4"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}}]}}]} as unknown as DocumentNode<EgressGatewaysQuery, EgressGatewaysQueryVariables>;
export const EnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"environment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEphemeral"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"unmergedChangesCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"volumeInstances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"volumeId"}},{"kind":"Field","name":{"kind":"Name","value":"mountPath"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentSizeMB"}},{"kind":"Field","name":{"kind":"Name","value":"sizeMB"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EnvironmentQuery, EnvironmentQueryVariables>;
export const EnvironmentLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"environmentLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"anchorDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beforeDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beforeLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"afterDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"afterLimit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"anchorDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"anchorDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"beforeDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beforeDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"beforeLimit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beforeLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<EnvironmentLogsQuery, EnvironmentLogsQueryVariables>;
export const EnvironmentPatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"environmentPatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentPatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"appliedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastAppliedError"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<EnvironmentPatchQuery, EnvironmentPatchQueryVariables>;
export const EnvironmentPatchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"environmentPatches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentPatches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<EnvironmentPatchesQuery, EnvironmentPatchesQueryVariables>;
export const EnvironmentStagedChangesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"environmentStagedChanges"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environmentStagedChanges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"appliedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastAppliedError"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<EnvironmentStagedChangesQuery, EnvironmentStagedChangesQueryVariables>;
export const EnvironmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"environments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isEphemeral"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"isEphemeral"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isEphemeral"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"isEphemeral"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"unmergedChangesCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<EnvironmentsQuery, EnvironmentsQueryVariables>;
export const EstimatedUsageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"estimatedUsage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"measurements"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetricMeasurement"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"estimatedUsage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"measurements"},"value":{"kind":"Variable","name":{"kind":"Name","value":"measurements"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"estimatedValue"}},{"kind":"Field","name":{"kind":"Name","value":"measurement"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<EstimatedUsageQuery, EstimatedUsageQueryVariables>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const ExternalWorkspacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"externalWorkspaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalWorkspaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"allowDeprecatedRegions"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"customerState"}},{"kind":"Field","name":{"kind":"Name","value":"hasBAA"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isTrialing"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"plan"}},{"kind":"Field","name":{"kind":"Name","value":"preferredRegion"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]} as unknown as DocumentNode<ExternalWorkspacesQuery, ExternalWorkspacesQueryVariables>;
export const FunctionRuntimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"functionRuntime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FunctionRuntimeName"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionRuntime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FunctionRuntimeQuery, FunctionRuntimeQueryVariables>;
export const FunctionRuntimesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"functionRuntimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"functionRuntimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FunctionRuntimesQuery, FunctionRuntimesQueryVariables>;
export const GitHubRepoAccessAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"gitHubRepoAccessAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullRepoName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gitHubRepoAccessAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullRepoName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullRepoName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasAccess"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}}]}}]}}]} as unknown as DocumentNode<GitHubRepoAccessAvailableQuery, GitHubRepoAccessAvailableQueryVariables>;
export const GithubIsRepoNameAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubIsRepoNameAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullRepoName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubIsRepoNameAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullRepoName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullRepoName"}}}]}]}}]} as unknown as DocumentNode<GithubIsRepoNameAvailableQuery, GithubIsRepoNameAvailableQueryVariables>;
export const GithubRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullRepoName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullRepoName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullRepoName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBranch"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GithubRepoQuery, GithubRepoQueryVariables>;
export const GithubRepoBranchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubRepoBranches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubRepoBranches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"repo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GithubRepoBranchesQuery, GithubRepoBranchesQueryVariables>;
export const GithubReposDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubRepos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubRepos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBranch"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GithubReposQuery, GithubReposQueryVariables>;
export const GithubWritableScopesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubWritableScopes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubWritableScopes"}}]}}]} as unknown as DocumentNode<GithubWritableScopesQuery, GithubWritableScopesQueryVariables>;
export const HerokuAppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"herokuApps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"herokuApps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<HerokuAppsQuery, HerokuAppsQueryVariables>;
export const HttpLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"httpLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"anchorDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beforeDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beforeLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"httpLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"afterDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"afterLimit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"anchorDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"anchorDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"beforeDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beforeDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"beforeLimit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beforeLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"deploymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deploymentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"clientUa"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentId"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentInstanceId"}},{"kind":"Field","name":{"kind":"Name","value":"downstreamProto"}},{"kind":"Field","name":{"kind":"Name","value":"edgeRegion"}},{"kind":"Field","name":{"kind":"Name","value":"host"}},{"kind":"Field","name":{"kind":"Name","value":"httpStatus"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"responseDetails"}},{"kind":"Field","name":{"kind":"Name","value":"rxBytes"}},{"kind":"Field","name":{"kind":"Name","value":"srcIp"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"totalDuration"}},{"kind":"Field","name":{"kind":"Name","value":"txBytes"}},{"kind":"Field","name":{"kind":"Name","value":"upstreamAddress"}},{"kind":"Field","name":{"kind":"Name","value":"upstreamProto"}},{"kind":"Field","name":{"kind":"Name","value":"upstreamRqDuration"}}]}}]}}]} as unknown as DocumentNode<HttpLogsQuery, HttpLogsQueryVariables>;
export const IntegrationAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"integrationAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrationAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provider"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]} as unknown as DocumentNode<IntegrationAuthQuery, IntegrationAuthQueryVariables>;
export const IntegrationAuthsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"integrationAuths"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrationAuths"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<IntegrationAuthsQuery, IntegrationAuthsQueryVariables>;
export const IntegrationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"integrations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<IntegrationsQuery, IntegrationsQueryVariables>;
export const InviteCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"inviteCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<InviteCodeQuery, InviteCodeQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"agreedFairUse"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"banReason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"flags"}},{"kind":"Field","name":{"kind":"Name","value":"has2FA"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isConductor"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"registrationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"riskLevel"}},{"kind":"Field","name":{"kind":"Name","value":"termsAgreedOn"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"preferredRegion"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionModel"}},{"kind":"Field","name":{"kind":"Name","value":"supportTierOverride"}},{"kind":"Field","name":{"kind":"Name","value":"banReason"}},{"kind":"Field","name":{"kind":"Name","value":"discordRole"}},{"kind":"Field","name":{"kind":"Name","value":"slackChannelId"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const MetricsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"metrics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"averagingWindowSeconds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetricTag"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"measurements"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetricMeasurement"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sampleRateSeconds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceExternalId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metrics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"averagingWindowSeconds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"averagingWindowSeconds"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"groupBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"measurements"},"value":{"kind":"Variable","name":{"kind":"Name","value":"measurements"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sampleRateSeconds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sampleRateSeconds"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceExternalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceExternalId"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"measurement"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentId"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentInstanceId"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"volumeId"}},{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"ts"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<MetricsQuery, MetricsQueryVariables>;
export const NodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"node"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<NodeQuery, NodeQueryVariables>;
export const NodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"nodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<NodesQuery, NodesQueryVariables>;
export const NotificationDeliveriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"notificationDeliveries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationDeliveryFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationDeliveries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"notificationInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"resolvedAt"}},{"kind":"Field","name":{"kind":"Name","value":"resourceId"}},{"kind":"Field","name":{"kind":"Name","value":"resourceType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"volumeId"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<NotificationDeliveriesQuery, NotificationDeliveriesQueryVariables>;
export const ObservabilityDashboardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"observabilityDashboards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observabilityDashboards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ObservabilityDashboardsQuery, ObservabilityDashboardsQueryVariables>;
export const PasskeysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"passkeys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passkeys"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<PasskeysQuery, PasskeysQueryVariables>;
export const PlatformStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"platformStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"isStable"}}]}}]}}]} as unknown as DocumentNode<PlatformStatusQuery, PlatformStatusQueryVariables>;
export const PreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"preferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buildFailedEmail"}},{"kind":"Field","name":{"kind":"Name","value":"changelogEmail"}},{"kind":"Field","name":{"kind":"Name","value":"communityEmail"}},{"kind":"Field","name":{"kind":"Name","value":"deployCrashedEmail"}},{"kind":"Field","name":{"kind":"Name","value":"ephemeralEnvironmentEmail"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"subprocessorUpdatesEmail"}},{"kind":"Field","name":{"kind":"Name","value":"usageEmail"}}]}}]}}]} as unknown as DocumentNode<PreferencesQuery, PreferencesQueryVariables>;
export const PrivateNetworkEndpointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"privateNetworkEndpoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privateNetworkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworkEndpoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"privateNetworkId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privateNetworkId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsName"}},{"kind":"Field","name":{"kind":"Name","value":"privateIps"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<PrivateNetworkEndpointQuery, PrivateNetworkEndpointQueryVariables>;
export const PrivateNetworkEndpointNameAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"privateNetworkEndpointNameAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prefix"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privateNetworkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworkEndpointNameAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"prefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"privateNetworkId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privateNetworkId"}}}]}]}}]} as unknown as DocumentNode<PrivateNetworkEndpointNameAvailableQuery, PrivateNetworkEndpointNameAvailableQueryVariables>;
export const PrivateNetworksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"privateNetworks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateNetworks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsName"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<PrivateNetworksQuery, PrivateNetworksQueryVariables>;
export const ProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"project"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironmentId"}},{"kind":"Field","name":{"kind":"Name","value":"botPrEnvironments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"isTempProject"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"prDeploys"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionPlanLimit"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionType"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProjectQuery, ProjectQueryVariables>;
export const ProjectInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InviteCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isExpired"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectInvitationQuery, ProjectInvitationQueryVariables>;
export const ProjectInvitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectInvitations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInvitations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isExpired"}}]}}]}}]} as unknown as DocumentNode<ProjectInvitationsQuery, ProjectInvitationsQueryVariables>;
export const ProjectInviteCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectInviteCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectRole"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInviteCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<ProjectInviteCodeQuery, ProjectInviteCodeQueryVariables>;
export const ProjectMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<ProjectMembersQuery, ProjectMembersQueryVariables>;
export const ProjectResourceAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectResourceAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectResourceAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ProjectResourceAccessQuery, ProjectResourceAccessQueryVariables>;
export const ProjectTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayToken"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<ProjectTokenQuery, ProjectTokenQueryVariables>;
export const ProjectTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ProjectTokensQuery, ProjectTokensQueryVariables>;
export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"isTempProject"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;
export const PublicStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"publicStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeploymentsLastMonth"}},{"kind":"Field","name":{"kind":"Name","value":"totalLogsLastMonth"}},{"kind":"Field","name":{"kind":"Name","value":"totalProjects"}},{"kind":"Field","name":{"kind":"Name","value":"totalRequestsLastMonth"}},{"kind":"Field","name":{"kind":"Name","value":"totalServices"}},{"kind":"Field","name":{"kind":"Name","value":"totalUsers"}}]}}]}}]} as unknown as DocumentNode<PublicStatsQuery, PublicStatsQueryVariables>;
export const ReferralInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"referralInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referralInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ReferralInfoQuery, ReferralInfoQueryVariables>;
export const RegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"regions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"railwayMetal"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}}]}}]}}]} as unknown as DocumentNode<RegionsQuery, RegionsQueryVariables>;
export const ResourceAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"resourceAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"explicitResourceOwner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExplicitOwnerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resourceAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"explicitResourceOwner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"explicitResourceOwner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ResourceAccessQuery, ResourceAccessQueryVariables>;
export const ServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"service"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ServiceQuery, ServiceQueryVariables>;
export const ServiceDomainAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"serviceDomainAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDomainAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"domain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ServiceDomainAvailableQuery, ServiceDomainAvailableQueryVariables>;
export const ServiceInstanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"serviceInstance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buildCommand"}},{"kind":"Field","name":{"kind":"Name","value":"builder"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"cronSchedule"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"healthcheckPath"}},{"kind":"Field","name":{"kind":"Name","value":"healthcheckTimeout"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isUpdatable"}},{"kind":"Field","name":{"kind":"Name","value":"nextCronRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"nixpacksPlan"}},{"kind":"Field","name":{"kind":"Name","value":"numReplicas"}},{"kind":"Field","name":{"kind":"Name","value":"preDeployCommand"}},{"kind":"Field","name":{"kind":"Name","value":"railpackInfo"}},{"kind":"Field","name":{"kind":"Name","value":"railwayConfigFile"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"restartPolicyMaxRetries"}},{"kind":"Field","name":{"kind":"Name","value":"restartPolicyType"}},{"kind":"Field","name":{"kind":"Name","value":"rootDirectory"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceName"}},{"kind":"Field","name":{"kind":"Name","value":"sleepApplication"}},{"kind":"Field","name":{"kind":"Name","value":"startCommand"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"upstreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"watchPatterns"}}]}}]}}]} as unknown as DocumentNode<ServiceInstanceQuery, ServiceInstanceQueryVariables>;
export const ServiceInstanceIsUpdatableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"serviceInstanceIsUpdatable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceIsUpdatable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceIsUpdatableQuery, ServiceInstanceIsUpdatableQueryVariables>;
export const ServiceInstanceLimitOverrideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"serviceInstanceLimitOverride"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceLimitOverride"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceLimitOverrideQuery, ServiceInstanceLimitOverrideQueryVariables>;
export const ServiceInstanceLimitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"serviceInstanceLimits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceLimits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ServiceInstanceLimitsQuery, ServiceInstanceLimitsQueryVariables>;
export const ServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"services"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ServicesQuery, ServicesQueryVariables>;
export const SessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sessions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<SessionsQuery, SessionsQueryVariables>;
export const TcpProxiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tcpProxies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tcpProxies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"applicationPort"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proxyPort"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<TcpProxiesQuery, TcpProxiesQueryVariables>;
export const TemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"template"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"repo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjects"}},{"kind":"Field","name":{"kind":"Name","value":"canvasConfig"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"communityThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"demoProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isV2Template"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projects"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"serializedConfig"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayout"}}]}}]}}]} as unknown as DocumentNode<TemplateQuery, TemplateQueryVariables>;
export const TemplateSourceForProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"templateSourceForProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateSourceForProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjects"}},{"kind":"Field","name":{"kind":"Name","value":"canvasConfig"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"communityThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"demoProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isV2Template"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projects"}},{"kind":"Field","name":{"kind":"Name","value":"readme"}},{"kind":"Field","name":{"kind":"Name","value":"serializedConfig"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayout"}}]}}]}}]} as unknown as DocumentNode<TemplateSourceForProjectQuery, TemplateSourceForProjectQueryVariables>;
export const TemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"templates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recommended"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"recommended"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recommended"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"activeProjects"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isV2Template"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<TemplatesQuery, TemplatesQueryVariables>;
export const TemplatesCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"templatesCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesCount"}}]}}]} as unknown as DocumentNode<TemplatesCountQuery, TemplatesCountQueryVariables>;
export const TrustedDomainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"trustedDomains"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trustedDomains"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<TrustedDomainsQuery, TrustedDomainsQueryVariables>;
export const TwoFactorInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"twoFactorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twoFactorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasRecoveryCodes"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}}]}}]} as unknown as DocumentNode<TwoFactorInfoQuery, TwoFactorInfoQueryVariables>;
export const UsageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"usage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetricTag"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"measurements"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetricMeasurement"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"groupBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"measurements"},"value":{"kind":"Variable","name":{"kind":"Name","value":"measurements"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"measurement"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentId"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentInstanceId"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"volumeId"}},{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UsageQuery, UsageQueryVariables>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isTrialing"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeploys"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const VariablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"variables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unrendered"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"unrendered"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unrendered"}}}]}]}}]} as unknown as DocumentNode<VariablesQuery, VariablesQueryVariables>;
export const VariablesForServiceDeploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"variablesForServiceDeployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variablesForServiceDeployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<VariablesForServiceDeploymentQuery, VariablesForServiceDeploymentQueryVariables>;
export const VercelInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"vercelInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vercelInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<VercelInfoQuery, VercelInfoQueryVariables>;
export const VolumeInstanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"volumeInstance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentSizeMB"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mountPath"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"sizeMB"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"volumeId"}}]}}]}}]} as unknown as DocumentNode<VolumeInstanceQuery, VolumeInstanceQueryVariables>;
export const VolumeInstanceBackupListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"volumeInstanceBackupList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"referencedMB"}},{"kind":"Field","name":{"kind":"Name","value":"usedMB"}}]}}]}}]} as unknown as DocumentNode<VolumeInstanceBackupListQuery, VolumeInstanceBackupListQueryVariables>;
export const VolumeInstanceBackupScheduleListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"volumeInstanceBackupScheduleList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"volumeInstanceBackupScheduleList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"volumeInstanceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"volumeInstanceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"cron"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"retentionSeconds"}}]}}]}}]} as unknown as DocumentNode<VolumeInstanceBackupScheduleListQuery, VolumeInstanceBackupScheduleListQueryVariables>;
export const WebhooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"webhooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<WebhooksQuery, WebhooksQueryVariables>;
export const WorkflowStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"workflowStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workflowId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workflowStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workflowId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workflowId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<WorkflowStatusQuery, WorkflowStatusQueryVariables>;
export const WorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"workspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"banReason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"discordRole"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"preferredRegion"}},{"kind":"Field","name":{"kind":"Name","value":"slackChannelId"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionModel"}},{"kind":"Field","name":{"kind":"Name","value":"supportTierOverride"}}]}}]}}]} as unknown as DocumentNode<WorkspaceQuery, WorkspaceQueryVariables>;
export const WorkspaceByCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"workspaceByCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceByCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"adoptionLevel"}},{"kind":"Field","name":{"kind":"Name","value":"allowDeprecatedRegions"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"plan"}},{"kind":"Field","name":{"kind":"Name","value":"preferredRegion"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionModel"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WorkspaceByCodeQuery, WorkspaceByCodeQueryVariables>;
export const WorkspaceIdentityProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"workspaceIdentityProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceIdentityProviders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"enforcementEnabledAt"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<WorkspaceIdentityProvidersQuery, WorkspaceIdentityProvidersQueryVariables>;
export const WorkspaceTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"workspaceTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<WorkspaceTemplatesQuery, WorkspaceTemplatesQueryVariables>;