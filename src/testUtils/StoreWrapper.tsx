import { ComponentType, ReactNode } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import authReducers from '../store/auth/reducers';
import systemReducers from '../store/system/reducers';
import shopReducers from '../store/shop/reducers';
import aboutReducers from '../store/about/reducers';
import newsReducers from '../store/news/reducers';
import promotionReducers from '../store/promotion/reducers';
import homeReducers from '../store/home/reducers';

const combinedReducers = combineReducers({
    auth: authReducers,
    system: systemReducers,
    shop: shopReducers,
    about: aboutReducers,
    news: newsReducers,
    promotion: promotionReducers,
    home: homeReducers,
});

export const createTestReduxStore = () => createStore(combinedReducers, applyMiddleware(thunk));
export const createTestReduxWrapper = (store: ReturnType<typeof createTestReduxStore>, component: ReactNode, routePath?: string, routeValue?: string) => mount(
    <Provider store={store}>
        {routePath && routeValue ?
            <Router initialEntries={[routeValue]} initialIndex={0}>
                <Switch>
                    <Route path={routePath} component={component as ComponentType} />
                </Switch>
            </Router>
        : component}
    </Provider>
)
