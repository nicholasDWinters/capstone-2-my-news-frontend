import {
    ADD_ALERT, CLEAR_ALERT
} from "./actionTypes";

const INITIAL_STATE = { alert: {} };

function alertReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ALERT:
            return { ...state, alert: { ...action.alert } };
        case CLEAR_ALERT:
            return { alert: {} };
        default:
            return state;
    }
}

export default alertReducer;