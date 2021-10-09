import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function Search() {
    return (
        <div>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div>
    );
}

export default Search;