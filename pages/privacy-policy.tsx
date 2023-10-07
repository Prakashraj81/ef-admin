import React from "react";
import Image from "next/image";
import Layout from './../components/layout';
import type { ReactElement } from 'react';

export default function PrivacyPolicy() {
    return (
        <>
            <div className="privacy-policy-wrapper">
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
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">Privacy Policy</h4>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="gallery-heading text-center">
                            <h3 className="text-custom-black text-22 md:text-24 lg:text-26 xl:text-26 2xl:text-26">Privacy Policy for Eftapei Website</h3>
                            <div className="mt-2 mx-auto">
                                <hr className="w-31 mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"></hr>
                            </div>
                        </div>
                        <div className="privacy-section py-10">
                            <div className="privacy-content">
                                <p className="text-base lg:text-lg xl:text-lg 2xl:text-lg text-custom-black text-justify font-medium leading-7">At Eftapei, we recognize the importance of privacy and are committed to protecting the personal information of our website users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services. By using our website, you consent to the practices described in this policy.</p>
                            </div>
                            <div className="information-sec">
                                <div className="heading mt-5">
                                    <h3 className="font-medium text-custom-black text-20 lg:text-24 xl:text-24 2xl:text-24">Information We Collect</h3>
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Personal Information</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may collect personally identifiable information, such as your name, email address, and contact information when you voluntarily provide it to us through forms or other means.</p>
                                </div>
                                <div className="heading mt-5">
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Non-Personal Information</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may automatically collect certain non-personal information when you visit our website. This information may include your IP address, browser type, operating system, referring website, pages viewed, and the dates/times of your visits.</p>
                                </div>
                            </div>
                            <div className="information-sec">
                                <div className="heading mt-8">
                                    <h3 className="font-medium text-custom-black text-20 lg:text-24 xl:text-24 2xl:text-24">Use of Information</h3>
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Personal Information</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may use the personal information you provide to us to respond to your inquiries, provide the services you request, personalize your experience, send you newsletters or marketing communications, and improve our website and services.</p>
                                </div>
                                <div className="heading mt-5">
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Non-Personal Information</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Non-personal information is used to analyze trends, administer the website, track users' movements, and gather demographic information for aggregate use. This data helps us understand how visitors use our website and improve its functionality.</p>
                                </div>
                            </div>
                            <div className="information-sec">
                                <div className="heading mt-8">
                                    <h3 className="font-medium text-custom-black text-20 lg:text-24 xl:text-24 2xl:text-24">Disclosure of Information</h3>
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Personal Information</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may share your personal information with trusted third parties who assist us in operating our website, conducting our business, or providing services to you. We will only share the information necessary for them to perform their tasks and require them to protect your information in compliance with applicable laws and regulations.</p>
                                </div>
                                <div className="heading mt-5">
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Non-Personal Information</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may share non-personal information with third parties for various purposes, such as analytics, marketing, or improving our services. This information does not identify individuals and is typically aggregated or anonymized.</p>
                                </div>
                                <div className="heading mt-8">                                    
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Data Security</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                                </div>
                                <div className="heading mt-8">                                    
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Cookies and Tracking Technologies</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may use cookies, beacons, and similar technologies to enhance your experience on our website. These technologies collect non-personal information about your usage patterns and preferences. You can manage your cookie preferences through your browser settings.</p>
                                </div>
                                <div className="heading mt-8">                                    
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Third-Party Links</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Our website may contain links to third-party websites. We have no control over the content or privacy practices of those sites and encourage you to review their respective privacy policies.</p>
                                </div>
                                <div className="heading mt-8">                                    
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Children's Privacy</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Our website is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us, and we will promptly delete it.</p>
                                </div>
                                <div className="heading mt-8">                                    
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Changes to this Privacy Policy</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this policy periodically.</p>
                                </div>
                                <div className="heading mt-8">                                    
                                    <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Contact Us</h5>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at [contact information].</p>
                                </div>
                                <div className="privacy-content mt-4">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};