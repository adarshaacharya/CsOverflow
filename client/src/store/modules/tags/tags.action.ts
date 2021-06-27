import { Dispatch } from 'redux';
import Api from 'store/api';
import { TagsAction, TagsActionTypes } from './tags.types';

export const getTag = (tagName: string) => async (dispatch: Dispatch<TagsAction>) => {
  try {
    const { data } = await Api.get(`/tags/${tagName}`);
    dispatch({
      type: TagsActionTypes.GET_TAG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TagsActionTypes.TAG_ERROR,
      payload: error,
    });
  }
};

export const getTags = () => async (dispatch: Dispatch<TagsAction>) => {
  try {
    const { data } = await Api.get('/tags');
    dispatch({
      type: TagsActionTypes.GET_TAGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TagsActionTypes.TAG_ERROR,
      payload: error,
    });
  }
};
