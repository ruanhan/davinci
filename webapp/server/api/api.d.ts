type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class Aggregator {
    /** column */
    column?: string;

    /** func */
    func?: string;
  }

  export class ChangePassword {
    /** oldPassword */
    oldPassword?: string;

    /** password */
    password?: string;
  }

  export class CronJobBaseInfo {
    /** config */
    config?: string;

    /** cronExpression */
    cronExpression?: string;

    /** description */
    description?: string;

    /** endDate */
    endDate?: string;

    /** jobType */
    jobType?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** startDate */
    startDate?: string;
  }

  export class CronJobUpdate {
    /** config */
    config?: string;

    /** cronExpression */
    cronExpression?: string;

    /** description */
    description?: string;

    /** endDate */
    endDate?: string;

    /** id */
    id?: number;

    /** jobType */
    jobType?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** startDate */
    startDate?: string;
  }

  export class DashboardCreate {
    /** config */
    config?: string;

    /** dashboardPortalId */
    dashboardPortalId?: number;

    /** index */
    index?: number;

    /** name */
    name?: string;

    /** parentId */
    parentId?: number;

    /** roleIds */
    roleIds?: Array<number>;

    /** type */
    type?: number;
  }

  export class DashboardDto {
    /** config */
    config?: string;

    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** dashboardPortalId */
    dashboardPortalId?: number;

    /** fullParentId */
    fullParentId?: string;

    /** id */
    id?: number;

    /** index */
    index?: number;

    /** name */
    name?: string;

    /** parentId */
    parentId?: number;

    /** roleIds */
    roleIds?: Array<number>;

    /** type */
    type?: number;

    /** updateBy */
    updateBy?: number;

    /** updateTime */
    updateTime?: string;
  }

  export class DashboardPortalCreate {
    /** avatar */
    avatar?: string;

    /** description */
    description?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** publish */
    publish?: boolean;

    /** roleIds */
    roleIds?: Array<number>;
  }

  export class DashboardPortalUpdate {
    /** avatar */
    avatar?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** publish */
    publish?: boolean;

    /** roleIds */
    roleIds?: Array<number>;
  }

  export class DavinciStatisticDurationInfo {
    /** email */
    email?: string;

    /** end_time */
    end_time?: string;

    /** org_id */
    org_id?: number;

    /** project_id */
    project_id?: number;

    /** project_name */
    project_name?: string;

    /** start_time */
    start_time?: string;

    /** sub_viz_id */
    sub_viz_id?: number;

    /** sub_viz_name */
    sub_viz_name?: string;

    /** user_id */
    user_id?: number;

    /** viz_id */
    viz_id?: number;

    /** viz_name */
    viz_name?: string;

    /** viz_type */
    viz_type?: string;
  }

  export class DavinciStatisticTerminalInfo {
    /** browser_name */
    browser_name?: string;

    /** browser_version */
    browser_version?: string;

    /** cpu_architecture */
    cpu_architecture?: string;

    /** create_time */
    create_time?: string;

    /** device_model */
    device_model?: string;

    /** device_type */
    device_type?: string;

    /** device_vendor */
    device_vendor?: string;

    /** email */
    email?: string;

    /** engine_name */
    engine_name?: string;

    /** engine_version */
    engine_version?: string;

    /** os_name */
    os_name?: string;

    /** os_version */
    os_version?: string;

    /** user_id */
    user_id?: number;
  }

  export class DavinciStatisticVisitorOperationInfo {
    /** action */
    action?: string;

    /** create_time */
    create_time?: string;

    /** email */
    email?: string;

    /** filters */
    filters?: Array<object>;

    /** groups */
    groups?: Array<object>;

    /** org_id */
    org_id?: number;

    /** project_id */
    project_id?: number;

    /** project_name */
    project_name?: string;

    /** sub_viz_id */
    sub_viz_id?: number;

    /** sub_viz_name */
    sub_viz_name?: string;

    /** user_id */
    user_id?: number;

    /** variables */
    variables?: Array<object>;

    /** viz_id */
    viz_id?: number;

    /** viz_name */
    viz_name?: string;

    /** viz_type */
    viz_type?: string;

    /** widget_id */
    widget_id?: number;

    /** widget_name */
    widget_name?: string;
  }

  export class DbBaseInfo {
    /** dbPassword */
    dbPassword?: string;

    /** dbUser */
    dbUser?: string;
  }

  export class Dict {
    /** key */
    key?: string;

    /** value */
    value?: string;
  }

  export class DisplayCopy {
    /** description */
    description?: string;

    /** name */
    name?: string;

    /** publish */
    publish?: boolean;

    /** roleIds */
    roleIds?: Array<number>;
  }

  export class DisplayInfo {
    /** avatar */
    avatar?: string;

    /** config */
    config?: string;

    /** description */
    description?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** publish */
    publish?: boolean;

    /** roleIds */
    roleIds?: Array<number>;
  }

  export class DisplaySlide {
    /** config */
    config?: string;

    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** displayId */
    displayId?: number;

    /** id */
    id?: number;

    /** index */
    index?: number;

    /** updateBy */
    updateBy?: number;

    /** updateTime */
    updateTime?: string;
  }

  export class DisplaySlideCreate {
    /** config */
    config?: string;

    /** displayId */
    displayId?: number;

    /** index */
    index?: number;

    /** roleIds */
    roleIds?: Array<number>;
  }

  export class DisplayUpdate {
    /** avatar */
    avatar?: string;

    /** config */
    config?: string;

    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** publish */
    publish?: boolean;

    /** roleIds */
    roleIds?: Array<number>;

    /** updateBy */
    updateBy?: number;

    /** updateTime */
    updateTime?: string;
  }

  export class DistinctParam {
    /** cache */
    cache?: boolean;

    /** columns */
    columns?: Array<string>;

    /** concurrencyOptimization */
    concurrencyOptimization?: boolean;

    /** concurrencyOptimizationStrategy */
    concurrencyOptimizationStrategy?: number;

    /** expired */
    expired?: number;

    /** filters */
    filters?: Array<string>;

    /** params */
    params?: Array<defs.Param>;
  }

  export class DownloadViewExecuteParam {
    /** id */
    id?: number;

    /** param */
    param?: defs.ViewExecuteParam;
  }

  export class InviteMembers {
    /** members */
    members?: Array<number>;

    /** needConfirm */
    needConfirm?: boolean;
  }

  export class MemDashboardWidgetCreate {
    /** alias */
    alias?: string;

    /** config */
    config?: string;

    /** dashboardId */
    dashboardId?: number;

    /** frequency */
    frequency?: number;

    /** height */
    height?: number;

    /** polling */
    polling?: boolean;

    /** roleIds */
    roleIds?: Array<number>;

    /** widgetId */
    widgetId?: number;

    /** width */
    width?: number;

    /** x */
    x?: number;

    /** y */
    y?: number;
  }

  export class MemDashboardWidgetDto {
    /** alias */
    alias?: string;

    /** config */
    config?: string;

    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** dashboardId */
    dashboardId?: number;

    /** frequency */
    frequency?: number;

    /** height */
    height?: number;

    /** id */
    id?: number;

    /** polling */
    polling?: boolean;

    /** roleIds */
    roleIds?: Array<number>;

    /** updateBy */
    updateBy?: number;

    /** updateTime */
    updateTime?: string;

    /** widgetId */
    widgetId?: number;

    /** width */
    width?: number;

    /** x */
    x?: number;

    /** y */
    y?: number;
  }

  export class MemDisplaySlideWidget {
    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** displaySlideId */
    displaySlideId?: number;

    /** id */
    id?: number;

    /** index */
    index?: number;

    /** name */
    name?: string;

    /** params */
    params?: string;

    /** subType */
    subType?: number;

    /** type */
    type?: number;

    /** updateBy */
    updateBy?: number;

    /** updateTime */
    updateTime?: string;

    /** widgetId */
    widgetId?: number;
  }

  export class MemDisplaySlideWidgetCreate {
    /** displaySlideId */
    displaySlideId?: number;

    /** id */
    id?: number;

    /** index */
    index?: number;

    /** name */
    name?: string;

    /** params */
    params?: string;

    /** roleIds */
    roleIds?: Array<number>;

    /** subType */
    subType?: number;

    /** type */
    type?: number;

    /** widgetId */
    widgetId?: number;
  }

  export class MemDisplaySlideWidgetDto {
    /** createBy */
    createBy?: number;

    /** createTime */
    createTime?: string;

    /** displaySlideId */
    displaySlideId?: number;

    /** id */
    id?: number;

    /** index */
    index?: number;

    /** name */
    name?: string;

    /** params */
    params?: string;

    /** roleIds */
    roleIds?: Array<number>;

    /** subType */
    subType?: number;

    /** type */
    type?: number;

    /** updateBy */
    updateBy?: number;

    /** updateTime */
    updateTime?: string;

    /** widgetId */
    widgetId?: number;
  }

  export class Order {
    /** column */
    column?: string;

    /** direction */
    direction?: string;
  }

  export class OrganizationCreate {
    /** description */
    description?: string;

    /** name */
    name?: string;
  }

  export class OrganizationPut {
    /** allowCreateProject */
    allowCreateProject?: boolean;

    /** avatar */
    avatar?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** memberPermission */
    memberPermission?: number;

    /** name */
    name?: string;
  }

  export class OrganizationTransfer {
    /** orgId */
    orgId?: number;
  }

  export class OrganzationRole {
    /** role */
    role?: number;
  }

  export class Param {
    /** name */
    name?: string;

    /** value */
    value?: string;
  }

  export class ProjectCreat {
    /** description */
    description?: string;

    /** name */
    name?: string;

    /** orgId */
    orgId?: number;

    /** pic */
    pic?: string;

    /** visibility */
    visibility?: boolean;
  }

  export class ProjectUpdate {
    /** description */
    description?: string;

    /** name */
    name?: string;

    /** visibility */
    visibility?: boolean;
  }

  export class RelRoleProjectDto {
    /** downloadPermission */
    downloadPermission?: boolean;

    /** schedulePermission */
    schedulePermission?: number;

    /** sharePermission */
    sharePermission?: boolean;

    /** sourcePermission */
    sourcePermission?: number;

    /** viewPermission */
    viewPermission?: number;

    /** vizPermission */
    vizPermission?: number;

    /** widgetPermission */
    widgetPermission?: number;
  }

  export class RelRoleViewDto {
    /** columnAuth */
    columnAuth?: string;

    /** roleId */
    roleId?: number;

    /** rowAuth */
    rowAuth?: string;

    /** viewId */
    viewId?: number;
  }

  export class ResponseEntity {
    /** body */
    body?: object;

    /** statusCode */
    statusCode?:
      | '100'
      | '101'
      | '102'
      | '103'
      | '200'
      | '201'
      | '202'
      | '203'
      | '204'
      | '205'
      | '206'
      | '207'
      | '208'
      | '226'
      | '300'
      | '301'
      | '302'
      | '303'
      | '304'
      | '305'
      | '307'
      | '308'
      | '400'
      | '401'
      | '402'
      | '403'
      | '404'
      | '405'
      | '406'
      | '407'
      | '408'
      | '409'
      | '410'
      | '411'
      | '412'
      | '413'
      | '414'
      | '415'
      | '416'
      | '417'
      | '418'
      | '419'
      | '420'
      | '421'
      | '422'
      | '423'
      | '424'
      | '426'
      | '428'
      | '429'
      | '431'
      | '451'
      | '500'
      | '501'
      | '502'
      | '503'
      | '504'
      | '505'
      | '506'
      | '507'
      | '508'
      | '509'
      | '510'
      | '511'
      | 100
      | 101
      | 102
      | 103
      | 200
      | 201
      | 202
      | 203
      | 204
      | 205
      | 206
      | 207
      | 208
      | 226
      | 300
      | 301
      | 302
      | 303
      | 304
      | 305
      | 307
      | 308
      | 400
      | 401
      | 402
      | 403
      | 404
      | 405
      | 406
      | 407
      | 408
      | 409
      | 410
      | 411
      | 412
      | 413
      | 414
      | 415
      | 416
      | 417
      | 418
      | 419
      | 420
      | 421
      | 422
      | 423
      | 424
      | 426
      | 428
      | 429
      | 431
      | 451
      | 500
      | 501
      | 502
      | 503
      | 504
      | 505
      | 506
      | 507
      | 508
      | 509
      | 510
      | 511;

    /** statusCodeValue */
    statusCodeValue?: number;
  }

  export class RoleCreate {
    /** description */
    description?: string;

    /** name */
    name?: string;

    /** orgId */
    orgId?: number;
  }

  export class RoleUpdate {
    /** description */
    description?: string;

    /** name */
    name?: string;
  }

  export class SendMail {
    /** email */
    email?: string;
  }

  export class SourceConfig {
    /** ext */
    ext?: boolean;

    /** parameters */
    parameters?: string;

    /** password */
    password?: string;

    /** properties */
    properties?: Array<defs.Dict>;

    /** url */
    url?: string;

    /** username */
    username?: string;

    /** version */
    version?: string;
  }

  export class SourceCreate {
    /** config */
    config?: defs.SourceConfig;

    /** description */
    description?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** type */
    type?: string;
  }

  export class SourceInfo {
    /** config */
    config?: defs.SourceConfig;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** type */
    type?: string;
  }

  export class SourceTest {
    /** ext */
    ext?: boolean;

    /** password */
    password?: string;

    /** properties */
    properties?: Array<defs.Dict>;

    /** url */
    url?: string;

    /** username */
    username?: string;

    /** version */
    version?: string;
  }

  export class SqlVariable {
    /** channel */
    channel?: defs.SqlVariableChannel;

    /** defaultValues */
    defaultValues?: Array<object>;

    /** name */
    name?: string;

    /** type */
    type?: string;

    /** udf */
    udf?: boolean;

    /** valueType */
    valueType?: string;
  }

  export class SqlVariableChannel {
    /** bizId */
    bizId?: number;

    /** name */
    name?: string;

    /** tenantId */
    tenantId?: number;
  }

  export class UploadMeta {
    /** mode */
    mode?: number;

    /** tableName */
    tableName?: string;
  }

  export class UserDistinctTicket {
    /** checkCode */
    checkCode?: string;

    /** password */
    password?: string;

    /** ticket */
    ticket?: string;
  }

  export class UserLogin {
    /** password */
    password?: string;

    /** username */
    username?: string;
  }

  export class UserPut {
    /** department */
    department?: string;

    /** description */
    description?: string;

    /** name */
    name?: string;
  }

  export class UserRegist {
    /** email */
    email?: string;

    /** password */
    password?: string;

    /** username */
    username?: string;
  }

  export class ViewCreate {
    /** config */
    config?: string;

    /** description */
    description?: string;

    /** model */
    model?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** roles */
    roles?: Array<defs.RelRoleViewDto>;

    /** sourceId */
    sourceId?: number;

    /** sql */
    sql?: string;

    /** variable */
    variable?: string;
  }

  export class ViewExecuteParam {
    /** aggregators */
    aggregators?: Array<defs.Aggregator>;

    /** cache */
    cache?: boolean;

    /** concurrencyOptimization */
    concurrencyOptimization?: boolean;

    /** concurrencyOptimizationStrategy */
    concurrencyOptimizationStrategy?: number;

    /** expired */
    expired?: number;

    /** filters */
    filters?: Array<string>;

    /** flush */
    flush?: boolean;

    /** groups */
    groups?: Array<string>;

    /** limit */
    limit?: number;

    /** nativeQuery */
    nativeQuery?: boolean;

    /** orders */
    orders?: Array<defs.Order>;

    /** pageNo */
    pageNo?: number;

    /** pageSize */
    pageSize?: number;

    /** params */
    params?: Array<defs.Param>;

    /** totalCount */
    totalCount?: number;
  }

  export class ViewExecuteSql {
    /** limit */
    limit?: number;

    /** pageNo */
    pageNo?: number;

    /** pageSize */
    pageSize?: number;

    /** sourceId */
    sourceId?: number;

    /** sql */
    sql?: string;

    /** variables */
    variables?: Array<defs.SqlVariable>;
  }

  export class ViewUpdate {
    /** config */
    config?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** model */
    model?: string;

    /** name */
    name?: string;

    /** roles */
    roles?: Array<defs.RelRoleViewDto>;

    /** sourceId */
    sourceId?: number;

    /** sql */
    sql?: string;

    /** variable */
    variable?: string;
  }

  export class VizVisibility {
    /** id */
    id?: number;

    /** visible */
    visible?: boolean;

    /** viz */
    viz?: string;
  }

  export class WidgetCreate {
    /** config */
    config?: string;

    /** description */
    description?: string;

    /** name */
    name?: string;

    /** projectId */
    projectId?: number;

    /** publish */
    publish?: boolean;

    /** type */
    type?: number;

    /** viewId */
    viewId?: number;
  }

  export class WidgetUpdate {
    /** config */
    config?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** publish */
    publish?: boolean;

    /** type */
    type?: number;

    /** viewId */
    viewId?: number;
  }
}

declare namespace API {
  /**
   * Check Controller
   */
  export namespace check {
    /**
     * check unique dashboard name
     * /api/v3/check/cronjob
     */
    export namespace checkCronJob {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique dashboard name
     * /api/v3/check/dashboard
     */
    export namespace checkDashboard {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** portal */
        portal: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique dashboard name
     * /api/v3/check/dashboardPortal
     */
    export namespace checkDashboardPortal {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique display name
     * /api/v3/check/display
     */
    export namespace checkDisplay {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique organization name
     * /api/v3/check/organization
     */
    export namespace checkOrganization {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique project name
     * /api/v3/check/project
     */
    export namespace checkProject {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** orgId */
        orgId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique source name
     * /api/v3/check/source
     */
    export namespace checkSource {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique username
     * /api/v3/check/user
     */
    export namespace checkUser {
      export class Params {
        /** username */
        username: string;
        /** id */
        id?: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique view name
     * /api/v3/check/view
     */
    export namespace checkView {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * check unique widget name
     * /api/v3/check/widget
     */
    export namespace checkWidget {
      export class Params {
        /** name */
        name: string;
        /** id */
        id?: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Cron Job Controller
   */
  export namespace cronjobs {
    /**
     * get jobs
     * /api/v3/cronjobs
     */
    export namespace getCronJobs {
      export class Params {
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create job
     * /api/v3/cronjobs
     */
    export namespace createCronJob {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CronJobBaseInfo,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * execute job
     * /api/v3/cronjobs/execute/{id}
     */
    export namespace executeCronJob {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * start job
     * /api/v3/cronjobs/start/{id}
     */
    export namespace startCronJob {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * stop job
     * /api/v3/cronjobs/stop/{id}
     */
    export namespace stopCronJob {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get a cronjob
     * /api/v3/cronjobs/{id}
     */
    export namespace getCronJob {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update job
     * /api/v3/cronjobs/{id}
     */
    export namespace updateCronJob {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CronJobUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete job
     * /api/v3/cronjobs/{id}
     */
    export namespace deleteCronJob {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Dashboard Controller
   */
  export namespace dashboardPortals {
    /**
     * get dashboardPortals
     * /api/v3/dashboardPortals
     */
    export namespace getDashboardPortals {
      export class Params {
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create dashboard portal
     * /api/v3/dashboardPortals
     */
    export namespace createDashboardPortal {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DashboardPortalCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get dashboard exclude roles
     * /api/v3/dashboardPortals/dashboard/{id}/exclude/roles
     */
    export namespace getDashboardExcludeRoles {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * delete dashboard widget relation
     * /api/v3/dashboardPortals/dashboards/widgets/{relationId}
     */
    export namespace deleteMemDashboardWidget {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * delete dashboard
     * /api/v3/dashboardPortals/dashboards/{dashboardId}
     */
    export namespace deleteDashboard {
      export class Params {
        /** dashboardId */
        dashboardId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * share dashboard
     * /api/v3/dashboardPortals/dashboards/{dashboardId}/share
     */
    export namespace shareDashboard {
      export class Params {
        /** dashboardId */
        dashboardId: number;
        /** username */
        username?: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update dashboard portal
     * /api/v3/dashboardPortals/{id}
     */
    export namespace updateDashboardPortal {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DashboardPortalUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete dashboard portal
     * /api/v3/dashboardPortals/{id}
     */
    export namespace deleteDashboardPortal {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get dashboards
     * /api/v3/dashboardPortals/{id}/dashboards
     */
    export namespace getDashboards {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create dashboard
     * /api/v3/dashboardPortals/{id}/dashboards
     */
    export namespace createDashboard {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DashboardCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * update dashboards
     * /api/v3/dashboardPortals/{id}/dashboards
     */
    export namespace updateDashboards {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DashboardDto>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get dashboard portal exclude roles
     * /api/v3/dashboardPortals/{id}/exclude/roles
     */
    export namespace getPortalExcludeRoles {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update dashboard widget relation
     * /api/v3/dashboardPortals/{portalId}/dashboards/widgets
     */
    export namespace updateMemDashboardWidget {
      export class Params {
        /** portalId */
        portalId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.MemDashboardWidgetDto>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get dashboard widgets
     * /api/v3/dashboardPortals/{portalId}/dashboards/{dashboardId}
     */
    export namespace getDashboardMemWidgets {
      export class Params {
        /** portalId */
        portalId: number;
        /** dashboardId */
        dashboardId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create dashboard widget relation
     * /api/v3/dashboardPortals/{portalId}/dashboards/{dashboardId}/widgets
     */
    export namespace createMemDashboardWidget {
      export class Params {
        /** portalId */
        portalId: number;
        /** dashboardId */
        dashboardId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.MemDashboardWidgetCreate>,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Display Controller
   */
  export namespace displays {
    /**
     * get displays
     * /api/v3/displays
     */
    export namespace getDisplays {
      export class Params {
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create new display
     * /api/v3/displays
     */
    export namespace createDisplay {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DisplayInfo,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * copy a display
     * /api/v3/displays/copy/{id}
     */
    export namespace copyDisplay {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DisplayCopy,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * upload subwidget bgImage
     * /api/v3/displays/slide/widget/{relationId}/bgImage
     */
    export namespace uploadSlideSubWidgetBGImage {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get display slide exclude roles
     * /api/v3/displays/slide/{id}/exclude/roles
     */
    export namespace getSlideExcludeRoles {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * upload avatar
     * /api/v3/displays/slide/{slideId}/upload/bgImage
     */
    export namespace uploadSlideBGImage {
      export class Params {
        /** slideId */
        slideId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update display slide widget
     * /api/v3/displays/slides/widgets/{relationId}
     */
    export namespace updateMemDisplaySlideWidget {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.MemDisplaySlideWidget,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete display slide widget
     * /api/v3/displays/slides/widgets/{relationId}
     */
    export namespace deleteMemDisplaySlideWidget {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * delete display slide
     * /api/v3/displays/slides/{slideId}
     */
    export namespace deleteDisplaySlide {
      export class Params {
        /** slideId */
        slideId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * upload avatar
     * /api/v3/displays/upload/coverImage
     */
    export namespace uploadAvatar {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get display slide widgets
     * /api/v3/displays/{displayId}/slides/{slideId}
     */
    export namespace getDisplaySlideWidgets {
      export class Params {
        /** displayId */
        displayId: number;
        /** slideId */
        slideId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * add display slide widgets
     * /api/v3/displays/{displayId}/slides/{slideId}/widgets
     */
    export namespace addMemDisplaySlideWidgets {
      export class Params {
        /** displayId */
        displayId: number;
        /** slideId */
        slideId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.MemDisplaySlideWidgetCreate>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * update display slide widgets
     * /api/v3/displays/{displayId}/slides/{slideId}/widgets
     */
    export namespace updateMemDisplaySlideWidgets {
      export class Params {
        /** displayId */
        displayId: number;
        /** slideId */
        slideId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.MemDisplaySlideWidgetDto>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete display slide widgets
     * /api/v3/displays/{displayId}/slides/{slideId}/widgets
     */
    export namespace deleteDisplaySlideWeight {
      export class Params {
        /** displayId */
        displayId: number;
        /** slideId */
        slideId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<number>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * update display info
     * /api/v3/displays/{id}
     */
    export namespace updateDisplay {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DisplayUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete a display
     * /api/v3/displays/{id}
     */
    export namespace deleteDisplay {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get display  exclude roles
     * /api/v3/displays/{id}/exclude/roles
     */
    export namespace getDisplayExcludeRoles {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * share display
     * /api/v3/displays/{id}/share
     */
    export namespace shareDisplay {
      export class Params {
        /** id */
        id: number;
        /** username */
        username?: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get display slides
     * /api/v3/displays/{id}/slides
     */
    export namespace getDisplaySlide {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create new display slide
     * /api/v3/displays/{id}/slides
     */
    export namespace createDisplaySlide {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DisplaySlideCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * update display slides info
     * /api/v3/displays/{id}/slides
     */
    export namespace updateDisplaySlide {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DisplaySlide>,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Download Controller
   */
  export namespace download {
    /**
     * get download record page
     * /api/v3/download/page
     */
    export namespace getDownloadRecordPage {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get download record file
     * /api/v3/download/record/file/{id}/{token}
     */
    export namespace getDownloadRecordFile {
      export class Params {
        /** id */
        id: number;
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get share download record page
     * /api/v3/download/share/page/{uuid}/{token}
     */
    export namespace getShareDownloadRecordPage {
      export class Params {
        /** uuid */
        uuid: string;
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get download record file
     * /api/v3/download/share/record/file/{id}/{uuid}/{token}
     */
    export namespace getShareDownloadRecordFile {
      export class Params {
        /** id */
        id: string;
        /** uuid */
        uuid: string;
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * submit share download
     * /api/v3/download/share/submit/{type}/{uuid}/{dataToken}
     */
    export namespace submitShareDownloadTask {
      export class Params {
        /** type */
        type: string;
        /** uuid */
        uuid: string;
        /** dataToken */
        dataToken: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DownloadViewExecuteParam>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get download record file
     * /api/v3/download/submit/{type}/{id}
     */
    export namespace submitDownloadTask {
      export class Params {
        /** type */
        type: string;
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DownloadViewExecuteParam>,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Login Controller
   */
  export namespace login {
    /**
     * Login into the server and return token
     * /api/v3/login
     */
    export namespace login {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserLogin,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * External Login
     * /api/v3/login/externalLogin
     */
    export namespace externalLogin {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get oauth2 clents
     * /api/v3/login/getOauth2Clients
     */
    export namespace getOauth2Clients {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Organization Controller
   */
  export namespace organization {
    /**
     * get organizations
     * /api/v3/organizations
     */
    export namespace getOrganizations {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create organization
     * /api/v3/organizations
     */
    export namespace createOrganization {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.OrganizationCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * member confirm invite
     * /api/v3/organizations/confirminvite/{token}
     */
    export namespace confirmInvite {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * change member role or organization
     * /api/v3/organizations/member/{relationId}
     */
    export namespace updateMemberRole {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.OrganzationRole,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete member from organization
     * /api/v3/organizations/member/{relationId}
     */
    export namespace deleteOrgMember {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get organization
     * /api/v3/organizations/{id}
     */
    export namespace getOrganization {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update organization
     * /api/v3/organizations/{id}
     */
    export namespace updateOrganization {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.OrganizationPut,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete organization
     * /api/v3/organizations/{id}
     */
    export namespace deleteOrganization {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * upload organization avatar
     * /api/v3/organizations/{id}/avatar
     */
    export namespace uploadOrgAvatar {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get roles of member in organization
     * /api/v3/organizations/{id}/member/{memberId}/roles
     */
    export namespace getMemberRole {
      export class Params {
        /** id */
        id: number;
        /** memberId */
        memberId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get organization members
     * /api/v3/organizations/{id}/members
     */
    export namespace getOrgMembers {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get organization projects
     * /api/v3/organizations/{id}/projects
     */
    export namespace getOrgProjects {
      export class Params {
        /** id */
        id: number;
        /** keyword */
        keyword?: string;
        /** pageNum */
        pageNum?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get organization roles
     * /api/v3/organizations/{id}/roles
     */
    export namespace getOrgRoles {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * invite members to join the organization
     * /api/v3/organizations/{orgId}/invite/members
     */
    export namespace batchInviteMembers {
      export class Params {
        /** orgId */
        orgId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.InviteMembers,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * invite member to join the organization
     * /api/v3/organizations/{orgId}/member/{memId}
     */
    export namespace inviteMember {
      export class Params {
        /** orgId */
        orgId: number;
        /** memId */
        memId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Project Controller
   */
  export namespace project {
    /**
     * get projects
     * /api/v3/projects
     */
    export namespace getProjects {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create project
     * /api/v3/projects
     */
    export namespace createProject {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ProjectCreat,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * favorite project
     * /api/v3/projects/favorite/{id}
     */
    export namespace favoriteProject {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get favorite projects
     * /api/v3/projects/favorites
     */
    export namespace getFavoriteProjects {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * remove favorite projects
     * /api/v3/projects/remove/favorites
     */
    export namespace removeFavoriteProjects {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<number>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * search projects by keywords
     * /api/v3/projects/search
     */
    export namespace searchProjects {
      export class Params {
        /** keywords */
        keywords?: string;
        /** pageNum */
        pageNum?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get project info
     * /api/v3/projects/{id}
     */
    export namespace getProjectInfo {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update project
     * /api/v3/projects/{id}
     */
    export namespace updateProjectBaseInfo {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ProjectUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete project
     * /api/v3/projects/{id}
     */
    export namespace deleteProject {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * remove an admin from a project
     * /api/v3/projects/{id}/admin/{relationId}
     */
    export namespace removeProjectAdmin {
      export class Params {
        /** id */
        id: number;
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get admins of project
     * /api/v3/projects/{id}/admins
     */
    export namespace getAdmins {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * add an admin for a project
     * /api/v3/projects/{id}/admins
     */
    export namespace addProjectAdmin {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<number>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get roles where proejct is located
     * /api/v3/projects/{id}/roles
     */
    export namespace getRolesOfProject {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * add project role relations
     * /api/v3/projects/{id}/roles
     */
    export namespace addRoles {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<number>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get roles where proejct is located
     * /api/v3/projects/{id}/roles/{roleId}
     */
    export namespace getRoleOfProject {
      export class Params {
        /** id */
        id: number;
        /** roleId */
        roleId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * transfer projects
     * /api/v3/projects/{id}/transfer
     */
    export namespace transferProject {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.OrganizationTransfer,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Role Controller
   */
  export namespace roles {
    /**
     * create role
     * /api/v3/roles
     */
    export namespace createRole {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.RoleCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get role
     * /api/v3/roles/getRole
     */
    export namespace getRole {
      export class Params {
        /** orgId */
        orgId: number;
        /** userId */
        userId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * delete relation between a role and a member
     * /api/v3/roles/member/{relationId}
     */
    export namespace deleteMember {
      export class Params {
        /** relationId */
        relationId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get role
     * /api/v3/roles/{id}
     */
    export namespace getRolesById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update role
     * /api/v3/roles/{id}
     */
    export namespace updateRole {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.RoleUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete role
     * /api/v3/roles/{id}
     */
    export namespace deleteRole {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get members
     * /api/v3/roles/{id}/members
     */
    export namespace getMembers {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * add relation between a role and members
     * /api/v3/roles/{id}/members
     */
    export namespace addMember {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<number>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * update role member relations
     * /api/v3/roles/{id}/members
     */
    export namespace updateMembers {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<number>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * add relation between a role and a project
     * /api/v3/roles/{id}/project/{projectId}
     */
    export namespace addProject {
      export class Params {
        /** id */
        id: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update relation between a role and a project
     * /api/v3/roles/{id}/project/{projectId}
     */
    export namespace updateProjet {
      export class Params {
        /** id */
        id: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.RelRoleProjectDto,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete relation between a role and a project
     * /api/v3/roles/{id}/project/{projectId}
     */
    export namespace deleteProject {
      export class Params {
        /** id */
        id: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get role viz permission
     * /api/v3/roles/{id}/project/{projectId}/viz/visibility
     */
    export namespace getVizVisibility {
      export class Params {
        /** id */
        id: number;
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * exclude role viz permission
     * /api/v3/roles/{id}/viz/visibility
     */
    export namespace postVizvisibility {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.VizVisibility,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Share Controller
   */
  export namespace share {
    /**
     * get share data csv
     * /api/v3/share/csv/{token}
     */
    export namespace generationShareDataCsv {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewExecuteParam,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get share dashboard
     * /api/v3/share/dashboard/{token}
     */
    export namespace getShareDashboard {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get share data
     * /api/v3/share/data/{token}
     */
    export namespace getShareData {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewExecuteParam,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get share data
     * /api/v3/share/data/{token}/distinctvalue/{viewId}
     */
    export namespace getDistinctValue {
      export class Params {
        /** token */
        token: string;
        /** viewId */
        viewId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DistinctParam,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get share display
     * /api/v3/share/display/{token}
     */
    export namespace getShareDisplay {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * share login
     * /api/v3/share/login/{token}
     */
    export namespace shareLogin {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserLogin,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get share widget
     * /api/v3/share/widget/{token}
     */
    export namespace getShareWidget {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Source Controller
   */
  export namespace sources {
    /**
     * get sources
     * /api/v3/sources
     */
    export namespace getSources {
      export class Params {
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create source
     * /api/v3/sources
     */
    export namespace createSource {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.SourceCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get jdbc datasources
     * /api/v3/sources/jdbc/datasources
     */
    export namespace getJdbcDataSources {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * release and reconnect
     * /api/v3/sources/reconnect/{id}
     */
    export namespace reconnect {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DbBaseInfo,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * test source
     * /api/v3/sources/test
     */
    export namespace testSource {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.SourceTest,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get source detail
     * /api/v3/sources/{id}
     */
    export namespace getSourceDetail {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update a source
     * /api/v3/sources/{id}
     */
    export namespace updateSource {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.SourceInfo,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete a source
     * /api/v3/sources/{id}
     */
    export namespace deleteSource {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create csv meta
     * /api/v3/sources/{id}/csvmeta
     */
    export namespace createCsvmeta {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UploadMeta,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get dbs
     * /api/v3/sources/{id}/databases
     */
    export namespace getSourceDbs {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get columns
     * /api/v3/sources/{id}/table/columns
     */
    export namespace getTableColumns {
      export class Params {
        /** id */
        id: number;
        /** dbName */
        dbName: string;
        /** tableName */
        tableName: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get tables
     * /api/v3/sources/{id}/tables
     */
    export namespace getSourceTables {
      export class Params {
        /** id */
        id: number;
        /** dbName */
        dbName: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * upload csv/excel file
     * /api/v3/sources/{id}/upload{type}
     */
    export namespace uploadData {
      export class Params {
        /** id */
        id: number;
        /** type */
        type: string;
        /** tableName */
        tableName?: string;
        /** primaryKeys */
        primaryKeys?: string;
        /** indexKeys */
        indexKeys?: string;
        /** mode */
        mode?: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Star Controller
   */
  export namespace star {
    /**
     * get my star project list
     * /api/v3/star/mystar/project
     */
    export namespace getMyStarProjects {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get project star user list
     * /api/v3/star/project/{id}
     */
    export namespace getStarUsers {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * star or unstar project
     * /api/v3/star/project/{id}
     */
    export namespace starProject {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Statistic Controller
   */
  export namespace statistic {
    /**
     * collect duration info
     * /api/v3/statistic/duration
     */
    export namespace collectDurationInfo {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DavinciStatisticDurationInfo>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * collect terminal info
     * /api/v3/statistic/terminal
     */
    export namespace collectTerminalInfo {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DavinciStatisticTerminalInfo>,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * collect visitor operation info
     * /api/v3/statistic/visitoroperation
     */
    export namespace collectVisitorOperationInfo {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.DavinciStatisticVisitorOperationInfo>,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * User Controller
   */
  export namespace users {
    /**
     * get users by keyword
     * /api/v3/users
     */
    export namespace getUsers {
      export class Params {
        /** keyword */
        keyword: string;
        /** includeSelf */
        includeSelf?: boolean;
        /** orgId */
        orgId?: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * insert user
     * /api/v3/users
     */
    export namespace regist {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserRegist,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * active user
     * /api/v3/users/active/{token}
     */
    export namespace activate {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get user profile from token
     * /api/v3/users/check/{token}
     */
    export namespace getUserFromToken {
      export class Params {
        /** token */
        token: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * forget password
     * /api/v3/users/forget/password/{type}
     */
    export namespace forgetPassword {
      export class Params {
        /** type */
        type: string;
      }

      export type Response = ObjectMap<any, object>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserDistinctTicket,
      ): Promise<ObjectMap<any, object>>;
    }

    /**
     * get user profile
     * /api/v3/users/profile/{id}
     */
    export namespace getUser {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * reset password
     * /api/v3/users/reset/password/{type}/{token}
     */
    export namespace resetPassword {
      export class Params {
        /** type */
        type: string;
        /** token */
        token: string;
      }

      export type Response = ObjectMap<any, object>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserDistinctTicket,
      ): Promise<ObjectMap<any, object>>;
    }

    /**
     * user active sendmail
     * /api/v3/users/sendmail
     */
    export namespace sendMail {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.SendMail,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * update user info
     * /api/v3/users/{id}
     */
    export namespace putUser {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserPut,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * upload avatar
     * /api/v3/users/{id}/avatar
     */
    export namespace uploadAvatar {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * change user password
     * /api/v3/users/{id}/changepassword
     */
    export namespace changeUserPassword {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ChangePassword,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * View Controller
   */
  export namespace views {
    /**
     * get views
     * /api/v3/views
     */
    export namespace getViews {
      export class Params {
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create view
     * /api/v3/views
     */
    export namespace createView {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get dac channels
     * /api/v3/views/dac/channels
     */
    export namespace getDacChannels {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get dac tenants
     * /api/v3/views/dac/{dacName}/tenants
     */
    export namespace getDacTannets {
      export class Params {
        /** dacName */
        dacName: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get dac bizs
     * /api/v3/views/dac/{dacName}/tenants/{tenantId}/bizs
     */
    export namespace getDacBizs {
      export class Params {
        /** dacName */
        dacName: string;
        /** tenantId */
        tenantId: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * executesql
     * /api/v3/views/executesql
     */
    export namespace executeSql {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewExecuteSql,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get view info
     * /api/v3/views/{id}
     */
    export namespace getView {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update view
     * /api/v3/views/{id}
     */
    export namespace updateView {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete view
     * /api/v3/views/{id}
     */
    export namespace deleteView {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * get data
     * /api/v3/views/{id}/getdata
     */
    export namespace getData {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewExecuteParam,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get distinct value
     * /api/v3/views/{id}/getdistinctvalue
     */
    export namespace getDistinctValue {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.DistinctParam,
      ): Promise<defs.ResponseEntity>;
    }
  }

  /**
   * Widget Controller
   */
  export namespace widgets {
    /**
     * get widgets
     * /api/v3/widgets
     */
    export namespace getWidgets {
      export class Params {
        /** projectId */
        projectId: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * create widget
     * /api/v3/widgets
     */
    export namespace createWidgets {
      export class Params {}

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.WidgetCreate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * get widget info
     * /api/v3/widgets/{id}
     */
    export namespace getWidgetInfo {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * update widget
     * /api/v3/widgets/{id}
     */
    export namespace updateWidget {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.WidgetUpdate,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * delete widget
     * /api/v3/widgets/{id}
     */
    export namespace deleteWidget {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * share widget
     * /api/v3/widgets/{id}/share
     */
    export namespace shareWidget {
      export class Params {
        /** id */
        id: number;
        /** username */
        username?: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResponseEntity>;
    }

    /**
     * show sql
     * /api/v3/widgets/{id}/showSql
     */
    export namespace showSql {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewExecuteParam,
      ): Promise<defs.ResponseEntity>;
    }

    /**
     * download widget
     * /api/v3/widgets/{id}/{type}
     */
    export namespace downloadWidget {
      export class Params {
        /** id */
        id: number;
        /** type */
        type: string;
      }

      export type Response = defs.ResponseEntity;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ViewExecuteParam,
      ): Promise<defs.ResponseEntity>;
    }
  }
}
