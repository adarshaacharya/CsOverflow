import Axios from 'axios';
import { UNAUTHORIZED } from 'lib/constants';
import store from './index';
import { LOGOUT } from './modules/auth/auth.types';

const Api = Axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/
Api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.data.status === UNAUTHORIZED) {
      // mesage that came from backend middleware
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default Api;
