import React from 'react';
import Launcheslist from '../launcheslist/Launcheslist';
import Search from '../search/Search';

function Home() {
    return (
        <div>
            <Search></Search>
            <Launcheslist></Launcheslist>
        </div>
    );
}

export default Home;