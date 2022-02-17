
import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaAbout from '../index';


describe('Shop Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva About Page', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaAbout, '/about', '/about');
        expect(wrapper).toBeTruthy();
    })

})