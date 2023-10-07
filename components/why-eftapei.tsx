import React from "react";
import Image from "next/image";

export default function WhyEftapei() {
    return (
        <>
            <div className="about-company-desktop py-0 lg:py-20 xl:py-20 2xl:py-20">
                <div className="block md:flex lg:flex xl:flex 2xl:flex items-center justify-between">
                    <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48 inline-block float-left">
                        <div className="company-heading py-3">
                            <h5 className="text-custom-black text-32 md:text-42 lg:text-42 xl:text-42 2xl:text-42 font-semibold">Why Eftapei?</h5>
                        </div>
                        <div className="company-para">
                            <p className="text-custom-black text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-48 lg:w-48 xl:w-48 2xl:w-48 inline-block float-left">
                        <div className="about-company-img">
                            <Image
                                className="logo w-full"
                                src="/why-eftapei.svg"
                                alt="Eftapei"
                                width={180}
                                height={35}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}