import { Dispatch } from 'redux';
import Api from 'store/api';
import { GET_USER, GET_USERS, UsersActions, USER_ERROR } from './users.types';

export const getUsers = () => async (dispatch: Dispatch<UsersActions>) => {
  try {
    const { data } = await Api.get('/users');

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};

export const getUserById = (id: string) => async (dispatch: Dispatch<UsersActions>) => {
  try {
    const { data } = await Api.get(`/users/${id}`);

    dispatch({
      type: GET_USER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};
