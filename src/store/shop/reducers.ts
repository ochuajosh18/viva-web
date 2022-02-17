import {
    SET_PRODUCT_STATE,
    ProductAction, 
    ProductState, 
} from './types';

const INITIAL_STATE: ProductState = {
    products: [],
    loading: false
}

const productReducer = (state = INITIAL_STATE, action: ProductAction): ProductState => {
    switch (action.type) {
        case SET_PRODUCT_STATE: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default productReducer