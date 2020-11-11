import { Dispatch } from 'redux';
import { AlertActions, SET_ALERT, CLEAR_ALERT } from './alert.types';

export const setAlert = (msg: string, type: string) => async (dispatch: Dispatch<AlertActions>) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, type },
  });
  setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
};
