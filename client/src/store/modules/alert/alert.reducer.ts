import { CLEAR_ALERT, AlertActions, AlertState, SET_ALERT } from './alert.types';

const initialState: AlertState = {
  msg: null,
  type: null,
};

export const alertReducer = (state: AlertState = initialState, action: AlertActions): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type,
      };

    case CLEAR_ALERT:
      return {
        ...state,
        msg: null,
        type : null
      };

    default:
      return state;
  }
};
