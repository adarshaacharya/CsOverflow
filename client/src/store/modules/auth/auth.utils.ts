import Api from 'store/api';
import * as storage from 'lib/utils/storage';
import { CSOVERFLOW_TOKEN } from 'lib/constants';

export const setAuthToken = (token: string | null) => {
  if (token) {
    Api.defaults.headers.common['x-auth-token'] = token;
    storage.set(CSOVERFLOW_TOKEN, token);
  } else {
    delete Api.defaults.headers.common['x-auth-token'];
    storage.remove(CSOVERFLOW_TOKEN);
  }
};
