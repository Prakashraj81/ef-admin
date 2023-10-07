import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../Form/contact-form";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../animation/ScrollAnimationWrapper";
import getScrollAnimation from '../animation/getScrollAnimation';

export default function Contact() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="bg-white py-14">
            <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                <ScrollAnimationWrapper children={undefined} className={undefined}>
                    <motion.div
                        variants={scrollAnimation}>
                        <div className="w-full inline-block">
                            <div className="w-full md:w-50 lg:w-50 xl:w-50 2xl:w-50 inline-block float-left">
                                <div className="contact-image">
                                    <Image
                                        className="contact-img mx-auto"
                                        src="/home/contact-img.svg"
                                        alt="Eftapei"
                                        width={400}
                                        height={400}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-50 lg:w-50 xl:w-50 2xl:w-50 inline-block float-left">
                                <div className="contact-heading">
                                    <div className="eftapei-heading-wrapper">
                                        <h2 className="text-primary-color font-semibold text-sm">
                                            Contact Us
                                        </h2>
                                    </div>
                                    <div className="our-company-heading">
                                        <h2 className="leading-50 font-bold text-custom-black text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26">
                                            Let’s Collaborate Now!
                                        </h2>
                                    </div>
                                </div>
                                <div className="contact-form mt-5 w-full lg:w-80 xl:w-80 2xl:w-80">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                        </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
            </div>
            )
}