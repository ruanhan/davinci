import { render } from 'react-dom'

/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

/**
 * 这个类作为 sdk 的init 方法 和 reload 方法的参数对象， 同时它也是 store 的基类， 每个sdkItem 都有一个 store实例，通过这个实例来管理 sdkItem的状态
 */
export interface IWidget {
  data: any
  widgetProps: any
  renderType: string
  tagName?: string
  widgetId?: number
  projectId?: number
  params?: object[]
  filters?: object[]
}

class SdkItemProps {
  constructor(options: IWidget) {
    const {
      data,
      widgetProps,
      renderType,
      tagName,
      widgetId,
      projectId,
      params,
      filters
    } = options
    this.data = data
    this.widgetProps = widgetProps
    this.renderType = renderType
    this.tagName = tagName
    this.widgetId = widgetId
    this.projectId = projectId
    this.params = params
    this.filters = filters
  }
  public tagName: string
  public data: any
  public widgetProps: any
  public renderType: string
  public widgetId: number
  public projectId: number
  public params: object[]
  public filters: object[]
}

export default SdkItemProps
