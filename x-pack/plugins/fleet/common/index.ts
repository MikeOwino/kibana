/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export {
  // Plugin id
  PLUGIN_ID,
  INTEGRATIONS_PLUGIN_ID,
  // Packages
  FLEET_APM_PACKAGE,
  FLEET_SERVER_PACKAGE,
  FLEET_SYSTEM_PACKAGE,
  FLEET_SYNTHETICS_PACKAGE,
  FLEET_ELASTIC_AGENT_PACKAGE,
  FLEET_KUBERNETES_PACKAGE,
  FLEET_CLOUD_SECURITY_POSTURE_PACKAGE,
  FLEET_CLOUD_SECURITY_POSTURE_KSPM_POLICY_TEMPLATE,
  FLEET_CLOUD_SECURITY_POSTURE_CSPM_POLICY_TEMPLATE,
  FLEET_CLOUD_SECURITY_POSTURE_CNVM_POLICY_TEMPLATE,
  FLEET_ENDPOINT_PACKAGE,
  // Saved object type
  AGENT_POLICY_SAVED_OBJECT_TYPE,
  PACKAGES_SAVED_OBJECT_TYPE,
  PACKAGE_POLICY_SAVED_OBJECT_TYPE,
  OUTPUT_SAVED_OBJECT_TYPE,
  PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE,
  ASSETS_SAVED_OBJECT_TYPE,
  MESSAGE_SIGNING_KEYS_SAVED_OBJECT_TYPE,
  UNINSTALL_TOKENS_SAVED_OBJECT_TYPE,
  // Fleet server index
  FLEET_SERVER_SERVERS_INDEX,
  FLEET_SERVER_ARTIFACTS_INDEX,
  AGENTS_INDEX,
  AGENT_POLICY_INDEX,
  AGENT_ACTIONS_INDEX,
  AGENT_ACTIONS_RESULTS_INDEX,
  // Agent constants
  AGENTS_PREFIX,
  AGENT_UPDATE_LAST_CHECKIN_INTERVAL_MS,
  agentPolicyStatuses,
  FleetServerAgentComponentStatuses,
  // Routes
  PACKAGE_POLICY_API_ROOT,
  AGENT_API_ROUTES,
  AGENT_POLICY_API_ROUTES,
  AGENTS_SETUP_API_ROUTES,
  PACKAGE_POLICY_API_ROUTES,
  EPM_API_ROUTES,
  SETUP_API_ROUTE,
  // Should probably be removed
  SO_SEARCH_LIMIT,
  // Statuses
  // Authz
  ENDPOINT_PRIVILEGES,
  // dashboards ids
  DASHBOARD_LOCATORS_IDS,
} from './constants';
export {
  // Route services
  epmRouteService,
  agentRouteService,
  agentPolicyRouteService,
  setupRouteService,
  appRoutesService,
  packagePolicyRouteService,
  fleetSetupRouteService,
  // Package policy helpers
  isValidNamespace,
  INVALID_NAMESPACE_CHARACTERS,
  // TODO Should probably not be exposed by Fleet
  decodeCloudId,
  getFileMetadataIndexName,
  getFileDataIndexName,
} from './services';

export type { FleetAuthz } from './authz';
export type {
  // Request/Response
  GetOneAgentResponse,
  GetAgentsResponse,
  GetAgentStatusResponse,
  GetOnePackagePolicyResponse,
  CreatePackagePolicyRequest,
  CreatePackagePolicyResponse,
  UpdatePackagePolicyResponse,
  DeletePackagePoliciesRequest,
  GetPackagePoliciesRequest,
  GetPackagePoliciesResponse,
  CopyAgentPolicyResponse,
  DeleteAgentPolicyRequest,
  DeleteAgentPolicyResponse,
  GetOneAgentPolicyResponse,
  CreateAgentPolicyRequest,
  CreateAgentPolicyResponse,
  GetFullAgentPolicyResponse,
  GetAgentPoliciesRequest,
  GetAgentPoliciesResponse,
  GetAgentPoliciesResponseItem,
  PostDeletePackagePoliciesResponse,
  GetPackagesResponse,
  BulkInstallPackagesResponse,
  FleetErrorResponse,
  CheckPermissionsResponse,
  PostFleetSetupResponse,
  IBulkInstallPackageHTTPError,
  BulkInstallPackageInfo,
  GetInfoResponse,
  UpgradePackagePolicyResponse,
  UpgradePackagePolicyResponseItem,
  UpgradePackagePolicyBaseResponse,
  UpgradePackagePolicyDryRunResponseItem,
  BulkGetPackagePoliciesResponse,
  BulkGetAgentPoliciesResponse,
  // Models
  Agent,
  AgentStatus,
  FleetServerAgentMetadata,
  AgentMetadata,
  NewAgentPolicy,
  FullAgentPolicy,
  FullAgentPolicyKibanaConfig,
  FullAgentPolicyInput,
  FullAgentPolicyOutput,
  FullAgentPolicyOutputPermissions,
  FullAgentPolicyInputStream,
  DryRunPackagePolicy,
  AgentPolicy,
  Installation,
  NewPackagePolicy,
  NewPackagePolicyInput,
  NewPackagePolicyInputStream,
  UpdatePackagePolicy,
  PackagePolicy,
  PackagePolicyPackage,
  Installable,
  PackagePolicyInput,
  PackagePolicyInputStream,
  PackagePolicyConfigRecord,
  PackagePolicyConfigRecordEntry,
  RegistryVarsEntry,
  RegistryPackage,
  PackageListItem,
  PackageList,
  PackageInfo,
  Output,
  NewOutput,
  PackageAssetReference,
  KibanaAssetReference,
  KibanaSavedObjectType,
  EsAssetReference,
  AssetsGroupedByServiceByType,
  KibanaAssetTypeToParts,
  KibanaAssetParts,
  KibanaAssetType,
  DocAssetType,
  AssetParts,
  RegistryElasticsearch,
  ElasticsearchAssetParts,
  ElasticsearchAssetTypeToParts,
  AssetReference,
  ListWithKuery,
  ListResult,
  DefaultPackagesInstallationError,
  EpmPackageAdditions,
  ArchivePackage,
  InstallResult,
  PackageSpecManifest,
  PackageSpecCategory,
  PackageSpecConditions,
  PackageSpecIcon,
  PackageSpecScreenshot,
  RegistryPolicyTemplate,
  RegistrySearchResult,
  RegistryInput,
  RegistryImage,
  RegistryDataStream,
  RegistryDataStreamPrivileges,
  RegistryStream,
  RegistryInputGroup,
  BundledPackage,
  InstallablePackage,
  InstallStatusExcluded,
  InstalledRegistry,
  Installing,
  NotInstalled,
  InstallFailed,
  // Fleet server models
  FleetServerAgent,
  FleetServerAgentComponentStatus,
} from './types';

export { ElasticsearchAssetType } from './types';
