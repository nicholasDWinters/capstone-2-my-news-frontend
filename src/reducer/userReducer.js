import { LOGIN, REGISTER, SET_USER } from "./actionTypes";

const INITIAL_STATE = { user: {}, token: '' }

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.token };
        case REGISTER:
            return { ...state, token: action.token };
        case SET_USER:
            return { ...state, user: { ...action.data } };

        default:
            return state;
    }
}

export default userReducer;