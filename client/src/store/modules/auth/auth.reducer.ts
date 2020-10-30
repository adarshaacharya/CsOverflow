import { AuthActions, AuthState, IUser, REGISTER_SUCCESS, USER_LOADED } from './auth.types';

const initialState: AuthState = {
  token: localStorage.getItem('csoverflow:token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload!,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload!, // payload = token
        isAuthenticated: true,
        loading: false,
      };

    default:
      return state;
  }
};
