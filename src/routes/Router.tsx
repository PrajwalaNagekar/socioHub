import React, { Children } from 'react'
import ProtectedRoutes from '../components/auth/ProtectedRoutes'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import AppLayout from '../layout/full/AppLayout'
import BlankLayout from '../layout/blank/BlankLayout'
import Home from "../pages/admin/auth/Home"
import Register from "../pages/admin/auth/register/Register"
import { Navigate } from 'react-router-dom'
import Login from "../pages/admin/auth/login/Login"
import Error from '../pages/admin/error/Error'
import UserDashboard from "@/pages/user/Dashboard/Dasboard"
import UserHome from "@/pages/user/Home/index"
import Explore from "@/pages/user/Explore/index"
import Search from "@/pages/user/Search"
import Messages from "@/pages/user/Messages/index"
import Notifications from "@/pages/user/Notifications/index"

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
    path: '/user',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '',
        element: <AppLayout />,
        children: [
          {
            path: 'dashboard', element: <UserDashboard />,
          },
          {
            path: 'home', element: <UserHome />,
          },
          {
            path: 'explore', element: <Explore />,
          },
          {
            path: 'search', element: <Search />,
          },
          {
            path: 'notifications', element: <Notifications />,
          },
          {
            path: 'messages', element: <Messages />,
          },
          {
            path: 'messages', element: <Messages />,
          },
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