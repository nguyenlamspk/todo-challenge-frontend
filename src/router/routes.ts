import React from 'react'

const HomePage = React.lazy(() => import('../pages/HomePage'))
const Login = React.lazy(() => import('../pages/Login'))
const AddChallenge = React.lazy(() => import('../pages/AddChallenge'))
const Challenges = React.lazy(() => import('../pages/Challenges'))


const routes = [
  {
    path: '/',
    exact: true,
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login,
  },
  {
    path: '/challenges',
    exact: true,
    name: 'Challenges',
    component: Challenges,
  },
  {
    path: '/add-challenge',
    exact: true,
    name: 'Add Challenge',
    component: AddChallenge,
  },
]

export default routes
