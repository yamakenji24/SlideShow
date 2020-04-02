import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// reducer
import rootReducer from '../reducers';

// Redux-saga
import rootSaga from '../sagas';

export default function configureStore(room_id) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga, room_id);
  return store;
}
