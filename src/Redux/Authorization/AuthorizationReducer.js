import {
  SIGNIN_OR_LOGIN,
  HIDE_LOGIN_FORM,
  LOGOUT,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  SIGN_IN
} from './Consts';

const initialState = {
  isSigninOrLogin: false,
  isLoginForm: true,
  isAuth: false,
  error: null,
  success: null,
  isAdmin: false
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_OR_LOGIN:
      return { ...state, isSigninOrLogin: !state.isSigninOrLogin };
    case AUTH_SUCCESS:
      return { ...state, isAuth: true, isAdmin: action.isUserAdmin };
    case LOGOUT:
      return { ...state, isAuth: false, isAdmin: false };
    case SIGN_IN:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
