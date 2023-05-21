import React from 'react';
import pageNot from "../../assets/gallary/404.avif"
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className='mt-32'>
            <div className='flex justify-center'>
            <img src={pageNot} alt="" />
            </div>
            <div className='flex justify-center m-8'>
            <Link to="/">
            <Button>Back to Home</Button>
            </Link>
            </div>
        </div>
    );
};

export default PageNotFound;