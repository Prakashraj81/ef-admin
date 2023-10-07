import React from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios';

export default function ContactForm() {
    let [FullName, setFullName] = useState("");
    let [Email, setEmail] = useState("");
    let [PhoneNo, setPhoneNo] = useState("");
    let [Mail, setMail] = useState("");
    let [Message, setMessage] = useState("");
    let currentDate = new Date();
    let year = currentDate.getFullYear();    
    let month = currentDate.getMonth() + 1; 
    let day = currentDate.getDate();
    let formattedDate = `${year}-${month}-${day}`;
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            Type: "Contact-us",
            Date: formattedDate,
            FullName: "",
            Email: "",
            PhoneNo: "",
            Message: "",
        }
    });

    const onSubmitAPI = async (defaultValues) => {
        try {            
            const JSONdata = JSON.stringify(defaultValues);
            //Sendinblue API key
            const apiKey = process.env.SENDINBLUE_API_KEY;

            // API endpoint where we send the form data.
            const endpoint = "https://api.sendinblue.com/v3/smtp/email";           
            const sender = {
                name: "Prakash",
                email: "prakashsanu12@gmail.com", 
            };            
            const subject = "Contact form";
            const recipientEmail = "aprakashraj81@gmail.com";
            const htmlContent = `
                <html>
                    <head>
                        <title>Eftapei mind make over</title>
                    </head>
                    <body>
                        <h1>Contact Form Submission</h1>
                        <div>
                            <img style="width: 250px;height:80px; margin:0 auto;" src="https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75" alt="Eftapei mind make over" />
                            <div style="padding:15pox 0px;">
                                <p><strong>FullName:</strong> ${defaultValues.FullName}</p>
                                <p><strong>Email:</strong> ${defaultValues.Email}</p>                               
                                <p><strong>PhoneNo:</strong> ${defaultValues.PhoneNo}</p>                                
                                <p><strong>Message:</strong> ${defaultValues.Message}</p>
                                <p style="float:right; text-align:right;"><strong>Date:</strong> ${defaultValues.Date}</p>
                            </div>
                        </div>
                    </body>
                </html>
            `;

            // Form the request for sending data to Sendinblue.
            const options = {           
            method: "POST",           
            headers: {
                "Content-Type": "application/json",
                "api-key": apiKey,
            },            
            data: {
                JSONdata,
                sender,
                subject,
                to: [{ email: recipientEmail }],
                htmlContent,
              },
            };            
            const response = await axios(endpoint, options);           
            console.log("Response from Sendinblue:", response.data);
            alert("Form submitted successfully!");
        } catch (error) {
            // Log the detailed error response from Sendinblue
            console.error("Error response from Sendinblue:", error.response?.data);        
            alert("An error occurred while submitting the form. Please try again.");
        }
    };

    const onSubmit = async (defaultValues) => {
        var value = JSON.stringify(defaultValues);
        if (defaultValues.FullName != "") {
            var Apiurl = "/";
            const urlresponse = await fetch(Apiurl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(defaultValues),
                mode: "no-cors",
            });
            openModal();
        }
        else {
            console.log("Failed");
        }
        //res.status(200).end()
    };

    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)        
    }
    return (
        <div className="bg-primary-light">
            <form action="#" className="w-full inline-block" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Mail sent successful
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Your mail has been successfully. We’ve sent
                                                you an email with all of the details of your request.
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <div className="form-sec w-full block">
                    <div className="contact-input">
                        <div className="input-sec">
                            <label className="text-custom-black text-sm font-medium">Full Name<i className="text-red-600">*</i></label>
                            <input
                                {...register("FullName", { required: true })} onChange={(e) => { setFullName(e.target.value) }}
                                aria-invalid={errors.FullName ? "true" : "false"}
                                type="text" className="input-field mt-3 bg-custom-form-light text-custom-black-gray w-full px-5 py-3 text-sm border-gray-300 focus:outline-none" placeholder="Enter your name" />
                            <div className="error-msg">
                                {errors.FullName?.type === 'required' && <p className="text-red-500" role="alert">Full name is required</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div className="contact-input w-full inline-block float-left md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                            <div className="input-sec">
                                <label className="text-custom-black text-sm font-medium">Email<i className="text-red-600">*</i></label>
                                <input
                                    {...register("Email", { required: true })} onChange={(e) => { setEmail(e.target.value) }}
                                    aria-invalid={errors.Email ? "true" : "false"}
                                    type="text" className="input-field mt-3 bg-custom-form-light text-custom-black-gray w-full px-5 py-3 text-sm border-gray-300 focus:outline-none" placeholder="Enter your email" />
                                <div className="error-msg">
                                    {errors.Email?.type === 'required' && <p className="text-red-500" role="alert">Email is required</p>}
                                </div>
                            </div>
                        </div>

                        <div className="contact-input w-full inline-block float-left md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                            <div className="input-sec">
                                <label className="text-custom-black text-sm font-medium">PhoneNo</label>
                                <input
                                    {...register("PhoneNo", { required: false })} onChange={(e) => { setPhoneNo(e.target.value) }}
                                    aria-invalid={errors.PhoneNo ? "true" : "false"}
                                    type="text" className="input-field mt-3 bg-custom-form-light text-custom-black-gray w-full px-5 py-3 text-sm border-gray-300 focus:outline-none" placeholder="Enter your phone no" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-input mt-3">
                        <div className="input-sec">
                            <label className="text-custom-black text-sm font-medium">Message</label>
                            <textarea rows={4} {...register("Message")} className="w-full mt-3 px-5 py-3 text-sm  bg-custom-form-light text-custom-black-gray border-gray-300 focus:outline-none"></textarea>
                        </div>
                    </div>


                    <div className="mt-10 block submit-btn">
                        <button type="submit" className="arrow btn-gradient border-1 border-primaty-color rounded-50 border-2 bg-primary-color text-white hover:shadow-primary-md hover:bg-white hover:text-primary-color hover:border-primary-color px-6 py-2 shadow-normal">
                            <span className="font-medium">
                                Send Message
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}