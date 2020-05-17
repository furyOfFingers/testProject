import { SIGNIN_OR_LOGIN, HIDE_LOGIN_FORM, SHOW_LOGIN_FORM } from './types';

const initialState = {
  isSigninOrLogin: false,
  isLoginForm: true
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_OR_LOGIN:
      return { ...state, isSigninOrLogin: !state.isSigninOrLogin };
    case HIDE_LOGIN_FORM:
      return { ...state, isLoginForm: false };
    case SHOW_LOGIN_FORM:
      return { ...state, isLoginForm: true };
    default:
      return state;
  }
};
