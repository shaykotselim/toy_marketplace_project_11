import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SingIn from "../pages/authentication/signIn/SingIn";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import SignUp from "../pages/authentication/signUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<PageNotFound/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/sign-in',
            element: <SingIn/>
        }, 
        {
          path:'/sign-up',
          element:<SignUp/>
        }
      ]
    },
  ]);

  export default router;