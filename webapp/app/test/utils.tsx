import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import LanguageProvider from 'containers/LanguageProvider'
import { ConfigProvider } from 'antd'
import { ConnectedRouter } from 'connected-react-router'
import fs from 'fs'
import path from 'path'
import { translationMessages } from 'app/i18n'
import zh_CN from 'antd/lib/locale/zh_CN'
import configureStore from 'app/configureStore'
import { compose } from 'redux'
import injectSaga from 'app/utils/injectSaga'
import injectReducer from 'app/utils/injectReducer'
import globalReducer from 'app/containers/App/reducer'
import globalSaga from 'app/containers/App/sagas'

export const renderWithRedux = (component, store) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    ...render(component, { wrapper: Wrapper }),
    store
  }
}

export const renderWithRouter = (
  component,
  history = createMemoryHistory()
) => {
  return {
    ...render(<Router history={history}>{component}</Router>)
  }
}

export const renderWithContext = (component, ContextProvider, contextValue) => {
  return {
    ...render(
      <ContextProvider value={contextValue}>{component}</ContextProvider>
    )
  }
}

export const renderWithAll = (
  component,
  history = createMemoryHistory(),
  store = configureStore({}, history),
  ...options
) => {
  beforeAll(() => {
    const html = fs
      .readFileSync(path.join(process.cwd(), './app/index.html'))
      .toString()
    document.body.innerHTML = html
  })

  const renderAllWrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <ConfigProvider locale={zh_CN}>
            <ConnectedRouter history={history}>{children}</ConnectedRouter>
          </ConfigProvider>
        </LanguageProvider>
      </Provider>
    )
  }

  return {
    ...render(component, { wrapper: renderAllWrapper, ...options }),
    store,
    history
  }
}

export const renderWithReduxAndRouter = (
  Component,
  history = createMemoryHistory(),
  store = configureStore({}, history),
  isMockDispatch = true
) => {
  if (isMockDispatch) {
    // NOTE: 利用对 store.dispatch 进行 mock，拦截 mapDispatchToProps里的函数
    store.dispatch = jest.fn()
  }
  function Wrapper(children) {
    // NOTE: 构造上下文环境
    const withReducer = injectReducer({ key: 'global', reducer: globalReducer })
    const withSaga = injectSaga({ key: 'global', saga: globalSaga })
    const Comp = compose(withReducer, withSaga)(children)
    return (
      <Provider store={store}>
        <Router history={history}>
          <Comp />
        </Router>
      </Provider>
    )
  }
  return {
    ...render(Wrapper(Component)),
    store,
    history
  }
}
