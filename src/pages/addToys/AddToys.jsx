
import {
    Card,
    Input,
    
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";


const AddToys = () => {
   
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
        console.log(name, email, product, price,category,photo_url,rating,description);
        
       
      }
   
    return (
    <div className="container mx-auto mt-8 text-center">
    
         <p className="text-2xl font-bold"> Add Your Products </p>
    
        <form onSubmit={handleAddProduct} className="mt-8 mb-2  ">
          <div className=" mb-4 w-full">
            
           <div className='p-4 lg:flex gap-4'>
           <Input name="name" className='p-2' size="lg" label="Enter Seller Name"/>
            <Input name="email" className='p-2' size="lg" label="Enter Your Email"/>
           </div>
           <div className='p-4 lg:flex gap-4'>
           <Input name="product" className='p-2' size="lg" label="Name of Product"/>
            <Input name="price" className='p-2' size="lg" label="Product Price"/>
           </div>
           <div className='p-4 lg:flex gap-4'>
           <Input name="category" className='p-2' size="lg" label="Sub-Category"/>
            <Input name="photo_url" className='p-2' size="lg" label="Enter Your Photo url"/>
           </div>
           <div className='p-4 w-1/2'>
           <Input name="rating" className='p-2' size="lg" label="Enter Product Rating"/>
           </div>
            <div className='p-4 w-1/2'>
            <Textarea name="description" className='p-2' label="Enter Your Product Description"/>
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