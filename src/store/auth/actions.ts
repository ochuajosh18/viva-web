import { 
    SET_AUTH_STATE,
    AuthAction, 
    AuthInputInterface, 
    AuthInputType 
} from './types';
import { AppThunk } from '..';
import axios, { AxiosResponse } from 'axios';
import errorHandler from '../../utils/errorHandler';
import { SET_SYSTEM_STATE, User } from '../system/types';
import { setInterceptor } from '../system/actions';
const API_URL = process.env.REACT_APP_API_URL as string;
const API_LOGIN_TOKEN = process.env.REACT_APP_LOGIN_TOKEN as string;
const API_FORGOT_PASSWORD_TOKEN = process.env.REACT_APP_FORGOT_PASSWORD_TOKEN as string;

export const setAuthState = (newState: AuthInputInterface<AuthInputType>): AuthAction => ({
    type: SET_AUTH_STATE,
    payload: newState
})

export const loginUser = (): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_AUTH_STATE,
            payload: { loading: true }
        })
        const { username, password, isLoggedIn, rememberMe  } = getState().auth;        

        // temp before home page
        if (isLoggedIn) {
            dispatch({
                type: SET_AUTH_STATE,
                payload: { isLoggedIn: true }
            })
            dispatch({
                type: SET_SYSTEM_STATE,
                payload: { snackbarType: 'info', snackbarMessage: 'User is already logged in', snackbarOpen: true }
            })
        }
        else {
            const loginRes = await axios.post(`${API_URL}user/login`, { username, password}, {
                headers: {
                    Authorization: `Bearer ${API_LOGIN_TOKEN}`
                }
            }) as AxiosResponse<{ accessToken: string; refreshToken: string; user: User; }>;
    
            if (loginRes.status === 200) {
                localStorage.setItem('rememberMe', rememberMe ? 'true' : 'false');
                localStorage.setItem('username', rememberMe ? username : '');
                dispatch(setInterceptor(loginRes.data.accessToken, loginRes.data.refreshToken) as typeof dispatch)
                dispatch(setAuthState({ isLoggedIn: true }))
                dispatch({
                    type: SET_SYSTEM_STATE,
                    payload: { snackbarType: 'success', snackbarMessage: 'Login Successful', snackbarOpen: true, redirectTo: '/home' }
                })
            }
        }
    }
    catch (e) {
        errorHandler(e, dispatch)    
    }
    finally {
        dispatch({
            type: SET_AUTH_STATE,
            payload: { loading: false }
        })
    }
}

export const logoutUser = (): AppThunk => async (dispatch, getState) => {
    dispatch({
        type: SET_AUTH_STATE,
        payload: { isLoggedIn: false, username: '', password: '' }
    })
    dispatch({
        type: SET_SYSTEM_STATE,
        payload: { session: undefined }
    })
}

export const sendForgotPasswordEmail = (): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_AUTH_STATE,
            payload: { loading: true }
        })
        const { forgotPasswordEmail  } = getState().auth;

        const forgotPassRes = await axios.post(`${API_URL}user/forgot-password`, { email: forgotPasswordEmail }, {
            headers: {
                Authorization: `Bearer ${API_FORGOT_PASSWORD_TOKEN}`
            }
        })

        if (forgotPassRes.status === 200) {
            dispatch({
                type: SET_AUTH_STATE,
                payload: { forgotPasswordSendSuccess: true }
            })
            dispatch({
                type: SET_SYSTEM_STATE,
                payload: {  snackbarType: 'success', snackbarMessage: 'Email sent successfully', snackbarOpen: true }
            })
        }
    }
    catch (e) {
        errorHandler(e, dispatch)    
    }
    finally {
        dispatch({
            type: SET_AUTH_STATE,
            payload: { loading: false }
        })
    }
}


export const changePassword = (email: string, token: string): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_AUTH_STATE,
            payload: { loading: true }
        })
        const { changeNewPassword, changeConfirmNewPassword  } = getState().auth;
        const changePassRes = await axios.post(`${API_URL}user/change-password`, { 
            password: changeNewPassword,
            confirmPassword: changeConfirmNewPassword,
            email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (changePassRes.status === 200) {
            dispatch({
                type: SET_SYSTEM_STATE,
                payload: { snackbarType: 'success', snackbarMessage: 'Your password has been changed', snackbarOpen: true, redirectTo: '/login' }
            })
        }
    }
    catch (e) {
        const err = e as { response?: AxiosResponse };
        if ('response' in err) {
            if (err.response && err.response.status === 404) {
                dispatch({
                    type: SET_SYSTEM_STATE,
                    payload: { snackbarType: 'error', snackbarMessage: 'Invalid change password token', snackbarOpen: true, redirectTo: '/login' }
                })
            }
        }
        else  errorHandler(e, dispatch);
    }
    finally {
        dispatch({
            type: SET_AUTH_STATE,
            payload: { loading: false }
        })
    }
}