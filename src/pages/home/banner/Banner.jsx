import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import banner1 from "../../../assets/banner/bannar1.jpg";
import banner2 from "../../../assets/banner/bannar2.jpg";
import banner3 from "../../../assets/banner/bannar3.jpg";
import banner4 from "../../../assets/banner/bannar4.jpg";
const Banner = () => {
  return (
    <Carousel className="">
      <div className="relative h-[600px] w-full">
        <img
          src={banner1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Education and Learning Toys!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Explore our curated collection of engaging toys designed to
              promote learning and development. From early learning toys and
              STEM activities to language and literacy tools, we have everything
              to spark your child's curiosity. Unleash their creativity with our
              arts and crafts supplies. Our toys foster critical thinking,
              problem-solving, and a love for learning. Browse through our
              diverse selection and find the perfect toys to inspire your
              child's growth and education.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img
          src={banner2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/30">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Education and Learning Toys!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Explore our curated collection of engaging toys designed to
              promote learning and development. From early learning toys and
              STEM activities to language and literacy tools, we have everything
              to spark your child's curiosity. Unleash their creativity with our
              arts and crafts supplies. Our toys foster critical thinking,
              problem-solving, and a love for learning. Browse through our
              diverse selection and find the perfect toys to inspire your
              child's growth and education.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img
          src={banner3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/30">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Education and Learning Toys!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Explore our curated collection of engaging toys designed to
              promote learning and development. From early learning toys and
              STEM activities to language and literacy tools, we have everything
              to spark your child's curiosity. Unleash their creativity with our
              arts and crafts supplies. Our toys foster critical thinking,
              problem-solving, and a love for learning. Browse through our
              diverse selection and find the perfect toys to inspire your
              child's growth and education.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img
          src={banner4}
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/30">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Education and Learning Toys!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Explore our curated collection of engaging toys designed to
              promote learning and development. From early learning toys and
              STEM activities to language and literacy tools, we have everything
              to spark your child's curiosity. Unleash their creativity with our
              arts and crafts supplies. Our toys foster critical thinking,
              problem-solving, and a love for learning. Browse through our
              diverse selection and find the perfect toys to inspire your
              child's growth and education.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
