import { ERROR_HANDLER_LOGIN } from './Consts';

/** . */
export function loginErrorHandlerAction(data) {
  console.log('loginErrorHandlerAction', data)
  return {
    type: ERROR_HANDLER_LOGIN,
    error: data
  };
}
