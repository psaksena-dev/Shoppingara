import { createStore, applyMiddleware } from 'redux';
import createSagaNiddleware from 'redux-saga';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaNiddleware();
// let middlewares = [thunk];
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
