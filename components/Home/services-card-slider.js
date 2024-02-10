import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const ServiceCardSlider = () => { 
  let [sliderRef, setSliderRef] = useState(null);
  let [ServiceList, setServiceList] = React.useState();
  let [ShowLoader, setShowLoader] = useState(false); 
  let [PageLoadStatus, setPageLoadStatus] = useState(true); 

    useEffect(() => {    
        GetServiceList();  
      }, []);

  //Get testimonials list api function
  const GetServiceList = async () => {
    try {
        const response = await axios.post('/api/services/selectlist');
        if (response.data.service.length !== 0) {
          ServiceList = response.data.service;
          setServiceList(response.data.service);
          console.log("ServiceList:", ServiceList);
        } else {
          setServiceList([]);
        }
    } catch (error) {
      console.error('Error:', error);
    }
  };    


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

  return (
    // JSX code...
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >       
          <div className="px-3 flex items-stretch">
          {ServiceList?.map((list, index) => (
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image={`/services/${list.Service_Image_1}`}
                  alt="blog-img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {list.ServiceHeading_1}
                  </Typography>
                  <Typography variant="body2" className="text-sm text-custom-black">
                    {list.ServiceContent_1}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Read more
                </Button>
              </CardActions>
            </Card>
             ))}
          </div>       
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
