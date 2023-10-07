import React from "react";
import Image from "next/image";
import WhyEftapei from "../components/why-eftapei";
import Layout from './../components/layout';
import type { ReactElement } from 'react';

export default function Testimonial() {
    let OurCompany = [
        {
            id: "P",
            name: "Prakash",
            star: "4.5",
            description: "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.🙏🙂",
        },
        {
            id: "R",
            name: "Prakash",
            star: "4.5",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: "A",
            name: "Prakash",
            star: "4.5",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: "R",
            name: "Prakash",
            star: "4.5",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ];
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
                            {OurCompany.map((card) => {
                                return (
                                    <div className="service-list mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 mx-0 md:mx-1 lg:mx-2 xl:mx-2 2xl:mx-2 bg-white shadow-card rounded px-7 py-5 w-full h-full md:h-250 lg:h-250 xl:h-250 2xl:h-250 md:w-48 lg:w-31 xl:w-31 2xl:w-31 inline-block float-left">
                                        <div className="service-card">
                                            <div className="w-full flex justify-between service-image py-3">
                                                <div className="name-list">
                                                    <div className="flex justify-between items-center">
                                                        <div className="bg-custom-light px-5 py-5 border-radius text-center">
                                                            <p className="text-custom-black text-sm font-medium">{card.id}</p>
                                                        </div>
                                                        <div className="name">
                                                            <h5 className="text-custom-black font-base ml-3">{card.name}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="star flex justify-between items-center">
                                                    <p className="text-xs text-custom-black mr-2">{card.star}</p>
                                                    <span className="flex justify-between items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-custom-yellow" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-custom-yellow" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-custom-yellow" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-custom-yellow" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="testimonials-contents pt-3">
                                                <p className="text-sm text-custom-black font-medium">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
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

Testimonial.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};