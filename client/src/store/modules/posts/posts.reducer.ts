import { PostsActions, PostsState, PostsActionTypes } from './posts.types';

const initialState: PostsState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
};

export const postsReducer = (state: PostsState = initialState, action: PostsActions): PostsState => {
  switch (action.type) {
    case PostsActionTypes.GET_POSTS:
    case PostsActionTypes.GET_TOP_POSTS:
    case PostsActionTypes.GET_TAG_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case PostsActionTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    case PostsActionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };

    case PostsActionTypes.UPDATE_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    case PostsActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== +action.payload),
        loading: false,
      };

    case PostsActionTypes.POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
