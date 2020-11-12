import { Dispatch } from 'redux';
import Api from 'store/api';
import { GET_TAG, GET_TAGS, TagsAction, TAG_ERROR } from './tags.types';

export const getTag = (tagName: string) => async (dispatch: Dispatch<TagsAction>) => {
  try {
    const { data } = await Api.get(`/tags/${tagName}`);
    dispatch({
      type: GET_TAG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAG_ERROR,
      payload: error,
    });
  }
};

export const getTags = () => async (dispatch: Dispatch<TagsAction>) => {
  try {
    const { data } = await Api.get('/tags');
    dispatch({
      type: GET_TAGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAG_ERROR,
      payload: error,
    });
  }
};
