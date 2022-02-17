
import {
    SET_SYSTEM_STATE,
    SystemState,
    SystemAction
} from './types';


const INITIAL_STATE: SystemState = {
    snackbarMessage: '',
    snackbarOpen: false,
    snackbarType: 'error',
    redirectTo: '',
    interceptors: { requestId: -1, responseId: -1 },
    openDrawer: false,
    activeRoute: 'Home'
}

const systemReducers = (state = INITIAL_STATE, action: SystemAction): SystemState => {
    switch (action.type) {
        case SET_SYSTEM_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default systemReducers;
