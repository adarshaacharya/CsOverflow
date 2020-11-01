import { AuthActions, AuthState, REGISTER_SUCCESS, USER_LOADED } from './auth.types';

const initialState: AuthState = {
  token: localStorage.getItem('cstoken'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthActions)  => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload, // token will be set on local storage by create-store.ts subscription listener
        isAuthenticated: true,
        loading: false,
      };

    default:
      return state;
  }
};
