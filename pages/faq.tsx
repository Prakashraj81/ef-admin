import React from "react";
import Image from "next/image";
import Layout from './../components/layout';
import type { ReactElement } from 'react';
import FAQSection from './../components/FAQ/index';

export default function FAQ() {
    return (
        <>
            <div className="about-us-wrapper">
                <div className="about-top-banner">
                    <Image
                        className="bg-abour w-full"
                        src="/bg-gallery-banner.svg"
                        alt="Eftapei"
                        width={180}
                        height={35}
                        priority
                    />
                    <div className="lg:text-left xl:text-left 2xl:text-left pl-0 md:pl-14 lg:pl-32 xl:pl-32 2xl:pl-32 absolute top-2 md:top-32 lg:top-1/4 xl:top-1/4 2xl:top-1/4 left-0">
                        <div className="container">
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">FAQ's</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                    <div className="gallery-heading text-center">
                        <h3 className="text-custom-black text-22 md:text-24 lg:text-26 xl:text-26 2xl:text-26">Committed to Serve You</h3>
                        <div className="mt-2 mx-auto">
                            <hr className="w-31 mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"></hr>
                        </div>
                    </div>
                    <div className="faq-section py-20">
                        <FAQSection />
                    </div>
                </div>
            </div>
        </>
    )
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};