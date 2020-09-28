import React, { lazy, memo, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PrivatePage from './Containers/AuthPage/PrivatePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Components/theme';

const AuthPage = lazy(() => import('./Containers/AuthPage'));
const DashboardPage = lazy(() => import('./Containers/DashboardPage'));

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback={<div />}>
            <Switch>
              <Route
                path='/auth'
                restricted={false}
                name='Auth'
                component={AuthPage}
              />
              <PrivatePage
                path='/'
                name='Dashboard Page'
                component={DashboardPage}
              />
            </Switch>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default memo(App);
