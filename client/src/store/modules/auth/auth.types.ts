export const REGISTER_SUCCESS = '@@/auth/REGISTER_SUCCESS';
export const LOGIN_SUCESS = '@@/auth/LOGIN_SUCESS';
export const AUTH_ERROR = '@@/auth/AUTH_ERROR';
export const USER_LOADED = '@@/auth/USER_LOADED';
export const LOGOUT = '@@/auth/LOGOUT';
export const SET_LOADING = '@@/auth/SET_LOADING';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: IUser | null;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISignupData {
  name: string;
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

interface AuthErorAction {
  type: typeof AUTH_ERROR;
}

interface UserLoadedAction {
  type: typeof USER_LOADED;
  payload: IUser;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: string;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCESS;
  payload: string;
}

interface LogOutAction {
  type: typeof LOGOUT;
}
interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type AuthActions =
  | AuthErorAction
  | UserLoadedAction
  | RegisterSuccessAction
  | LoginSuccessAction
  | LogOutAction
  | SetLoadingAction;
