import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhyEftapei from "../components/why-eftapei";
import Layout from './../components/layout';
import type { ReactElement } from 'react';

export default function Blog() {
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
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">Blog</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                <div className="inline-block py-28 lg:py-20 xl:py-20 2xl:py-20">
                    <div className="w-full inline-block float-left mt-5 lg:mt-7 xl:mt-7 2xl:mt-7 md:px-3 md:w-48 lg:w-31 xl:w-31 2xl:w-31">
                        <div className="blog-card bg-white shadow-normal">
                            <div className="blog-image">
                                <Image
                                    className="w-full"
                                    src="/blog-img.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                            <div className="blog-contents">
                                <div className="py-5 px-5">
                                    <div className="flex items-center justify-between">
                                        <div className="blog-title">
                                            <h5 className="text-custom-black text-24 md:text-26 lg:text-28 xl:text-28 2xl:text-28 font-semibold">Happiest me</h5>
                                        </div>
                                        <div className="blog-date">
                                            <span className="text-sm">Dec 26, 2021</span>
                                        </div>
                                    </div>
                                    <div className="blog-para py-4">
                                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black">Self Expression Pick a HB Pencil of your choice Select a plain paper with any texture or size Sit in a comfortable place Scribble the way...</p>
                                    </div>
                                    <div className="read-more-btn mt-3">
                                        <Link href={"/"}>
                                            <button className="flex items-center arrow btn-gradient border border-1 border-custom-white bg-primary-color text-white px-6 py-2 shadow-normal">
                                                <span>Read more</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full inline-block float-left mt-5 lg:mt-7 xl:mt-7 2xl:mt-7 md:px-3 md:w-48 lg:w-31 xl:w-31 2xl:w-31">
                        <div className="blog-card bg-white shadow-normal">
                            <div className="blog-image">
                                <Image
                                    className="w-full"
                                    src="/blog-img.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                            <div className="blog-contents">
                                <div className="py-5 px-5">
                                    <div className="flex items-center justify-between">
                                        <div className="blog-title">
                                            <h5 className="text-custom-black text-24 md:text-26 lg:text-28 xl:text-28 2xl:text-28 font-semibold">Happiest me</h5>
                                        </div>
                                        <div className="blog-date">
                                            <span className="text-sm">Dec 26, 2021</span>
                                        </div>
                                    </div>
                                    <div className="blog-para py-4">
                                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black">Self Expression Pick a HB Pencil of your choice Select a plain paper with any texture or size Sit in a comfortable place Scribble the way...</p>
                                    </div>
                                    <div className="read-more-btn mt-3">
                                        <Link href={"/"}>
                                            <button className="flex items-center arrow btn-gradient border border-1 border-custom-white bg-primary-color text-white px-6 py-2 shadow-normal">
                                                <span>Read more</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full inline-block float-left mt-5 lg:mt-7 xl:mt-7 2xl:mt-7 md:px-3 md:w-48 lg:w-31 xl:w-31 2xl:w-31">
                        <div className="blog-card bg-white shadow-normal">
                            <div className="blog-image">
                                <Image
                                    className="w-full"
                                    src="/blog-img.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                            <div className="blog-contents">
                                <div className="py-5 px-5">
                                    <div className="flex items-center justify-between">
                                        <div className="blog-title">
                                            <h5 className="text-custom-black text-24 md:text-26 lg:text-28 xl:text-28 2xl:text-28 font-semibold">Happiest me</h5>
                                        </div>
                                        <div className="blog-date">
                                            <span className="text-sm">Dec 26, 2021</span>
                                        </div>
                                    </div>
                                    <div className="blog-para py-4">
                                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black">Self Expression Pick a HB Pencil of your choice Select a plain paper with any texture or size Sit in a comfortable place Scribble the way...</p>
                                    </div>
                                    <div className="read-more-btn mt-3">
                                        <Link href={"/"}>
                                            <button className="flex items-center arrow btn-gradient border border-1 border-custom-white bg-primary-color text-white px-6 py-2 shadow-normal">
                                                <span>Read more</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full inline-block float-left mt-5 lg:mt-7 xl:mt-7 2xl:mt-7 md:px-3 md:w-48 lg:w-31 xl:w-31 2xl:w-31">
                        <div className="blog-card bg-white shadow-normal">
                            <div className="blog-image">
                                <Image
                                    className="w-full"
                                    src="/blog-img.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                            <div className="blog-contents">
                                <div className="py-5 px-5">
                                    <div className="flex items-center justify-between">
                                        <div className="blog-title">
                                            <h5 className="text-custom-black text-24 md:text-26 lg:text-28 xl:text-28 2xl:text-28 font-semibold">Happiest me</h5>
                                        </div>
                                        <div className="blog-date">
                                            <span className="text-sm">Dec 26, 2021</span>
                                        </div>
                                    </div>
                                    <div className="blog-para py-4">
                                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black">Self Expression Pick a HB Pencil of your choice Select a plain paper with any texture or size Sit in a comfortable place Scribble the way...</p>
                                    </div>
                                    <div className="read-more-btn mt-3">
                                        <Link href={"/"}>
                                            <button className="flex items-center arrow btn-gradient border border-1 border-custom-white bg-primary-color text-white px-6 py-2 shadow-normal">
                                                <span>Read more</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full inline-block float-left mt-5 lg:mt-7 xl:mt-7 2xl:mt-7 md:px-3 md:w-48 lg:w-31 xl:w-31 2xl:w-31">
                        <div className="blog-card bg-white shadow-normal">
                            <div className="blog-image">
                                <Image
                                    className="w-full"
                                    src="/blog-img.svg"
                                    alt="Eftapei"
                                    width={180}
                                    height={35}
                                    priority
                                />
                            </div>
                            <div className="blog-contents">
                                <div className="py-5 px-5">
                                    <div className="flex items-center justify-between">
                                        <div className="blog-title">
                                            <h5 className="text-custom-black text-24 md:text-26 lg:text-28 xl:text-28 2xl:text-28 font-semibold">Happiest me</h5>
                                        </div>
                                        <div className="blog-date">
                                            <span className="text-sm">Dec 26, 2021</span>
                                        </div>
                                    </div>
                                    <div className="blog-para py-4">
                                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black">Self Expression Pick a HB Pencil of your choice Select a plain paper with any texture or size Sit in a comfortable place Scribble the way...</p>
                                    </div>
                                    <div className="read-more-btn mt-3">
                                        <Link href={"/"}>
                                            <button className="flex items-center arrow btn-gradient border border-1 border-custom-white bg-primary-color text-white px-6 py-2 shadow-normal">
                                                <span>Read more</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full inline-block">
                <WhyEftapei />
                </div>
            </div>          
        </>
    )
}


Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};