
import {
    Card,
    Input,
    
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const AddToys = () => {
   const {user} = useContext(AuthContext);
//    const {displayName} = user
    const handleAddProduct =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const category = form.category.value;
        const photo_url = form.photo_url.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const addProduct = {
            sellerName:name,
            email,
            title:product, 
            subCategory:category,
            price:price,
            image:photo_url,
            rating:rating,
            details:description,
        }
        console.log(addProduct);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                    'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })
      }
   
    return (
    <div className="container mx-auto mt-8 text-center">
    
        <div className="px-4 lg:px-80">
        <p className="text-2xl flex justify-center font-bold border-black border-b-4 "> Add Your Products </p>
        </div>
    
        <form onSubmit={handleAddProduct} className="mt-8 mb-2  ">
          <div className=" mb-4 w-full">
            
           <div className='px-4 lg:flex lg:mt-4 lg:gap-4'>
           <Input name="name" defaultValue={user.displayName} readOnly className='p-2 flex mt-4 lg:mt-0' size="lg" label="Enter Seller Name"/>
            <Input name="email" defaultValue={user.email} readOnly className='p-2 flex mt-4 lg:mt-0' size="lg" label="Enter Your Email"/>
           </div>
           <div className='px-4 lg:flex lg:mt-4 lg:gap-4'>
            <Input name="product" className='p-2 flex mt-4 lg:mt-0' size="lg" label="Name of Product"/>
            <Input name="price" className='p-2 flex mt-4 lg:mt-0' size="lg" label="Product Price"/>
           </div>
           <div className='px-4 lg:flex lg:mt-4 gap-4'>
           <Input name="category" className='p-2 flex mt-4 lg:mt-0' size="lg" label="Sub-Category"/>
            <Input name="photo_url" className='p-2 flex mt-4 lg:mt-0' size="lg" label="Enter Your Photo url"/>
           </div>
           <div className='px-4 lg:flex lg:mt-4 gap-4'>
           <Input name="rating" className='p-2 flex mt-4 lg:mt-0' size="lg" label="Enter Product Rating"/>
           <Input name="quantity" className='p-2 flex mt-4 lg:mt-0' size="lg" label="Enter Available Quantity"/>
           </div>
            <div className='px-4 lg:mt-4 3'>
            <Textarea name="description" className='p-2 flex mt-4' label="Enter Your Product Description"/>
            </div>
            
          </div>

          <Button type="submit" className="mt-6 p-4 w-11/12 lg:w-36  bg-blue-500">
            Add Product
          </Button>
          
         
        </form>
      
    </div>
    );
};

export default AddToys;