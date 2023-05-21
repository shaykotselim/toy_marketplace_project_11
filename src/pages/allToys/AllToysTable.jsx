import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AllToysTable = ({ product}) => {
//   const { user } = useContext(AuthContext);

  const { _id, sellerName, title, price,  subCategory, _quantity } = product;

  return (
    <tr className="border py-4">
      <td>
        <div className="flex items-center gap-3">
          <div className=" px-2 flex flex-col">
             <p className="text-xl text-orange-300 font-bold">{sellerName}</p>
          </div>
        </div>
      </td>
      <td>
        <div className=" py-4">
         
          {/* <div className="">
            <img className="h-[100px] w-[150px]" src={image} alt="" />
          </div> */}
          <div className="flex mt-1 flex-col">
            
             <p className="text-xl">{title}</p> 
           
          </div>
        </div>
      </td>

      <td>
        <div className="flex flex-col">  
            <p className="text-xl">{subCategory}</p>
        
        </div>
      </td>
      <td>
        <div className="flex flex-col">
            <p className="text-xl">${price}</p>
        </div>
      </td>
      <td>
      <div className="flex flex-col">
            <p className="text-xl">{_quantity}</p>
        </div>
      </td>
      <td>
        <Link to={`/view-details/${_id}`}><Button> View Details</Button></Link>
      </td>
    </tr>
  );
};

export default AllToysTable;