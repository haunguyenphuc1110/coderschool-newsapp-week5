import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {
	getNewsReducer
} from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
	getNews: getNewsReducer
});

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;