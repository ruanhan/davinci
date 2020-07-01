import { cleanup } from '@testing-library/react'
import { DownloadStatus } from './../constants'
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

afterEach(cleanup)

describe('App reducers test', () => {
  const user = {
    id: 1,
    name: 'name',
    department: 'department',
    description: 'desc',
    avatar: 'path'
  }

  it('GET_EXTERNAL_AUTH_PROVIDERS_SUCESS', () => {
    const externalAuthProviders = 'mockProviders'
    const actionReturns = actions.gotExternalAuthProviders(
      externalAuthProviders
    )
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, ...actionReturns.payload })
  })

  it('LOGIN', () => {
    const actionReturns = actions.login('xxx', '123', () => void 0)
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, loginLoading: true })
  })

  it('LOGGED', () => {
    const actionReturns = actions.logged(user)
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({
      ...initialState,
      loginLoading: false,
      logged: true,
      loginUser: user
    })
  })

  it('LOGIN_ERROR', () => {
    const actionReturns = actions.loginError()
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, loginLoading: false })
  })

  it('ACTIVE_SUCCESS', () => {
    const actionReturns = actions.activeSuccess(user)
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, logged: true, loginUser: user })
  })

  it('GET_VERSION_SUCCESS', () => {
    const version = 1
    const actionReturns = actions.getVersionSuccess(version)
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, ...actionReturns.payload })
  })

  it('LOGOUT', () => {
    const actionReturns = actions.logout()
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, logged: false, loginUser: null })
  })

  it('UPLOAD_AVATAR_SUCCESS', () => {
    const path = 'path'
    const actionReturns = actions.uploadAvatarSuccess(path)
    const result = reducer({ ...initialState, loginUser: user }, actionReturns)
    expect(result).toEqual({
      ...initialState,
      loginUser: { ...user, avatar: path }
    })
  })

  it('UPDATE_PROFILE_SUCCESS', () => {
    const actionReturns = actions.updateProfileSuccess(user)
    const { id, name, department, description } = user
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({
      ...initialState,
      loginUser: { id, name, department, description }
    })
  })

  it('SHOW_NAVIGATOR', () => {
    const actionReturns = actions.showNavigator()
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, navigator: true })
  })

  it('HIDE_NAVIGATOR', () => {
    const actionReturns = actions.hideNavigator()
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, navigator: false })
  })

  it('LOAD_DOWNLOAD_LIST', () => {
    const actionReturns = actions.loadDownloadList()
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, downloadListLoading: true })
  })

  it('LOAD_DOWNLOAD_LIST_SUCCESS', () => {
    const mockList = [
      {
        id: 1,
        status: DownloadStatus.Processing
      },
      {
        id: 2,
        status: DownloadStatus.Processing
      }
    ]
    const actionReturns = actions.downloadListLoaded(mockList)
    const result = reducer(
      { ...initialState, downloadList: mockList },
      actionReturns
    )
    expect(result).toEqual({
      ...initialState,
      downloadListLoading: false,
      downloadList: mockList,
      downloadListInfo: {
        1: { loading: false },
        2: { loading: false }
      }
    })
  })

  it('LOAD_DOWNLOAD_LIST_FAILURE', () => {
    const error = new Error()
    const actionReturns = actions.loadDownloadListFail(error)
    const result = reducer(initialState, actionReturns)
    expect(result).toEqual({ ...initialState, downloadListLoading: false })
  })

  it('DOWNLOAD_FILE_SUCCESS', () => {
    const id = 1
    const actionReturns = actions.fileDownloaded(id)
    const mockDownLoadList = [
      {
        id: 1,
        status: DownloadStatus.Processing
      },
      {
        id: 2,
        status: DownloadStatus.Processing
      }
    ]
    const result = reducer(
      { ...initialState, downloadList: mockDownLoadList },
      actionReturns
    )
    mockDownLoadList[0].status = DownloadStatus.Downloaded
    expect(result).toEqual({ ...initialState, downloadList: mockDownLoadList })
  })
})
