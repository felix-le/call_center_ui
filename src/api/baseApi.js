import axios from 'axios';
import { AUTH_KEY } from '../constants/authConstant';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

axiosInstance.interceptors.request.use((request) => {
  const authData = localStorage.getItem(AUTH_KEY);

  if (authData) {
    const { token } = JSON.parse(authData);
    request.headers['Authorization'] = 'Bearer' + token;
  }
  if (!request.headers['Content-Type']) {
    request.headers['Content-Type'] = 'application/json';
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem(AUTH_KEY);
    }
    return Promise.reject(response);
  }
);

function encodeData(params) {
  const keys = Object.keys(params);
  if (keys.length === 0) {
    return '';
  }
  return keys
    .filter((key) => params[key])
    .map((item) => [item, params[item]].map(encodeURIComponent).join('='))
    .join('&');
}

const makeQuerySlug = (endpint, params) => {
  const queryURL = encodeData(params);
  return `${endpoint}${queryURL ? '?' + queryURL : ''}`;
};

export { makeQuerySlug, axiosInstance };
