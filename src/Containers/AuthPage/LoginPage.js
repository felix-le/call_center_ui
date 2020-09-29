import React, { useEffect } from 'react';
import { login } from '../../store/auth';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import Login from '../../Components/Auth/Login';
import { useHistory } from 'react-router-dom';

const mapState = (state) => ({
  loginPending: state.auth.loginPending,
  loginSuccess: state.auth.loginSuccess,
  loginError: state.auth.loginError,
});

const mapDispatch = {
  login,
};

const LoginPage = ({ loginPending, loginSuccess, loginError, login }) => {
  let history = useHistory();

  useEffect(() => {
    if (loginSuccess) {
      history.push('/');
    }
  });

  async function onSubmit(data) {
    console.log('onSubmit -> data', data);
    login({ email: data.email, password: data.password });
  }
  return (
    <div className={styles.loginPage}>
      <Login
        onSubmit={onSubmit}
        isRequestLogin={loginPending}
        loginError={loginError}
      />
    </div>
  );
};
export default connect(mapState, mapDispatch)(LoginPage);
