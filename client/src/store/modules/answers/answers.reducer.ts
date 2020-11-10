import { stat } from 'fs';
import { ADD_ANSWER, AnswerActions, AnswersState, ANSWER_ERROR, DELETE_ANSWER, GET_ANSWERS } from './answers.types';

const initialState: AnswersState = {
  answers: [],
  loading: true,
  error: null,
};

export const answersReducer = (state: AnswersState = initialState, action: AnswerActions): AnswersState => {
  switch (action.type) {
    case GET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
        loading: false,
      };

    case ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
        loading: false,
      };

    case DELETE_ANSWER:
      return {
        ...state,
        answers: state.answers.filter(answer => answer.id !== action.payload),
        loading: false,
      };

    case ANSWER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
