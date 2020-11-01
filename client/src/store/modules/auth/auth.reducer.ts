import { AuthActions, AuthState, AUTH_ERROR, LOGOUT, REGISTER_SUCCESS, USER_LOADED } from './auth.types';

const initialState: AuthState = {
  token: localStorage.getItem('cstoken'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload, // token will be set on local storage by create-store.ts subscription listener
        isAuthenticated: true,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};
