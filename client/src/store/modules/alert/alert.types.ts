export const SET_ALERT = '@@/auth/SET_ALERT';
export const CLEAR_ALERT = '@@/auth/CLEAR_ALERT';
export type Msg = 'success' | 'error';

export interface AlertState {
  msg: string | null;
  type: Msg | null;
}

interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: {
    msg: string;
    type: Msg;
  };
}

interface ClearAlertAction {
  type: typeof CLEAR_ALERT;
}

export type AlertActions = SetAlertAction | ClearAlertAction;
