import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const AuthPage = () => {
  return (
    <div className='page-content'>
      <div className='content-wrapper'>
        <div className='content d-flex justify-content-center align-items-center'>
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
