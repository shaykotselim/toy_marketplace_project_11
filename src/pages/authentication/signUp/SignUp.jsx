import React, { useContext, useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { FcGoogle } from 'react-icons/fc';
  import { Link } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {googleSignIn,createUserEmail,profileUpdate} = useContext(AuthContext);
    const [error, setError]=useState('')
    const handleSignUp =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;
        console.log(name, email, password, photo_url);
        
        createUserEmail(email, password)
        .then(result =>{
            const loggedUser = result.user;
            profileUpdate(result.user,name, photo_url)
            Swal.fire({
              icon: 'success',
              title: 'Congratulations',
              text: 'Register Successfully!',
             
            })
            redirectToHomePage()
            setError(loggedUser);
        })
        .then(error=>{
            setError(error.message)
        })
      }
      const  redirectToHomePage= ()=>{
        window.location.href ='/'
      }
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            // setError("Registration Successfully");
            Swal.fire({
              icon: 'success',
              title: 'Congratulations',
              text: 'Google Login Successfully!',
             
            })
            redirectToHomePage()
        })
        .catch(error=>{
            setError(error.message);
        })
      }
    return (
        <div className="container text-center">
      <Card className="px-8 lg:px-[470px]" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up Please!!!
        </Typography>
        <p className="text-red-500">{error}</p>
        <form onSubmit={handleSignUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            
            <Input name="name" size="lg" label="Name" />
            <Input name="email" size="lg" label="Email" />
            <Input name="photo_url" size="lg" label="Photo-Url" />
            <Input name="password" type="password" size="lg" label="Password" />
          </div>
          
          <Button type="submit" className="mt-6 bg-blue-500" fullWidth>
            Register
          </Button>
          
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
        <Button onClick={handleGoogleSignIn}  className='mt-2 mb-4 bg-blue-500 flex justify-center items-center gap-1 text-xl' fullWidth>
            <span><FcGoogle/></span><span>Sign Up With Google</span> 
        </Button>
      </Card>
    </div>
    );
};

export default SignUp;