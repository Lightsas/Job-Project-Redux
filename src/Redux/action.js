import * as types from "./actionTypes";
import axios from "axios";

const fetchLaunchesStart = () => ({
    type: types.FETCH_LAUNCHES_START
});

const fetchLaunchesSuccess = (launches) => ({
    type: types.FETCH_LAUNCHES_SUCCESS,
    payload: launches
});

const fetchLaunchesFail = (error) => ({
    type: types.FETCH_LAUNCHES_FAIL,
    payload: error,
});


const fetchSingleLaunchesStart = () => ({
    type: types.GET_SINGLE_LAUNCHES_START
});

const fetchSingleLaunchesSuccess = (launches) => ({
    type: types.GET_SINGLE_LAUNCHES_SUCCESS,
    payload: launches
});

const fetchSingleLaunchesFail = (error) => ({
    type: types.GET_SINGLE_LAUNCHES_FAIL,
    payload: error,
});

export function fetchLaunches() {
    return function (dispatch) {
        dispatch(fetchLaunchesStart());
        axios.get("https://api.spacexdata.com/v3/launches").then((response) => {
            const launches = response.data;
            dispatch(fetchLaunchesSuccess(launches))
        }).catch((error) => {
            dispatch(fetchLaunchesFail(error))
        })
    }
}
