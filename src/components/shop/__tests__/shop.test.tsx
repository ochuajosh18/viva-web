
import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaShop from '../index';


describe('Shop Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva Shop', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaShop, '/shop', '/shop');
        expect(wrapper).toBeTruthy();
    })

})