import { combineReducers } from 'redux';
import loginErrorHandlerReducer from './Authorization/Reducer';

const errorHandlerRootReducer = combineReducers({
  loginErrorHandler: loginErrorHandlerReducer
});

export default errorHandlerRootReducer;
