import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
