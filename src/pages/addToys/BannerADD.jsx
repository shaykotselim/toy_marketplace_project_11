import React from 'react';
import banners from "../../assets/banner/banners.jpg"
const BannerADD = () => {
    return (
        <div>
            <img className='w-full h-[300px]' src={banners} alt="" />
        </div>
    );
};

export default BannerADD;