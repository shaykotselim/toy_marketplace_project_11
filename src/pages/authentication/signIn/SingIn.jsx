import React, { useContext, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const SingIn = () => {
  const {signIn,googleSignIn} = useContext(AuthContext)
  const [error, setError] = useState("")
  const handleSignIn=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result=>{
      const user = result.user;
      Swal.fire({
        icon: 'success',
        title: 'Congratulations',
        text: 'Login Successfully!',
      })
      redirectToHomePage();
    })
    .catch(error=>{
      setError(error.message)
    })
}
const  redirectToHomePage= ()=>{
  window.location.href ='/'
}
const handleGoogleSignIn=()=>{
  googleSignIn()
  .then(result =>{
    Swal.fire({
      icon: 'success',
      title: 'Congratulations',
      text: 'Google Login Successfully!',
     
    })
    redirectToHomePage();
  })
  .catch(error=>{
      setError(error.message);
  })
}

  return (
    <div className="container text-center">
      <Card className="px-8 lg:px-[470px]" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Please Sign In Here
        </Typography>
        <p className="text-red-500">{error}</p>
        <form onSubmit={handleSignIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            
            <Input name="email" size="lg" label="Email" />
            <Input name="password" type="password" size="lg" label="Password" />
          </div>
         
          <Button type="submit" className="mt-6" fullWidth>
            Sign in 
          </Button>
          
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
        <Button onClick={handleGoogleSignIn}  className='mt-2 mb-4 bg-blue-500 flex justify-center items-center gap-1 text-xl' fullWidth>
            <span><FcGoogle/></span><span>Sign In With Google</span> 
        </Button>
      </Card>
    </div>
  );
};

export default SingIn;
