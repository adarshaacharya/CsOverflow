export const SET_ALERT = '@@/auth/SET_ALERT';
export const CLEAR_ALERT = '@@/auth/CLEART_ALERT';

export interface AlertState {
  error: string | null;
}

interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

interface ClearAlertAction {
  type: typeof CLEAR_ALERT;
}

export type AlertActions = SetAlertAction | ClearAlertAction;
