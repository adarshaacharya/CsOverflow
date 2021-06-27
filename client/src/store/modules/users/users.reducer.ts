import { UsersActions, UsersState, UsersActionTypes } from './users.types';

const initialState: UsersState = {
  users: [],
  user: null,
  loading: true,
  error: null,
};

export const usersReducer = (state: UsersState = initialState, action: UsersActions): UsersState => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case UsersActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case UsersActionTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
