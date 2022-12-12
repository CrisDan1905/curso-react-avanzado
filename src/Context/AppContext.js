import { useApolloClient } from '@apollo/client'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const apolloClient = useApolloClient()

  const [isAuth, setIsAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  )

  const activateAuth = token => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }

  const removeAuth = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
    apolloClient.resetStore()
  }

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </AppContext.Provider>
  )
}
