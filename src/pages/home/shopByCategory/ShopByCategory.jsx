import { Button, } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-sigma.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
      });
  }, []);

  const handleButtonClick = (subCategory) => {
    if (subCategory === "all") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(
        (category) => category.subCategory === subCategory
      );
      setFilteredCategories(filtered);
      console.log(filtered);
    }
  };
 
  return (
    <div className="container mx-auto mt-8">
      <p className="text-center text-3xl font-bold p-4">Shop By Category</p>
      <Tabs>
        <TabList>
          <Tab>
            <Button onClick={() => handleButtonClick("all")}>All</Button>
          </Tab>
          <Tab>
            <Button onClick={() => handleButtonClick("math")}>
              Math-Learning-Toys
            </Button>
          </Tab>
          <Tab>
            <Button onClick={() => handleButtonClick("science")}>
              Science Kit
            </Button>
          </Tab>
          <Tab>
            <Button onClick={() => handleButtonClick("engineering")}>
              Engineering Tools
            </Button>
          </Tab>
        </TabList>

        <div className="container lg:grid gap-4 grid-cols-2 mx-auto">
          {filteredCategories.map((category) => (
            <div className="shadow-xl rounded-xl" key={category.title}>
              <div className="flex justify-center">
                <img
                  className="h-[400px] p-4 w-[600px]"
                  src={category.image}
                  alt=""
                />
              </div>
              <div className="p-4">
                <p className="text-orange-400 text-xl font-bold text-center">
                  {category.title}
                </p>
                <div className="flex justify-center gap-12 py-2 items-center">
                  <p className="font-bold">Price: ${category.price}</p>
                  <p className="flex text-xl items-center">
                    {category.rating}
                    <FaStar className="text-orange-500 text-2xl" />
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button>View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
