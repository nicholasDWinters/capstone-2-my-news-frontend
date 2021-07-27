import userReducer from "./userReducer";
import {
    LOGIN, REGISTER, SET_USER, LOGOUT
} from "./actionTypes";

describe('user reducer tests', () => {
    const INITIAL_STATE = { user: '', token: '' };
    const setUserState = { user: 'nick', token: '' };
    const tokenState = { user: '', token: 'fakeToken' };
    const user = { username: 'nick', password: 'fakePass', email: 'blah@gmail.com' };



    it('initial state works', () => {
        const action = { type: 'dummy_action' };
        expect(userReducer(undefined, action)).toEqual(INITIAL_STATE);
    });

    it('will set user', () => {
        const action = { type: SET_USER, data: user.username };
        expect(userReducer(undefined, action)).toEqual(setUserState);
    })

    it('will allow register action, adds token to state', () => {
        const action = { type: REGISTER, token: 'fakeToken' };
        expect(userReducer(undefined, action)).toEqual(tokenState);
    })

    it('will allow login - adds token to state', () => {
        const action = { type: LOGIN, token: 'fakeToken' };
        expect(userReducer(undefined, action)).toEqual(tokenState);

    })

    it('logout will remove token from state', () => {
        const action = { type: LOGIN, token: 'fakeToken' };
        userReducer(undefined, action);
        const action2 = { type: LOGOUT };
        expect(userReducer(undefined, action2)).toEqual(INITIAL_STATE);

    })

})