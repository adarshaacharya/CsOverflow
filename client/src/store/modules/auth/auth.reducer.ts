import { AuthActions, AuthState, AuthActionTypes } from './auth.types';

const initialState: AuthState = {
  token: localStorage.getItem('cstoken'),
  isAuthenticated: null,
  loading: false,
  user: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload, // token will be set on local storage by create-store.ts subscription listener
        isAuthenticated: true,
        loading: false,
      };

    case AuthActionTypes.LOGIN_SUCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case AuthActionTypes.AUTH_ERROR:
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case AuthActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
