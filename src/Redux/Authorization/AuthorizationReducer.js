import {
  SIGNIN_OR_LOGIN,
  HIDE_LOGIN_FORM,
  LOGOUT,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  SUCCESS_HANDLE,
  SIGN_IN
} from './Consts';

const initialState = {
  isSigninOrLogin: false,
  isLoginForm: true,
  isAuth: false,
  error: null,
  success: null,
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_OR_LOGIN:
      return { ...state, isSigninOrLogin: !state.isSigninOrLogin };
    case AUTH_SUCCESS:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    case SUCCESS_HANDLE:
      return { ...state, success: action.payload };
    case SIGN_IN:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
