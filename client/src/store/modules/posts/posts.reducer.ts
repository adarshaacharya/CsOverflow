import {
  ADD_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  GET_TAG_POSTS,
  GET_TOP_POSTS,
  PostsActions,
  PostsState,
  POST_ERROR,
} from './posts.types';

const initialState: PostsState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
};

export const postsReducer = (state: PostsState = initialState, action: PostsActions): PostsState => {
  switch (action.type) {
    case GET_POSTS:
    case GET_TOP_POSTS:
    case GET_TAG_POSTS:
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

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== +action.payload),
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
