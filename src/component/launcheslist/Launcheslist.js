import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchLaunches } from "../../Redux/action"

function Launcheslist() {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLaunches());
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default Launcheslist;