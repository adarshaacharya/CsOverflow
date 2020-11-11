import { Dispatch } from 'redux';
import { AlertActions, SET_ALERT, CLEAR_ALERT } from './alert.types';

export const setAlert = (error: string) => async (dispatch: Dispatch<AlertActions>) => {
  dispatch({
    type: SET_ALERT,
    payload: error,
  });
  setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
};
