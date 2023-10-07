import React from "react";
import Image from "next/image";
import PrivacyPolicy from './privacy-policy';
import Layout from './../components/layout';
import type { ReactElement } from 'react';

export default function TermsandConditions() {
    return (
        <>
            <div className="terms-conditions-wrapper">
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
                            <h4 className="text-26 md:text-28 lg:text-32 xl:text-32 2xl:text-32 text-custom-black font-medium">Terms and Conditions</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                    <div className="gallery-heading text-center">
                        <h3 className="text-custom-black text-22 md:text-24 lg:text-26 xl:text-26 2xl:text-26">Terms of Use</h3>
                        <div className="mt-2 mx-auto">
                            <hr className="w-31 mx-auto md:w-10 lg:w-10 xl:w-10 2xl:w-10 rounded-2xl border-2 border-primary-color"></hr>
                        </div>
                    </div>
                    <div className="privacy-section py-10">
                        <div className="information-sec">
                            <div className="heading mt-5">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Refund Policy</h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">All sales are final and no refund will be issued. Some products offered as Money Back Guaranteed are exceptions to this term. Exception only applies to products that clearly state that it offers Money Back Guaranteed within 24 hour trial.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">All products offered on this Site are digitally delivered. You must contact the site admin before opening a formal dispute regarding issues with digital file access. A dispute claiming dissatisfaction regarding the contents or quality of the product will not be considered for refund and you will be charged for our services.</p>
                            </div>
                            <div className="heading mt-5">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Services</h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">If you wish to terminate a private, one-on-one consultation or therapeutic art session engagement, you must follow the procedures outlined in this paragraph. First, you must detail your reasons, complaints and grievances verbally and must submit a request in writing to terminate the agreed service info@eftapei.com. Refund will not be issued for services already rendered. In the event of an early termination of a service (e.g., package or group program), you will be charged pro rata for sessions, classes and/or package components used through the date of termination at the retail price (not package price) of each element at the date of termination. Cancellation fees may be charged.</p>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">Payment</h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time.
                                    You agree to pay all charges at the prices then in effect for your purchases and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. </p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">If your order is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. </p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We reserve the right to refuse any order placed through the Site. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</p>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">
                                    Email & Communications</h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">The Website may use your personal information to contact you with newsletters, marketing or promotional materials and other information.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received online, mail, and telephone. This also applies when you register for our website, sign up through any of our forms using your email address or make a purchase on this site.</p>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">
                                    Products, Digital Downloads, & Content
                                </h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We (Eftapei or author on this Website) make every effort to display as accurately as possible the details of the products available on the Site. However, we do not guarantee that the details of the products, digital downloads, or any content will be accurate, complete, reliable, current, or free of other errors. We reserve the right to discontinue any products at any time for any reason.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We do not guarantee that the products, offers, and materials sold and downloaded from this Website and any affiliated sites will attain a particular result. By using this website you accept and understand that results differ for individuals. You fully agree that there are no guarantees for specific outcomes or results for using the information you receive on this Website. Eftapei does not make warranties concerning your likelihood of success or results of any kind. You understand that you are ultimately responsible for your own wellbeing, business, finances, health, and lifestyle choices. By using this Website, you assume all responsibility for any such risk.</p>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">
                                    User Generated Contributions
                                </h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, messages, suggestions, personal information or other material (collectively, "Contributions"). </p>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">
                                    Reviews
                                </h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may provide you areas on the Site to leave reviews, ratings, or feedbacks. When posting a review, you must comply with the following criteria: </p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <ul className="list-disc pl-4">
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You should have firsthand experience with the person/entity being reviewed.</li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language. </li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability.</li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Your reviews should not contain references to illegal activity. </li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You should not be affiliated with competitors if posting negative reviews. </li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You should not make any conclusions as to the legality of conduct. </li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You may not post any false or misleading statements.</li>
                                    <li className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You may not organize a campaign encouraging others to post reviews, whether positive or negative. </li>
                                </ul>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. </p>
                                </div>
                                <div className="privacy-content mt-2">
                                    <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sub-licensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews. </p>
                                </div>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">
                                    Disclosure
                                </h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">

                                    As a general rule, we do not sell, rent, lease or otherwise transfer any information collected whether automatically or through your voluntary action. </p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may disclose your personal information to our subsidiaries, affiliates, and service providers for the purpose of providing our services to you.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may disclose your personal information to a third party, including a lawyer or collection agency, when necessary to enforce our terms of service or any other agreement between you and the Company.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">We may provide your information to any successor in interest in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company’s asserts and/or business.
                                    We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights or when compelled by a court or other governmental entity to do so.</p>
                            </div>
                        </div>


                        <div className="information-sec">
                            <div className="heading mt-8">
                                <h5 className="mt-1 text-lg lg:text-20 xl:text-20 2xl:text-20">
                                    Disclaimer
                                </h5>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">

                                This Website details the author’s personal experiences and opinions about Art therapy, Healing and Mental well-being. In addition, the author does not represent or warrant that the information accessible via this Website is accurate, complete or current.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">The author is not a mental health or healthcare provider and statements made in this Website does not constitute mental health diagnosis or treatment. They are not intended to diagnose, treat, cure, or prevent any condition or disease. Please consult with your physician or mental health provider regarding the suggestions and recommendations made in this website.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Before using or incorporating art or art therapy ideas for therapeutic purposes, you will consult your physician or licensed healthcare practitioner to ensure that you are first receiving proper mental health care and that the examples contained in this Website will not harm you.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">ou also understand that the information provided on this Website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information. This website contains links to other third-party websites. Such links are only for the convenience of the reader, user, or browser; the Website and its authors do not recommend or endorse the contents of the third-party sites.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">Users of this website should contact their attorney to obtain advice with respect to any particular legal matter. No reader, user, or browser of this site should act or refrain from acting on the basis of information on this site without first seeking legal advice from counsel in the relevant jurisdiction. Only your individual attorney can provide assurances that the information contained herein – and your interpretation of it – is applicable or appropriate to your particular situation. Use of, and access to, this website or any of the links or resources contained within the site do not create an attorney-client relationship between the reader, user, or browser and website authors, contributors, contributing law firms, or committee members and their respective employers. </p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">The author or any contributors, or representatives will not be held responsible for any loss or damages arising out of or in connection with the use of this website.</p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">You understand that this Website is not intended as a substitute for consultation with a licensed healthcare and mental health practitioner. </p>
                            </div>
                            <div className="privacy-content mt-2">
                                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-custom-black text-justify font-medium leading-7">The views expressed at, or through, this Website are those of the individual authors writing in their individual capacities only – not those of their related committees, organizations, or boards. All liability with respect to actions taken or not taken based on the contents of this site are hereby expressly disclaimed. The content on this posting is provided "as is;" no representations are made that the content is error-free.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

TermsandConditions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};