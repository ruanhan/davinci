import React from 'react'
import ReactDOM from 'react-dom'
import SdkItem, {
  createStore,
  connect,
  ColorContext,
  themeReducer
} from '../core'
import SdkItemProps from '../core/store/props'
export const renderType = 'rerender'
import request, {
  removeToken,
  setToken,
  getToken,
  setTokenExpired
} from 'utils/request'
import {
  decodeMetricName,
  getTable
} from '../../app/containers/Widget/components/util'
import api from 'utils/api'
import ChartTypes from '../../app/containers/Widget/config/chart/ChartTypes'

export const store = createStore({}, themeReducer)

function init(options) {
  const { tagName, projectId, widgetId, callback } = options
  const MOUNT_NODE = document.getElementById(tagName)

  return getData(options).then((widget) => {
    const { data, widgetConfig, params, filters } = widget
    const sdkItemProps = new SdkItemProps({
      tagName,
      widgetProps: widgetConfig,
      renderType,
      data,
      params,
      filters,
      projectId,
      widgetId
    })
    if (typeof callback === 'function') {
      callback(data, MOUNT_NODE)
    }
    store.dispatch({
      type: 'INITAPP',
      payload: {
        ...sdkItemProps
      }
    })
    const mapStateToProps = (state) => ({ ...state[tagName] })
    const ConnectSdkItem = connect(mapStateToProps)(SdkItem)

    if (MOUNT_NODE) {
      ReactDOM.render(
        <ColorContext.Provider value={store}>
          <ConnectSdkItem />
        </ColorContext.Provider>,
        MOUNT_NODE
      )
    }
  })
}

function on(eventName: string, tagName: string, callback) {
  if (eventName !== 'click') {
    throw new Error('invalid event')
  }
  const state = store.getState()
  const tagInstance = { ...state[tagName] }
  if (tagInstance) {
    tagInstance['callbacks'] = [callback]
  }
  store.dispatch({
    type: 'SUBMIT',
    payload: {
      tagName,
      callbacks: tagInstance['callbacks']
    }
  })
}

function login({ username, password }) {
  return request({
    method: 'post',
    data: {
      username,
      password
    },
    url: `/api/v3/login`
  })
}

/**
  "ssoToken": "string",
  "sysCode": "string",
  "token": "string",
  "userToken": "string"
 */

function moaLogin({ ssoToken, sysCode, token, userToken }) {
  return request({
    method: 'post',
    data: {
      ssoToken,
      sysCode,
      token,
      userToken
    },
    url: '/api/v3/moa/login'
  })
}

function logout() {
  try {
    removeToken()
    localStorage.removeItem('loginUser')
  } catch (err) {
    throw new Error(err)
  }
}

function getOrganizations() {
  return request(api.organizations, {
    method: 'get'
  }).then((organizations) => {
    store.dispatch({
      type: 'GET_ORGANIZATIONS',
      payload: {
        organizations
      }
    })
    return Promise.resolve(organizations)
  })
}

function getProjectsByOrgId(orgId: number) {
  return request({
    method: 'get',
    url: `${api.organizations}/${orgId}/projects`
  }).then((projects) => {
    return Promise.resolve(projects)
  })
}

function getMembersByOrgId(orgId: number) {
  return request({
    method: 'get',
    url: `${api.organizations}/${orgId}/members`
  }).then((members) => {
    return Promise.resolve(members)
  })
}

function getRolesByOrgId(orgId: number) {
  return request({
    method: 'get',
    url: `${api.organizations}/${orgId}/roles`
  }).then((roles) => {
    return Promise.resolve(roles)
  })
}

function getRolesByProjectId(projectId: number) {
  return request({
    method: 'get',
    url: `${api.projects}/${projectId}/roles`
  }).then((roles) => {
    return Promise.resolve(roles)
  })
}

function getProjectDetailById(projectId: number) {
  return request({
    method: 'get',
    url: `${api.projects}/${projectId}`
  }).then((detail) => {
    return Promise.resolve(detail)
  })
}

function getWidgetByProjectId(projectId: number) {
  return request({
    method: 'get',
    url: `${api.widget}?projectId=${projectId}`
  }).then((widgets) => {
    return Promise.resolve(widgets)
  })
}

function getViewByProjectId(projectId: number) {
  return request({
    method: 'get',
    url: `${api.view}?projectId=${projectId}`
  }).then((views) => {
    return Promise.resolve(views)
  })
}

function getWidgetDetailById(widgetId: number) {
  return request({
    method: 'get',
    url: `${api.widget}/${widgetId}`
  }).then((widgetProps) => {
    return Promise.resolve(widgetProps)
  })
}

function getRoleByOrgIdAndUserId(orgId: number, userId: number) {
  return request({
    method: 'get',
    url: `${api.roles}/getRole?orgId=${orgId}&userId=${userId}`
  }).then((role) => {
    return Promise.resolve(role)
  })
}

function getData(options) {
  const { projectId, widgetId } = options
  const getWidget = getWidgetDetailById(widgetId)
  return getWidget.then((res: any) => {
    const widget = res.payload
    const viewId = widget && widget.viewId ? widget.viewId : void 0
    let widgetConfig
    try {
      widgetConfig = JSON.parse(widget.config)
    } catch (err) {
      throw new Error(err)
    }
    const {
      cols,
      rows,
      metrics,
      secondaryMetrics,
      filters,
      color,
      label,
      size,
      xAxis,
      tip,
      orders,
      cache,
      expired
    } = widgetConfig

    let groups = cols
      .concat(rows)
      .filter((g) => g.name !== '指标名称')
      .map((g) => g.name)
    let aggregators = metrics.map((m) => ({
      column: decodeMetricName(m.name),
      func: m.agg
    }))

    if (secondaryMetrics && secondaryMetrics.length) {
      aggregators = aggregators.concat(
        secondaryMetrics.map((second) => ({
          column: decodeMetricName(second.name),
          func: second.agg
        }))
      )
    }

    if (color) {
      groups = groups.concat(color.items.map((c) => c.name))
    }
    if (label) {
      groups = groups.concat(
        label.items.filter((l) => l.type === 'category').map((l) => l.name)
      )
      aggregators = aggregators.concat(
        label.items
          .filter((l) => l.type === 'value')
          .map((l) => ({
            column: decodeMetricName(l.name),
            func: l.agg
          }))
      )
    }
    if (size) {
      aggregators = aggregators.concat(
        size.items.map((s) => ({
          column: decodeMetricName(s.name),
          func: s.agg
        }))
      )
    }
    if (xAxis) {
      aggregators = aggregators.concat(
        xAxis.items.map((x) => ({
          column: decodeMetricName(x.name),
          func: x.agg
        }))
      )
    }
    if (tip) {
      aggregators = aggregators.concat(
        tip.items.map((t) => ({
          column: decodeMetricName(t.name),
          func: t.agg
        }))
      )
    }
    let requestParamsFilters = []
    filters.forEach((item) => {
      requestParamsFilters = requestParamsFilters.concat(item.config.sqlModel)
    })

    if (options.filters && options.filters.length) {
      requestParamsFilters = requestParamsFilters.concat(options.filters)
    }
    let variables = []
    if (options.variables && options.variables.length) {
      variables = variables.concat(options.variables)
    }
    let resultOrder = [...orders]
    if (options.orders) {
      resultOrder = resultOrder.concat(options.orders)
    }

    let pagination = widgetConfig.pagination
    let noAggregators = getInitialNativeQuery(widgetConfig)

    const { mode, selectedChart, chartStyles } = widgetConfig
    if (
      mode === 'chart' &&
      selectedChart === getTable().id &&
      chartStyles.table.withPaging
    ) {
      pagination = {
        pageSize: Number(chartStyles.table.pageSize),
        ...pagination,
        pageNo: 1
      }
    }

    function getInitialNativeQuery(widgetConfig): boolean {
      const { mode, selectedChart, chartStyles } = widgetConfig
      if (mode === 'chart' && selectedChart === ChartTypes.Table) {
        return chartStyles.table.withNoAggregators
      } else {
        return false
      }
    }

    const requestParams = {
      groups,
      aggregators,
      filters: requestParamsFilters,
      params: variables,
      orders: resultOrder,
      pageNo: pagination.pageNo,
      pageSize: pagination.pageSize,
      nativeQuery: noAggregators,
      // nativeQuery: true,
      cache: false,
      expired: 300,
      flush: false
    }

    return request({
      method: 'post',
      url: `${api.view}/${viewId}/getdata`,
      data: requestParams
    }).then((res: any) => {
      const resultList =
        res.payload && res.payload.resultList ? res.payload.resultList : []
      return Promise.resolve({
        data: resultList,
        widgetConfig,
        params: variables,
        filters: requestParamsFilters
      })
    })
  })
}

export default {
  init,
  moaLogin,
  on,
  login,
  logout,
  setToken,
  getToken,
  setTokenExpired,
  getOrganizations,
  getProjectsByOrgId,
  getMembersByOrgId,
  getRolesByOrgId,
  getRolesByProjectId,
  getProjectDetailById,
  getWidgetByProjectId,
  getViewByProjectId,
  getWidgetDetailById,
  getData,
  getRoleByOrgIdAndUserId
}
