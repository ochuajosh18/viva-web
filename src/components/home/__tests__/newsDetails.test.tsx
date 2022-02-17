
import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaNews from '../newsDetails/index';


describe('News Details Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva News', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaNews, '/articles/:title', '/articles/Test%20News');
        expect(wrapper).toBeTruthy();
    })

})