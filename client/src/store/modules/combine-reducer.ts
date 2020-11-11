import { combineReducers } from 'redux';
import { answersReducer } from './answers/answers.reducer';
import { authReducer } from './auth/auth.reducer';
import { postsReducer } from './posts/posts.reducer';
import { usersReducer } from './users/users.reducer';
import { alertReducer } from './alert/alert.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer,
  post: postsReducer,
  answer: answersReducer,
  alert: alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
