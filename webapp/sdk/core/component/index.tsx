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

import React from 'react'
import Widget, { IWidgetConfig, IPaginationParams, RenderType } from 'app/containers/Widget/components/Widget'

import {store, sdk} from '../../api/index'
import { IWidget } from '../store/props'
interface ISdkItemProps {
    data?: any
    instance?: any
    // onClickChart: (payload?: any) => void
}



class SdkItem extends React.Component<ISdkItemProps> {
    public constructor (props) {
        super(props)
    }
    public trigger = (ps) => {
        try {
            const selectData = JSON.parse(ps)
            const { sourceData} = selectData
            const {tagName, data, callbacks} = this.props
            if (sourceData) {
                if (Array.isArray(callbacks) && callbacks.length) {
                    for (let i = 0; i < callbacks.length; i++) {
                       callbacks[i]({data, sourceData: sourceData[0]})
                    }
                }
            }

       } catch (err) {
           throw new Error(err)
       }
    }
    private widgetRef: any
    public doInteract = (f) => f
    private paginationChange = (pageNo: number, pageSize: number, orders) => {
        const {tagName} = this.props
        const state = store.getState()
        const {projectId, widgetId, filters, params} = state[tagName]
        console.log(orders, filters, params)
        sdk.getData({
            projectId,
            widgetId,
            orders,
            filters,
            variables: params
        }).then((result) => {
            const { data, widgetConfig } = result

            store.dispatch({
                type: 'ORDER',
                payload: {
                    data,
                    tagName
                }
            })
            console.log(store.getState())
        })
    }

    public render () {
        const {
            data,
            widgetProps,
            renderType
        } = this.props
        return (
            <div style={{width: '100%', height: '100%', display: 'flex'}}>
                <Widget
                   {...widgetProps}
                   data={data}
                   renderType={renderType}
                   getDataDrillDetail={this.trigger}
                   onDoInteract={this.doInteract}
                   onPaginationChange={this.paginationChange}
                />
            </div>
        )
    }
}


export default SdkItem
