import React from 'react';
import math1 from "../../../assets/gallary/math1.jpg"
import math2 from "../../../assets/gallary/math2.png"
import science1 from "../../../assets/gallary/science1.jpg"
import science2 from "../../../assets/gallary/science2.png"
import engineering1 from "../../../assets/gallary/engineering1.png"
import engineering2 from "../../../assets/gallary/engineering2.jpg"
import abacus3 from "../../../assets/gallary/abacus3.jpg"


import { PhotoAlbum } from 'react-photo-album';
// import PhotoAlbum from './PhotoAlbum';

const Gallary = () => {
    const photos = [
        {src:engineering1, width:800, height:800},
        {src:abacus3, width:1200, height:600},
        {src:science1, width:800, height:800},
        {src:math1, width:1200, height:600},
        {src:engineering2, width:800, height:800},
        {src:science2, width:1200, height:600},
        {src:math2, width:800, height:800},
        
        
    ]
   
    return (
        <div className='container mx-auto'>
            <div data-aos="flip-down" className=' p-16'>
            <p className='text-center text-3xl font-bold text-black p-2'>Science & Engineering Kits Gallery</p>
                <p className='mx-auto text-center text-black lg:w-2/4'>The science and engineering kit gallery offers a diverse range of educational resources. From model kits of famous experiments to DIY circuit building kits, these hands-on tools engage learners in understanding electrical engineering, robotics, and more. </p>
            </div>
            <div className='container mx-auto'>
            {
                <PhotoAlbum layout="rows"
                    photos={photos}
                ></PhotoAlbum>
            }
           
 
            </div>
        </div>
    );
};

export default Gallary;