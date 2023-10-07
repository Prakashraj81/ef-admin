import React from "react";
import Image from "next/image";

export default function AboutCard() {
    let OurCompany = [
        {
            id: "History",
            title: "History",
            image: "/about/history-icon.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: "Vision",
            title: "Vision",
            image: "/about/vision-icon.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: "Mission",
            title: "Mission",
            image: "/about/mission-icon.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
    ];
    return (
        <>
            <div className="bg-white">
                <div className="bg-no-repeat py-12 bg-cover bg-center bg-[url('/about/bg-history.svg')]">
                    <div className="max-w-full md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="w-full block lg:flex xl:flex 2xl:flex justify-between about-details-card">
                            {OurCompany.map((card, index) => {
                                return (
                                    <div id={card.id} className="service-list mt-10 bg-white shadow-normal h-full md:h-325 lg:h-400 xl:h-400 2xl:h-400 rounded px-7 py-5 w-full lg:w-31 xl:w-31 2xl:w-31 inline-block float-left">
                                        <div className="service-card">
                                            <div className="w-full service-image py-3 text-center">
                                                <Image
                                                    className="service-img mx-auto"
                                                    src={card.image}
                                                    alt="Eftapei"
                                                    width={80}
                                                    height={80}
                                                    priority
                                                />
                                            </div>
                                            <div className="service-heading-sec py-5 text-center">
                                                <h5 className="text-custom-black text-sm text-center font-bold">{card.title}</h5>
                                            </div>
                                            <div className="service-description mt-3">
                                                <p className="text-base lg:text-sm xl:text-sm 2xl:text-sm text-justify">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}