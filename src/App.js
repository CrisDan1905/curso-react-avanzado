import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NavBar } from './components/NavBar'
import { ProtectedRoute } from './containers/ProtectedRoute'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

const Container = () => (
  <>
    <Logo />
    <Outlet />
    <NavBar />
  </>)

const router = createBrowserRouter(([
  {
    path: '/',
    element: <Container />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pet/:id',
        element: <Home />
      },
      {
        path: '/detail/:detailId',
        element: <Detail />
      },
      {
        path: '/favs',
        element: <ProtectedRoute><Favs /></ProtectedRoute>
      },
      {
        path: '/user',
        element: <ProtectedRoute><User /></ProtectedRoute>
      },
      {
        path: '/login',
        element: <NotRegisteredUser />
      }
    ]
  }
]))

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Suspense>
  )
}
