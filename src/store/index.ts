import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { initialState } from './initialState';
import { reducer } from './reducer';
import { saga } from './sagas'

const sagaMiddleware = createSagaMiddleware();
const compose = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(reducer, initialState, compose);

sagaMiddleware.run(saga);
