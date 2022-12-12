import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [])

  return children
}
