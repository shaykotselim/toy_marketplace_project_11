import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, Typography, CardBody } from "@material-tailwind/react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  // loading data here---------------------------------------
  const url = 'https://toy-marketplace-server-sigma.vercel.app/products';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  //Table Area --------------------------------
  const TABLE_HEAD = [
    "Name of Seller",
    "Name of Product  ",
    "Product Sub Category",
    "Price",
    "Available Quantity",
    "View Details",
  ];

  return (
    <div className="px-8">
        <div>
            <img src="" alt="" />
        </div>
      <div className="border-b-4 mt-8 border-black">
        <h1 className="text-center text-3xl font-bold">
         All <span className="text-blue-400">-Toys</span>
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
              {products.map((product) => (
                <AllToysTable
              
                product={product} key={product._id}>
                 
                </AllToysTable>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllToys;
