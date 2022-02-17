import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import VivaHeader from '../VivaHeader';
import VivaFooter from '../VivaFooter';
import { shallow } from 'enzyme'
import VivaCarousel from '../VivaCarousel'
import VivaAboutUs from '../../home/fragments/VivaAboutUs';
import VivaOurClasses from '../../home/fragments/VivaOurClasses';
import VivaOurTeachers from '../../home/fragments/VivaOurTeachers';


describe('Common Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the Viva Header', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaHeader, '/home', '/home');
        expect(wrapper).toBeTruthy();
    }),

    it('Renders the carousel', () => {
        const wrapper = shallow(<VivaCarousel images={[]} numberOfSlidesToShow={1} onSlideClick={() => {}}/>)
        expect(wrapper).toBeTruthy();
    }),

    it('Renders about section', () => {
        const wrapper = shallow(<VivaAboutUs/>)
        expect(wrapper).toBeTruthy();
    }),

    it('Renders our classes section', () => {
        const wrapper = shallow(<VivaOurClasses/>)
        expect(wrapper).toBeTruthy();
    }),

    it('Renders our teachers section', () => {
        const wrapper = shallow(<VivaOurTeachers />)
        expect(wrapper).toBeTruthy();
    }),

    it('Renders the Viva Footer', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, VivaFooter, '/home', '/home');
        expect(wrapper).toBeTruthy();
    })
})