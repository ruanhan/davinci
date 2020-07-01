import React from 'react'
import { cleanup } from '@testing-library/react'
import reducer from '../reducer'
import injectReducer from 'app/utils/injectReducer'
import { renderWithReduxAndRouter } from 'app/test/utils'
import { compose } from 'redux'
import App from '..'
import injectSaga from 'app/utils/injectSaga'
import saga from '../sagas'
import configureStore from 'app/configureStore'
import { createMemoryHistory } from 'history'

afterEach(cleanup)
// NOTE: mock globalConfig 里的 const host = config[env].host
// jest.mock('app/globalConfig', () => ({
//   __esModule: true,
//   default: {
//     production: {
//       host: 'http://10.143.131.33:8081/api/v3',
//       shareHost: 'http://10.143.131.33:8081/share.html'
//     }
//   },
//   env: 'production'
// }))
describe('App component test', () => {
  it('take a snapshot', () => {
    const { asFragment } = renderWithReduxAndRouter(App)
    expect(asFragment()).toMatchSnapshot()
  })
})
