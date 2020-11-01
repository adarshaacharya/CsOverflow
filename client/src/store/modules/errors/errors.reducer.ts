import { ErrorActions, ErrorState, SET_ERRORS } from './errors.types';

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

    default:
      return state;
  }
};
