"use client"
import React, { useMemo } from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../animation/ScrollAnimationWrapper";
import getScrollAnimation from "../animation/getScrollAnimation";


// interface Name {
//     course: string;
//     imageSrc: string;
//     profession: string
//     price: string
//     category: 'Courses-2' | 'Courses-1' | 'Courses-3' | 'Courses-4';
// }

const names = [
    {
        course: 'Course, Courses-1',
        imageSrc: '/courses/coursesOne.svg',
        profession: 'Heading',
        price: '40',
        category: 'Courses-1'
    },
    {
        course: 'Course, Courses-1, Title',
        imageSrc: '/courses/coursesTwo.svg',
        profession: 'Lorem Ipsum Heading',
        price: '21',
        category: 'Courses-1'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesThree.svg',
        profession: 'Heading',
        price: '21',
        category: 'Courses-1'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesFour.svg',
        profession: 'Lorem Ipsum Heading',
        price: '99',
        category: 'Courses-1'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesOne.svg',
        profession: 'Heading',
        price: '89',
        category: 'Courses-2'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesThree.svg',
        profession: 'Heading',
        price: '89',
        category: 'Courses-2'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesFour.svg',
        profession: 'Lorem Ipsum Heading',
        price: '69',
        category: 'Courses-2'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesTwo.svg',
        profession: 'Heading',
        price: '69',
        category: 'Courses-2'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesTwo.svg',
        profession: 'Lorem Ipsum Heading',
        price: '99',
        category: 'Courses-3'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesFour.svg',
        profession: 'Heading',
        price: '99',
        category: 'Courses-3'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesOne.svg',
        profession: 'Heading',
        price: '99',
        category: 'Courses-3'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesThree.svg',
        profession: 'Lorem Ipsum Heading',
        price: '89',
        category: 'Courses-3'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesThree.svg',
        profession: 'Heading',
        price: '21',
        category: 'Courses-4'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesFour.svg',
        profession: 'Lorem Ipsum Heading',
        price: '29',
        category: 'Courses-4'
    },
    {
        course: 'Course',
        imageSrc: '/courses/coursesOne.svg',
        profession: 'Lorem Ipsum Heading',
        price: '99',
        category: 'Courses-4'
    },
    {
        course: 'Heading',
        imageSrc: '/courses/coursesTwo.svg',
        profession: 'Lorem Ipsum Heading',
        price: '58',
        category: 'Courses-4'
    }
];

const Courses = () => {    

    //const [selectedButton, setSelectedButton] = useState < 'Courses-1' | 'Courses-2' | 'Courses-3' | 'Courses-4' | 'all' | null > ('Courses-1');
    const [selectedButton, setSelectedButton] = useState ('Courses-1');    

    const Courses_1 = names.filter((name) => name.category === 'Courses-1');
    const Courses_2 = names.filter((name) => name.category === 'Courses-2');
    const Courses_3 = names.filter((name) => name.category === 'Courses-3');
    const Courses_4 = names.filter((name) => name.category === 'Courses-4');

    let selectedNames = [];

    if (selectedButton === 'Courses-1') {
        selectedNames = Courses_1;
    } else if (selectedButton === 'Courses-2') {
        selectedNames = Courses_2;
    } else if (selectedButton === 'Courses-3') {
        selectedNames = Courses_3;
    } else if (selectedButton === 'Courses-4') {
        selectedNames = Courses_4
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ₹{name.price}
                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {name.profession}
                </p>

                <div className='flex justify-between border-solid border-1-5 border-custom-black-gray rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ));

    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="bg-custom-light">
    <ScrollAnimationWrapper children={undefined} className={undefined}>
        <motion.div
        className="opacity-1px"
            variants={scrollAnimation}>
            <div id='courses-section' className="bg-gradient-to-b from-white-300 to-white-500 max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto py-14">

                <div className='flex justify-between items-center pb-12'>
                    <h2 className="text-custom-black font-bold text-20 md:text-24 lg:text-28 xl:text-28 2xl:text-28 text-justify my-2">Popular Courses</h2>
                    <div>
                        <button className="bg-primary-color text-white hover:bg-purple text-purple font-medium hover:bg-white hover:text-primary-color py-3 px-4 border hover:border-2 hover:border-primary-color hover:shadow-primary-md rounded-50">
                            Explore Classes
                        </button>
                    </div>
                </div>

                <div className='flex justify-between lg:justify-start xl:justify-start 2xl:justify-start nowhitespace space-x-5 rounded-xl p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('Courses-1')} className={"bg-transparent" + (selectedButton === 'Courses-1' ? 'text-black border-b-2 border-primary-color' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Courses-1</button>
                    <button onClick={() => setSelectedButton('Courses-2')} className={"bg-transparent" + (selectedButton === 'Courses-2' ? 'text-black border-b-2 border-primary-color' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Courses-2</button>
                    <button onClick={() => setSelectedButton('Courses-3')} className={"bg-transparent" + (selectedButton === 'Courses-3' ? 'text-black border-b-2 border-primary-color' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Courses-3</button>
                    <button onClick={() => setSelectedButton('Courses-4')} className={"bg-transparent" + (selectedButton === 'Courses-4' ? 'text-black border-b-2 border-primary-color' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Courses-4</button>

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('Courses-1')} width={50} height={50} className={"bg-transparent" + (selectedButton === 'Courses-1' ? 'border-b-2 border-primary-color fill-primary-color' : '') + " pb-2 block sm:hidden"} />
                    <DevicePhoneMobileIcon onClick={() => setSelectedButton('Courses-2')} width={50} height={50} className={"bg-transparent" + (selectedButton === 'Courses-2' ? 'border-b-2 border-primary-color fill-primary-color' : '') + " pb-2 block sm:hidden"} />
                    <CircleStackIcon onClick={() => setSelectedButton('Courses-3')} width={50} height={50} className={"bg-transparent" + (selectedButton === 'Courses-3' ? 'border-b-2 border-primary-color fill-primary-color' : '') + " pb-2 block sm:hidden"} />
                    <CloudIcon onClick={() => setSelectedButton('Courses-4')} width={50} height={50} className={"bg-transparent" + (selectedButton === 'Courses-4' ? 'border-b-2 border-primary-color fill-primary-color' : '') + " pb-2 block sm:hidden"} />

                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-5 lg:py-12 xl:py-12 2xl:py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    </ScrollAnimationWrapper>
        </div> 
    );
} 
 
export default Courses; 
 



