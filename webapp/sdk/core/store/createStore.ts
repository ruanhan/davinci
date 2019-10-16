
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

import { isObject } from '../../util'

interface IActionType {
    type: string
    payload?: any
}

export default function createStore (store, reducer) {
    const currentReducer = reducer
    let currentStore = store
    let currentListeners = []
    let nextListeners = currentListeners
    let isDispatching = false

    function synchronizationListens () {
      if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice()
      }
    }

    const getState = () => currentStore

    function subscribe (listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected listener to be a function.')
        }

        let isSubscribed = true

        synchronizationListens()
        nextListeners.push(listener)
        return function unsubscribe () {
            if (!isSubscribed) {
                return
            }
            isSubscribed = false
            synchronizationListens()
            const index = nextListeners.indexOf(listener)
            nextListeners.splice(index, 1)
            currentListeners = null
        }
    }

    function dispatch (action: IActionType) {
        if (!isObject(action)) {
          throw new Error(
            'Actions must be plain objects. ' +
              'Use custom middleware for async actions.'
          )
        }

        if (typeof action.type === 'undefined') {
          throw new Error(
            'Actions may not have an undefined "type" property. ' +
              'Have you misspelled a constant?'
          )
        }

        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.')
        }

        try {
          isDispatching = true
          currentStore = currentReducer(currentStore, action)
        } finally {
          isDispatching = false
        }

        const listeners = (currentListeners = nextListeners)
        for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i]
          listener()
        }

        return action
    }

    dispatch({ type: 'INIT', payload: {} })

    return {
        getState,
        dispatch,
        subscribe
    }
}
