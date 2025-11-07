import React, { Children } from 'react'
import ProtectedRoutes from '../components/auth/ProtectedRoutes'
import Dashboard from '../pages/admin/Dashboard'
import AppLayout from '../layout/full/AppLayout'
import BlankLayout from '../layout/blank/BlankLayout'
import Home from "../pages/admin/auth/Home"
import Register from "../pages/admin/auth/Register"
import { Navigate } from 'react-router-dom'
import Login from "../pages/admin/auth/Login"
import Error from '../pages/admin/error/error'
const Router = [
  {
    path: '/admin',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '',
        element: <AppLayout />,
        children: [
          {
            path: 'dashboard', element: <Dashboard />,
          },
          {
            path: 'friends', element: <Dashboard />,
          }
        ]
      },
    ]
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'error/404', element: <Error /> },
      { path: '*', element: <Navigate to="/error/404" /> },
    ],
  }
]

export default Router