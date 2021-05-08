import { history } from 'lib/utils';
import { Dispatch } from 'redux';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import {
  DELETE_POST,
  DISLIKE_POST,
  GET_POST,
  GET_POSTS,
  GET_TAG_POSTS,
  GET_TOP_POSTS,
  IPostCreate,
  IPostEdit,
  LIKE_POST,
  PostsActions,
  POST_ERROR,
  UPDATE_POST,
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
      payload: error,
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
      payload: error,
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

export const updatePost = (id: string, formData: IPostEdit) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    const { data } = await Api.put(`/posts/${id}`, formData);

    dispatch({
      type: UPDATE_POST,
      payload: data,
    });

    dispatch<any>(setAlert('Question updated successfully', 'success'));
    dispatch<any>(getPostById(id));
    history.push(`/posts/${id}`);
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

export const likePost = (id: string) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    const { data } = await Api.post(`/posts/like/${id}`);

    dispatch({
      type: LIKE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));

    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};

export const dislikePost = (id: string) => async (dispatch: Dispatch<PostsActions>) => {
  try {
    const { data } = await Api.post(`/posts/dislike/${id}`);
    dispatch({
      type: DISLIKE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));

    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
