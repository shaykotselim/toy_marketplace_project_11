import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import useTitle from '../../../hooks/useTitle';
const ViewDetails = () => {
    useTitle("View details")
    const {id} = useParams();
    const [details, setDetails] = useState();
    const detailsProduct = details?.find((detail)=> detail._id === id);
    console.log(detailsProduct?.image);
    
    useEffect(()=>{
        fetch('https://toy-marketplace-server-sigma.vercel.app/products')
        .then((res)=> res.json())
        .then((data)=>{
            setDetails(data)
        })
    },[id])
    return (
        <div>
            <h1 className='text-3xl text-center font-bold border-b-4 text-orange-500'>View Details</h1>
            <div className='px-4 lg:flex gap-8 justify-center items-center mt-16 mb-16'>
       
             <div>
                   <img className='h-[500px] w-[600px]' src={detailsProduct?.image} alt=""/>
             </div>
          
            <div className='text-xl font-bold'>
                <p>Name OF Seller: {detailsProduct?.sellerName}</p>
                <p>Name OF Product: {detailsProduct?.title}</p>
                <p>Aivilable-Quantity: {detailsProduct?._quantity}</p>
                <p>Price: ${detailsProduct?.price}</p>
                <p className='flex items-center'> <FaStar className="text-orange-500 text-2xl" /> {detailsProduct?.rating}</p>
            </div>
            </div>

        </div>
    );
};

export default ViewDetails;