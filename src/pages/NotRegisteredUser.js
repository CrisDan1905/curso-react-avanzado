import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserForm } from '../components/UserForm'
import { AppContext } from '../Context/AppContext'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, loading: registerLoading, error: registerError } = useRegisterMutation()
  const { loginMutation, loading: loginLoading, error: loginError } = useLoginMutation()
  const navigate = useNavigate()

  const onSubmit = async ({ email, password }, isLogin) => {
    let token

    const input = { email, password }
    const variables = { input }

    if (isLogin) {
      token = (await loginMutation({ variables })).data.login
    } else {
      token = (await registerMutation({ variables })).data.signup
    }

    activateAuth(token)

    navigate('/')
  }

  const registerErrorMsg = registerError && 'El usuario ya existe o hay algún problema.'
  const loginErrorMsg = loginError && 'La contraseña es incorrecta o el usuario no existe.'

  return (
    <>
      <UserForm title='Registrarse' onSubmit={(userData) => onSubmit(userData, false)} error={registerErrorMsg} disabled={registerLoading} />
      <UserForm title='Iniciar sesión' onSubmit={(userData) => onSubmit(userData, true)} error={loginErrorMsg} disabled={loginLoading} />
    </>
  )
}
