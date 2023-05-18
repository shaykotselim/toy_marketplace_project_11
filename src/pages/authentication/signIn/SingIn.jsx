import React, { useContext } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SingIn = () => {
  const {signIn} = useContext(AuthContext)
  const handleSignIn=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result=>{
      const user = result.user
      alert('Login Successfully');
      const location = useLocation();
      location.path = '/'
    })
    .catch(error=>{
      alert(error.message)
    })
}

  return (
    <div className="container text-center">
      <Card className="px-8 lg:px-[470px]" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Please Sign In Here
        </Typography>
        <form onSubmit={handleSignIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            
            <Input name="email" size="lg" label="Email" />
            <Input name="password" type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
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
      </Card>
    </div>
  );
};

export default SingIn;
