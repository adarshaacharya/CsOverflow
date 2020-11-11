import { Dispatch } from 'redux';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import {
  AuthActions,
  AUTH_ERROR,
  ISignInData,
  ISignupData,
  LOGIN_SUCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  USER_LOADED
} from './auth.types';

// load user after signin on every page render to check if user has been authorized with jwt
// put the token in global header from localstorage (if there's any) so auth middleware will check
// if there is any (x-auth-token) in req.header
export const loadUser = () => async (dispatch: Dispatch<AuthActions>) => {
  try {
    const {
      data: { user },
    } = await Api.get('/auth');
    dispatch({
      type: USER_LOADED,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const registerUser = (formData: ISignupData) => async (dispatch: Dispatch<AuthActions>) => {
  try {
    const {
      data: { token },
    } = await Api.post('/users', formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: token,
    });
    dispatch<any>(loadUser());
    dispatch<any>(setAlert("You've successfully signed up.", 'success'));
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const loginUser = (formData: ISignInData) => async (dispatch: Dispatch<AuthActions>) => {
  try {
    const {
      data: { token },
    } = await Api.post('/auth', formData);
    dispatch({
      type: LOGIN_SUCESS,
      payload: token,
    });
    dispatch<any>(loadUser());
    dispatch<any>(setAlert("You've successfully signed up.", 'success'));
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logOut = () => async (dispatch: Dispatch<AuthActions>) => {
  dispatch({
    type: LOGOUT,
  });
};
