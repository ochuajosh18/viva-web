
import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaHome from '../index';


describe('Home Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva Home', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaHome, '/home', '/home');
        expect(wrapper).toBeTruthy();
    })

})