import React from 'react';

import aboutImg from '../../../assets/about/about.jpg'
import mission from '../../../assets/about/mission.png'
import vision from '../../../assets/about/vision.png'
import values from '../../../assets/about/values.png'
import { BsArrowRightCircle } from "react-icons/bs";


const About = () => {
    return (
        <div>
            <section className="container mx-auto px-4">

                <div className="sm:md:flex justify-evenly gap-20 items-center py-20">
                    <div className="w-full md:w-1/2">
                    <img className='rounded' src={aboutImg} alt="" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <div>
                            <h3 className="text-4xl text-indigo-800 font-medium ">Who We Are</h3>

                            <p className="mt-8 text-2xl">Our kits provide hands-on experiments, interactive activities, and educational resources to explore scientific concepts and engineering principles. They promote critical thinking, problem-solving, and a deep understanding of STEM subjects.</p>

                            <ul className="mt-8 text-1xl">
                                <li className="flex gap-4 mb-4 items-center"><BsArrowRightCircle />Education Learning</li>
                                <li className="flex gap-4 mb-4 items-center"><BsArrowRightCircle />Competitive Pricing</li>
                                <li className="flex gap-4 mb-4 items-center"><BsArrowRightCircle />Time Saving</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <div className="mb-20">
                
            </div>

            <div className="container mx-auto px-4">
                <div className="sm:md:flex gap-10 pb-10">

                    <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-light-blue-300 duration-300  bg-gradient-to-r from-primary to-secondary text-neutral-content">
                        <div className="items-center p-4 text-left">
                            <h2 className=" text-3xl text-center text-white">Our Mission </h2>
                            <div className='flex justify-center p-4'>
                            <img className='h-[200px] w-[200px] rounded-full' src={mission} alt="" />
                            </div>
                            <p className="text-white">Our mission is to empower individuals of all ages to explore the wonders of the natural world, understand fundamental scientific concepts, and develop problem-solving skills experiments.</p>
                        </div>
                    </div>
                    <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-light-blue-300 duration-300  card  bg-gradient-to-r from-primary to-secondary text-neutral-content">
                        <div className=" p-4 items-center text-left">
                            <h2 className=" text-center text-white text-3xl">Our Vision </h2>

                            <div className='flex justify-center p-4'>
                            <img className='h-[200px] w-[200px] rounded-full' src={values} alt="" />
                            </div>
                            <p className=" text-white"> Our vision is to become a leading provider of high-quality science and engineering kits that facilitate experiential learning and ignite a passion for scientific discovery. </p>
                        </div>
                    </div>
                    <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-light-blue-300 duration-300  card  bg-gradient-to-r from-primary to-secondary text-neutral-content">
                        <div className=" p-4 items-center text-left">
                            <h2 className="text-3xl text-center text-white">Our Values </h2>
                               <div className='flex justify-center p-4 '>
                                 <img className='h-[200px] w-[200px] rounded-full ' src={vision} alt="" />
                               </div>
                            <p className="text-white"> We are committed to delivering products of the highest quality.We believe in the power of education to transform lives. Our kits are meticulously designed to provide valuable learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;