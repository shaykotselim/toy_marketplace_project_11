import React from 'react';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <h1>This is Home</h1>
            <button className="btn btn-active btn-secondary">Button</button>
        </div>
    );
};

export default Home;