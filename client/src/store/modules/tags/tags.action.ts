import { Dispatch } from 'redux';
import Api from 'store/api';
import { GET_TAGS, TagsAction, TAG_ERROR } from './tags.types';

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
