import {combineReducers} from "redux";
import launchesReducer from "./reducer";

const rootReducer = combineReducers({
    data: launchesReducer,
});

export default rootReducer;