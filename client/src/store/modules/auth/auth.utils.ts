import Api from 'store/api';
import * as storage from 'lib/utils/storage';
import { CSOVERFLOW_TOKEN, X_AUTH_TOKEN } from 'lib/constants';

export const setAuthToken = (token: string | null) => {
  if (token) {
    Api.defaults.headers.common[X_AUTH_TOKEN] = token;
    storage.set(CSOVERFLOW_TOKEN, token);
  } else {
    delete Api.defaults.headers.common[X_AUTH_TOKEN];
    storage.remove(CSOVERFLOW_TOKEN);
  }
};
