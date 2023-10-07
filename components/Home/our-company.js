import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../animation/ScrollAnimationWrapper";
import getScrollAnimation from '../animation/getScrollAnimation';

export default function OurCompany() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="our-company w-full inline-block bg-custom-light py-20">
            <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                <ScrollAnimationWrapper children={undefined} className={undefined}>
                    <motion.div
                        variants={scrollAnimation}>
                        <div className="our-company-bg bg-no-repeat bg-cover bg-bottom bg-[url('/home/bg/our-company-bg.png')]">
                            <div className="py-10 w-full inline-block">
                                <div className="w-full lg:w-50 xl:w-50 2xl:w-50 inline-block text-center float-left">
                                    <div className="our-company-image">
                                        <Image
                                            className="our-company-img mx-auto"
                                            src="/home/our-company-img.svg"
                                            alt="Eftapei"
                                            width={400}
                                            height={400}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-50 xl:w-50 2xl:w-50 inline-block float-left px-4 md:px-8 lg:px-0 xl:px-0 2xl:px-0">
                                    <div className="eftapei-heading-wrapper py-2">
                                        <h2 className="text-primary-color font-semibold text-sm">
                                            Our Company
                                        </h2>
                                    </div>
                                    <div className="our-company-heading">
                                        <h2 className="leading-50 font-bold text-white text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26">
                                            Eftapei means 'Happy me'.<br></br>
                                            Established on 2020
                                        </h2>
                                    </div>
                                    <div className="our-company-list mt-3">
                                        <ul>
                                            <li className="hover:tracking-2 space-links transition delay-700 duration-300 ease-in-out">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-check-circle-fill text-custom-white mr-2" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    <span className="text-custom-white text-sm lg:text-base xl:text-base 2xl:text-base">Focuses on creative</span>
                                                </div>
                                            </li>
                                            <li className="py-3 hover:tracking-2 space-links transition delay-700 duration-300 ease-in-out">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-check-circle-fill text-custom-white mr-2" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    <span className="text-custom-white text-sm lg:text-base xl:text-base 2xl:text-base">Funtastic and curative process</span>
                                                </div>
                                            </li>
                                            <li className="hover:tracking-2 space-links transition delay-700 duration-300 ease-in-out">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-check-circle-fill text-custom-white mr-2" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    <span className="text-custom-white text-sm lg:text-base xl:text-base 2xl:text-base">Education Institutions</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="our-company-btn mt-8">
                                        <Link href={"/"}>
                                            <button className="arrow btn-gradient border border-1 border-custom-white rounded-50 bg-primary-color hover:bg-white hover:text-primary-color hover:shadow-primary-md text-white px-6 py-2 shadow-normal">
                                                <span className="font-medium">
                                                    Read More
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
            </div>
            )
}