import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../Redux/rootReducer';
import rootSaga from '../Sagas/Sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history))
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
