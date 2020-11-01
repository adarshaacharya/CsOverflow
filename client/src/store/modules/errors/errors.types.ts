export const SET_ERRORS = '@@/auth/SET_ERRORS';
export const CLEAR_ERRORS = '@@/auth/CLEAR_ERRORS';

export interface ErrorState {
  error: string | null;
}

interface SetErrorsAction {
  type: typeof SET_ERRORS;
  payload: string;
}

export type ErrorActions = SetErrorsAction;
