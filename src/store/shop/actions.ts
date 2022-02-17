import { 
    SET_PRODUCT_STATE,
    ProductAction, 
    ProductInputInterface, 
    ProductInputType 
} from './types';
import { AppThunk } from '..';
import axios from 'axios';
import errorHandler from '../../utils/errorHandler';
const API_URL = process.env.REACT_APP_API_URL as string;

export const setProductState = (newState: ProductInputInterface<ProductInputType>): ProductAction => ({
    type: SET_PRODUCT_STATE,
    payload: newState
})

export const getProducts = (criteria?: object): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_PRODUCT_STATE,
            payload: { loading: true }
        })

        const productsRes = await axios.get(`${API_URL}product`, {
            params: criteria
        });
        if (productsRes.status === 200) {
            dispatch({
                type: SET_PRODUCT_STATE,
                payload: { products: productsRes.data }
            })
        }
    }
    catch (e) {
        errorHandler(e, dispatch)    
    }
    finally {
        dispatch({
            type: SET_PRODUCT_STATE,
            payload: { loading: false }
        })
    }
}
