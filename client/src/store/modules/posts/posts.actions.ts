import { history } from 'lib/utils';
import { Dispatch } from 'redux';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import {
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  GET_TAG_POSTS,
  GET_TOP_POSTS,
  IPostCreate,
  PostsActions,
  POST_ERROR,
} from './posts.types';

export const getPosts = () => async (dispatch: Dispatch<PostsActions>) => {
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

export const getTopPosts = () => async (dispatch: Dispatch<PostsActions>) => {
  try {
    const { data } = await Api.get('/posts/top');
    dispatch({
      type: GET_TOP_POSTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.data.error,
    });
  }
};

export const getTagPosts = (tagName: string) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    const {
      data: { posts },
    } = await Api.get(`/posts/tag/${tagName}`);
    dispatch({
      type: GET_TAG_POSTS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};

export const getPostById = (id: string) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    const { data } = await Api.get(`/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};

export const addPost = (formData: IPostCreate) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    console.log(formData);
    const { data } = await Api.post(`/posts`, formData);

    dispatch({
      type: GET_POST,
      payload: data,
    });

    dispatch<any>(setAlert('Question asked successfully', 'success'));
    dispatch<any>(getPosts());
    history.push('/posts');
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};

export const deletePost = (id: string) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    await Api.delete(`/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    history.push('/posts');
    dispatch<any>(setAlert('Posts deleted successfully', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
