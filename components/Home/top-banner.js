import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from '../animation/getScrollAnimation';
import ScrollAnimationWrapper from "../animation/ScrollAnimationWrapper";

export default function TopBanner() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="top-banner-wrapper py-3">
            <div className="top-banner-bg bg-no-repeat bg-cover bg-bottom bg-[url('/home/bg/top-banner-bg.png')]">
                <div className="max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                    <ScrollAnimationWrapper children={undefined} className={undefined}>
                        <motion.div
                            variants={scrollAnimation}>
                            <div className="lg:flex xl:flex items-center justify-between">
                                <div className="w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12 float-left">
                                    <div className="flex items-center">
                                        <div className="icon-img">
                                            <Image
                                                className="verify-icon-img"
                                                src="/home/verify-icon.svg"
                                                alt="Eftapei"
                                                width={25}
                                                height={25}
                                                priority />

                                        </div>
                                        <div className="eftapei-heading-wrapper">
                                            <h2 className="text-primary-color font-semibold text-sm">
                                                Eftapei means -Happy me!
                                            </h2>
                                        </div>
                                    </div>

                                    <h2 className="leading-50 mt-3 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 font-bold text-custom-black text-3xl md:text-40 lg:text-40 xl:text-40 2xl:text-40">
                                        Mind Makeover Studio<br></br>
                                        Destination !
                                    </h2>

                                    <div className="mt-4 md:mt-4 lg:mt-5 xl:mt-5 2xl:mt-5">
                                        <p className="leading-26 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black-gray">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>

                                    <div className="mt-3 md:mt-6 lg:mt-7 xl:mt-7 2xl:mt-7 hidden lg:block xl:block 2xl:block">
                                        <div className="flex justify-between">
                                            <ul className="flex items-center space-x-6">
                                                <li>                                                    
                                                    <button className="arrow btn-gradient rounded-50 bg-primary-color hover:bg-white hover:border-primary-color border-2 hover:text-primary-color hover:shadow-primary-md text-white px-6 py-2 shadow-normal">
                                                        <span className="font-medium">
                                                            Get Started
                                                        </span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="arrow btn-gradient-border rounded-50 border-primary-color border-2 text-custom-black px-3 py-2 hover:shadow-primary-md shadow-normal">
                                                        <span className="flex items-center font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill mr-2 text-custom-black" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                                            </svg>
                                                            <span>Watch Video</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="top-sec-image w-full contents float-right lg:w-6/12 xl:w-6/12 2xl:w-6/12 mt-5 lg:mt-0 xl:mt-0">
                                    <motion.div variants={scrollAnimation}>
                                        <Image
                                            className="banner-right"
                                            src="/home/top-banner.png"
                                            alt="Eftapei"
                                            width={425}
                                            height={425}
                                            priority />
                                    </motion.div>
                                </div>
                                <div className="mt-2 pb-5 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12 block lg:hidden xl:hidden 2xl:hidden">
                                    <div className="flex justify-between">
                                        <ul className="flex items-center space-x-6">
                                            <li>
                                                <button className="arrow btn-gradient rounded-50 hover:shadow-primary-md bg-primary-color text-white px-3 py-2 shadow-normal">
                                                    <span className="font-medium">
                                                        Get Started
                                                    </span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="arrow btn-gradient-border rounded-50 hover:shadow-primary-md border-primary-color border-2 text-custom-black px-3 py-2 shadow-normal">
                                                    <span className="flex items-center font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill text-custom-black" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                                        </svg>
                                                        <span>Watch Video</span>
                                                    </span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    )
}