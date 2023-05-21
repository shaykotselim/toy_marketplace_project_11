import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, Typography, CardBody } from "@material-tailwind/react";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);

  // loading data here---------------------------------------
  const url = `https://toy-marketplace-server-sigma.vercel.app/products?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, []);
//---------------------------------------------------------
  const handleDelete = id =>{
    const proceed = confirm("Are You Sure You Want to Delete?")
    if(proceed){
        fetch(`https://toy-marketplace-server-sigma.vercel.app/products/${id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remaining = mytoys.filter(mytoy=> mytoy._id !== id);
                setMytoys(remaining)
            }
        })
    }
}
 const handleConfirm = id =>{
    fetch(`https://toy-marketplace-server-sigma.vercel.app/products/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
     })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            // update state
            const remaining = mytoys.filter(mytoy => booking._id !== id);
            const updated = mytoys.find(mytoy => mytoy._id === id);
            updated.status = 'confirm'
            const newProducts = [updated, ...remaining];
            setMytoys(newProducts); 
        }
    } )
 }
  //Table Area --------------------------------
  const TABLE_HEAD = [
    "Seller-Details",
    "Name of Product & Image ",
    "Category & Rating",
    "Price & Quantity",
    "Delete",
    "Update",
  ];

  return (
    <div className="px-8">
        <div>
            <img src="" alt="" />
        </div>
      <div className="border-b-4 mt-8 border-black">
        <h1 className="text-center text-3xl font-bold">
         Added <span className="text-blue-400">My-Toys</span>
        </h1>
      </div>

      <Card className="  ">
        <CardBody className=" overflow-x-scroll  px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="py-4">
              {mytoys.map((mytoy) => (
                <MyToysTable
                handleConfirm={handleConfirm}
                handleDelete={handleDelete}
                mytoy={mytoy} key={mytoy._id}>
                 
                </MyToysTable>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyToys;
