import {createBrowserRouter,} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SingIn from "../pages/authentication/signIn/SingIn";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import SignUp from "../pages/authentication/signUp/SignUp";
import AddHome from "../pages/addToys/AddHome";
import MyToys from "../pages/myToys/MyToys";
import PrivetRoute from "./PrivetRoute";
// import AddToys from "../pages/addToys/AddToys";

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
        },
        {
          path:'/add-toys',
          element:<AddHome/>,
          // loader:({params}) => fetch(``)
        },
        {
          path:'/my-toys',
          element:<PrivetRoute><MyToys/></PrivetRoute>
        }

      ]
    },
  ]);

  export default router;