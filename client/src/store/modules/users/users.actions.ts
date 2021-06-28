import { Dispatch } from 'redux';
import Api from 'store/api';
import { UsersActionTypes, UsersActions } from './users.types';

export const getUsers = () => async (dispatch: Dispatch<UsersActions>) => {
  try {
    const { data } = await Api.get('/users');
    dispatch({
      type: UsersActionTypes.GET_USERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UsersActionTypes.USER_ERROR,
      payload: error,
    });
  }
};

export const getUserById = (id: string) => async (dispatch: Dispatch<UsersActions>) => {
  try {
    const { data } = await Api.get(`/users/${id}`);
    dispatch({
      type: UsersActionTypes.GET_USER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UsersActionTypes.USER_ERROR,
      payload: error,
    });
  }
};
