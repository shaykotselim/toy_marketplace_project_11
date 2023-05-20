import React from 'react';
import Banner from './banner/Banner';
import Gallary from './gallary/Gallary';
import CallToActions from './CallToAction';
import About from './about/About';
import ShopByCategory from './shopByCategory/ShopByCategory';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallary/>
            <ShopByCategory/>
            <CallToActions/>
            <About/>
        </div>
    );
};

export default Home;