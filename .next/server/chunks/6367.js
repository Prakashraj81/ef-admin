"use strict";
exports.id = 6367;
exports.ids = [6367];
exports.modules = {

/***/ 315:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/eva_arrow-back-fill.162378d7.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 261:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/eva_arrow-next-fill.466b3f77.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 4340:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/stars.762e45bb.svg","height":17,"width":16,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 4224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ContactForm() {
    let [FullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [PhoneNo, setPhoneNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let formattedDate = `${year}-${month}-${day}`;
    const { register, handleSubmit, watch, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: {
            Type: "Contact-us",
            Date: formattedDate,
            FullName: "",
            Email: "",
            PhoneNo: "",
            Message: ""
        }
    });
    const onSubmitAPI = async (defaultValues)=>{
        try {
            const JSONdata = JSON.stringify(defaultValues);
            //Sendinblue API key
            const apiKey = process.env.SENDINBLUE_API_KEY;
            // API endpoint where we send the form data.
            const endpoint = "https://api.sendinblue.com/v3/smtp/email";
            const sender = {
                name: "Prakash",
                email: "prakashsanu12@gmail.com"
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
                    "api-key": apiKey
                },
                data: {
                    JSONdata,
                    sender,
                    subject,
                    to: [
                        {
                            email: recipientEmail
                        }
                    ],
                    htmlContent
                }
            };
            const response = await (0,axios__WEBPACK_IMPORTED_MODULE_4__["default"])(endpoint, options);
            console.log("Response from Sendinblue:", response.data);
            alert("Form submitted successfully!");
        } catch (error) {
            // Log the detailed error response from Sendinblue
            console.error("Error response from Sendinblue:", error.response?.data);
            alert("An error occurred while submitting the form. Please try again.");
        }
    };
    const onSubmit = async (defaultValues)=>{
        var value = JSON.stringify(defaultValues);
        if (defaultValues.FullName != "") {
            var Apiurl = "/";
            const urlresponse = await fetch(Apiurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(defaultValues),
                mode: "no-cors"
            });
            openModal();
        } else {
            console.log("Failed");
        }
    //res.status(200).end()
    };
    let [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            action: "#",
            className: "w-full inline-block",
            method: "POST",
            onSubmit: handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                    appear: true,
                    show: isOpen,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                        as: "div",
                        className: "relative z-10",
                        onClose: closeModal,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fixed inset-0 bg-black bg-opacity-25"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex min-h-full items-center justify-center p-4 text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 scale-95",
                                        enterTo: "opacity-100 scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 scale-100",
                                        leaveTo: "opacity-0 scale-95",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
                                            className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
                                                    as: "h3",
                                                    className: "text-lg font-medium leading-6 text-gray-900",
                                                    children: "Mail sent successful"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Your mail has been successfully. We’ve sent you an email with all of the details of your request."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                                        onClick: closeModal,
                                                        children: "Got it, thanks!"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-sec w-full block",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "contact-input",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-sec",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "text-custom-black text-sm font-medium",
                                        children: [
                                            "Full Name",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "text-red-600",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ...register("FullName", {
                                            required: true
                                        }),
                                        onChange: (e)=>{
                                            setFullName(e.target.value);
                                        },
                                        "aria-invalid": errors.FullName ? "true" : "false",
                                        type: "text",
                                        className: "input-field mt-3 bg-custom-form-light text-custom-black-gray w-full px-5 py-3 text-sm border-gray-300 focus:outline-none",
                                        placeholder: "Enter your name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "error-msg",
                                        children: errors.FullName?.type === "required" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-red-500",
                                            role: "alert",
                                            children: "Full name is required"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between mt-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact-input w-full inline-block float-left md:w-48 lg:w-48 xl:w-48 2xl:w-48",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-sec",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "text-custom-black text-sm font-medium",
                                                children: [
                                                    "Email",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "text-red-600",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ...register("Email", {
                                                    required: true
                                                }),
                                                onChange: (e)=>{
                                                    setEmail(e.target.value);
                                                },
                                                "aria-invalid": errors.Email ? "true" : "false",
                                                type: "text",
                                                className: "input-field mt-3 bg-custom-form-light text-custom-black-gray w-full px-5 py-3 text-sm border-gray-300 focus:outline-none",
                                                placeholder: "Enter your email"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "error-msg",
                                                children: errors.Email?.type === "required" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-red-500",
                                                    role: "alert",
                                                    children: "Email is required"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact-input w-full inline-block float-left md:w-48 lg:w-48 xl:w-48 2xl:w-48",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-sec",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-custom-black text-sm font-medium",
                                                children: "PhoneNo"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ...register("PhoneNo", {
                                                    required: false
                                                }),
                                                onChange: (e)=>{
                                                    setPhoneNo(e.target.value);
                                                },
                                                "aria-invalid": errors.PhoneNo ? "true" : "false",
                                                type: "text",
                                                className: "input-field mt-3 bg-custom-form-light text-custom-black-gray w-full px-5 py-3 text-sm border-gray-300 focus:outline-none",
                                                placeholder: "Enter your phone no"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "contact-input mt-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-sec",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-custom-black text-sm font-medium",
                                        children: "Message"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        rows: 4,
                                        ...register("Message"),
                                        className: "w-full mt-3 px-5 py-3 text-sm  bg-custom-form-light text-custom-black-gray border-gray-300 focus:outline-none"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-10 block submit-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "arrow btn-gradient border-1 border-primaty-color rounded-50 border-2 bg-primary-color text-white hover:shadow-primary-md hover:bg-white hover:text-primary-color hover:border-primary-color px-6 py-2 shadow-normal",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-medium",
                                    children: "Send Message"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_home_stars_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4340);
/* harmony import */ var _public_home_eva_arrow_back_fill_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(315);
/* harmony import */ var _public_home_eva_arrow_next_fill_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import react slick




const Testimoni = ()=>{
    let [TestimonialsList, setTestimonialsList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    let [ShowLoader, setShowLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [PageLoadStatus, setPageLoadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        GetTestimonialsList(0);
    }, []);
    //Get testimonials list api function
    const GetTestimonialsList = async (id)=>{
        setShowLoader(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/testimonials/gettestimonials");
            if (response.data.testimonials.length !== 0) {
                setTestimonialsList(response.data.testimonials);
            } else {
                setTestimonialsList([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setPageLoadStatus(false);
        setShowLoader(false);
    };
    const listTestimoni = [
        {
            name: "Prakashraj",
            image: "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
            city: "Chennai",
            country: "India",
            rating: "4",
            testimoni: "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.\uD83D\uDE4F\uD83D\uDE42"
        },
        {
            name: "Alagarsamy",
            image: "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
            city: "Chennai",
            country: "India",
            rating: "4.5",
            testimoni: "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.\uD83D\uDE4F\uD83D\uDE42"
        },
        {
            name: "Raj",
            image: "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
            city: "Chennai",
            country: "India",
            rating: "5",
            testimoni: "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.\uD83D\uDE4F\uD83D\uDE42"
        },
        {
            name: "Prakash",
            image: "https://eftapei-mind-makeover.vercel.app/_next/image?url=%2Flogo%2Fheader-logo.png&w=256&q=75",
            city: "Chennai",
            country: "India",
            rating: "3.5",
            testimoni: "Very Kind and supportive Mentor. Your Tips and Techniques helped alot for improvisation. Guided with Friendly Manner. Feeling Gratefil and am feeling so Gratitude for ur Guidence.\uD83D\uDE4F\uD83D\uDE42"
        }
    ]; // Removed the trailing comma
    // Rest of the code...
    const settings = {
        dots: true,
        customPaging: function(i) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "
                })
            });
        },
        dotsClass: "slick-dots w-max absolute mt-20  ",
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 736,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [sliderRef, setSliderRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return(// JSX code...
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                ...settings,
                arrows: false,
                ref: setSliderRef,
                className: "flex items-stretch justify-items-stretch",
                children: listTestimoni.map((listTestimonis, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-3 flex items-stretch",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-1 border-custom-black hover:border-primary-color transition-all rounded-lg p-8 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col xl:flex-row w-full items-stretch xl:items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex order-2 xl:order-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: listTestimonis.image,
                                                    height: 50,
                                                    width: 50,
                                                    alt: "Icon People"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col ml-5 text-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-lg  text-custom-black font-medium capitalize",
                                                            children: listTestimonis.name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "text-sm text-custom-black capitalize",
                                                            children: [
                                                                listTestimonis.city,
                                                                ",",
                                                                "india"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-none items-center ml-auto order-1 xl:order-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm",
                                                    children: listTestimonis.rating
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "flex ml-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            className: "bg-abour w-full",
                                                            src: "/home/stars.svg",
                                                            alt: "Eftapei",
                                                            width: 20,
                                                            height: 35,
                                                            priority: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            className: "bg-abour w-full",
                                                            src: "/home/stars.svg",
                                                            alt: "Eftapei",
                                                            width: 20,
                                                            height: 35,
                                                            priority: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            className: "bg-abour w-full",
                                                            src: "/home/stars.svg",
                                                            alt: "Eftapei",
                                                            width: 20,
                                                            height: 35,
                                                            priority: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            className: "bg-abour w-full",
                                                            src: "/home/stars.svg",
                                                            alt: "Eftapei",
                                                            width: 20,
                                                            height: 35,
                                                            priority: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-5 text-left",
                                    children: [
                                        "“",
                                        listTestimonis.testimoni,
                                        "”."
                                    ]
                                })
                            ]
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full items-center justify-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-none justify-between w-auto mt-14",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer",
                            onClick: sliderRef?.slickPrev,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "bg-abour",
                                src: "/home/eva_arrow-back-fill.svg",
                                alt: "Eftapei",
                                width: 20,
                                height: 20,
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer",
                            onClick: sliderRef?.slickNext,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "bg-abour text-primary-color",
                                src: "/home/eva_arrow-next-fill.svg",
                                alt: "Eftapei",
                                width: 20,
                                height: 20,
                                priority: true
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimoni);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Form_contact_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4224);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(564);
/* harmony import */ var _animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Form_contact_form__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__]);
([_Form_contact_form__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Contact() {
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white py-14",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: undefined,
                className: undefined,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                    variants: scrollAnimation,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full inline-block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full md:w-50 lg:w-50 xl:w-50 2xl:w-50 inline-block float-left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact-image",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "contact-img mx-auto",
                                        src: "/home/contact-img.svg",
                                        alt: "Eftapei",
                                        width: 400,
                                        height: 400,
                                        priority: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full md:w-50 lg:w-50 xl:w-50 2xl:w-50 inline-block float-left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "contact-heading",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "eftapei-heading-wrapper",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-primary-color font-semibold text-sm",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "our-company-heading",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "leading-50 font-bold text-custom-black text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26",
                                                    children: "Let’s Collaborate Now!"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "contact-form mt-5 w-full lg:w-80 xl:w-80 2xl:w-80",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Form_contact_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(564);
/* harmony import */ var _animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8873);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4275);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const names = [
    {
        course: "Course, Courses-1",
        imageSrc: "/courses/coursesOne.svg",
        profession: "Heading",
        price: "40",
        category: "Courses-1"
    },
    {
        course: "Course, Courses-1, Title",
        imageSrc: "/courses/coursesTwo.svg",
        profession: "Lorem Ipsum Heading",
        price: "21",
        category: "Courses-1"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesThree.svg",
        profession: "Heading",
        price: "21",
        category: "Courses-1"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesFour.svg",
        profession: "Lorem Ipsum Heading",
        price: "99",
        category: "Courses-1"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesOne.svg",
        profession: "Heading",
        price: "89",
        category: "Courses-2"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesThree.svg",
        profession: "Heading",
        price: "89",
        category: "Courses-2"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesFour.svg",
        profession: "Lorem Ipsum Heading",
        price: "69",
        category: "Courses-2"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesTwo.svg",
        profession: "Heading",
        price: "69",
        category: "Courses-2"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesTwo.svg",
        profession: "Lorem Ipsum Heading",
        price: "99",
        category: "Courses-3"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesFour.svg",
        profession: "Heading",
        price: "99",
        category: "Courses-3"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesOne.svg",
        profession: "Heading",
        price: "99",
        category: "Courses-3"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesThree.svg",
        profession: "Lorem Ipsum Heading",
        price: "89",
        category: "Courses-3"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesThree.svg",
        profession: "Heading",
        price: "21",
        category: "Courses-4"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesFour.svg",
        profession: "Lorem Ipsum Heading",
        price: "29",
        category: "Courses-4"
    },
    {
        course: "Course",
        imageSrc: "/courses/coursesOne.svg",
        profession: "Lorem Ipsum Heading",
        price: "99",
        category: "Courses-4"
    },
    {
        course: "Heading",
        imageSrc: "/courses/coursesTwo.svg",
        profession: "Lorem Ipsum Heading",
        price: "58",
        category: "Courses-4"
    }
];
const Courses = ()=>{
    //const [selectedButton, setSelectedButton] = useState < 'Courses-1' | 'Courses-2' | 'Courses-3' | 'Courses-4' | 'all' | null > ('Courses-1');
    let [selectedButton, setSelectedButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Professional course");
    let [CategoryList, setCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let [EventCategoryList, setEventCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let [EventCategoryRefId, setEventCategoryRefId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        GetCategoryList();
    //GetEventCategoryList(EventCategoryRefId);
    //test();
    }, []);
    const GetCategoryList = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/api/event-category/geteventcategory");
            if (response.data.eventcategory.length !== 0) {
                setCategoryList(response.data.eventcategory);
                return;
            } else {
                setCategoryList([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const GetEventCategoryList = async (EventCategoryRefId)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/api/events/event-list-home", {
                EventCategoryRefId
            });
            if (response.data.events.length !== 0) {
                EventCategoryList = response.data.events;
                setEventCategoryList(response.data.events);
                test(EventCategoryList);
            } else {
                setEventCategoryList([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    function test(EventCategoryList) {
        const Courses_1 = EventCategoryList.filter((name)=>name.EventCategoryName === name.EventCategoryName);
        const Courses_2 = names.filter((name)=>name.category === "Courses-2");
        const Courses_3 = names.filter((name)=>name.category === "Courses-3");
        const Courses_4 = names.filter((name)=>name.category === "Courses-4");
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
    const SelectCategoryNameEvent = (event)=>{
        EventCategoryRefId = Number(event.currentTarget.id);
        let EventValue = event.target.value;
        setSelectedButton(EventValue);
        setEventCategoryRefId(EventCategoryRefId);
        GetEventCategoryList(EventCategoryRefId);
    };
    const nameElements = EventCategoryList.map((list, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " text-lg sm:text-sm py-5 lg:py-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `/events/${list.EventImage}`,
                            alt: `/events/${list.EventImage}`,
                            className: `h-full w-full object-cover object-center ${!list.EventImage ? "skeleton" : ""}`
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-6 block font-normal text-gray-900",
                                children: list.EventHeading
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1",
                                children: [
                                    "₹",
                                    list.EventAmount
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        "aria-hidden": "true",
                        className: "mt-2 mb-5 text-2xl font-semibold ",
                        children: list.EventName
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between border-solid border-1-5 border-custom-black-gray rounded-md p-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: list.EventClassCount
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/courses/account.svg",
                                                alt: "circle"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-lightgrey ml-1",
                                                children: list.EventMembers
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/courses/Star.svg",
                                                alt: "star"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "ml-1",
                                                children: list.EventRating
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }, index));
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-custom-light",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: undefined,
            className: undefined,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: "opacity-1px",
                variants: scrollAnimation,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "courses-section",
                    className: "bg-gradient-to-b from-white-300 to-white-500 max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto py-14",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center pb-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-custom-black font-bold text-20 md:text-24 lg:text-28 xl:text-28 2xl:text-28 text-justify my-2",
                                    children: "Popular Courses"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-primary-color text-white hover:bg-purple text-purple font-medium hover:bg-white hover:text-primary-color py-3 px-4 border hover:border-2 hover:border-primary-color hover:shadow-primary-md rounded-50",
                                        children: "Explore Classes"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between lg:justify-start xl:justify-start 2xl:justify-start nowhitespace space-x-5 rounded-xl p-1 overflow-x-auto",
                            children: [
                                CategoryList && CategoryList.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        id: category.Id,
                                        value: category.EventCategoryRefId,
                                        onClick: SelectCategoryNameEvent,
                                        className: `bg-transparent ${selectedButton === category.EventCategoryName ? "text-black border-b-2 border-primary-color" : "text-lightgrey"} pb-2 text-lg hidden sm:block`,
                                        children: category.EventCategoryName
                                    }, category.EventCategoryName)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedButton("Courses-1"),
                                    className: "bg-transparent" + (selectedButton === "Courses-1" ? "text-black border-b-2 border-primary-color" : "text-lightgrey") + " pb-2 text-lg hidden sm:block",
                                    children: "Courses-1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedButton("Courses-2"),
                                    className: "bg-transparent" + (selectedButton === "Courses-2" ? "text-black border-b-2 border-primary-color" : "text-lightgrey") + " pb-2 text-lg hidden sm:block",
                                    children: "Courses-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedButton("Courses-3"),
                                    className: "bg-transparent" + (selectedButton === "Courses-3" ? "text-black border-b-2 border-primary-color" : "text-lightgrey") + " pb-2 text-lg hidden sm:block",
                                    children: "Courses-3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedButton("Courses-4"),
                                    className: "bg-transparent" + (selectedButton === "Courses-4" ? "text-black border-b-2 border-primary-color" : "text-lightgrey") + " pb-2 text-lg hidden sm:block",
                                    children: "Courses-4"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.GlobeAltIcon, {
                                    onClick: ()=>setSelectedButton("Courses-1"),
                                    width: 50,
                                    height: 50,
                                    className: "bg-transparent" + (selectedButton === "Courses-1" ? "border-b-2 border-primary-color fill-primary-color" : "") + " pb-2 block sm:hidden"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.DevicePhoneMobileIcon, {
                                    onClick: ()=>setSelectedButton("Courses-2"),
                                    width: 50,
                                    height: 50,
                                    className: "bg-transparent" + (selectedButton === "Courses-2" ? "border-b-2 border-primary-color fill-primary-color" : "") + " pb-2 block sm:hidden"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CircleStackIcon, {
                                    onClick: ()=>setSelectedButton("Courses-3"),
                                    width: 50,
                                    height: 50,
                                    className: "bg-transparent" + (selectedButton === "Courses-3" ? "border-b-2 border-primary-color fill-primary-color" : "") + " pb-2 block sm:hidden"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CloudIcon, {
                                    onClick: ()=>setSelectedButton("Courses-4"),
                                    width: 50,
                                    height: 50,
                                    className: "bg-transparent" + (selectedButton === "Courses-4" ? "border-b-2 border-primary-color fill-primary-color" : "") + " pb-2 block sm:hidden"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto max-w-7xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 gap-y-10 gap-x-8 py-5 lg:py-12 xl:py-12 2xl:py-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8",
                                        children: nameElements.length > 0 ? nameElements : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "No data to show"
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Courses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ OurCompany)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(564);
/* harmony import */ var _animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function OurCompany() {
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "our-company w-full inline-block bg-custom-light py-20",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: undefined,
                className: undefined,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    variants: scrollAnimation,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "our-company-bg bg-no-repeat bg-cover bg-bottom bg-[url('/home/bg/our-company-bg.png')]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-10 w-full inline-block",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full lg:w-50 xl:w-50 2xl:w-50 inline-block text-center float-left",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "our-company-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "our-company-img mx-auto",
                                            src: "/home/our-company-img.svg",
                                            alt: "Eftapei",
                                            width: 400,
                                            height: 400,
                                            priority: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-50 xl:w-50 2xl:w-50 inline-block float-left px-4 md:px-8 lg:px-0 xl:px-0 2xl:px-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "eftapei-heading-wrapper py-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-primary-color font-semibold text-sm",
                                                children: "Our Company"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "our-company-heading",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "leading-50 font-bold text-white text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26",
                                                children: [
                                                    "Eftapei means 'Happy me'.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Established on 2020"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "our-company-list mt-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "hover:tracking-2 space-links transition delay-700 duration-300 ease-in-out",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "21",
                                                                    height: "21",
                                                                    fill: "currentColor",
                                                                    className: "bi bi-check-circle-fill text-custom-white mr-2",
                                                                    viewBox: "0 0 16 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-custom-white text-sm lg:text-base xl:text-base 2xl:text-base",
                                                                    children: "Focuses on creative"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "py-3 hover:tracking-2 space-links transition delay-700 duration-300 ease-in-out",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "21",
                                                                    height: "21",
                                                                    fill: "currentColor",
                                                                    className: "bi bi-check-circle-fill text-custom-white mr-2",
                                                                    viewBox: "0 0 16 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-custom-white text-sm lg:text-base xl:text-base 2xl:text-base",
                                                                    children: "Funtastic and curative process"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "hover:tracking-2 space-links transition delay-700 duration-300 ease-in-out",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "21",
                                                                    height: "21",
                                                                    fill: "currentColor",
                                                                    className: "bi bi-check-circle-fill text-custom-white mr-2",
                                                                    viewBox: "0 0 16 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-custom-white text-sm lg:text-base xl:text-base 2xl:text-base",
                                                                    children: "Education Institutions"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "our-company-btn mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "arrow btn-gradient border border-1 border-custom-white rounded-50 bg-primary-color hover:bg-white hover:text-primary-color hover:shadow-primary-md text-white px-6 py-2 shadow-normal",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-medium",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ OurServices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(564);
/* harmony import */ var _animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8873);
/* harmony import */ var _services_card_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1633);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__, _services_card_slider__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__, _services_card_slider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function OurServices() {
    const ourservices = [
        {
            id: "service_1",
            title: "Educational Setup",
            image: "/home/educational-setup.png",
            description: "EFTAPEI offers one-on-one, group sessions and Workshops for students and staffs of all ages"
        },
        {
            id: "service_2",
            title: "Corporate Well Being",
            image: "/home/corporate-well-being.png",
            description: "Designing strategies for employees to strike a perfect balance between work and home and reduce"
        }
    ];
    const OurServices_1 = [
        {
            id: "service_3",
            title: "One on One Session",
            image: "/home/one-session.png",
            description: "Clients can book individual 1:1 sessions with EFTAPEI. Based on your needs the sessions will be designed"
        },
        {
            id: "service_4",
            title: "Relaxing Friday",
            image: "/home/relaxing-friday.png",
            description: "Time: 6 pm to 7pm IST (EFTAPEI Mind Makeover Studio)",
            description1: "Time: 7 pm to 8 pm IST (Online)"
        },
        {
            id: "service_5",
            title: "Couples",
            image: "/home/couples.png",
            description: "Enhance the bond between through Eftapei-Couple Art. Specially infused and designed"
        }
    ];
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "our-services-wrapper py-20 max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "service-sec",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full py-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: undefined,
                        className: undefined,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h3, {
                                variants: scrollAnimation,
                                className: "leading-50 font-bold text-center text-primary-color text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26 w-9/12 sm: lg:w-4/12 mx-auto",
                                children: [
                                    "Our Capabilities",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
                                className: "leading-normal text-custom-black text-center mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12",
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "w-full flex flex-col py-12 pb-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_services_card_slider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_home_stars_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4340);
/* harmony import */ var _public_home_eva_arrow_back_fill_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(315);
/* harmony import */ var _public_home_eva_arrow_next_fill_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(261);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_12__]);
axios__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const ServiceCardSlider = ()=>{
    let [sliderRef, setSliderRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let [ServiceList, setServiceList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    let [ShowLoader, setShowLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [PageLoadStatus, setPageLoadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        GetServiceList();
    }, []);
    //Get testimonials list api function
    const GetServiceList = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].post("/api/services/selectlist");
            if (response.data.service.length !== 0) {
                ServiceList = response.data.service;
                setServiceList(response.data.service);
                console.log("ServiceList:", ServiceList);
            } else {
                setServiceList([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    // Rest of the code...
    const settings = {
        dots: true,
        customPaging: function(i) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "
                })
            });
        },
        dotsClass: "slick-dots w-max absolute mt-20  ",
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 736,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(// JSX code...
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...settings,
                arrows: false,
                ref: setSliderRef,
                className: "flex items-stretch justify-items-stretch",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-3 flex items-stretch",
                    children: ServiceList?.map((list, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardActionArea, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            component: "img",
                                            height: "100%",
                                            image: `/services/${list.Service_Image_1}`,
                                            alt: "blog-img"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    gutterBottom: true,
                                                    variant: "h5",
                                                    component: "div",
                                                    children: list.ServiceHeading_1
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    variant: "body2",
                                                    className: "text-sm text-custom-black",
                                                    children: list.ServiceContent_1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardActions, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                        size: "small",
                                        color: "primary",
                                        children: "Read more"
                                    })
                                })
                            ]
                        }))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-none justify-between w-auto mt-14",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-4 flex items-center justify-center h-8 w-8 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer",
                            onClick: sliderRef?.slickPrev,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "bg-abour",
                                src: "/home/eva_arrow-back-fill.svg",
                                alt: "Eftapei",
                                width: 15,
                                height: 15,
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-center h-8 w-8 rounded-full bg-white border-primary-color border hover:bg-primary-color hover:text-white-500 transition-all text-primary-color cursor-pointer",
                            onClick: sliderRef?.slickNext,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "bg-abour text-primary-color",
                                src: "/home/eva_arrow-next-fill.svg",
                                alt: "Eftapei",
                                width: 15,
                                height: 15,
                                priority: true
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceCardSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _Testimoni__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6168);
/* harmony import */ var _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(564);
/* harmony import */ var _animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _Testimoni__WEBPACK_IMPORTED_MODULE_5__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _Testimoni__WEBPACK_IMPORTED_MODULE_5__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Testimonials = ()=>{
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-gradient-to-b from-white-300 to-white-500 max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto py-5 lg:py-14 xl:py-14 2xl:py-14",
        id: "pricing",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col w-full py-5",
            id: "testimoni",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    children: undefined,
                    className: undefined,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h3, {
                            variants: scrollAnimation,
                            className: "leading-50 font-bold text-center text-primary-color text-20 md:text-22 lg:text-26 xl:text-26 2xl:text-26 w-9/12 sm: lg:w-4/12 mx-auto",
                            children: [
                                "Our Happy Customer",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
                            className: "leading-normal text-custom-black text-center mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12",
                            children: "Happy clients leave their reviews. I am grateful that the Eftapei is changing lives. Happy living ever after."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "w-full flex flex-col py-12 pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Testimoni__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TopBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8873);
/* harmony import */ var _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function TopBanner() {
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_animation_getScrollAnimation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "top-banner-wrapper py-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "top-banner-bg bg-no-repeat bg-cover bg-bottom bg-[url('/home/bg/top-banner-bg.png')]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-full px-4 lg:px-0 xl:px-0 2xl:px-0 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_ScrollAnimationWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: undefined,
                    className: undefined,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        variants: scrollAnimation,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lg:flex xl:flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12 float-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "icon-img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        className: "verify-icon-img",
                                                        src: "/home/verify-icon.svg",
                                                        alt: "Eftapei",
                                                        width: 25,
                                                        height: 25,
                                                        priority: true
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "eftapei-heading-wrapper",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "text-primary-color font-semibold text-sm",
                                                        children: "Eftapei means -Happy me!"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "leading-50 mt-3 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 font-bold text-custom-black text-3xl md:text-40 lg:text-40 xl:text-40 2xl:text-40",
                                            children: [
                                                "Mind Makeover Studio",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Destination !"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 md:mt-4 lg:mt-5 xl:mt-5 2xl:mt-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "leading-26 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-custom-black-gray",
                                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-3 md:mt-6 lg:mt-7 xl:mt-7 2xl:mt-7 hidden lg:block xl:block 2xl:block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-between",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "flex items-center space-x-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "arrow btn-gradient rounded-50 bg-primary-color hover:bg-white hover:border-primary-color border-2 hover:text-primary-color hover:shadow-primary-md text-white px-6 py-2 shadow-normal",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "font-medium",
                                                                    children: "Get Started"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "arrow btn-gradient-border rounded-50 border-primary-color border-2 text-custom-black px-3 py-2 hover:shadow-primary-md shadow-normal",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "flex items-center font-medium",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "16",
                                                                            height: "16",
                                                                            fill: "currentColor",
                                                                            className: "bi bi-play-circle-fill mr-2 text-custom-black",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Watch Video"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "top-sec-image w-full contents float-right lg:w-6/12 xl:w-6/12 2xl:w-6/12 mt-5 lg:mt-0 xl:mt-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                        variants: scrollAnimation,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "banner-right",
                                            src: "/home/top-banner.png",
                                            alt: "Eftapei",
                                            width: 425,
                                            height: 425,
                                            priority: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-2 pb-5 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12 block lg:hidden xl:hidden 2xl:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-between",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "flex items-center space-x-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "arrow btn-gradient rounded-50 hover:shadow-primary-md bg-primary-color text-white px-3 py-2 shadow-normal",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-medium",
                                                            children: "Get Started"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "arrow btn-gradient-border rounded-50 hover:shadow-primary-md border-primary-color border-2 text-custom-black px-3 py-2 shadow-normal",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex items-center font-medium",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "currentColor",
                                                                    className: "bi bi-play-circle-fill text-custom-black",
                                                                    viewBox: "0 0 16 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Watch Video"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ScrollAnimationWrapper({ children, className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: "offscreen",
        whileInView: "onscreen",
        viewport: {
            once: true,
            amount: 0.8
        },
        className: className,
        ...props,
        children: children
    });
}
ScrollAnimationWrapper.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollAnimationWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getScrollAnimation)
/* harmony export */ });
function getScrollAnimation() {
    return {
        offscreen: {
            y: 150,
            opacity: 0
        },
        onscreen: ({ duration = 2 } = {})=>({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration
                }
            })
    };
}


/***/ }),

/***/ 6367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_top_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2646);
/* harmony import */ var _components_Home_our_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3292);
/* harmony import */ var _components_Home_our_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6028);
/* harmony import */ var _components_Home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3672);
/* harmony import */ var _components_Home_testimonials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2723);
/* harmony import */ var _components_Home_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home_top_banner__WEBPACK_IMPORTED_MODULE_2__, _components_Home_our_services__WEBPACK_IMPORTED_MODULE_3__, _components_Home_our_company__WEBPACK_IMPORTED_MODULE_4__, _components_Home_contact__WEBPACK_IMPORTED_MODULE_5__, _components_Home_testimonials__WEBPACK_IMPORTED_MODULE_6__, _components_Home_courses__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Home_top_banner__WEBPACK_IMPORTED_MODULE_2__, _components_Home_our_services__WEBPACK_IMPORTED_MODULE_3__, _components_Home_our_company__WEBPACK_IMPORTED_MODULE_4__, _components_Home_contact__WEBPACK_IMPORTED_MODULE_5__, _components_Home_testimonials__WEBPACK_IMPORTED_MODULE_6__, _components_Home_courses__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "home-wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_top_banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_our_services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_our_company__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_testimonials__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_courses__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_contact__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;