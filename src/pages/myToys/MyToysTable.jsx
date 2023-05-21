import { Avatar, Button, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { PencilIcon,} from "@heroicons/react/24/solid";
// import Swal from 'sweetalert2'
const MyToysTable = ({ mytoy, handleDelete }) => {
  const { user } = useContext(AuthContext);
  console.log(mytoy);
  const { image, sellerName,title, price, rating, subCategory, _id } = mytoy;
    
  
  
  return (
    <tr className="border py-4">
      <td>
        <div className="flex items-center gap-3">
          <div className="pl-2">
            { user.photoURL && <Avatar  src={user.photoURL} alt={name} size="sm" />}
          </div>
          <div className="flex flex-col">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {user.displayName}
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
              {user.email}
            </Typography>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {/* <Avatar src={img} alt={name} size="sm" /> */}
          <div className="py-8">
          <img className="h-[100px] w-[150px]" src={image} alt="" />
          </div>
          <div className="flex flex-col">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {title}
            </Typography>
          </div>
        </div>
      </td>

      <td>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Sub-Category: {subCategory}
          </Typography>
          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
            Rating: {rating}
          </Typography>
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Price: {price}
          </Typography>
          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
            Quantity: {rating}
          </Typography>
        </div>
      </td>
      <td>
        <Tooltip content="Delete">
          <Button onClick={()=>handleDelete(_id) } className="hover:bg-orange-400 hover:cursor-pointer hover:rounded p-2 text-center font-bold">X</Button>
        </Tooltip>
      </td>
      <td>
        <Tooltip content="Update">
          <IconButton variant="text" color="blue-gray">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
};

export default MyToysTable;
