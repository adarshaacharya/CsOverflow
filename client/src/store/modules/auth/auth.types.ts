// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum AuthActionTypes {
  REGISTER_SUCCESS = '@@/auth/REGISTER_SUCCESS',
  LOGIN_SUCESS = '@@/auth/LOGIN_SUCESS',
  AUTH_ERROR = '@@/auth/AUTH_ERROR',
  USER_LOADED = '@@/auth/USER_LOADED',
  LOGOUT = '@@/auth/LOGOUT',
  SET_LOADING = '@@/auth/SET_LOADING',
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface AuthState {
  readonly token: string | null;
  readonly isAuthenticated: boolean | null;
  readonly loading: boolean;
  readonly user: IUser | null;
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
  type: AuthActionTypes.AUTH_ERROR;
}

interface UserLoadedAction {
  type: AuthActionTypes.USER_LOADED;
  payload: IUser;
}

interface RegisterSuccessAction {
  type: AuthActionTypes.REGISTER_SUCCESS;
  payload: string;
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCESS;
  payload: string;
}

interface LogOutAction {
  type: AuthActionTypes.LOGOUT;
}

interface SetLoadingAction {
  type: AuthActionTypes.SET_LOADING;
}

export type AuthActions =
  | AuthErorAction
  | UserLoadedAction
  | RegisterSuccessAction
  | LoginSuccessAction
  | LogOutAction
  | SetLoadingAction;
