import { AUTH_KEY } from '../constants/authConstant';

export function checkLoginToken(token) {
  if (localStorage.getItem(AUTH_KEY)) {
    return true;
  }
  return false;
}
