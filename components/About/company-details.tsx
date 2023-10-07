import React from "react";
import Image from "next/image";
import AboutCard from "./card";

export default function CompanyDetails() {    
    return (
        <div className="our-company-details w-full inline-block py-24 lg:py-20 xl:py-20 2xl:py-20">
            <div className="max-w-full md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                <div className="main-contents">
                    <div className="company-details-heading py-5">
                        <h4 className="text-custom-black text-center lg:text-left xl:text-left 2xl:text-left text-22 md:text-24 lg:text-26 xl:text-26 2xl:text-26 font-medium">About — My History</h4>
                    </div>
                    <div className="company-details-para">
                        <p className="text-custom-black text-base lg:text-lg xl:text-lg 2xl:text-lg font-medium">Unleashing creativity, painting captivating Abstracts. Boundaries shattered, abstracts awaken limitless creative possibilities.</p>
                    </div>
                </div>
                <div className="about-company-desktop py-2 lg:py-16 xl:py-16 2xl:py-16">
                    <div className="hidden md:flex lg:flex xl:flex 2xl:flex items-center justify-between">
                        <div className="w-48 inline-block float-left">
                            <div className="company-heading py-3">
                                <h5 className="text-primary-color text-sm font-medium">Company</h5>
                            </div>
                            <div className="second-heading pb-3">
                                <h3 className="text-custom-black text-lg">Eftapei means 'Happy me' </h3>
                            </div>
                            <div className="company-para">
                                <p className="text-custom-black text-lg">
                                    Established on 2020, we have the vision to solve complex and unresolved thoughts and projects in an artistic and fun way. The company focuses on creative, funtastic and curative process, which is uniquely designed based on the Clients requirements. We work with Individuals, Groups, Education Institutions, Corporates, Small and Large Scale Companies, Workshops and Events.
                                </p>
                            </div>
                        </div>
                        <div className="w-48 inline-block float-left">
                            <div className="about-company-img">
                                <Image
                                    className="logo w-full"
                                    src="/about/about-company.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-company-mobile py-8">
                    <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
                        <div className="w-full inline-block float-left">
                            <div className="about-company-img">
                                <Image
                                    className="logo w-full"
                                    src="/about/about-company.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-full inline-block float-left">
                            <div className="company-heading py-3">
                                <h5 className="text-primary-color text-sm font-medium">Company</h5>
                            </div>
                            <div className="second-heading pb-3">
                                <h3 className="text-custom-black text-lg">Eftapei means 'Happy me' </h3>
                            </div>
                            <div className="company-para">
                                <p className="text-custom-black text-base">
                                    Established on 2020, we have the vision to solve complex and unresolved thoughts and projects in an artistic and fun way. The company focuses on creative, funtastic and curative process, which is uniquely designed based on the Clients requirements. We work with Individuals, Groups, Education Institutions, Corporates, Small and Large Scale Companies, Workshops and Events.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-company-desktop pb-16">
                    <div className="block md:flex lg:flex xl:flex 2xl:flex items-center justify-between">
                        <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48 inline-block float-left">
                            <div className="about-company-img">
                                <Image
                                    className="logo w-full"
                                    src="/about/founder.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48 inline-block float-left">
                            <div className="company-heading py-3">
                                <h5 className="text-primary-color text-sm font-medium">Founder</h5>
                            </div>
                            <div className="second-heading pb-3">
                                <h3 className="text-custom-black text-lg">Hi! This is Mana Swetha.</h3>
                            </div>
                            <div className="company-para">
                                <p className="text-custom-black text-lg">
                                    I am a Therapeutic Art Life Coach, Online Entrepreneur and Educator. I am skilled at using art media, the creative process and the resulting artwork, when words are not enough. Prior Art Knowledge is not required to do the process. The perfect complement is to allow for deeper insight, growth and elevate by art.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <AboutCard/>
        </div>
    )
}