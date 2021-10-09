import * as types from "./actionTypes";

const initialState = {
    launches: [],
    launche: [],
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


            case types.SEARCH_LAUNCHES_START:
                return {
                    ...state,
                    loading: true,
                };
            case types.SEARCH_LAUNCHES_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    launches: action.payload
                };
            case types.SEARCH_LAUNCHES_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };


            case types.GET_SINGLE_LAUNCHES_START:
                return {
                    ...state,
                    loading: true,
                };
            case types.GET_SINGLE_LAUNCHES_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    launche: action.payload
                };
            case types.GET_SINGLE_LAUNCHES_FAIL:
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