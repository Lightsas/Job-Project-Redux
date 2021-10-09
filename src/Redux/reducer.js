import * as types from "./actionTypes";

const initialState = {
    launches: [],
    loading: false,
    error: null
};

const launchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_LAUNCHES_START:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: action.payload
            };
        case types.FETCH_LAUNCHES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }; 
        default:
            return state;
    }
};

export default launchesReducer;