import {
  GET_CURRENT_USER,
  SIGNIN_OR_LOGIN,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  SIGN_IN,
  LOG_IN,
  LOGOUT,
} from './Consts';

/** Экшен на изменение значения Signin или Login. */
export function changeButtonAuthAction() {
  return {
    type: SIGNIN_OR_LOGIN,
  };
}

/** Экшен на signin.
 *
 * @param {object} formState Данные пользователя для регистрации.
 */
export function signinAction(formState) {
  return {
    type: SIGN_IN,
    authData: formState,
  };
}

/** Экшен на login.
 *
 * @param {object} formState Данные пользователя для входа в учетную запись.
 */
export function loginAction(formState) {
  return {
    type: LOG_IN,
    authData: formState,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}

export function authSuccessAction(isUserAdmin) {
  return {
    type: AUTH_SUCCESS,
    isUserAdmin: isUserAdmin,
  };
}

export function getCurrentUserAction() {
  return {
    type: GET_CURRENT_USER
  };
}
