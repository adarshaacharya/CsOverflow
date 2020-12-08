import { Dispatch } from 'redux';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import { DISLIKE_POST, DISLIKE_POST_ERROR, LikeActions, LIKE_POST, LIKE_POST_ERROR } from './likes.types';

export const likePost = (id: string) => async (dispatch: Dispatch<LikeActions>) => {
  try {
    const { data } = await Api.post(`/posts/like/${id}`);

    dispatch({
      type: LIKE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));

    dispatch({
      type: LIKE_POST_ERROR,
      payload: error,
    });
  }
};

export const dislikePost = (id: string) => async (dispatch: Dispatch<LikeActions>) => {
  try {
    await Api.post(`/posts/dislike/${id}`);

    dispatch({
      type: DISLIKE_POST,
    });
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));

    dispatch({
      type: DISLIKE_POST_ERROR,
      payload: error,
    });
  }
};
