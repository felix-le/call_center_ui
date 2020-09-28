import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AUTH_KEY } from '../../constants/authConstant';

const PrivatePage = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem(AUTH_KEY);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to='/auth/login' />
      }
    />
  );
};
export default PrivatePage;
