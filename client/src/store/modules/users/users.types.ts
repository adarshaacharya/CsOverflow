export enum UsersActionTypes {
  GET_USER = '@@/auth/GET_USER',
  GET_USERS = '@@/auth/GET_USERS',
  USER_ERROR = '@@/auth/USER_ERROR',
}

interface IPost {
  id: number;
  title: string;
  createdAt: string;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  posts: IPost[];
}

export interface UsersState {
  users: IUser[];
  user: IUser | null;
  loading: boolean;
  error: {} | null;
}

interface GetUsersAction {
  type: UsersActionTypes.GET_USERS;
  payload: IUser[];
}

interface GetUserAction {
  type: UsersActionTypes.GET_USER;
  payload: IUser;
}

interface UserErrorAction {
  type: UsersActionTypes.USER_ERROR;
  payload: string;
}

export type UsersActions = GetUsersAction | GetUserAction | UserErrorAction;
