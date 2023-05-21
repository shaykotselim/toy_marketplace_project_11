import React from 'react';
import Banner from './banner/Banner';
import Gallary from './gallary/Gallary';
import CallToActions from './CallToAction';
import About from './about/About';
import ShopByCategory from './shopByCategory/ShopByCategory';
import useTitle from '../../hooks/useTitle';


const Home = () => {
    useTitle('Home')
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