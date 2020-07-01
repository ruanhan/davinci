import * as actions from '../actions'
import * as constants from '../constants'

describe('App actions test', () => {
    // NOTE: 描述应该具体
  it('getExternalAuthProviders', () => {
    const expectedAction = { type: constants.GET_EXTERNAL_AUTH_PROVIDERS }
    const result = actions.getExternalAuthProviders()
    expect(result).toEqual(expectedAction)
  })

  it('gotExternalAuthProviders', () => {
    const mockPayload = { externalAuthProviders: 'test' }
    const expectedAction = {
      type: constants.GET_EXTERNAL_AUTH_PROVIDERS_SUCESS,
      payload: mockPayload
    }
    const result = actions.gotExternalAuthProviders(
      mockPayload.externalAuthProviders
    )
    expect(result).toEqual(expectedAction)
  })

  it('tryExternalAuth', () => {
    const mockPayload = { resolve: jest.fn() }
    const expectedAction = {
      type: constants.TRY_EXTERNAL_AUTH,
      payload: mockPayload
    }
    const result = actions.tryExternalAuth(mockPayload.resolve)
    expect(result).toEqual(expectedAction)
  })

  it('externalAuthlogout', () => {
    const expectedAction = {
      type: constants.EXTERNAL_AUTH_LOGOUT
    }
    const result = actions.externalAuthlogout()
    expect(result).toEqual(expectedAction)
  })

  it('login', () => {
    const mockPayload = { username: 'xxx', password: '123', resolve: jest.fn() }
    const expectedAction = {
      type: constants.LOGIN,
      payload: mockPayload
    }
    const result = actions.login(
      mockPayload.username,
      mockPayload.password,
      mockPayload.resolve
    )
    expect(result).toEqual(expectedAction)
  })

  it('getVersion', () => {
    const mockPayload = { resolve: jest.fn() }
    const expectedAction = {
      type: constants.GET_VERSION,
      payload: mockPayload
    }
    const result = actions.getVersion(mockPayload.resolve)
    expect(result).toEqual(expectedAction)
  })

  it('getVersionSuccess', () => {
    const mockPayload = { version: 1 }
    const expectedAction = {
      type: constants.GET_VERSION_SUCCESS,
      payload: mockPayload
    }
    const result = actions.getVersionSuccess(mockPayload.version)
    expect(result).toEqual(expectedAction)
  })

  it('getVersionFail', () => {
    const mockPayload = { err: new Error() }
    const expectedAction = {
      type: constants.GET_VERSION_FAIL,
      payload: mockPayload
    }
    const result = actions.getVersionFail(mockPayload.err)
    expect(result).toEqual(expectedAction)
  })

  it('logged', () => {
    const mockPayload = { user: {} }
    const expectedAction = {
      type: constants.LOGGED,
      payload: mockPayload
    }
    const result = actions.logged(mockPayload.user)
    expect(result).toEqual(expectedAction)
  })

  it('loginError', () => {
    const expectedAction = {
      type: constants.LOGIN_ERROR
    }
    const result = actions.loginError()
    expect(result).toEqual(expectedAction)
  })

  it('logout', () => {
    const expectedAction = {
      type: constants.LOGOUT
    }
    const result = actions.logout()
    expect(result).toEqual(expectedAction)
  })

  it('active', () => {
    const mockPayload = { token: 'xxx', resolve: jest.fn() }
    const expectedAction = {
      type: constants.ACTIVE,
      payload: mockPayload
    }
    const result = actions.active(mockPayload.token, mockPayload.resolve)
    expect(result).toEqual(expectedAction)
  })

  it('activeSuccess', () => {
    const mockPayload = { user: {} }
    const expectedAction = {
      type: constants.ACTIVE_SUCCESS,
      payload: mockPayload
    }
    const result = actions.activeSuccess(mockPayload.user)
    expect(result).toEqual(expectedAction)
  })

  it('activeError', () => {
    const expectedAction = {
      type: constants.ACTIVE_ERROR
    }
    const result = actions.activeError()
    expect(result).toEqual(expectedAction)
  })

  it('joinOrganization', () => {
    const mockPayload = { token: 'xxx', resolve: jest.fn(), reject: jest.fn() }
    const expectedAction = {
      type: constants.JOIN_ORGANIZATION,
      payload: mockPayload
    }
    const result = actions.joinOrganization(
      mockPayload.token,
      mockPayload.resolve,
      mockPayload.reject
    )
    expect(result).toEqual(expectedAction)
  })

  it('joinOrganizationSuccess', () => {
    const mockPayload = { user: {} }
    const expectedAction = {
      type: constants.JOIN_ORGANIZATION_SUCCESS,
      payload: mockPayload
    }
    const result = actions.joinOrganizationSuccess(mockPayload.user)
    expect(result).toEqual(expectedAction)
  })

  it('joinOrganizationError', () => {
    const expectedAction = {
      type: constants.JOIN_ORGANIZATION_ERROR
    }
    const result = actions.joinOrganizationError()
    expect(result).toEqual(expectedAction)
  })

  it('getLoginUser', () => {
    const mockPayload = { resolve: jest.fn() }
    const expectedAction = {
      type: constants.GET_LOGIN_USER,
      payload: mockPayload
    }
    const result = actions.getLoginUser(mockPayload.resolve)
    expect(result).toEqual(expectedAction)
  })

  it('getLoginUserError', () => {
    const expectedAction = {
      type: constants.GET_LOGIN_USER_ERROR
    }
    const result = actions.getLoginUserError()
    expect(result).toEqual(expectedAction)
  })

  it('showNavigator', () => {
    const expectedAction = {
      type: constants.SHOW_NAVIGATOR
    }
    const result = actions.showNavigator()
    expect(result).toEqual(expectedAction)
  })

  it('hideNavigator', () => {
    const expectedAction = {
      type: constants.HIDE_NAVIGATOR
    }
    const result = actions.hideNavigator()
    expect(result).toEqual(expectedAction)
  })

  it('checkNameAction', () => {
    const mockPayload = {
      id: 1,
      name: 'xx',
      type: 'aa',
      params: 'bb',
      resolve: jest.fn(),
      reject: jest.fn()
    }
    const expectedAction = {
      type: constants.CHECK_NAME,
      payload: mockPayload
    }
    const result = actions.checkNameAction(
      mockPayload.id,
      mockPayload.name,
      mockPayload.type,
      mockPayload.params,
      mockPayload.resolve,
      mockPayload.reject
    )
    expect(result).toEqual(expectedAction)
  })

  it('checkNameUniqueAction', () => {
    const mockPayload = {
      pathname: 'xx',
      data: 'aa',
      resolve: jest.fn(),
      reject: jest.fn()
    }
    const expectedAction = {
      type: constants.CHECK_NAME,
      payload: mockPayload
    }
    const result = actions.checkNameUniqueAction(
      mockPayload.pathname,
      mockPayload.data,
      mockPayload.resolve,
      mockPayload.reject
    )
    expect(result).toEqual(expectedAction)
  })

  it('updateProfile', () => {
    const mockPayload = {
      id: 1,
      name: 'xx',
      description: 'desc',
      department: 'abc',
      resolve: jest.fn()
    }
    const expectedAction = {
      type: constants.UPDATE_PROFILE,
      payload: mockPayload
    }
    const result = actions.updateProfile(
      mockPayload.id,
      mockPayload.name,
      mockPayload.description,
      mockPayload.department,
      mockPayload.resolve
    )
    expect(result).toEqual(expectedAction)
  })

  it('uploadAvatarSuccess', () => {
    const mockPayload = { path: 'xxx' }
    const expectedAction = {
      type: constants.UPLOAD_AVATAR_SUCCESS,
      payload: mockPayload
    }
    const result = actions.uploadAvatarSuccess(mockPayload.path)
    expect(result).toEqual(expectedAction)
  })

  it('updateProfileSuccess', () => {
    const mockPayload = { user: {} }
    const expectedAction = {
      type: constants.UPDATE_PROFILE_SUCCESS,
      payload: mockPayload
    }
    const result = actions.updateProfileSuccess(mockPayload.user)
    expect(result).toEqual(expectedAction)
  })

  it('updateProfileError', () => {
    const expectedAction = {
      type: constants.UPDATE_PROFILE_ERROR
    }
    const result = actions.updateProfileError()
    expect(result).toEqual(expectedAction)
  })

  it('changeUserPassword', () => {
    const mockPayload = { user: {}, resolve: jest.fn(), reject: jest.fn() }
    const expectedAction = {
      type: constants.CHANGE_USER_PASSWORD,
      payload: mockPayload
    }
    const result = actions.changeUserPassword(
      mockPayload.user,
      mockPayload.resolve,
      mockPayload.reject
    )
    expect(result).toEqual(expectedAction)
  })

  it('userPasswordChanged', () => {
    const mockPayload = { result: {} }
    const expectedAction = {
      type: constants.CHANGE_USER_PASSWORD_SUCCESS,
      payload: mockPayload
    }
    const result = actions.userPasswordChanged(mockPayload.result)
    expect(result).toEqual(expectedAction)
  })

  it('changeUserPasswordFail', () => {
    const expectedAction = {
      type: constants.CHANGE_USER_PASSWORD_FAILURE
    }
    const result = actions.changeUserPasswordFail()
    expect(result).toEqual(expectedAction)
  })

  it('loadDownloadList', () => {
    const expectedAction = {
      type: constants.LOAD_DOWNLOAD_LIST
    }
    const result = actions.loadDownloadList()
    expect(result).toEqual(expectedAction)
  })

  it('downloadListLoaded', () => {
    const mockPayload = { list: [] }
    const expectedAction = {
      type: constants.LOAD_DOWNLOAD_LIST_SUCCESS,
      payload: mockPayload
    }
    const result = actions.downloadListLoaded(mockPayload.list)
    expect(result).toEqual(expectedAction)
  })

  it('loadDownloadListFail', () => {
    const mockPayload = { error: new Error() }
    const expectedAction = {
      type: constants.LOAD_DOWNLOAD_LIST_FAILURE,
      payload: mockPayload
    }
    const result = actions.loadDownloadListFail(mockPayload.error)
    expect(result).toEqual(expectedAction)
  })

  it('downloadFile', () => {
    const mockPayload = { id: 1 }
    const expectedAction = {
      type: constants.DOWNLOAD_FILE,
      payload: mockPayload
    }
    const result = actions.downloadFile(mockPayload.id)
    expect(result).toEqual(expectedAction)
  })

  it('fileDownloaded', () => {
    const mockPayload = { id: 1 }
    const expectedAction = {
      type: constants.DOWNLOAD_FILE_SUCCESS,
      payload: mockPayload
    }
    const result = actions.fileDownloaded(mockPayload.id)
    expect(result).toEqual(expectedAction)
  })

  it('downloadFileFail', () => {
    const mockPayload = { error: new Error() }
    const expectedAction = {
      type: constants.DOWNLOAD_FILE_FAILURE,
      payload: mockPayload
    }
    const result = actions.downloadFileFail(mockPayload.error)
    expect(result).toEqual(expectedAction)
  })

  it('getCaptchaforResetPassword', () => {
    const mockPayload = { type: 'xx', ticket: 'xx', resolve: jest.fn() }
    const expectedAction = {
      type: constants.GET_CAPTCHA_FOR_RESET_PASSWORD,
      payload: mockPayload
    }
    const result = actions.getCaptchaforResetPassword(mockPayload)
    expect(result).toEqual(expectedAction)
  })

  it('getCaptchaforResetPasswordSuccess', () => {
    const mockPayload = { result: {} }
    const expectedAction = {
      type: constants.GET_CAPTCHA_FOR_RESET_PASSWORD_SUCCESS,
      payload: mockPayload
    }
    const result = actions.getCaptchaforResetPasswordSuccess(mockPayload.result)
    expect(result).toEqual(expectedAction)
  })

  it('getCaptchaforResetPasswordError', () => {
    const mockPayload = { error: new Error() }
    const expectedAction = {
      type: constants.GET_CAPTCHA_FOR_RESET_PASSWORD_ERROE,
      payload: mockPayload
    }
    const result = actions.getCaptchaforResetPasswordError(mockPayload.error)
    expect(result).toEqual(expectedAction)
  })

  it('resetPasswordUnlogged', () => {
    const mockPayload = {
      token: 'xx',
      checkCode: 'xx',
      password: '123',
      type: 'xx',
      ticket: 'xx',
      resolve: jest.fn()
    }
    const expectedAction = {
      type: constants.RESET_PASSWORD_UNLOGGED,
      payload: mockPayload
    }
    const result = actions.resetPasswordUnlogged(mockPayload)
    expect(result).toEqual(expectedAction)
  })

  it('resetPasswordUnloggedSuccess', () => {
    const mockPayload = { result: {} }
    const expectedAction = {
      type: constants.RESET_PASSWORD_UNLOGGED_SUCCESS,
      payload: mockPayload
    }
    const result = actions.resetPasswordUnloggedSuccess(mockPayload.result)
    expect(result).toEqual(expectedAction)
  })

  it('resetPasswordUnloggedFail', () => {
    const mockPayload = { error: new Error() }
    const expectedAction = {
      type: constants.RESET_PASSWORD_UNLOGGED_ERROR,
      payload: mockPayload
    }
    const result = actions.resetPasswordUnloggedFail(mockPayload.error)
    expect(result).toEqual(expectedAction)
  })
})
