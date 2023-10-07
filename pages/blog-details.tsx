import type { ReactElement } from 'react';
import Image from "next/image";
import WhyEftapei from "../components/why-eftapei";
import Layout from './../components/layout';

export default function BlogDetails() {
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
                    <div className="text-block pl-32 absolute top-1/4 left-0">
                        <div className="container">
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">Blog Details</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                <div className="block lg:flex xl:flex 2xl:flex justify-between py-20">
                    
                </div>
                <WhyEftapei />
            </div>          
        </>
    )
}


BlogDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
