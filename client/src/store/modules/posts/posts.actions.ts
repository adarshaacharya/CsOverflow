import { Dispatch } from 'redux';
import Api from 'store/api';
import { GET_POSTS, PostsAction, POST_ERROR } from './posts.types';

export const getPosts = async (dispatch: Dispatch<PostsAction>) => {
  try {
    const { data } = await Api.get('/posts');
    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.data.error,
    });
  }
};
