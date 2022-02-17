import { createTestReduxStore, createTestReduxWrapper } from '../../../testUtils/StoreWrapper';
import ForgotPassword from '..';
import ChangePassword from '../fragments/ChangePassword';
import jwt from 'jsonwebtoken'
const SAMPLE_SECRET = 'e493f29905f8008c2393243c8cdf370391248a634b3efc3f5c22b981b9be4fac73657a6388225f487245852d8600d48a25e849e176e75f67719b15f2f8b82ec4'

describe('Forgot Password Test Suite', () => {
    let store: ReturnType<typeof createTestReduxStore>;

    it('Renders the forgot password page', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, ForgotPassword, '/forgot-password', '/forgot-password');
        expect(wrapper).toBeTruthy();
    })

    it('Sends forgot password email', () => {
        store = createTestReduxStore();
        const wrapper = createTestReduxWrapper(store, ForgotPassword, '/forgot-password', '/forgot-password');
        wrapper.find('#forgot-password-email').at(0).find('input').simulate('change', { target: { value: 'someone@email.com' }});
        wrapper.find('#submit-btn').at(0).find('button').simulate('click');
        expect(store.getState().auth.forgotPasswordEmail).toEqual('someone@email.com')
        expect(store.getState().auth.loading).toBeTruthy()
    })

    it('Loads the change password token', () => {
        store = createTestReduxStore();
        const changePassToken = jwt.sign({ project: 'viva', firstName: 'John', lastName: 'Doe', redirectUri: 'http://localhost:3038/' }, SAMPLE_SECRET)
        const wrapper = createTestReduxWrapper(store, ChangePassword, '/change-password/:token', `/change-password/${changePassToken}`, );
        expect(wrapper).toBeTruthy();
    })

    it('Allows the user to fill the new password', () => {
        store = createTestReduxStore();
        const changePassToken = jwt.sign({ project: 'viva', firstName: 'John', lastName: 'Doe', redirectUri: 'http://localhost:3038/' }, SAMPLE_SECRET)
        const wrapper = createTestReduxWrapper(store, ChangePassword, '/change-password/:token', `/change-password/${changePassToken}`);
        wrapper.find('#change-pass').at(0).find('input').simulate('change', { target: { value: 'Pass1234' }});
        wrapper.find('#confirm-change-pass').at(0).find('input').simulate('change', { target: { value: 'Pass1234' }});
        const { changeConfirmNewPassword, changeNewPassword } = store.getState().auth;
        expect({ changeConfirmNewPassword, changeNewPassword }).toEqual({ changeConfirmNewPassword: 'Pass1234', changeNewPassword: 'Pass1234' });
    })
})