import { SIGNIN_OR_LOGIN, HIDE_LOGIN_FORM, LOGOUT, LOGIN_SUCCESS, AUTH_SUCCESS/* , ERROR_HANDLE, SUCCESS_HANDLE */ } from './Consts';

const initialState = {
  isSigninOrLogin: false,
  isLoginForm: true,
  isAuth: false,
  // error: null,
  // success: null
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_OR_LOGIN:
      return { ...state, isSigninOrLogin: !state.isSigninOrLogin };
    case AUTH_SUCCESS:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    // case ERROR_HANDLE:
    //   console.log('ERROR_HANDLE', action.payload)
    //   return { ...state, error: action.payload };
    // case SUCCESS_HANDLE:
    //   console.log('SUCCESS_HANDLE', action.payload)
    //   return { ...state, success: action.payload };
    default:
      return state;
  }
};
