import {
    AboutState,
    AboutAction,
    SET_ABOUT_STATE, 
} from './types';

const INITIAL_STATE: AboutState = {
    about: [],
    loading: false
}

const aboutReducer = (state = INITIAL_STATE, action: AboutAction): AboutState => {
    switch (action.type) {
        case SET_ABOUT_STATE: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default aboutReducer