import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { errorReducer } from './errors/errors.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
