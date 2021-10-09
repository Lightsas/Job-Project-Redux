import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Launcheslist from '../launcheslist/Launcheslist';
import Search from '../search/Search';

function Home() {
    return (
        <div className={'mt-5'} >
            <Search></Search>
            <Container className={'mt-5'} fluid>
                <Launcheslist></Launcheslist>
            </Container>
        </div>
    );
}

export default Home;