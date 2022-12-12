import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AppProvider } from './Context/AppContext'
import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-danilo-danilo1905.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError((grtaphQLError) => {
  if (grtaphQLError.networkError?.result.code === 'invalid_token' || grtaphQLError.response.errors[0].message === 'user does not exist') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache()
})

const container = document.querySelector('#app')
const root = createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>
)
