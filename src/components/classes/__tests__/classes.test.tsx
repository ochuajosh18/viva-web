import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaClasses from '../index';
import VivaClassDetails from '../fragments/ClassDetails';


describe('Classes Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva Classes', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaClasses, '/classes', '/classes');
        expect(wrapper).toBeTruthy();
    })

    it('Renders the Viva Class Details', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaClassDetails, '/classes/:className', '/classes/test');
        expect(wrapper).toBeTruthy();
    })


})