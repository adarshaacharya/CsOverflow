import { Dispatch } from 'redux';
import { CLEAR_ALERT, Msg, SET_ALERT } from './alert.types';

export const setAlert = (msg: string, type: Msg) => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, type },
  });
  setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
};
