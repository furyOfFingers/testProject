import { ERROR_HANDLER_LOGIN } from './Consts';

const initialState = {
  errorHandlerText: null,
};

const loginErrorHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_HANDLER_LOGIN:
      return { ...state, errorHandlerText: action.payload };
    default:
      return state;
  }
};

export default loginErrorHandlerReducer;
