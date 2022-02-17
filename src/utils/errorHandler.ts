import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store';
import { SET_SYSTEM_STATE } from '../store/system/types';

interface ValidationError {
    property: string;
    value: string;
    message: string;
}

interface GenericError {
    message?: string
}

const errorHandler = (e: unknown, dispatch: ThunkDispatch<AppState, unknown, AnyAction>) => {
    const err = e as { response?: AxiosResponse<{ data: Array<ValidationError> | GenericError }> };
    if (err.response && err.response.data) {
        const { data } = err.response;
        if (Array.isArray(data)) {
            dispatch({
                type: SET_SYSTEM_STATE,
                payload: { snackbarOpen: true, snackbarType: 'error', snackbarMessage: data[0].message}
            })
        }
        else if (typeof data === 'string') {
            // generic error
            dispatch({
                type: SET_SYSTEM_STATE,
                payload: { snackbarOpen: true, snackbarType: 'error', snackbarMessage: 'Unknown error. Please contact the administrator' }
            })
        }
        else {
            dispatch({
                type: SET_SYSTEM_STATE,
                payload: { snackbarOpen: true, snackbarType: 'error', snackbarMessage: (data as GenericError).message}
            })
        }
    }
}

export default errorHandler;