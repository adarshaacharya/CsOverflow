import { GET_USER, GET_USERS, UsersActions, UsersState, USER_ERROR } from './users.types';

const initialState: UsersState = {
  users: [],
  user: null,
  loading: true,
  error: null,
};

export const usersReducer = (state: UsersState = initialState, action: UsersActions) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }; 

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
