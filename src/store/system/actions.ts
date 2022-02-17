import {
    SET_SYSTEM_STATE,
    SystemInputInterface,
    SystemInputType,
    SystemAction
} from './types';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppThunk, persistor } from '..';
import { SET_AUTH_STATE } from '../auth/types';
const API_URL = process.env.REACT_APP_API_URL as string;

export const setSystemState = (newState: SystemInputInterface<SystemInputType>): SystemAction => ({
    type: SET_SYSTEM_STATE,
    payload: newState
})

export const systemRedirect = (to: string): SystemAction => ({
    type: SET_SYSTEM_STATE,
    payload: { redirectTo: to }
})

export const setInterceptor = (updatedToken?: string, updatedRefreshToken?: string): AppThunk => async (dispatch, getState) => {
    const { system } = getState();
    const reqInterceptor = axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            const { session } = system;
            if (session && !updatedToken) {
                config.headers!['Authorization'] = `Bearer ${session.accessToken}`;
                return config;
            }

            if (config.url === `${API_URL}user/login`) {
                const { REACT_APP_LOGIN_TOKEN } = process.env
                config.headers!['Authorization'] = `Bearer ${REACT_APP_LOGIN_TOKEN}`;
                return config;
            }
            config.headers!['Authorization'] = `Bearer ${updatedToken}`;
            return config;
        }
    );

    const resInterceptor = axios.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error: AxiosError) => {
            const origReq: any = error.config;
            const { session } = getState().system;
            if (error.response?.status === 401 && origReq.url === `${API_URL}user/refresh-token`) {
                dispatch({
                    type: SET_SYSTEM_STATE,
                    payload: { snackbarOpen: true, snackbarMessage: 'Session expired. Please login again.', snackbarType: 'error' }
                });
                return Promise.reject(error);
            }

            if (error.response?.status === 401 && !origReq.retry && session) {
                origReq.retry = true;
                const instance = axios.create({
                    headers: {
                        Authorization: `Bearer ${session.refreshToken}`
                    }
                });
                return instance.post(`${API_URL}user/refresh-token`, {
                    user: session.user,
                    accessToken: updatedToken ? updatedToken : session.accessToken,
                    refreshToken: updatedRefreshToken ? updatedRefreshToken : session.refreshToken
                })
                .then<AxiosResponse<{ accessToken: string; refreshToken: string; }>>(async (res) => {
                    if (res.status === 201 || res.status === 200) {
                        const session = getState().system.session;
                        dispatch({
                            type: SET_SYSTEM_STATE,
                            payload: { session: { ...session, accessToken: res.data.accessToken }}
                        });
                        dispatch(resetAxiosInterceptors() as typeof dispatch);
                        axios.interceptors.request.eject(reqInterceptor);
                        axios.interceptors.response.eject(resInterceptor);
                        dispatch(setInterceptor(res.data.accessToken, session?.refreshToken) as typeof dispatch);
                        await persistor.flush();
                        console.log("Refreshed session")
                    }
                    origReq.retry = false; 
                    return axios(origReq);
                })
                .catch((err) => {
                    dispatch({
                        type: SET_SYSTEM_STATE,
                        payload: { session: undefined }
                    });
                    dispatch({
                        type: SET_AUTH_STATE,
                        payload: { isLoggedIn: false }
                    })
                    return Promise.reject(err)
                })
            }
            return Promise.reject(error);
        }
    )

    dispatch({ 
        type: SET_SYSTEM_STATE, 
        payload: {
            interceptors: {
                requestId: reqInterceptor,
                responseId: resInterceptor
            }
        }
    });
    
};

export const resetAxiosInterceptors = (updatedToken?: string): AppThunk => async (dispatch, getState) => {
    const { interceptors }  = getState().system;
    if (interceptors) {
        axios.interceptors.request.eject(interceptors.requestId);
        axios.interceptors.response.eject(interceptors.responseId);
        console.log("Cleared axios interceptors", interceptors, axios.interceptors);
    }
    
    if (updatedToken) dispatch(setInterceptor(updatedToken) as typeof dispatch);
}
