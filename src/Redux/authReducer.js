import { HIDE_LOGIN_FORM, SHOW_LOGIN_FORM, LOGOUT, LOGIN_SUCCESS } from './types';

const initialState = {
  isSigninOrLogin: false,
  isLoginForm: true,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOGIN_FORM:
      return { ...state, isLoginForm: false };
    case SHOW_LOGIN_FORM:
      return { ...state, isLoginForm: true };
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
