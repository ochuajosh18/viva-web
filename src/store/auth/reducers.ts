import {
    SET_AUTH_STATE,
    AuthAction, 
    AuthState, 
} from './types';

const INITIAL_STATE: AuthState = {
    username: '',
    password: '',
    rememberMe: false,
    captcha: false,
    loading: false,
    isLoggedIn: false,
    loginCaptcha: null,
    forgotPasswordEmail: '',
    forgotPasswordSendSuccess: false,
    changeNewPassword: '',
    changeConfirmNewPassword: ''
}

const authReducer = (state = INITIAL_STATE, action: AuthAction): AuthState => {
    switch (action.type) {
        case SET_AUTH_STATE: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default authReducer