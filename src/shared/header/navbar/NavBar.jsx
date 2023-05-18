import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import logo2 from "../../../assets/banner/bannar1.jpg";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  //-------------LogOut Area Start------------------
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert('Sign-Out Successfully')
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //_____________Logout Area End______________________
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/"className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }>
          Home
        </NavLink>
      </Typography>
      
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/all-toys"className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }>
          All Toys
        </NavLink>
    </Typography>

    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/blog"className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }>
          Blog
        </NavLink>
    </Typography> */}

      <li className="text-black"><Link to='/'>Home</Link></li>
      <li className="text-black"><Link to="/all-toys">All Toys</Link></li>
      <li className="text-black cursor-pointer"><Link to="/blog">Blog</Link></li>
      {
        user?<li className="text-black"><Link to="/add-toys">Add Toys</Link></li>:''
      }
      {
        user?<li className="text-black"><Link to="/my-toys">My Toys</Link></li>:''
      }
      

    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl shadow-none py-2 px-4 lg:px-4 lg:py-4">
      <div className="container mx-auto flex justify-between items-center sm: text-blue-gray-900">
        <div>
          <Link to="/">
            <img className="w-12" src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex gap-4 lg:items-center lg:gap-4">
          
          <div className="flex gap-4 ml-20 lg:ml-0 items-center">
          {
            user?<img title={user?.displayName} className="w-10 h-10 rounded-full cursor-pointer" src={user?.photoURL}/>:''
          }
         
          {
            user?<Button onClick={handleSignOut}>Sign-out</Button>:<Button ><NavLink to="/sign-in">Sign-In</NavLink></Button> 
          }
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className=" bg-blue-gray-300 p-4 rounded w-1/2">
          {navList}
          {/* {
            user?<Button className="w-full" onClick={handleSignOut}>Sign-out</Button>:''
          } */}
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default NavBar;
