import {
    SET_PROMOTION_STATE,
    PromotionAction, 
    PromotionState, 
} from './types';

const INITIAL_STATE: PromotionState = {
    promotions: [],
    loading: false
}

const promotionReducer = (state = INITIAL_STATE, action: PromotionAction): PromotionState => {
    switch (action.type) {
        case SET_PROMOTION_STATE: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default promotionReducer