import { 
    SET_PRODUCT_CATEGORY_STATE,
    ProductCategoryAction, 
    ProductCategoryInputInterface, 
    ProductCategoryInputType 
} from './types';
import { AppThunk } from '..';
import axios from 'axios';
import errorHandler from '../../utils/errorHandler';
const API_URL = process.env.REACT_APP_API_URL as string;

export const setProductState = (newState: ProductCategoryInputInterface<ProductCategoryInputType>): ProductCategoryAction => ({
    type: SET_PRODUCT_CATEGORY_STATE,
    payload: newState
})

export const getProductCategories = (criteria?: object): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_PRODUCT_CATEGORY_STATE,
            payload: { productCategoryLoading: true }
        })

        const productsRes = await axios.get(`${API_URL}product-category`, {
            params: criteria
        });
        if (productsRes.status === 200) {
            dispatch({
                type: SET_PRODUCT_CATEGORY_STATE,
                payload: { productCategories: productsRes.data }
            })
        }
    }
    catch (e) {
        errorHandler(e, dispatch)    
    }
    finally {
        dispatch({
            type: SET_PRODUCT_CATEGORY_STATE,
            payload: { productCategoryLoading: false }
        })
    }
}
