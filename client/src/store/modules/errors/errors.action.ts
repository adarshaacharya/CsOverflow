import { Dispatch } from 'redux';
import { ErrorActions, SET_ERRORS } from './errors.types';

export const setError = (error: string) => async (dispatch: Dispatch<ErrorActions>) => {
  console.log('error action');

  dispatch({
    type: SET_ERRORS,
    payload: error,
  });
};
