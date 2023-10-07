import React from "react";
import Image from "next/image";

export default function Banner() {
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
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">JOURNEY <span className="text-primary-color">&</span> HISTORY</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}