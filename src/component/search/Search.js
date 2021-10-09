import React, { useRef } from 'react';
import {fetchSearchLaunches} from "../../Redux/action";
import {useDispatch} from "react-redux";
import { Form } from 'react-bootstrap';

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
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" ref={searchValue} name="name" id="name" onChange={searchLaunches}></input>
            </Form>
        </div>
    );
}

export default Search;