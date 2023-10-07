import React from "react";
import Image from "next/image";

const FAQData = [
    {

        question: "How can Eftapei help me?",
        answer: "You may feel stuck and want to try an alternative way to process things. Because art is a universal language, anyone can benefit from art therapy.",
        image: "/faq/Arts-and-Crafts-1.png",
    },
    {
        question: "How is Art Therapy used?",
        answer: "Eftape help individuals, young children, develop social skills and raise self-confidence. We seek to help individuals overcome emotional or mind challenges to achieve a greater sense of personal wellbeing.",
        image: "/faq/Arts-and-Crafts-2.png",
    },
    {
        question: "Do I need to be an artist to participate in Eftpaei Course?",
        answer: "Art experience or skill is not a requirement to benefit from art therapy. You do not need to be an artist — but if you are, that’s cool too! I can assist you in using the art materials if you have any questions. Art therapy isn’t about being a great artist or achieving perfect technique. It’s about allowing yourself the freedom to express, explore and expand beyond your comfort zone. It’s about being open to the process of getting to know yourself in a different way. If you deal with anxiety, depression, low self-esteem or trauma, or if you’d like to finally get to the root of your struggles, art therapy can provide an alternative way to express, process and transcend these challenges.",
        image: "/faq/Arts-and-Crafts-3.png",
    },
];

export default function FAQSection() {
    return (
        <>
            <div>
                {FAQData.map((data, index) => {
                    return (
                        <div className="w-full inline-block lg:flex xl:flex 2xl:flex items-center shadow-custom bg-white py-1 lg:py-10 xl:py-10 2xl:py-10 mt-12">
                            <div className="w-full relative z-20 lg:w-4/12 xl:w-4/12 2xl:w-4/12 inline-block float-left">
                                <Image
                                    className="faq mx-auto"
                                    src={data.image}
                                    alt="Eftapei"
                                    width={250}
                                    height={250}
                                    priority
                                />
                            </div>
                            <div className="faq-content px-3 lg:px-0 xl:px-0 2xl:px-0 w-full lg:w-7/12 xl:w-7/12 2xl:w-7/12 inline-block float-left">
                                <div className="heading mt-2 lg:mt-0 xl:mt-0 2xl:mt-0">
                                    <h3 className="text-primary-color font-semibold text-lg lg:text-22 xl:text-22 2xl:text-22">{data.question}</h3>
                                    <div class="mt-2"><hr class="w-31 float-left mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"/></div>
                                </div>
                                <div className="para mt-8 mb-5 lg:mb-0 xl:mb-0 2xl:mb-0">
                                    <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">{data.answer}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full inline-block lg:flex xl:flex 2xl:flex items-center shadow-custom bg-white py-1 lg:py-10 xl:py-10 2xl:py-10 mt-12">
                <div className="w-full relative z-20 lg:w-4/12 xl:w-4/12 2xl:w-4/12 inline-block float-left">
                    <Image
                        className="faq mx-auto"
                        src="/faq/Arts-and-Crafts-4.png"
                        alt="Eftapei"
                        style={{ height: "230px" }}
                        width={250}
                        height={350}
                        priority
                    />
                </div>
                <div className="faq-content px-3 lg:px-0 xl:px-0 2xl:px-0 w-full lg:w-7/12 xl:w-7/12 2xl:w-7/12 inline-block float-left">
                    <div className="heading mt-2">
                        <h3 className="text-primary-color font-semibold text-lg lg:text-22 xl:text-22 2xl:text-22">What exactly is Art Therapy?</h3>
                        <div class="mt-2"><hr class="w-31 float-left mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"/></div>
                    </div>
                    <ul className="mt-8 list-disc mb-5 lg:mb-0 xl:mb-0 2xl:mb-0">
                        <li className="transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Eftapei  features visual art among the many tools available to support your personal journey and growth.</span>
                        </li>
                        <li className="py-3 transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Engaging in the creative process and reflecting on the artwork can foster self-awareness, reconcile emotional conflicts, reduce anxiety, enhance self-esteem, and manage stress and traumatic experiences.</span>
                        </li>
                        <li className="transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Eftpaei is based on the premise that we are all creative beings and art comes in all forms!</span>
                        </li>
                        <li className="transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">There is no wrong way to express yourself creatively — just a willingness to be open to the process.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full inline-block lg:flex xl:flex 2xl:flex items-center shadow-custom bg-white py-1 lg:py-10 xl:py-10 2xl:py-10 mt-12">
                <div className="w-full relative z-20 lg:w-4/12 xl:w-4/12 2xl:w-4/12 inline-block float-left">
                    <Image
                        className="faq mx-auto"
                        src="/faq/Arts-and-Crafts-6.png"
                        alt="Eftapei"
                        style={{ height: "230px" }}
                        width={250}
                        height={350}
                        priority
                    />
                </div>
                <div className="faq-content px-3 lg:px-0 xl:px-0 2xl:px-0 w-full lg:w-7/12 xl:w-7/12 2xl:w-7/12 inline-block float-left">
                    <div className="heading mt-2">
                        <h3 className="text-primary-color font-semibold text-lg lg:text-22 xl:text-22 2xl:text-22">How long is the session for?</h3>
                        <div class="mt-2"><hr class="w-31 float-left mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"/></div>
                    </div>
                    <ul className="mt-8 list-disc mb-5 lg:mb-0 xl:mb-0 2xl:mb-0">
                        <li className="transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Individual sessions are 60 minutes. I ask you to pay for sessions via e-transfer</span>
                        </li>
                        <li className="py-3 transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Minimum three sessions to complete the therapy. It may increase on case to case basis.</span>
                        </li>
                        <li className="transition delay-700 duration-300 ease-in-out">
                            <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">You will be relaxed and self paced after the session.</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="w-full inline-block lg:flex xl:flex 2xl:flex items-center shadow-custom bg-white py-1 lg:py-10 xl:py-10 2xl:py-10 mt-12">
                <div className="w-full relative z-20 lg:w-4/12 xl:w-4/12 2xl:w-4/12 inline-block float-left">
                    <Image
                        className="faq mx-auto"
                        src="/faq/Arts-and-Crafts-5.png"
                        alt="Eftapei"
                        style={{ height: "230px" }}
                        width={250}
                        height={250}
                        priority
                    />
                </div>
                <div className="faq-content px-3 lg:px-0 xl:px-0 2xl:px-0 w-full lg:w-7/12 xl:w-7/12 2xl:w-7/12 inline-block float-left">
                    <div className="heading mt-2">
                        <h3 className="text-primary-color font-semibold text-lg lg:text-22 xl:text-22 2xl:text-22">How long is the session for?</h3>
                        <div class="mt-2"><hr class="w-31 float-left mx-auto md:w-15 lg:w-15 xl:w-15 2xl:w-15 rounded-2xl border-2 border-primary-color"/></div>
                    </div>
                    <div className="para mt-4">
                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">Online Eftapei Sessions allows individuals to engage in art therapy sessions remotely, using digital platforms and tools. Client connect virtually and engage in real-time conversation while working on art activities together.</p>
                    </div>
                    <div className="para mt-4">
                        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">During the session, we will guide you through various art-based activities and exercises tailored to your needs and goals. They may provide prompts or themes for art-making or encourage you to express yourself freely through art. Eftpaei will create a supportive and non-judgmental space for you to explore your feelings, thoughts, and experiences through the artistic process.</p>
                    </div>
                </div>
            </div>

            <div className="w-full shadow-custom bg-white py-3 px-7">
                <ul className="mt-5 list-disc mb-5 lg:mb-0 xl:mb-0 2xl:mb-0">
                    <li className="transition delay-700 duration-300 ease-in-out mt-1">
                        <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Sharing and Reflection: As you create art during the session, you'll have the opportunity to share your artwork with the therapist, either by holding it up to the camera or using screen-sharing functions. We will encourage discussion and reflection on the artwork, exploring the symbolism, emotions, and meanings behind your creations.</span>
                    </li>
                    <li className="py-3 transition delay-700 duration-300 ease-in-out mt-1">
                        <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">During the session, we will guide you through various art-based activities and exercises tailored to your needs and goals. They may provide prompts or themes for art-making or encourage you to express yourself freely through art. Eftpaei will create a supportive and non-judgmental space for you to explore your feelings, thoughts, and experiences through the artistic process.</span>
                    </li>
                    <li className="transition delay-700 duration-300 ease-in-out mt-1">
                        <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Processing and Integration: We  will help you explore the insights and emotions that arise from the art-making process. They may ask open-ended questions, provide interpretations, or facilitate discussions about your artwork. The focus is on self-discovery, personal growth, and building resilience through art and reflection.</span>
                    </li>
                    <li className="transition delay-700 duration-300 ease-in-out mt-1">
                        <span className="text-custom-black text-sm lg:text-base xl:text-base 2xl:text-base">Follow-Up and Integration: Between sessions, you may be encouraged to continue engaging in art activities or reflective exercises as homework or as a means of self-care. We may provide resources, suggestions, or prompts to support your ongoing artistic exploration and integration of insights gained during sessions.</span>
                    </li>
                </ul>
            </div>
        </>
    )
}