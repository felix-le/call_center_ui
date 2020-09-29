import { axiosInstance } from './baseApi';

export function loginApi({ email, password }) {
  return axiosInstance.post('/auth/login', {
    email: email,
    password: password,
  });
}
