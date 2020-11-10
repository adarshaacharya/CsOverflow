import { Dispatch } from 'redux';
import Api from 'store/api';
import { AnswerActions, ANSWER_ERROR, GET_ANSWERS } from './answers.types';

export const getAnswers = (id: string) => async (dispatch: Dispatch<AnswerActions>) => {
  try {
    const { data } = await Api.get(`/api/posts/answers/${id}`);
    dispatch({
      type: GET_ANSWERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ANSWER_ERROR,
      payload: error.response.data.error,
    });
  }
};
