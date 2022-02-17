
import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaProduct from '../productDetails/index';


describe('Product Details Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva Shop', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaProduct, '/shop/:name', '/shop/Product%20I');
        expect(wrapper).toBeTruthy();
    })

})