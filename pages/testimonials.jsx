import React, { useState, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios';
import WhyEftapei from "../components/why-eftapei";
import Layout from './../components/layout';


export default function Testimonial() {
    let [TestimonialsList, setTestimonialsList] = React.useState();
    let [ShowLoader, setShowLoader] = useState(false); 
    let [PageLoadStatus, setPageLoadStatus] = useState(true); 

    useEffect(() => {    
        GetTestimonialsList(0);  
      }, []);

  //Get testimonials list api function
  const GetTestimonialsList = async (id) => {
    setShowLoader(true);
    try {
        const response = await axios.post('/api/testimonials/gettestimonials');
        if (response.data.testimonials.length !== 0) {
          setTestimonialsList(response.data.testimonials);
        } else {
          setTestimonialsList([]);
        }
    } catch (error) {
      console.error('Error:', error);
    }
    setPageLoadStatus(false);
    setShowLoader(false);
  };    

    
    return (
        <>
            <div className="about-us-wrapper">
                <div className="about-top-banner">
                    <Image
                        className="bg-abour w-full"
                        src="/about/bg-about.svg"
                        alt="Eftapei"
                        width={180}
                        height={35}
                        priority
                    />
                    <div className="lg:text-left xl:text-left 2xl:text-left pl-0 md:pl-14 lg:pl-32 xl:pl-32 2xl:pl-32 absolute top-2 md:top-32 lg:top-1/4 xl:top-1/4 2xl:top-1/4 left-0">
                        <div className="container">
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">Testimonials</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="bg-no-repeat py-28 lg:py-20 xl:py-20 2xl:py-20">
                    <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                      

                        <div className="w-full inline-block about-details-card">
    {TestimonialsList && Array.isArray(TestimonialsList) ? (
        TestimonialsList.map((card, index) => {
            // Extract the first letter of CustomerName
            const firstLetter = card.CustomerName ? card.CustomerName.charAt(0) : '';

            return (
                <div className="service-list mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 mx-0 md:mx-1 lg:mx-2 xl:mx-2 2xl:mx-2 bg-white shadow-card rounded px-7 py-5 w-full h-full md:h-250 lg:h-250 xl:h-250 2xl:h-250 md:w-48 lg:w-31 xl:w-31 2xl:w-31 inline-block float-left">
                    <div className="service-card">
                        <div className="w-full flex justify-between service-image py-3">
                            <div className="name-list">
                                <div className="flex justify-between items-center">
                                    <div className="bg-custom-light px-5 py-5 border-radius text-center">
                                        <p className="text-custom-black text-sm font-medium uppercase">{firstLetter}</p>
                                    </div>
                                    <div className="name">
                                        <h5 className="text-custom-black font-base ml-3">{card.CustomerName}</h5>
                                        <span style={{fontSize: "12px"}} className="text-custom-black font-xs ml-3">{card.City}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="star flex justify-between items-center">
                                <p className="text-xs text-custom-black mr-2">{card.StarRating}</p>
                                <span className="flex justify-between items-center">
                                    {[...Array(parseInt(card.StarRating))].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-custom-yellow" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className="testimonials-contents pt-3">
                            <p className="text-sm text-custom-black font-medium">{card.Message}</p>
                        </div>
                    </div>
                </div>
            );
        })
    ) : null}
</div>



                        <div className="w-full inline-block">
                <WhyEftapei />
                </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

Testimonial.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};