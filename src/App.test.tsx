import { createTestReduxStore, createTestReduxWrapper } from './testUtils/StoreWrapper';
import App from './App';

describe('App test suite', () => {
    it('Renders the <App />', () => {
        const store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, <App />)
        expect(wrapper).toBeTruthy();
    })
});