import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createHistory();

const initialState = {};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [];
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  };
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ];
  const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  return {
    ...createStore(
      connectRouter(history)(rootReducer),
      initialState,
      composeEnhancers),
    runSaga: sagaMiddleware.run(rootSaga),
  }
};

export default configureStore;

