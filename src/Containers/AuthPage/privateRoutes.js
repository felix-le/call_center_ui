import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const DashboardPage = lazy(() => import('../DashboardPage/DashboardPage'));

const privateRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard Page',
    component: () => <Redirect to='/dashboard' />,
  },
  {
    path: '/dashboard',
    exact: true,
    name: 'Dashboard Page',
    component: DashboardPage,
  },
];

export default privateRoutes;
