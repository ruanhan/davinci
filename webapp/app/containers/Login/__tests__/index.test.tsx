import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import LoginForm from '../LoginForm'
import Login from '..'
import { renderWithReduxAndRouter } from 'app/test/utils'

afterEach(cleanup)

describe('Test Login Componenet', () => {
  it('login form', () => {
    const username = 'test'
    const password = '123456'
    const loading = false
    const onChangeUsername = jest.fn()
    const onChangePassword = jest.fn()
    const onLogin = jest.fn()
    const props = {
      username,
      password,
      loading,
      onChangeUsername,
      onChangePassword,
      onLogin
    }
    const { getByPlaceholderText } = render(<LoginForm {...props} />)
    const usernameInputEl = getByPlaceholderText('用户名')
    const pwdInputEl = getByPlaceholderText('密码')
    expect(usernameInputEl).toHaveValue(username)
    expect(pwdInputEl).toHaveValue(password)

    fireEvent.change(usernameInputEl, { target: { value: 'username' } })
    expect(onChangeUsername).toHaveBeenCalled()
    fireEvent.change(pwdInputEl, { target: { value: '666' } })
    expect(onChangePassword).toHaveBeenCalledTimes(1)
  })

  it('login index', () => {
    const { getByPlaceholderText } = renderWithReduxAndRouter(Login)
    const inputEl = getByPlaceholderText('用户名') as HTMLInputElement
    fireEvent.change(inputEl, { target: { value: '666' } })
    expect(inputEl.value).toBe('666')
  })
})
