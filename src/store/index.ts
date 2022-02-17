import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import authReducers from './auth/reducers'
import systemReducers from './system/reducers'
import promotionReducer from './promotion/reducers';
import homeReducer from './home/reducers';
import shopReducer from './shop/reducers';
import teacherReducer from './teacher/reducers';
import aboutReducer from './about/reducers';
import productCategoryReducer from './productCategory/reducers';
import newsReducer from './news/reducers';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['isLoggedIn']
}

const systemPersistConfig = {
    key: 'system',
    storage,
    whitelist: ['session']
}

const combinedReducers = combineReducers({
    auth: persistReducer(authPersistConfig, authReducers),
    system: persistReducer(systemPersistConfig, systemReducers),
    promotion: promotionReducer,
    home: homeReducer,
    shop: shopReducer,
    teacher: teacherReducer,
    about: aboutReducer,
    productCategory: productCategoryReducer,
    news: newsReducer,
});

export type AppState = ReturnType<typeof combinedReducers>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    AnyAction
> | void;

export const store = createStore(combinedReducers, applyMiddleware(thunk));
export const persistor = persistStore(store);
