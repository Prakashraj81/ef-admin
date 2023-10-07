import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../../public/home/stars.svg";
import ArrowBack from "../../public/home/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/home/eva_arrow-next-fill.svg";

const Testimoni = () => {
  const listTestimoni = [
    {
      name: "Prakashraj",
      image:
        "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
      city: "Chennai",
      country: "India",
      rating: "4",
      testimoni:
        "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.🙏🙂",
    },
    {
      name: "Alagarsamy",
      image:
        "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
      city: "Chennai",
      country: "India",
      rating: "4.5",
      testimoni:
        "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.🙏🙂",
    },
    {
      name: "Raj",
      image:
        "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
      city: "Chennai",
      country: "India",
      rating: "5",
      testimoni:
        "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.🙏🙂",
    },
    {
      name: "Prakash",
      image:
        "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
      city: "Chennai",
      country: "India",
      rating: "3.5",
      testimoni:
        "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.🙏🙂",
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
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
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
          slidesToShow: 1,
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
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-1 border-custom-black hover:border-primary-color transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg  text-custom-black font-medium capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-custom-black capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Image
                      className="bg-abour w-full"
                      src="/home/stars.svg"
                      alt="Eftapei"
                      width={20}
                      height={35}
                      priority
                    />
                    <Image
                      className="bg-abour w-full"
                      src="/home/stars.svg"
                      alt="Eftapei"
                      width={20}
                      height={35}
                      priority
                    />
                    <Image
                      className="bg-abour w-full"
                      src="/home/stars.svg"
                      alt="Eftapei"
                      width={20}
                      height={35}
                      priority
                    />
                    <Image
                      className="bg-abour w-full"
                      src="/home/stars.svg"
                      alt="Eftapei"
                      width={20}
                      height={35}
                      priority
                    />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <Image
              className="bg-abour"
              src="/home/eva_arrow-back-fill.svg"
              alt="Eftapei"
              width={20}
              height={20}
              priority
            />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <Image
              className="bg-abour text-primary-color"
              src="/home/eva_arrow-next-fill.svg"
              alt="Eftapei"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
