import { combineReducers } from "redux";
import userReducer from './userReducer';
import articleReducer from './articleReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({ userReducer, articleReducer, alertReducer });

export default rootReducer;