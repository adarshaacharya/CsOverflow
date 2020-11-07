import { GET_POST, GET_POSTS, PostsAction, PostsState } from './posts.types';

const initialState: PostsState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export const postsReducer = (state: PostsState = initialState, action: PostsAction) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
