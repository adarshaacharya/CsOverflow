import Api from 'store/api';

export const setAuthToken = (token: string) => {
  if (token) {
    Api.defaults.headers.common['x-auth-tokne'] = token;
    localStorage.setItem('cstoken', token);
  } else {
    delete Api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('cstoken');
  }
};
