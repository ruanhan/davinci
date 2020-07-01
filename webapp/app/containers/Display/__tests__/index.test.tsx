import { cleanup } from '@testing-library/react'
import Display from '..'
import { renderWithReduxAndRouter } from 'app/test/utils'
import injectReducer from 'app/utils/injectReducer'
import displayReducer from '../reducer'
import viewReducer from 'containers/View/reducer'
import { compose } from 'redux'

afterEach(cleanup)

describe('Display component test', () => {
  it('should take a snapshot', () => {
    const withDisplayReducer = injectReducer({
      key: 'display',
      reducer: displayReducer
    })
    const withReducer = injectReducer({ key: 'view', reducer: viewReducer })
    const Comp = compose(withReducer, withDisplayReducer)(Display)
    const { asFragment } = renderWithReduxAndRouter(Comp)
    expect(asFragment()).toMatchSnapshot()
  })
})
