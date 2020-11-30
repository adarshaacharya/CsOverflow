import { Dispatch } from 'redux';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import { ADD_ANSWER, AnswerActions, ANSWER_ERROR, GET_ANSWERS, IAnswerCreate } from './answers.types';

export const getAnswers = (id: string) => async (dispatch: Dispatch<AnswerActions>) => {
  try {
    const { data } = await Api.get(`/posts/answers/${id}`);
    dispatch({
      type: GET_ANSWERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ANSWER_ERROR,
      payload: error,
    });
  }
};

export const addAnswer = (answer: IAnswerCreate) => async (dispatch: Dispatch<AnswerActions>) => {
  try {
    const { body, postId } = answer;
    const { data } = await Api.post(`/posts/answers/${postId}`, { body });
    dispatch({
      type: ADD_ANSWER,
      payload: data,
    });

    dispatch<any>(getAnswers(postId));
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));

    dispatch({
      type: ANSWER_ERROR,
      payload: error,
    });
  }
};
