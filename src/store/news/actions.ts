import {
    SET_NEWS_STATE,
    NewsAction,
    NewsInputType,
    NewsInputInterface
} from './types';
import { AppThunk } from '..';
import axios from 'axios';
import errorHandler from '../../utils/errorHandler';
const API_URL = process.env.REACT_APP_API_URL as string;

export const setNewsState = (newState: NewsInputInterface<NewsInputType>): NewsAction => ({
    type: SET_NEWS_STATE,
    payload: newState
})

export const getNews = (criteria?: object): AppThunk => async (dispatch) => {
    try{
        dispatch({
            type: SET_NEWS_STATE,
            payload: {}
        })

        const newsRes = await axios.get(`${API_URL}news`, {
            params: criteria
        });

        if (newsRes.status === 200) {
            dispatch({
                type: SET_NEWS_STATE,
                payload: { news: newsRes.data }
            })
        } 
    }
    catch (e) {
        errorHandler(e, dispatch);
    }
    finally {
        dispatch({
            type: SET_NEWS_STATE,
            payload: {}
        })
    }
}