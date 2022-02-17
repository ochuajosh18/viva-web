export type AuthInputType = string | number | boolean | null

export interface AuthInputInterface<T> {
    [key: string]: T    
}

export interface AuthState {
    username: string;
    password: string;
    rememberMe: boolean;
    captcha: boolean;
    loading: boolean;
    isLoggedIn: boolean;
    loginCaptcha: null | string;
    forgotPasswordEmail: string;
    forgotPasswordSendSuccess: boolean;
    changeNewPassword: string;
    changeConfirmNewPassword: string;
}

export const SET_AUTH_STATE = 'set_auth_state'

export interface SetAuthStateAction {
    type: typeof SET_AUTH_STATE
    payload: AuthInputInterface<AuthInputType>
}

export type AuthAction = SetAuthStateAction