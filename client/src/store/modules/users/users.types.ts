import { IUser } from '../auth/auth.types';

export const GET_USER = '@@/auth/GET_USER';
export const GET_USERS = '@@/auth/GET_USERS';
export const USER_ERROR = '@@/auth/USER_ERROR';

interface GetUsersAction {
  type: typeof GET_USERS;
  payload: IUser[];
}

interface GetUserAction {
  type: typeof GET_USER;
  payload: IUser;
}

interface UserError {
  type: typeof USER_ERROR;
  payload: string;
}

export type UsersActions = GetUsersAction | GetUserAction | UserError;
