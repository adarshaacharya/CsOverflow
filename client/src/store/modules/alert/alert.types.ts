export const SET_ALERT = '@@/auth/SET_ALERT';
export const CLEAR_ALERT = '@@/auth/CLEART_ALERT';

export interface AlertState {
  msg: string | null;
  type: string | null;
}

interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: {
    msg: string;
    type: string;
  };
}

interface ClearAlertAction {
  type: typeof CLEAR_ALERT;
}

export type AlertActions = SetAlertAction | ClearAlertAction;
