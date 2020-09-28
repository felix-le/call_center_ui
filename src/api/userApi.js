import { axiosInstance } from './baseApi';

export async function getUserProfile() {
  return axiosInstance.get('/user/profile');
}
