import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './modules/combine-reducer';

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

