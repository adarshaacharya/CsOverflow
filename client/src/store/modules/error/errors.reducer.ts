import { CLEAR_ERRORS, ErrorActions, ErrorState, SET_ERRORS } from './errors.types';

const initialState: ErrorState = {
  error: null,
};

export const errorReducer = (state: ErrorState = initialState, action: ErrorActions): ErrorState => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
