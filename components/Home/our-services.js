import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../animation/ScrollAnimationWrapper";
import getScrollAnimation from "../animation/getScrollAnimation";
import ServiceCardSlider from "./services-card-slider";

export default function OurServices() {
  const ourservices = [
    {
      id: "service_1",
      title: "Educational Setup",
      image: "/home/educational-setup.png",
      description:
        "EFTAPEI offers one-on-one, group sessions and Workshops for students and staffs of all ages",
    },
    {
      id: "service_2",
      title: "Corporate Well Being",
      image: "/home/corporate-well-being.png",
      description:
        "Designing strategies for employees to strike a perfect balance between work and home and reduce",
    },
  ];

  const OurServices_1 = [
    {
      id: "service_3",
      title: "One on One Session",
      image: "/home/one-session.png",
      description:
        "Clients can book individual 1:1 sessions with EFTAPEI. Based on your needs the sessions will be designed",
    },
    {
      id: "service_4",
      title: "Relaxing Friday",
      image: "/home/relaxing-friday.png",
      description: "Time: 6 pm to 7pm IST (EFTAPEI Mind Makeover Studio)",
      description1: "Time: 7 pm to 8 pm IST (Online)",
    },
    {
      id: "service_5",
      title: "Couples",
      image: "/home/couples.png",
      description:
        "Enhance the bond between through Eftapei-Couple Art. Specially infused and designed",
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="our-services-wrapper py-20 max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
      <div className="service-sec">
        <div className="flex flex-col w-full py-5">
          <ScrollAnimationWrapper children={undefined} className={undefined}>
            <motion.h3
              variants={scrollAnimation}
              className="leading-50 font-bold text-center text-primary-color text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26 w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Our Capabilities{" "}
            </motion.h3>
            <motion.p className="leading-normal text-custom-black text-center mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12 pb-0">
            <motion.div>
            <ServiceCardSlider />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>        
      </div>
    </div>
  );
}
