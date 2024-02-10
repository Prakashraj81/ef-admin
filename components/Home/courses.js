"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../animation/ScrollAnimationWrapper";
import getScrollAnimation from "../animation/getScrollAnimation";
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

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
    let [selectedButton, setSelectedButton] = useState ('Professional course');    
    let [CategoryList, setCategoryList] = useState ([]); 
    let [EventCategoryList, setEventCategoryList] = useState ([]); 
    let [EventCategoryRefId, setEventCategoryRefId] = useState (0); 

    useEffect(() => {        
        GetCategoryList();
        //GetEventCategoryList(EventCategoryRefId);
        //test();
      }, []);
    
      const GetCategoryList = async() => {
        try {
          const response = await axios.post('/api/event-category/geteventcategory');
            if (response.data.eventcategory.length !== 0) {
              setCategoryList(response.data.eventcategory);
              return;
            } else {
              setCategoryList([]);
            }
        } catch (error) {
          console.error('Error:', error);
        }   
      }


      const GetEventCategoryList = async(EventCategoryRefId) => {        
        try {
          const response = await axios.post('/api/events/event-list-home', {EventCategoryRefId});
            if (response.data.events.length !== 0) {
              EventCategoryList = response.data.events;
              setEventCategoryList(response.data.events);
              test(EventCategoryList);
            } else {
              setEventCategoryList([]);
            }
        } catch (error) {
          console.error('Error:', error);
        }   
      }

    

    function test(EventCategoryList){
    const Courses_1 = EventCategoryList.filter((name) => name.EventCategoryName === name.EventCategoryName);
    const Courses_2 = names.filter((name) => name.category === 'Courses-2');
    const Courses_3 = names.filter((name) => name.category === 'Courses-3');
    const Courses_4 = names.filter((name) => name.category === 'Courses-4');
    }

    let selectedNames = [];

    // if (selectedButton === 'Professional course') {
    //     selectedNames = Courses_1;
    // } else if (selectedButton === 'Courses-2') {
    //     selectedNames = Courses_2;
    // } else if (selectedButton === 'Courses-3') {
    //     selectedNames = Courses_3;
    // } else if (selectedButton === 'Courses-4') {
    //     selectedNames = Courses_4
    // }


    const SelectCategoryNameEvent = (event) => {
        EventCategoryRefId = Number(event.currentTarget.id);
        let EventValue = event.target.value;
        setSelectedButton(EventValue);
        setEventCategoryRefId(EventCategoryRefId);
        GetEventCategoryList(EventCategoryRefId);

    }


    const nameElements = EventCategoryList.map((list, index) => (
        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                    src={`/events/${list.EventImage}`}
                    alt={`/events/${list.EventImage}`}
                    className={`h-full w-full object-cover object-center ${!list.EventImage ? "skeleton" : ""}`}
                />

                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {list.EventHeading}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ₹{list.EventAmount}
                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {list.EventName}
                </p>

                <div className='flex justify-between border-solid border-1-5 border-custom-black-gray rounded-md p-2'>
                    <p>{list.EventClassCount}</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>{list.EventMembers}</p>
                        </div>
                        <div className='flex'>
                            <img src={'/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>{list.EventRating}</p>
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
                    {CategoryList && CategoryList.map((category) => (
                        <button
                            id={category.Id}
                            value={category.EventCategoryRefId}
                            key={category.EventCategoryName}
                            onClick={SelectCategoryNameEvent}
                            className={`bg-transparent ${selectedButton === category.EventCategoryName ? 'text-black border-b-2 border-primary-color' : 'text-lightgrey'} pb-2 text-lg hidden sm:block`}
                        >
                            {category.EventCategoryName}
                        </button>
                    ))}
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
 



