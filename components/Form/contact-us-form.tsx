import React from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ContactUsForm() {
    const [FullName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNo, setPhoneNo] = useState("")
    const [Mail, setMail] = useState("")
    const [Message, setMessage] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            Type: "Contact-us",
            FullName: "",
            Email: "",
            PhoneNo: "",
            Message: "",
        }
    });

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
        <div className="bg-white">
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
                                type="text" className="input-field mt-3 text-custom-black-gray w-full px-5 py-3 text-sm border border-1 border-gray-300 focus:outline-none" placeholder="Enter your name" />
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
                                    type="text" className="input-field mt-3 text-custom-black-gray w-full px-5 py-3 text-sm border border-1 border-gray-300 focus:outline-none" placeholder="Enter your email" />
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
                                    type="text" className="input-field mt-3 text-custom-black-gray w-full px-5 py-3 text-sm border border-1 border-gray-300 focus:outline-none" placeholder="Enter your phone no" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-input mt-3">
                        <div className="input-sec">
                            <label className="text-custom-black text-sm font-medium">Message</label>
                            <textarea rows={4} {...register("Message")} className="w-full mt-3 px-5 py-3 text-sm border border-1 text-custom-black-gray border-gray-300 focus:outline-none"></textarea>
                        </div>
                    </div>


                    <div className="mt-10 block submit-btn">
                        <button type="submit" className="arrow btn-gradient border border-1 border-custom-white rounded-50 bg-primary-color text-white px-6 py-2 shadow-normal">
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

function setCompanyName(arg0: string) {
    throw new Error("Function not implemented.");
}
