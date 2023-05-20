import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import React from "react";
import logo1 from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className=" w-full bg-black p-8">
        <div className="flex justify-center border-b-2 p-2">
            <p className="text-3xl text-white font-bold font-serif">Education & Learning</p>
        </div>
      <div className="container py-8 mx-auto flex justify-around">
        <div className=" items-center">
          <img className="w-[140px] h-[140px] rounded-full" src={logo1} alt="" />
          
        </div>
       

        <div className="lg:grid grid-cols-3 gap-8">
          <div>
            <div>
              <p className="text-white lg:mt-0 mt-8">About Us</p>
              <Link to="/">
                <p className="text-white mt-4">Home</p>
              </Link>
              <Link to="/blog">
                <p className="text-white">Blog</p>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-white mt-8 lg:mt-0">Service</p>
            <p className="text-white mt-4">Math-Learning-Toys</p>
            <p className="text-white">Science Kit</p>
            <p className="text-white">Engineering Tools</p>
          </div>
          <div>
            <p className="text-white mt-8 lg:mt-0">NEWSLETTER</p>
            <div className="mt-4">
              <div className="relative">
                <input
                  className="rounded h-8"
                  type="email"
                  placeholder="Type your email"
                />
              </div>
              <div className="absolute -mt-[32px] ml-36">
                <button className="bg-blue-500 h-8  text-white rounded-r">
                  SignUp
                </button>
              </div>
            </div>
            <p className="text-white mt-4">Follow US</p>
            <div className="flex gap-4 items-center">
              <AiFillFacebook className="text-blue-600 text-3xl" />
              <AiFillYoutube className="text-red-600 text-3xl" />
              <AiFillTwitterCircle className="text-blue-600 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
