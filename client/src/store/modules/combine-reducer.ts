import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  replaceMe: () => 'hi there',
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
