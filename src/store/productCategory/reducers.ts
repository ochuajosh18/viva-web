import {
    SET_PRODUCT_CATEGORY_STATE,
    ProductCategoryState,
    ProductCategoryAction 
} from './types';

const INITIAL_STATE: ProductCategoryState = {
    productCategories: [],
    productCategoryLoading: false
}

const productCategoryReducer = (state = INITIAL_STATE, action: ProductCategoryAction): ProductCategoryState => {
    switch (action.type) {
        case SET_PRODUCT_CATEGORY_STATE: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default productCategoryReducer