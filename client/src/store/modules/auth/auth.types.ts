export const REGISTER_SUCCESS = '@@/auth/REGISTER_SUCCESS';
export const LOGIN_SUCESS = '@@/auth/LOGIN_SUCESS';
export const AUTH_ERROR = '@@/auth/AUTH_ERROR';
export const USER_LOADED = '@@/auth/USER_LOADED';
export const LOGOUT = '@@/auth/LOGOUT';

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

// interface AuthActionType<T, P> {
//   readonly type: T;
//   payload?: P;
// }

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

export type AuthActions = AuthErorAction | UserLoadedAction | RegisterSuccessAction | LoginSuccessAction | LogOutAction;

// export type AuthActions =
//   | AuthActionType<typeof AUTH_ERROR, null>
//   | AuthActionType<typeof USER_LOADED, IUser>
//   | AuthActionType<typeof REGISTER_SUCCESS, string>
//   | AuthActionType<typeof REGISTER_FAIL, null>
//   | AuthActionType<typeof LOGOUT, null>;
