import { cleanup } from '@testing-library/react'
import { RouterState } from 'connected-react-router'
import { initialState } from '../reducer'
import * as selectors from '../selectors'

afterEach(cleanup)

describe('App selectors test', () => {
  const global = initialState
  // @ts-ignore
  const router: RouterState = { location: {}, action: 'PUSH' }
  let state = { global, router }

  beforeEach(() => {
    state = { global, router }
  })

  it('global', () => {
    expect(selectors.selectGlobal(state)).toEqual(state.global)
  })

  describe('makeSelectExternalAuthProviders', () => {
    const selectExternalAuthProviders = selectors.makeSelectExternalAuthProviders()
    it('return', () => {
      expect(selectExternalAuthProviders(state)).toEqual(
        state.global.externalAuthProviders
      )
    })

    it('memo', () => {
      selectExternalAuthProviders(state)
      expect(selectExternalAuthProviders.recomputations()).toBe(1)
      selectExternalAuthProviders(state)
      expect(selectExternalAuthProviders.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectExternalAuthProviders(state)
      expect(selectExternalAuthProviders.recomputations()).toBe(2)
    })
  })

  describe('makeSelectLogged', () => {
    const selectLogged = selectors.makeSelectLogged()
    it('return', () => {
      expect(selectLogged(state)).toEqual(state.global.logged)
    })

    it('memo', () => {
      selectLogged(state)
      expect(selectLogged.recomputations()).toBe(1)
      selectLogged(state)
      expect(selectLogged.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectLogged(state)
      expect(selectLogged.recomputations()).toBe(2)
    })
  })

  describe('makeSelectLoginUser', () => {
    const selectLoginUser = selectors.makeSelectLoginUser()
    it('return', () => {
      expect(selectLoginUser(state)).toEqual(state.global.loginUser)
    })

    it('memo', () => {
      selectLoginUser(state)
      expect(selectLoginUser.recomputations()).toBe(1)
      selectLoginUser(state)
      expect(selectLoginUser.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectLoginUser(state)
      expect(selectLoginUser.recomputations()).toBe(2)
    })
  })

  describe('makeSelectLoginLoading', () => {
    const selectLoginLoading = selectors.makeSelectLoginLoading()
    it('return', () => {
      expect(selectLoginLoading(state)).toEqual(state.global.loginLoading)
    })

    it('memo', () => {
      selectLoginLoading(state)
      expect(selectLoginLoading.recomputations()).toBe(1)
      selectLoginLoading(state)
      expect(selectLoginLoading.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectLoginLoading(state)
      expect(selectLoginLoading.recomputations()).toBe(2)
    })
  })

  describe('makeSelectNavigator', () => {
    const selectNavigator = selectors.makeSelectNavigator()
    it('return', () => {
      expect(selectNavigator(state)).toEqual(state.global.navigator)
    })

    it('memo', () => {
      selectNavigator(state)
      expect(selectNavigator.recomputations()).toBe(1)
      selectNavigator(state)
      expect(selectNavigator.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectNavigator(state)
      expect(selectNavigator.recomputations()).toBe(2)
    })
  })

  describe('makeSelectDownloadList', () => {
    const selectDownloadList = selectors.makeSelectDownloadList()
    it('return', () => {
      expect(selectDownloadList(state)).toEqual(state.global.downloadList)
    })

    it('memo', () => {
      selectDownloadList(state)
      expect(selectDownloadList.recomputations()).toBe(1)
      selectDownloadList(state)
      expect(selectDownloadList.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectDownloadList(state)
      expect(selectDownloadList.recomputations()).toBe(2)
    })
  })

  describe('makeSelectDownloadListLoading', () => {
    const selectDownloadListLoading = selectors.makeSelectDownloadListLoading()
    it('return', () => {
      expect(selectDownloadListLoading(state)).toEqual(
        state.global.downloadListLoading
      )
    })

    it('memo', () => {
      selectDownloadListLoading(state)
      expect(selectDownloadListLoading.recomputations()).toBe(1)
      selectDownloadListLoading(state)
      expect(selectDownloadListLoading.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectDownloadListLoading(state)
      expect(selectDownloadListLoading.recomputations()).toBe(2)
    })
  })

  describe('makeSelectLocation', () => {
    const selectLocation = selectors.makeSelectLocation()
    it('return', () => {
      expect(selectLocation(state)).toEqual(state.router.location)
    })

    it('memo', () => {
      selectLocation(state)
      expect(selectLocation.recomputations()).toBe(1)
      selectLocation(state)
      expect(selectLocation.recomputations()).toBe(1)

      // global changed
      state = { global: initialState, router: { ...router } }
      selectLocation(state)
      expect(selectLocation.recomputations()).toBe(2)
    })
  })

  describe('makeSelectVersion', () => {
    const selectVersion = selectors.makeSelectVersion()
    it('return', () => {
      expect(selectVersion(state)).toEqual(state.global.version)
    })

    it('memo', () => {
      selectVersion(state)
      expect(selectVersion.recomputations()).toBe(1)
      selectVersion(state)
      expect(selectVersion.recomputations()).toBe(1)

      // global changed
      state = { global: { ...initialState }, router }
      selectVersion(state)
      expect(selectVersion.recomputations()).toBe(2)
    })
  })
})
