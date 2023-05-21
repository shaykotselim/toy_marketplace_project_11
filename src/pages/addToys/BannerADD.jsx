import React from 'react';
import banners from "../../assets/banner/banners.jpg"
const BannerADD = () => {
    return (
        <div>
            <img  className='w-full h-[400px] object-cover' src={banners} alt="" />
        </div>
    );
};

export default BannerADD;