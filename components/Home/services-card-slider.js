import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stars from "../../public/home/stars.svg";
import ArrowBack from "../../public/home/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/home/eva_arrow-next-fill.svg";

const ServiceCardSlider = () => {
  const listTestimoni = [
    {
        heading: "Service heading-1",
        image:"/Office-Meeting-1.png",
        description: "",
      },
      {
        heading: "Service heading-2",
        image:"/Office-Meeting-2.png",
        description: "",
      },
      {
        heading: "Service heading-3",
        image:"/Office-Meeting-3.png",
        description: "",
      },
      {
        heading: "Service heading-4",
        image:"/Office-Meeting-4.png",
        description: "",
      },
      {
        heading: "Service heading-5",
        image:"/Office-Meeting-1.png",
        description: "",
      },
      {
        heading: "Service heading-6",
        image:"/Office-Meeting-2.png",
        description: "",
      },
      {
        heading: "Service heading-7",
        image:"/Office-Meeting-3.png",
        description: "",
      },
      {
        heading: "Service heading-8",
        image:"/Office-Meeting-4.png",
        description: "",
      },
      {
        heading: "Service heading-9",
        image:"/Office-Meeting-1.png",
        description: "",
      },
      {
        heading: "Service heading-10",
        image:"/Office-Meeting-2.png",
        description: "",
      },
      
  ]; // Removed the trailing comma

  // Rest of the code...
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    // JSX code...
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image={listTestimonis.image}
                  alt="blog-img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {listTestimonis.heading}
                  </Typography>
                  <Typography variant="body2" className="text-sm text-custom-black">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    AntarcticaLizards are a widespread group of squamate
                    reptiles, with over 6,000 species, 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Read more
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-8 w-8 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <Image
              className="bg-abour"
              src="/home/eva_arrow-back-fill.svg"
              alt="Eftapei"
              width={15}
              height={15}
              priority
            />
          </div>
          <div
            className="flex items-center justify-center h-8 w-8 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <Image
              className="bg-abour text-primary-color"
              src="/home/eva_arrow-next-fill.svg"
              alt="Eftapei"
              width={15}
              height={15}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCardSlider;
