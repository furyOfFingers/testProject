import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { pathReducer } from './pathReducer';

export const rootReducer = combineReducers({
  authorization: authReducer,
  path: pathReducer
});
