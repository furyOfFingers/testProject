import { combineReducers } from 'redux';
// import { authReducer } from './authReducer';
import { pathReducer } from './pathReducer';
import { loaderReducer } from './Loader/LoaderReducer';
import { layoutErrorReducer } from './Layout/LayoutReducer';
import { authorizationReducer } from './Authorization/AuthorizationReducer';
import { routerReducer } from './Router/RouterReducer';
import errorHandlerRootReducer from "./ErrorHandler/errorHandlerRootReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  authorization: authorizationReducer,
  loader: loaderReducer,
  layout: layoutErrorReducer,
  error: errorHandlerRootReducer,
});

export default rootReducer;
