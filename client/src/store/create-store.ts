import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { setAuthToken } from './modules/auth/auth.utils';
import rootReducer from './modules/combine-reducer';

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

// setup store subscription listener so that we can set token in local storage
let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();

  // token state from auth reducer
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token!);
  }

 

});

export default store;
