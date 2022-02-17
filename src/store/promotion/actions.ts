import { 
    SET_PROMOTION_STATE,
    PromotionAction, 
    PromotionInputInterface, 
    PromotionInputType 
} from './types';
import { AppThunk } from '..';
import axios, { AxiosResponse } from 'axios';
import errorHandler from '../../utils/errorHandler';
import { SET_SYSTEM_STATE } from '../system/types';

const API_URL = process.env.REACT_APP_API_URL as string;

export const setPromotionState = (newState: PromotionInputInterface<PromotionInputType>): PromotionAction => ({
    type: SET_PROMOTION_STATE,
    payload: newState
})

export const loadPromotions = (location: string): AppThunk => async (dispatch, getState) => {

    try{
        dispatch({
            type: SET_PROMOTION_STATE,
            payload: { loading: true }
        })
        
        const promotionsRes = await axios.get(`${API_URL}promotion`)
        
        if (promotionsRes.status === 200){
            dispatch({
                type: SET_PROMOTION_STATE,
                payload: { promotions: promotionsRes.data }
            })
        }
    }
    catch(e) {
        const err = e as { response?: AxiosResponse };
        if ('response' in err) {
            if (err.response && err.response.status === 404) {
                dispatch({
                    type: SET_SYSTEM_STATE,
                    payload: { snackbarType: 'error', snackbarMessage: 'Invalid change password token', snackbarOpen: true, redirectTo: '/login' }
                })
            }
        }
        else  errorHandler(e, dispatch);
    }
    finally {
        dispatch({
            type: SET_PROMOTION_STATE,
            payload: { loading: false }
        })
    }
       
}

