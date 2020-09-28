import { axiosInstance } from './baseApi';

export function loginApi({ username, password }) {
  return axiosInstance.post('/auth/login', {
    email: username,
    password,
  });
}
