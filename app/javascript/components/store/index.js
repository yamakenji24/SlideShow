import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// reducer
import rootReducer from '../reducers';

// Redux-saga
import rootSaga from '../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  //sagaMiddleware.run(rootSaga, App.cable);
  sagaMiddleware.run(rootSaga, "testing");
  return store;
}
