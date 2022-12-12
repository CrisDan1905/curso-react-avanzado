import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitButton } from '../components/SubmitButton'
import { AppContext } from '../Context/AppContext'

export const User = () => {
  const navigate = useNavigate()
  const { removeAuth } = useContext(AppContext)

  const closeSession = () => {
    removeAuth()
    navigate('/login')
  }

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={(closeSession)}>Cerrar sesión</SubmitButton>
    </>
  )
}
