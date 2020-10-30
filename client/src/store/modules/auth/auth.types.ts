export const REGISTER_SUCCESS = '@@/auth/REGISTER_SUCCESS';
export const REGISTER_FAIL = '@@/auth/REGISTER_FAIL';
export const USER_LOADED = '@@/auth/USER_LOADED';
export const AUTH_ERROR = '@@/auth/AUTH_ERROR';
export const LOGIN_SUCESS = '@@/auth/LOGIN_SUCESS';
export const LOGIN_FAIL = '@@/auth/LOGIN_FAIL';
export const LOGOUT = '@@/auth/LOGOUT';

export interface AuthState {
  token: string;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: IUser | null;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

interface AuthActionType<T, P> {
  readonly type: T;
  payload?: P;
}

export type AuthActions = AuthActionType<typeof REGISTER_SUCCESS, null>;
