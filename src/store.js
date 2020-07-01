import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);