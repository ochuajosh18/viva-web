export type NewsInputType = string | number | boolean | News | Array<News>;

export interface NewsInputInterface<T> {
    [key: string]: T
}

export interface News {
    id: string;
    title: string;
    content: string;
    isFeatured: boolean;
    isActive: boolean;
    image: string;
    dateCreated: string;
    dateUpdated: string;
}

export interface NewsState {
    news: Array<News>
}

export const SET_NEWS_STATE = 'set_news_state';

export interface setNewsStateAction {
    type: typeof SET_NEWS_STATE;
    payload: NewsInputInterface<NewsInputType>;
}

export type NewsAction = setNewsStateAction;