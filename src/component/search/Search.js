import React, { useRef } from 'react';
import {fetchSearchLaunches} from "../../Redux/action";
import {useDispatch} from "react-redux";

function Search() {

    const searchValue = useRef();

    let dispatch = useDispatch();
    const searchLaunches = () => {
        dispatch(fetchSearchLaunches(searchValue.current.value));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            {/* <InputGroup size="sm">
                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup> */}
            <form onSubmit={handleSubmit}>
                <input type="text" ref={searchValue} name="name" id="name" onChange={searchLaunches}></input>
            </form>
        </div>
    );
}

export default Search;