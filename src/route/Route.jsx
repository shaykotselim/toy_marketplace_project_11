import {createBrowserRouter,} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SingIn from "../pages/authentication/signIn/SingIn";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import SignUp from "../pages/authentication/signUp/SignUp";
import AddHome from "../pages/addToys/AddHome";
import MyToys from "../pages/myToys/MyToys";
import PrivetRoute from "./PrivetRoute";
import AllToys from "../pages/allToys/AllToys";
import Blog from "../pages/blog/Blog";

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
          path:'/blog',
          element:<Blog/>
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
          path:'/all-toys',
          element:<AllToys/>
        },
        {
          path:'/my-toys',
          element:<PrivetRoute><MyToys/></PrivetRoute>
        },
        // {
        //   path:'/view-details/:id',
        //   element:<PrivetRoute><ViewDetails/></PrivetRoute>,
        //   loader: ({params})=fetch(`https://toy-marketplace-server-sigma.vercel.app/products/${params.id}`)
        // }

      ]
    },
  ]);

  export default router;