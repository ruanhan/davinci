
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

interface IAction {
    type: string
    payload: {
        data?: any,
        tagName: string
    }
}

export const themeReducer = (state, action: IAction) => {
    const {data, tagName, widgetProps, renderType, callbacks, projectId, widgetId, filters, params} = action.payload    // callbacks 用来注册事件监听
    if (!state) {
        return {}
    }
    switch (action.type) {
        case 'INITAPP':
            return {
                ...state,
                [tagName]: {
                    ...state[tagName],
                    data,
                    widgetProps,
                    renderType,
                    tagName,
                    projectId,
                    widgetId,
                    filters,
                    params
                }
            }
        case 'ORDER' :
            return {
                ...state,
                [tagName]: {
                    ...state[tagName],
                    data
                }
            }    
        case 'RELOAD':
            return {
                ...state,
                [tagName]: {
                    ...state[tagName],
                    data,
                    widgetProps,
                    renderType,
                    tagName
                }
            }
         case 'SUBMIT':
             const submitState = {
                 ...state,
                 [tagName]: {
                     ...state[tagName],
                     callbacks
                 }
             }
             return submitState
        default:
            return state
    }
}





