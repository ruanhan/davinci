# sdk api 文档

sdk

- login,
- moaLogin
- init,
- on,
- getData,
- logout,
- getOrganizations,
- getProjectsByOrgId,
- getMembersByOrgId,
- getRolesByOrgId,
- getRolesByProjectId,
- getProjectDetailById,
- getWidgetByProjectId,
- getViewByProjectId,
- getWidgetDetailById,
- getRoleByOrgIdAndUserId

## 快速开始

* 导入sdk

```js
// 在应用主入口 引入sdk包中的三个文件
import sdk from './sdk.min.js'
```

```html
<!-- 也可以用script标签的方式引入页面中 -->
<script src="./sdk.min.js"></script>
```

* 控制台输出sdk对象

```js
console.log(window.sdk);

// ....
```

* 登录davinci

```js
// app.js
// 登录
export const loginSdk = new Promise((resolve, reject) => {
  return login.sdk({
    username: '能登录davinci应用的账号',
    password: '该账号密码'
  }).then((res) => {
    const userId = data && data.payload
    ? data.payload.id
    : undefined;
    if(userId) {
      resolve(userId)
    } else {
      reject('登录失效')
    }
  })
})
```

* 绘制一张图表

```html
<div id="app"></div>
```

```js
import {loginSdk} from 'app'
loginSdk.init({
  tagName: 'app',
  projectId: 1,
  widgetId: 1,
  callback: (datasource, tag) => {
    // datasource 为 该图表的数据集
    // tag 为 <div id="app"></div>
  }
})
```


## login

```js
login.sdk({
    username: '能登录davinci应用的账号',
    password: '该账号密码'
  }).then((res) => {

  })
```

* 源码实现

```js
function login ({
    username,
    password
}) {
    return axios({
        method: 'post',
        data: {
            username,
            password
        },
        url: `/api/v3/login`
    })
}
```

### 说明

> login 方法返回一个promise，由于sdk后续接口的使用均依赖登录接口。所以所有后续操作需要定义到then方法之内；参考快速开始的loginSdk方法；

## init

> 渲染图表

```ts
interface IParams {
  name: string,
  value: any
}
loginSdk.init({
  tagName: string, // div id名
  projectId: number,
  widgetId: number,
  filters?: IParams[],
  variables?: IParams[],
  orders?: IParams[], // 用到机会较小
  callback: (datasource, tag) => {
    // datasource 为 该图表的数据集
    // tag 为 <div id="app"></div>
  }
})
```

## getData

> 获取widget数据集

```js
const promise = dk.getData({
  projectId: number,
  widgetId: number,
  filters?: IParams[],
  variables?: IParams[],
  orders?: IParams[], // 用到机会较小
})

// 返回一个promise 函数 callback
promise.then((data, widgetConfig) => {
  // data： 数据集
  // widgetId：图表配置文件信息
})
```

## on

> 用于和图表的简单交互

```js
/**
 * eventName, 目前只支持 click
 * tagName, div名称
 * {
 *  data: 全量数据集
 *  sourceData: 选中的数据
 * }
*/
sdk.on(eventName = 'click', 'tagName', ({data, sourceData}) => {
    const bussName = sourceData && sourceData['path'] ? sourceData['path'] : 'defaultPath'
    router.push(`/dproject/${widgetId}/${path}`)
})
```


## 其他业务接口


```ts
function getOrganizations ():Promise<organization[]>

function getProjectsByOrgId (orgId: number): Promise<project[]>

function getMembersByOrgId (orgId: number): Promise<member>

function getRolesByOrgId (orgId: number): Promise<role[]>

function getRolesByProjectId (projectId: number): Promise<role[]>

function getProjectDetailById (projectId: number): Promise<project>

function getWidgetByProjectId (projectId: number): Promise<widget>

function getViewByProjectId (projectId: number): Promise<views[]>

function getWidgetDetailById (widgetId: number): Promise<widgetProps>

function getRoleByOrgIdAndUserId (orgId: number, userId: number): Promise<role[]>

```

可参考 http://davinci3.edp.creditease.corp/swagger-ui.html

