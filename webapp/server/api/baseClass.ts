export class Aggregator {
  /** column */
  column = '';

  /** func */
  func = '';
}

export class ChangePassword {
  /** oldPassword */
  oldPassword = '';

  /** password */
  password = '';
}

export class CronJobBaseInfo {
  /** config */
  config = '';

  /** cronExpression */
  cronExpression = '';

  /** description */
  description = '';

  /** endDate */
  endDate = '';

  /** jobType */
  jobType = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** startDate */
  startDate = '';
}

export class CronJobUpdate {
  /** config */
  config = '';

  /** cronExpression */
  cronExpression = '';

  /** description */
  description = '';

  /** endDate */
  endDate = '';

  /** id */
  id = undefined;

  /** jobType */
  jobType = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** startDate */
  startDate = '';
}

export class DashboardCreate {
  /** config */
  config = '';

  /** dashboardPortalId */
  dashboardPortalId = undefined;

  /** index */
  index = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** roleIds */
  roleIds = [];

  /** type */
  type = undefined;
}

export class DashboardDto {
  /** config */
  config = '';

  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** dashboardPortalId */
  dashboardPortalId = undefined;

  /** fullParentId */
  fullParentId = '';

  /** id */
  id = undefined;

  /** index */
  index = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** roleIds */
  roleIds = [];

  /** type */
  type = undefined;

  /** updateBy */
  updateBy = undefined;

  /** updateTime */
  updateTime = '';
}

export class DashboardPortalCreate {
  /** avatar */
  avatar = '';

  /** description */
  description = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** publish */
  publish = false;

  /** roleIds */
  roleIds = [];
}

export class DashboardPortalUpdate {
  /** avatar */
  avatar = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** publish */
  publish = false;

  /** roleIds */
  roleIds = [];
}

export class DavinciStatisticDurationInfo {
  /** email */
  email = '';

  /** end_time */
  end_time = '';

  /** org_id */
  org_id = undefined;

  /** project_id */
  project_id = undefined;

  /** project_name */
  project_name = '';

  /** start_time */
  start_time = '';

  /** sub_viz_id */
  sub_viz_id = undefined;

  /** sub_viz_name */
  sub_viz_name = '';

  /** user_id */
  user_id = undefined;

  /** viz_id */
  viz_id = undefined;

  /** viz_name */
  viz_name = '';

  /** viz_type */
  viz_type = '';
}

export class DavinciStatisticTerminalInfo {
  /** browser_name */
  browser_name = '';

  /** browser_version */
  browser_version = '';

  /** cpu_architecture */
  cpu_architecture = '';

  /** create_time */
  create_time = '';

  /** device_model */
  device_model = '';

  /** device_type */
  device_type = '';

  /** device_vendor */
  device_vendor = '';

  /** email */
  email = '';

  /** engine_name */
  engine_name = '';

  /** engine_version */
  engine_version = '';

  /** os_name */
  os_name = '';

  /** os_version */
  os_version = '';

  /** user_id */
  user_id = undefined;
}

export class DavinciStatisticVisitorOperationInfo {
  /** action */
  action = '';

  /** create_time */
  create_time = '';

  /** email */
  email = '';

  /** filters */
  filters = [];

  /** groups */
  groups = [];

  /** org_id */
  org_id = undefined;

  /** project_id */
  project_id = undefined;

  /** project_name */
  project_name = '';

  /** sub_viz_id */
  sub_viz_id = undefined;

  /** sub_viz_name */
  sub_viz_name = '';

  /** user_id */
  user_id = undefined;

  /** variables */
  variables = [];

  /** viz_id */
  viz_id = undefined;

  /** viz_name */
  viz_name = '';

  /** viz_type */
  viz_type = '';

  /** widget_id */
  widget_id = undefined;

  /** widget_name */
  widget_name = '';
}

export class DbBaseInfo {
  /** dbPassword */
  dbPassword = '';

  /** dbUser */
  dbUser = '';
}

export class Dict {
  /** key */
  key = '';

  /** value */
  value = '';
}

export class DisplayCopy {
  /** description */
  description = '';

  /** name */
  name = '';

  /** publish */
  publish = false;

  /** roleIds */
  roleIds = [];
}

export class DisplayInfo {
  /** avatar */
  avatar = '';

  /** config */
  config = '';

  /** description */
  description = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** publish */
  publish = false;

  /** roleIds */
  roleIds = [];
}

export class DisplaySlide {
  /** config */
  config = '';

  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** displayId */
  displayId = undefined;

  /** id */
  id = undefined;

  /** index */
  index = undefined;

  /** updateBy */
  updateBy = undefined;

  /** updateTime */
  updateTime = '';
}

export class DisplaySlideCreate {
  /** config */
  config = '';

  /** displayId */
  displayId = undefined;

  /** index */
  index = undefined;

  /** roleIds */
  roleIds = [];
}

export class DisplayUpdate {
  /** avatar */
  avatar = '';

  /** config */
  config = '';

  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** publish */
  publish = false;

  /** roleIds */
  roleIds = [];

  /** updateBy */
  updateBy = undefined;

  /** updateTime */
  updateTime = '';
}

export class DistinctParam {
  /** cache */
  cache = false;

  /** columns */
  columns = [];

  /** concurrencyOptimization */
  concurrencyOptimization = false;

  /** concurrencyOptimizationStrategy */
  concurrencyOptimizationStrategy = undefined;

  /** expired */
  expired = undefined;

  /** filters */
  filters = [];

  /** params */
  params = [];
}

export class DownloadViewExecuteParam {
  /** id */
  id = undefined;

  /** param */
  param = new ViewExecuteParam();
}

export class InviteMembers {
  /** members */
  members = [];

  /** needConfirm */
  needConfirm = false;
}

export class MemDashboardWidgetCreate {
  /** alias */
  alias = '';

  /** config */
  config = '';

  /** dashboardId */
  dashboardId = undefined;

  /** frequency */
  frequency = undefined;

  /** height */
  height = undefined;

  /** polling */
  polling = false;

  /** roleIds */
  roleIds = [];

  /** widgetId */
  widgetId = undefined;

  /** width */
  width = undefined;

  /** x */
  x = undefined;

  /** y */
  y = undefined;
}

export class MemDashboardWidgetDto {
  /** alias */
  alias = '';

  /** config */
  config = '';

  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** dashboardId */
  dashboardId = undefined;

  /** frequency */
  frequency = undefined;

  /** height */
  height = undefined;

  /** id */
  id = undefined;

  /** polling */
  polling = false;

  /** roleIds */
  roleIds = [];

  /** updateBy */
  updateBy = undefined;

  /** updateTime */
  updateTime = '';

  /** widgetId */
  widgetId = undefined;

  /** width */
  width = undefined;

  /** x */
  x = undefined;

  /** y */
  y = undefined;
}

export class MemDisplaySlideWidget {
  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** displaySlideId */
  displaySlideId = undefined;

  /** id */
  id = undefined;

  /** index */
  index = undefined;

  /** name */
  name = '';

  /** params */
  params = '';

  /** subType */
  subType = undefined;

  /** type */
  type = undefined;

  /** updateBy */
  updateBy = undefined;

  /** updateTime */
  updateTime = '';

  /** widgetId */
  widgetId = undefined;
}

export class MemDisplaySlideWidgetCreate {
  /** displaySlideId */
  displaySlideId = undefined;

  /** id */
  id = undefined;

  /** index */
  index = undefined;

  /** name */
  name = '';

  /** params */
  params = '';

  /** roleIds */
  roleIds = [];

  /** subType */
  subType = undefined;

  /** type */
  type = undefined;

  /** widgetId */
  widgetId = undefined;
}

export class MemDisplaySlideWidgetDto {
  /** createBy */
  createBy = undefined;

  /** createTime */
  createTime = '';

  /** displaySlideId */
  displaySlideId = undefined;

  /** id */
  id = undefined;

  /** index */
  index = undefined;

  /** name */
  name = '';

  /** params */
  params = '';

  /** roleIds */
  roleIds = [];

  /** subType */
  subType = undefined;

  /** type */
  type = undefined;

  /** updateBy */
  updateBy = undefined;

  /** updateTime */
  updateTime = '';

  /** widgetId */
  widgetId = undefined;
}

export class Order {
  /** column */
  column = '';

  /** direction */
  direction = '';
}

export class OrganizationCreate {
  /** description */
  description = '';

  /** name */
  name = '';
}

export class OrganizationPut {
  /** allowCreateProject */
  allowCreateProject = false;

  /** avatar */
  avatar = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** memberPermission */
  memberPermission = undefined;

  /** name */
  name = '';
}

export class OrganizationTransfer {
  /** orgId */
  orgId = undefined;
}

export class OrganzationRole {
  /** role */
  role = undefined;
}

export class Param {
  /** name */
  name = '';

  /** value */
  value = '';
}

export class ProjectCreat {
  /** description */
  description = '';

  /** name */
  name = '';

  /** orgId */
  orgId = undefined;

  /** pic */
  pic = '';

  /** visibility */
  visibility = false;
}

export class ProjectUpdate {
  /** description */
  description = '';

  /** name */
  name = '';

  /** visibility */
  visibility = false;
}

export class RelRoleProjectDto {
  /** downloadPermission */
  downloadPermission = false;

  /** schedulePermission */
  schedulePermission = undefined;

  /** sharePermission */
  sharePermission = false;

  /** sourcePermission */
  sourcePermission = undefined;

  /** viewPermission */
  viewPermission = undefined;

  /** vizPermission */
  vizPermission = undefined;

  /** widgetPermission */
  widgetPermission = undefined;
}

export class RelRoleViewDto {
  /** columnAuth */
  columnAuth = '';

  /** roleId */
  roleId = undefined;

  /** rowAuth */
  rowAuth = '';

  /** viewId */
  viewId = undefined;
}

export class ResponseEntity {
  /** body */
  body = undefined;

  /** statusCode */
  statusCode = '100';

  /** statusCodeValue */
  statusCodeValue = undefined;
}

export class RoleCreate {
  /** description */
  description = '';

  /** name */
  name = '';

  /** orgId */
  orgId = undefined;
}

export class RoleUpdate {
  /** description */
  description = '';

  /** name */
  name = '';
}

export class SendMail {
  /** email */
  email = '';
}

export class SourceConfig {
  /** ext */
  ext = false;

  /** parameters */
  parameters = '';

  /** password */
  password = '';

  /** properties */
  properties = [];

  /** url */
  url = '';

  /** username */
  username = '';

  /** version */
  version = '';
}

export class SourceCreate {
  /** config */
  config = new SourceConfig();

  /** description */
  description = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** type */
  type = '';
}

export class SourceInfo {
  /** config */
  config = new SourceConfig();

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** type */
  type = '';
}

export class SourceTest {
  /** ext */
  ext = false;

  /** password */
  password = '';

  /** properties */
  properties = [];

  /** url */
  url = '';

  /** username */
  username = '';

  /** version */
  version = '';
}

export class SqlVariable {
  /** channel */
  channel = new SqlVariableChannel();

  /** defaultValues */
  defaultValues = [];

  /** name */
  name = '';

  /** type */
  type = '';

  /** udf */
  udf = false;

  /** valueType */
  valueType = '';
}

export class SqlVariableChannel {
  /** bizId */
  bizId = undefined;

  /** name */
  name = '';

  /** tenantId */
  tenantId = undefined;
}

export class UploadMeta {
  /** mode */
  mode = undefined;

  /** tableName */
  tableName = '';
}

export class UserDistinctTicket {
  /** checkCode */
  checkCode = '';

  /** password */
  password = '';

  /** ticket */
  ticket = '';
}

export class UserLogin {
  /** password */
  password = '';

  /** username */
  username = '';
}

export class UserPut {
  /** department */
  department = '';

  /** description */
  description = '';

  /** name */
  name = '';
}

export class UserRegist {
  /** email */
  email = '';

  /** password */
  password = '';

  /** username */
  username = '';
}

export class ViewCreate {
  /** config */
  config = '';

  /** description */
  description = '';

  /** model */
  model = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** roles */
  roles = [];

  /** sourceId */
  sourceId = undefined;

  /** sql */
  sql = '';

  /** variable */
  variable = '';
}

export class ViewExecuteParam {
  /** aggregators */
  aggregators = [];

  /** cache */
  cache = false;

  /** concurrencyOptimization */
  concurrencyOptimization = false;

  /** concurrencyOptimizationStrategy */
  concurrencyOptimizationStrategy = undefined;

  /** expired */
  expired = undefined;

  /** filters */
  filters = [];

  /** flush */
  flush = false;

  /** groups */
  groups = [];

  /** limit */
  limit = undefined;

  /** nativeQuery */
  nativeQuery = false;

  /** orders */
  orders = [];

  /** pageNo */
  pageNo = undefined;

  /** pageSize */
  pageSize = undefined;

  /** params */
  params = [];

  /** totalCount */
  totalCount = undefined;
}

export class ViewExecuteSql {
  /** limit */
  limit = undefined;

  /** pageNo */
  pageNo = undefined;

  /** pageSize */
  pageSize = undefined;

  /** sourceId */
  sourceId = undefined;

  /** sql */
  sql = '';

  /** variables */
  variables = [];
}

export class ViewUpdate {
  /** config */
  config = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** model */
  model = '';

  /** name */
  name = '';

  /** roles */
  roles = [];

  /** sourceId */
  sourceId = undefined;

  /** sql */
  sql = '';

  /** variable */
  variable = '';
}

export class VizVisibility {
  /** id */
  id = undefined;

  /** visible */
  visible = false;

  /** viz */
  viz = '';
}

export class WidgetCreate {
  /** config */
  config = '';

  /** description */
  description = '';

  /** name */
  name = '';

  /** projectId */
  projectId = undefined;

  /** publish */
  publish = false;

  /** type */
  type = undefined;

  /** viewId */
  viewId = undefined;
}

export class WidgetUpdate {
  /** config */
  config = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** publish */
  publish = false;

  /** type */
  type = undefined;

  /** viewId */
  viewId = undefined;
}
