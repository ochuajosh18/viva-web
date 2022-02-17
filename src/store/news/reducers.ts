import {
    SET_NEWS_STATE,
    NewsState,
    NewsAction
} from './types';

const INITIAL_STATE: NewsState = {
    news: []
}

const newsReducer = (state = INITIAL_STATE, action: NewsAction): NewsState => {
    switch (action.type) {
        case SET_NEWS_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default newsReducer;