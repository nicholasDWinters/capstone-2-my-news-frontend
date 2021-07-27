import alertReducer from "./alertReducer";
import { ADD_ALERT, CLEAR_ALERT } from "./actionTypes";

describe('alert reducer tests', () => {
    const INITIAL_STATE = { alert: {} };
    const expectedState = { alert: { message: 'testing alert', color: 'danger' } };

    it('initial state works', () => {
        const action = { type: 'dummy_action' };
        expect(alertReducer(undefined, action)).toEqual(INITIAL_STATE);
    });

    it('modifies alert state', () => {
        const action = { type: ADD_ALERT, alert: { message: 'testing alert', color: 'danger' } };
        expect(alertReducer(undefined, action)).toEqual(expectedState);
    })

    it('clears alert state', () => {
        const action = { type: CLEAR_ALERT };
        expect(alertReducer(undefined, action)).toEqual(INITIAL_STATE);
    })
})