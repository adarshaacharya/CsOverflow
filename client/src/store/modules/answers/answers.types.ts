export const GET_ANSWERS = '@@/answers/GET_ANSWERS';
export const ANSWER_ERROR = '@@/answers/ANSWER_ERROR';
export const DELETE_ANSWER = '@@/answers/DELETE_ANSWER';
export const ADD_ANSWER = '@@/answers/ADD_ANSWER';

export interface IAnsUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface IAnswer {
  id: number;
  body: string;
  postId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: IAnsUser;
}

export interface AnswersState {
  answers: IAnswer[];
  loading: boolean;
  error: {} | null;
}

interface GetAnswersAction {
  type: typeof GET_ANSWERS;
  payload: IAnswer[];
}
interface AddAnswerAction {
  type: typeof ADD_ANSWER;
  payload: IAnswer;
}
interface DeleteAnswerAction {
  type: typeof DELETE_ANSWER;
  payload: number;
}
interface PostErrorAction {
  type: typeof ANSWER_ERROR;
  payload: string;
}

export type AnswerActions = GetAnswersAction | AddAnswerAction | DeleteAnswerAction | PostErrorAction;
