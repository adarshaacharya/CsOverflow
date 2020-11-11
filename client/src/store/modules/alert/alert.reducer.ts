import { CLEAR_ALERT, AlertActions, AlertState, SET_ALERT } from './alert.types';

const initialState: AlertState = {
  error: null,
};

export const errorReducer = (state: AlertState = initialState, action: AlertActions): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ALERT:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
