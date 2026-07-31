import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { servicesReducer } from './reducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(servicesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);