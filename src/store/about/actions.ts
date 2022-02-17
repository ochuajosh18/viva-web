import axios from 'axios';
import { AppThunk } from '..';
import errorHandler from '../../utils/errorHandler';
import { 
    AboutAction, 
    AboutInputInterface, 
    AboutInputType, 
    SET_ABOUT_STATE
} from './types';
const API_URL = process.env.REACT_APP_API_URL as string;

export const setAboutState = (newState: AboutInputInterface<AboutInputType>): AboutAction => ({
    type: SET_ABOUT_STATE,
    payload: newState
})

export const getAbout = (): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_ABOUT_STATE,
            payload: { loading: true }
        })

        const aboutRes = await axios.get(`${API_URL}about`);

        if (aboutRes.status === 200) {
            dispatch({
                type: SET_ABOUT_STATE,
                payload: { about: aboutRes.data }
            })
        }
    }
    catch (e) {
        errorHandler(e, dispatch)    
    }
    finally {
        dispatch({
            type: SET_ABOUT_STATE,
            payload: { loading: false }
        })
    }
}

