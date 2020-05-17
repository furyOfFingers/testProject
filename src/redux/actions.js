import { SIGNIN_OR_LOGIN, HIDE_LOGIN_FORM, CHANGE_PATH } from './types';

/** Диспатчит экшен для изменения значения Signin или Login. */
export function changeButtonAuth() {
  return {
    type: SIGNIN_OR_LOGIN,
  };
}

/** Диспатчит экшен для изменения признака отображения формы авторизации. */
export function hideLoginForm() {
  return {
    type: HIDE_LOGIN_FORM,
  };
}

export function changePath(path) {
  return {
    type: CHANGE_PATH,
    payload: path,
  };
}
