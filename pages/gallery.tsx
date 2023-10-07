import React from "react";
import Image from "next/image";
import WhyEftapei from "../components/why-eftapei";
import Layout from './../components/layout';
import type { ReactElement } from 'react';

export default function Gallery() {
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
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">Gallery</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                    <div className="gallery-heading text-center">
                        <h3 className="text-custom-black text-22 md:text-24 lg:text-26 xl:text-26 2xl:text-26">Eftapei - Mind Makeover-Gallery!</h3>
                        <div className="mt-2 mx-auto">
                            <hr className="w-31 mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"></hr>
                        </div>
                    </div>
                    <div className="gallery-sec py-20">
                        <section className="section-1">
                            <div className="block lg:flex xl:flex 2xl:flex justify-between">
                                <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                                    <Image
                                        className="bg-abour w-full"
                                        src="/gallery/gallery-1.png"
                                        alt="Eftapei"
                                        width={180}
                                        height={35}
                                        priority
                                    />
                                </div>
                                <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                                    <div className="step-1">
                                        <Image
                                            className="bg-abour h-auto md:h-335 lg:h-335 xl:h-335 2xl:h-335 w-full"
                                            src="/gallery/gallery-2.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={100}
                                            priority
                                        />
                                    </div>
                                    <div className="step-1 mt-8">
                                        <Image
                                            className="bg-abour h-auto md:h-335 lg:h-335 xl:h-335 2xl:h-335 w-full"
                                            src="/gallery/gallery-3.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={100}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-2">
                            <div className="w-full block py-8">
                                <div className="video">
                                    <video className="w-full" controls>
                                        <source src="movie.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </section>
                        <section className="section-3">
                            <div className="block lg:flex xl:flex 2xl:flex justify-between">
                                <div className="w-full md:w-54 lg:w-54 xl:w-54 2xl:w-54">
                                    <div className="step-2">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-4.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-2 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-5.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-42 lg:w-42 xl:w-42 2xl:w-42">
                                    <div className="step-1">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-6.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={100}
                                            priority
                                        />
                                    </div>
                                    <div className="step-1 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-7.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={100}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-4">
                            <div className="w-full block py-8">
                                <div className="video">
                                    <video className="w-full" controls>
                                        <source src="movie.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </section>
                        <section className="section-5">
                            <div className="block lg:flex xl:flex 2xl:flex justify-between">
                                <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                                    <div className="step-2">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-8.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-2 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-9.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                                    <div className="step-1">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-10.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-1 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-11.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-6">
                            <div className="w-full block py-8">
                                <div className="video">
                                    <video className="w-full" controls>
                                        <source src="movie.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </section>
                        <section className="section-7">
                            <div className="block lg:flex xl:flex 2xl:flex justify-between">
                                <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                                    <div className="step-2">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-12.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-2 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-13.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-2 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-14.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                                    <div className="step-1">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-15.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-1 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-16.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                    <div className="step-1 mt-8">
                                        <Image
                                            className="bg-abour w-full"
                                            src="/gallery/gallery-17.png"
                                            alt="Eftapei"
                                            width={180}
                                            height={35}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>           
        </>
    )
}


Gallery.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};