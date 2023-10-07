import React, { useState, useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import Testimoni from './Testimoni';
import ScrollAnimationWrapper from './../animation/ScrollAnimationWrapper';
import getScrollAnimation from './../animation/getScrollAnimation';

const Testimonials = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto py-5 lg:py-14 xl:py-14 2xl:py-14"
      id="pricing"
    >
      <div className="flex flex-col w-full py-5" id="testimoni">
      <ScrollAnimationWrapper children={undefined} className={undefined}>
                    <motion.h3
                        variants={scrollAnimation}        
            className="leading-50 font-bold text-center text-primary-color text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26 w-9/12 sm: lg:w-4/12 mx-auto">
            Our Happy Customer{" "}
          </motion.h3>
          <motion.p            
            className="leading-normal text-custom-black text-center mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
          >
           Happy clients leave their reviews. I am grateful that the Eftapei is changing lives. Happy living ever after.
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="w-full flex flex-col py-12 pb-0">
          <motion.div>
            <Testimoni />
          </motion.div>
        </ScrollAnimationWrapper>        
      </div>
    </div>
  );
};

export default Testimonials;
