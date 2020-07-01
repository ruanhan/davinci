import { cleanup } from '@testing-library/react'
import { renderWithReduxAndRouter } from 'app/test/utils'
import Organization from '..'
import injectReducer from 'app/utils/injectReducer'
import reducerOrganization from '../reducer'
import { compose } from 'redux'

afterEach(cleanup)

describe('Organization component test', () => {
  it('should take a snapshot', () => {
    const withOrganizationReducer = injectReducer({
      key: 'organization',
      reducer: reducerOrganization
    })
    const Comp = compose(withOrganizationReducer)(Organization)
    const { asFragment } = renderWithReduxAndRouter(Comp)
    expect(asFragment()).toMatchSnapshot()
  })
})
