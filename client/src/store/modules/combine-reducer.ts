import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { errorReducer } from './errors/errors.reducer';
import { usersReducer } from './users/users.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer,
  error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
