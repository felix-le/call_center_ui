import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../api/authApi';
import { AUTH_KEY } from '../constants/authConstant';

const initialUser = localStorage.getItem(AUTH_KEY) ? JSON.parse(localStorage.getItem('user')) : null;

const slice = createSlice({
  name: AUTH_KEY,
  initialState: {
    user: initialUser,
    userId: '',
  },
  reducers: {
    loginPending: (state) => {
      state.loginPending = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loginSuccess = true;
      state.loginPending = false;
    },
    loginError: (state) => {
      state.loginError = true;
      state.loginPending = false;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem(AUTH_KEY);
    },
    getUser: (state, action) => {
      state.userId = action.payload.data.email;
    },
  },
});

export default slice.reducer;

const { loginPending, loginError, loginSuccess, getUser, logoutSuccess } = slice.actions;

export const getUserFn = (userId) => async (dispatch) => {
  try {
    dispatch(getUser(userId));
  } catch (err) {
    return console.log(err);
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  console.log('login -> email, password ', email, password);
  try {
    dispatch(loginPending());
    const result = await loginApi({ email, password });
    console.log('login -> result', result);
    dispatch(loginSuccess({ email, password }));
    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify({
        expired: parseFloat(result.data.expire) * 1000 + Date.now(),
        token: result.data.token,
      }),
    );
  } catch (err) {
    dispatch(loginError());
    return console.error(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    return dispatch(logoutSuccess());
  } catch (err) {
    return console.log(err);
  }
};
