import React from 'react';
import abacus1 from "../../../assets/gallary/abacus1.jpg"
import abacus2 from "../../../assets/gallary/abacus2.jpg"
import abacus3 from "../../../assets/gallary/abacus3.jpg"
import bike from "../../../assets/gallary/bike.jpg"
import blacksmith from "../../../assets/gallary/blacksmith.jpg"
import bolts from "../../../assets/gallary/bolts.jpg"
import calculator from "../../../assets/gallary/calculator.jpg"
import carnes from "../../../assets/gallary/cranes.jpg"
import education from "../../../assets/gallary/education.jpg"
import hook from "../../../assets/gallary/hook.jpg"
import musician from "../../../assets/gallary/musician.jpg"
import musician2 from "../../../assets/gallary/musician2.jpg"
import nuts from "../../../assets/gallary/nuts.jpg"
import pocket from "../../../assets/gallary/pocket.jpg"

 import welding from "../../../assets/gallary/welding.jpg"
import { PhotoAlbum } from 'react-photo-album';
// import PhotoAlbum from './PhotoAlbum';


const Gallary = () => {
    const photos = [
        {src:abacus1, width:800, height:600},
        {src:abacus2, width:1600, height:900},
        {src:abacus3, width:1200, height:900},
        {src:bike, width:1600, height:900},
        {src:blacksmith, width:1400, height:800},
        {src:bolts, width:900, height:400},
        {src:calculator, width:1900, height:1200},
        {src:carnes, width:1600, height:900},
        {src:education, width:600, height:900},
        {src:hook, width:1600, height:900},
        {src:musician, width:800, height:900},
        {src:musician2, width:1600, height:900},
        {src:nuts, width:1600, height:900},
        {src:pocket, width:600, height:900},
        {src:welding, width:1600, height:900},
    ]
    return (
        <div>
            <div className=' p-16'>
            <p className='text-center text-3xl font-bold text-black p-2'>Science & Engineering Kits Gallery</p>
                <p className='mx-auto text-center text-black w-2/4'>The science and engineering kit gallery offers a diverse range of educational resources. From model kits of famous experiments to DIY circuit building kits, these hands-on tools engage learners in understanding electrical engineering, robotics, and more. </p>
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