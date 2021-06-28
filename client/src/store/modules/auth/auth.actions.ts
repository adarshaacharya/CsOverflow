import { Dispatch } from 'redux';
import { AppThunk } from 'store';
import Api from 'store/api';
import { setAlert } from '../alert/alert.actions';
import { AuthActionTypes, ISignInData, ISignupData } from './auth.types';

// load user after signin on every page render to check if user has been authorized with jwt
// put the token in global header from localstorage (if there's any) so auth middleware will check
// if there is any (x-auth-token) in req.header
export const loadUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading());
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

export const registerUser = (formData: ISignupData) => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const {
      data: { token },
    } = await Api.post('/users', formData);
    dispatch({
      type: AuthActionTypes.REGISTER_SUCCESS,
      payload: token,
    });
    dispatch(loadUser());
    dispatch(setAlert("You've successfully signed up.", 'success'));
  } catch (error) {
    dispatch(setAlert(error.response.data.error, 'error'));
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
    });
  }
};

export const loginUser = (formData: ISignInData): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const {
      data: { token },
    } = await Api.post('/auth', formData);
    dispatch({
      type: AuthActionTypes.LOGIN_SUCESS,
      payload: token,
    });
    dispatch(loadUser());
    dispatch(setAlert("You've successfully signed up.", 'success'));
  } catch (error) {
    dispatch(setAlert(error.response.data.error, 'error'));
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
    });
  }
};

export const logOut = () => async (dispatch: Dispatch) => {
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
