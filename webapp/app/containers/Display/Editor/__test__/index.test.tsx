jest.mock('react-redux')
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Editor from '../index'
import { renderWithRedux } from 'app/test/utils'
import { store } from 'app/app'
import { Provider } from 'react-redux'
import { LanguageProvider } from 'app/containers/LanguageProvider'
import { translationMessages } from 'app/i18n'
import { ConfigProvider } from 'antd'
import { ConnectedRouter } from 'connected-react-router'
import zh_CN from 'antd/es/locale/zh_CN'
import history from 'utils/history'
import configureStore from 'app/configureStore'
import { createMemoryHistory } from 'history'
import reducer, {initialState} from '../../reducer'
import saga from '../../sagas'
import viewReducer from 'containers/View/reducer'
import viewSaga from 'containers/View/sagas'
import fs from 'fs'
import path from 'path'

afterEach(cleanup)

describe('Editor component test', () => {
  const history = createMemoryHistory()
  it('should take a snapshot', () => {
    // const Wrapper = (props) => {
    //   injectEnv('display', reducer, saga)
    //   injectEnv('view', viewReducer, viewSaga)
    //   return props.children
    // }
    // const store = configureStore({
    //   display: initialState
    // }, history)
    // // const { asFragment } = render(<Editor />)
    // const { asFragment } = render(<Editor />, {
    //   wrapper: ({ children }) => (
    //     <Provider store={store}>
    //       {/* {children} */}
    //       <Wrapper>{children}</Wrapper>
    //     </Provider>
    //   )
    // })
    // expect(asFragment()).toMatchSnapshot()
  })
})
