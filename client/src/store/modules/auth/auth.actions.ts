import { Dispatch } from 'redux';
import { AppThunk } from 'store';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import { AlertActions } from '../alert/alert.types';
import { AuthActions, ISignInData, ISignupData, AuthActionTypes } from './auth.types';

// load user after signin on every page render to check if user has been authorized with jwt
// put the token in global header from localstorage (if there's any) so auth middleware will check
// if there is any (x-auth-token) in req.header
export const loadUser = () => async (dispatch: Dispatch<AuthActions>) => {
  try {
    dispatch<any>(setLoading());
    const {
      data: { user },
    } = await Api.get('/auth');
    dispatch({
      type: AuthActionTypes.USER_LOADED,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
    });
  }
};

export const registerUser = (formData: ISignupData) => async (dispatch: Dispatch<AuthActions>) => {
  try {
    dispatch<any>(setLoading());
    const {
      data: { token },
    } = await Api.post('/users', formData);
    dispatch({
      type: AuthActionTypes.REGISTER_SUCCESS,
      payload: token,
    });
    dispatch<any>(loadUser());
    dispatch<any>(setAlert("You've successfully signed up.", 'success'));
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
    });
  }
};

export const loginUser = (formData: ISignInData): AppThunk => async (dispatch: Dispatch<AuthActions>) => {
  try {
    dispatch<any>(setLoading());
    const {
      data: { token },
    } = await Api.post('/auth', formData);
    dispatch({
      type: AuthActionTypes.LOGIN_SUCESS,
      payload: token,
    });
    dispatch<any>(loadUser());
    dispatch<any>(setAlert("You've successfully signed up.", 'success'));
  } catch (error) {
    dispatch<any>(setAlert(error.response.data.error, 'error'));
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
    });
  }
};

export const logOut = () => async (dispatch: Dispatch<AuthActions>) => {
  setLoading();
  dispatch({
    type: AuthActionTypes.LOGOUT,
  });
};

export const setLoading = () => {
  return {
    type: AuthActionTypes.SET_LOADING,
  };
};
