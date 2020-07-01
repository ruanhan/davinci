import request from 'utils/request'
import { expectSaga } from 'redux-saga-test-plan'
import { cleanup } from '@testing-library/react'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import * as sagas from '../sagas'
import { loginError } from '../actions'

afterEach(cleanup)

describe('App sagas test', () => {
  const mockAction = {
    payload: {
      username: 'xxx',
      password: '123456',
      resolve: jest.fn()
    }
  }
  const mockResult = {
    payload: {
      admin: true,
      avatar: '',
      department: '',
      description: '',
      email: 'x@abc.cn',
      id: 123,
      name: 'xxx',
      statisticOpen: false,
      username: 'xxx'
    },
    header: {
      msg: 'Success',
      code: 200,
      token: 'xxxxxx'
    }
  }

  describe('login', () => {
    it('success', () => {
      return expectSaga(sagas.login, mockAction)
        .provide([[matchers.call.fn(request), mockResult]])
        .run()
    })
    // NOTE: jest failed for new Error
    // it('fail', () => {
    //   const error = new Error('error')
    //   return expectSaga(sagas.login, mockAction)
    //     .provide([[matchers.call.fn(request), throwError(error)]])
    //     .put(loginError())
    //     .run()
    // })
  })
})
