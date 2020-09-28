import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/Vendor/css/styles.css';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);
