import { Dispatch } from 'redux';
import { ErrorActions, SET_ERRORS } from './errors.types';



export const setAlert = (error : string) => async (dispatch: Dispatch<ErrorActions>) => {
    dispatch({
        type : SET_ERRORS,
        payload : error
    })

}