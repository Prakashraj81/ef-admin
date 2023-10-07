import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TopBanner from "../components/Home/top-banner";
import OurServices from "../components/Home/our-services";
import OurCompany from "../components/Home/our-company";
import Contact from "../components/Home/contact";
import Testimonials from "./../components/Home/testimonials";
import Courses from "../components/Home/courses";

export default function Home() {
    return (
        <div className="home-wrapper">
            <TopBanner />
            <OurServices />
            <OurCompany />
            <Testimonials />
            <Courses />           
            <Contact />
        </div>
    )
}