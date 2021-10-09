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


const fetchSearchLaunchesStart = () => ({
    type: types.SEARCH_LAUNCHES_START
});

const fetchSearchLaunchesSuccess = (launches) => ({
    type: types.SEARCH_LAUNCHES_SUCCESS,
    payload: launches
});

const fetchSearchLaunchesFail = (error) => ({
    type: types.SEARCH_LAUNCHES_FAIL,
    payload: error,
});

export function fetchSearchLaunches(searchText) {
    return function (dispatch) {
        dispatch(fetchSearchLaunchesStart());
        axios.get(`https://api.spacexdata.com/v3/launches${searchText}`).then((response) => {
            const launches = response.data;
            dispatch(fetchSearchLaunchesSuccess(launches))
        }).catch((error) => {
            dispatch(fetchSearchLaunchesFail(error))
        })
    }
}

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


export function fetchSingleLaunches(id) {
    return function (dispatch) {
        dispatch(fetchSingleLaunchesStart());
        axios.get(`https://api.spacexdata.com/v3/launches${id}`).then((response) => {
            const launche = response.data;
            dispatch(fetchSingleLaunchesSuccess(launche))
        }).catch((error) => {
            dispatch(fetchSingleLaunchesFail(error))
        })
    }
}