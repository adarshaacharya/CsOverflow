import { combineReducers } from 'redux';
import { answersReducer } from './answers/answers.reducer';
import { authReducer } from './auth/auth.reducer';
import { postsReducer } from './posts/posts.reducer';
import { usersReducer } from './users/users.reducer';
import { alertReducer } from './alert/alert.reducer';
import { tagsReducer } from './tags/tags.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer,
  post: postsReducer,
  answer: answersReducer,
  tag: tagsReducer,
  alert: alertReducer,
});

export default rootReducer;
