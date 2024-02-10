import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from "axios";

export default function ContactUsForm() {
    let [Id, setId] = useState(0);
    let [EnquiryDate, setEnquiryDate] = useState("");
    let [FullName, setFullName] = useState("");
    let [Email, setEmail] = useState("");
    let [PhoneNo, setPhoneNo] = useState("");
    let [Message, setMessage] = useState("");

    let [isSumbitDisabled, setisSumbitDisabled] = useState(false);
    let [FullNameError, setFullNameError] = useState(false);
    let [EmailError, setEmailError] = useState(false);
    let [PhoneNoError, setPhoneNoError] = useState(false);

    useEffect(() => {
        //Get the current date in the format "YYYY-MM-DD"
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setEnquiryDate(formattedDate);
    }, []);

    let defaultValues = {};

    const onSubmitAPI = async (defaultValues) => {
        try {            
            let JSONdata = JSON.stringify(defaultValues);
            //Sendinblue API key
            let apiKey = "xsmtpsib-f5f426f4a000b94dd02ab3cb6f4c8c45bfbb16638ac47eaa03c35c4e155ba0bc-ZCAQHtVcOFkPprdK";

            // API endpoint where we send the form data.
            let endpoint = "https://api.sendinblue.com/v3/smtp/email";           
            let sender = {
                name: "Prakash",
                email: "prakashsanu12@gmail.com", 
            };            
            let subject = "Contact form";
            let recipientEmail = "aprakashraj81@gmail.com";
            let htmlContent = `
                <html>
                    <head>
                        <title>Eftapei mind make over</title>
                    </head>
                    <body>
                        <h1>Contact Form Submission</h1>
                        <div>
                            <img style="width: 250px;height:80px; margin:0 auto;" src="https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75" alt="Eftapei mind make over" />
                            <div style="padding:15pox 0px;">
                                <p style="float:right; text-align:right;"><strong>Date:</strong> ${defaultValues.EnquiryDate}</p>
                                <p><strong>FullName:</strong> ${defaultValues.FullName}</p>
                                <p><strong>Email:</strong> ${defaultValues.Email}</p>                               
                                <p><strong>PhoneNo:</strong> ${defaultValues.PhoneNo}</p>                                
                                <p><strong>Message:</strong> ${defaultValues.Message}</p>                                
                            </div>
                        </div>
                    </body>
                </html>
            `;

            // Form the request for sending data to Sendinblue.
            const options = {           
                method: "POST",
                url: endpoint,
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${apiKey}`,
                },
                data: {
                  sender,
                  subject,
                  to: [{ email: recipientEmail }],
                  htmlContent,
                },
            };            
            const response = await axios(endpoint, options);           
            console.log("Response from Sendinblue:", response.data);
            openModal();
            alert("Form submitted successfully!");
        } catch (error) {
            // Log the detailed error response from Sendinblue
            console.error("Error response from Sendinblue:", error.response?.data);        
            alert("An error occurred while submitting the form. Please try again.");
        }        
    };

    const onChangeInput = (event) => {
        let InputId = event.currentTarget.id;
      let Value = event.target.value;
      isSumbitDisabled = false;
      setisSumbitDisabled(false);
      if(InputId === "FullName"){
        setFullName(Value);
        setFullNameError(false);        
      }  
      else if(InputId === "Email"){
        setEmail(Value);
        setEmailError(false);   
      }    
      else if(InputId === "PhoneNo"){
        setPhoneNo(Value);
      }    
      else {
        setMessage(Value);
      }
    }

    const onSubmit = async () => {
        defaultValues = {
            Id: 0,
            EnquiryDate: EnquiryDate,
            FullName: FullName,
            Email: Email,
            PhoneNo: PhoneNo,
            Message: Message,
        };
        // if (defaultValues.FullName != "") {
        //     try {
        //         await axios.post('/api/enquiry/insert', { Id, EnquiryDate, FullName, Email, PhoneNo, Message });
        //         onSubmitAPI(defaultValues); 
        //       } catch (error) {                
        //         console.error('Error inserting enquiry:', error);
        //         console.log('Error inserting enquiry:', error);
        //       }                         
        // }
        // else {
        //     console.log("Failed");
        // }   
        
        try {
            await axios.post('/api/enquiry/insert', { Id, EnquiryDate, FullName, Email, PhoneNo, Message });
            onSubmitAPI(defaultValues); 
            } catch (error) {                
            console.error('Error inserting enquiry:', error);
            console.log('Error inserting enquiry:', error);
        }    
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
            <form action="#" className="w-full inline-block" method="POST">
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
                            <input type="text" onChange={onChangeInput} id="FullName" className="input-field mt-3 text-custom-black-gray w-full px-5 py-3 text-sm border border-1 border-gray-300 focus:outline-none" placeholder="Enter your full name" />    
                            {FullNameError && (
                            <p className="text-red-500" role="alert">This field required</p>
                            )}                            
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div className="contact-input w-full inline-block float-left md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                            <div className="input-sec">
                                <label className="text-custom-black text-sm font-medium">Email<i className="text-red-600">*</i></label>
                                <input onChange={onChangeInput} id="Email" type="text" className="input-field mt-3 text-custom-black-gray w-full px-5 py-3 text-sm border border-1 border-gray-300 focus:outline-none" placeholder="Enter your email" />  
                                {EmailError && (
                                <p className="text-red-500" role="alert">This field required</p>
                                )}                                   
                            </div>
                        </div>

                        <div className="contact-input w-full inline-block float-left md:w-48 lg:w-48 xl:w-48 2xl:w-48">
                            <div className="input-sec">
                                <label className="text-custom-black text-sm font-medium">PhoneNo</label>
                                <input onChange={onChangeInput} id="PhoneNo" type="text" className="input-field mt-3 text-custom-black-gray w-full px-5 py-3 text-sm border border-1 border-gray-300 focus:outline-none" placeholder="Enter your phone no" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-input mt-3">
                        <div className="input-sec">
                            <label className="text-custom-black text-sm font-medium">Message</label>
                            <textarea rows={4} onChange={onChangeInput} id="Message" className="w-full mt-3 px-5 py-3 text-sm border border-1 text-custom-black-gray border-gray-300 focus:outline-none"></textarea>
                        </div>
                    </div>


                    <div className="mt-10 block submit-btn">
                        <button type="button" onClick={onSubmit} className="arrow btn-gradient border border-1 border-custom-white rounded-50 bg-primary-color text-white px-6 py-2 shadow-normal">
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



