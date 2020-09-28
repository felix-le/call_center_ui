import { lazy } from 'react';
const LoginPage = lazy(() => import('./LoginPage'));
const RegisterPage = lazy(() => import('./RegisterPage'));

export const routes = [
  {
    path: '/auth/login',
    exact: true,
    name: 'Login Page',
    component: LoginPage,
  },
  {
    path: '/auth/register',
    exact: true,
    name: 'Register Page',
    component: RegisterPage,
  },
];
