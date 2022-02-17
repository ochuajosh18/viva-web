import {
    HomeState,
    HomeAction,
    SET_HOME_STATE, 
} from './types';

const INITIAL_STATE: HomeState = {
    activeSlide: 1,
    carouselModalOpen: false
}

const homeReducer = (state = INITIAL_STATE, action: HomeAction): HomeState => {
    switch (action.type) {
        case SET_HOME_STATE: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default homeReducer