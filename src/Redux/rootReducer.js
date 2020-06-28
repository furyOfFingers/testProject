import { combineReducers } from 'redux';
// import { authReducer } from './authReducer';
import { pathReducer } from './pathReducer';
import { loaderReducer } from './Loader/LoaderReducer';
import { layoutErrorReducer } from './Layout/LayoutReducer';
import { authorizationReducer } from './Authorization/AuthorizationReducer';
import { testsAndActionsReducer } from './TestsAndQuestions/TestsAndQuestionsReducer';
import { routerReducer } from './Router/RouterReducer';
import testsReducer from './Tests/TestsReducer';
import errorHandlerRootReducer from './ErrorHandler/errorHandlerRootReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  authorization: authorizationReducer,
  loader: loaderReducer,
  layout: layoutErrorReducer,
  error: errorHandlerRootReducer,
  test: testsReducer,
  testsAndQuestions: testsAndActionsReducer,
});

export default rootReducer;
