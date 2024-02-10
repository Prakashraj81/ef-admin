"use strict";
exports.id = 1448;
exports.ids = [1448];
exports.modules = {

/***/ 1073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BackdropLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);



function BackdropLoader({ ShowLoader }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_1___default()), {
            open: ShowLoader,
            sx: {
                color: "#fff",
                zIndex: (theme)=>theme.zIndex.drawer + 1
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "inherit"
            })
        })
    });
}


/***/ }),

/***/ 1448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddTestimonial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5415);
/* harmony import */ var _components_forms_theme_elements_CustomTextAreaField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5712);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8383);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_loader_backdrop_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1073);
/* harmony import */ var _components_shared_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3417);
/* harmony import */ var _star_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6363);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_19__]);
axios__WEBPACK_IMPORTED_MODULE_19__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






















const BootstrapDialog = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9___default()))(({ theme: theme1 })=>({
        "& .MuiDialogContent-root": {
            padding: theme1.spacing(2)
        },
        "& .MuiDialogActions-root": {
            padding: theme1.spacing(1)
        }
    }));
function AddTestimonial({ EditValue, EditModalOpen, CloseModalFunction }) {
    let [UpdateId, setUpdateId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [Id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [CustomerName, setCustomerName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [ReviewDate, setReviewDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [City, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Contents, setContents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [AvgRating, setAvgRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [CurrentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [LoginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ShowLoader, setShowLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //Error state and button disabled
    let [isSumbitDisabled, setisSumbitDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [CustomerNameError, setCustomerNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ReviewDateError, setReviewDateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [CityError, setCityError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ContentsError, setContentsError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ShowPasswordError, setShowPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [PageLoadStatus, setPageLoadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Get the current date in the format "YYYY-MM-DD"
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setReviewDate(formattedDate);
    }, []);
    const handleRating = (input)=>{
        setAvgRating(input);
    };
    const onChangeInput = (event)=>{
        let InputId = event.currentTarget.id;
        let Value = event.target.value;
        isSumbitDisabled = false;
        setisSumbitDisabled(false);
        if (InputId === "CustomerName") {
            setCustomerName(Value);
            setCustomerNameError(false);
        } else if (InputId === "City") {
            setCity(Value);
            setCityError(false);
        } else if (InputId === "ReviewDate") {
            setReviewDate(Value);
            setReviewDateError(false);
        } else {
            setContents(Value);
            setContentsError(false);
        }
    };
    //Submit API function 
    const InsertTestimonial = async ()=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const formattedDate = `${year}-${month}-${day}`;
        setCurrentDate(formattedDate);
        console.log(formattedDate);
        let defaultValues = {
            Id: UpdateId,
            AvgRating: AvgRating,
            City: City,
            ReviewDate: ReviewDate,
            CustomerName: CustomerName,
            Contents: Contents,
            Created_Date: CurrentDate
        };
        CloseModalFunction();
        setShowLoader(true);
        if (defaultValues.CustomerName === "") {
            isSumbitDisabled = true;
            setCustomerNameError(true);
        }
        if (defaultValues.City === "") {
            isSumbitDisabled = true;
            setCityError(true);
        }
        if (defaultValues.Contents === "") {
            isSumbitDisabled = true;
            setContentsError(true);
        }
        if (defaultValues.ReviewDate === "") {
            isSumbitDisabled = true;
            setReviewDateError(true);
        }
        //Api setup
        if (isSumbitDisabled !== true) {
            console.log(defaultValues);
            try {
                await axios__WEBPACK_IMPORTED_MODULE_19__["default"].post("/api/testimonials/insert", {
                    Id,
                    ReviewDate,
                    CustomerName,
                    City,
                    AvgRating,
                    Contents
                });
                setShowLoader(false);
                setPageLoadStatus(false);
            } catch (error) {
                CloseModalFunction();
                setShowLoader(false);
                console.error("Error inserting testimonial:", error);
                console.log("Error inserting testimonial:", error);
            }
        } else {
            setisSumbitDisabled(true);
            setShowLoader(false);
        }
    };
    PageLoad(EditValue);
    function PageLoad(EditValue) {
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (EditValue.length === 0) {
                setAvgRating(0);
                setCustomerName("");
                setCity("");
                setContents("");
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, "0");
                const day = String(today.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`;
                setReviewDate(formattedDate);
            } else {
                if (EditValue.Id !== 0) {
                    setUpdateId(EditValue.Id);
                    setId(EditValue.Id);
                } else {
                    setUpdateId(0);
                    setId(0);
                }
                if (EditValue.Rating !== "") {
                    setAvgRating(EditValue.Rating);
                } else {
                    setAvgRating(0);
                }
                if (EditValue.Date !== "") {
                    const dateObject = new Date(EditValue.Date);
                    if (!isNaN(dateObject.getTime())) {
                        const splitdate = dateObject.toISOString().split("T")[0];
                        setReviewDate(splitdate);
                    } else {
                        console.error("Invalid date format:", EditValue.Date);
                    }
                } else {
                    setReviewDate(ReviewDate);
                }
                if (EditValue.CustomerName !== "") {
                    setCustomerName(EditValue.CustomerName);
                } else {
                    setCustomerName("");
                }
                if (EditValue.City !== "") {
                    setCity(EditValue.City);
                } else {
                    setCity("");
                }
                if (EditValue.Message !== "") {
                    setContents(EditValue.Message);
                } else {
                    setContents("");
                }
            }
        }, [
            EditValue
        ]);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: ShowLoader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loader_backdrop_loader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    ShowLoader: ShowLoader
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BootstrapDialog, {
                open: EditModalOpen,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default()), {
                        sx: {
                            m: 0,
                            p: 2
                        },
                        id: "customized-dialog-title",
                        children: "Add Testimonial"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                        "aria-label": "close",
                        onClick: CloseModalFunction,
                        sx: {
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme)=>theme.palette.grey[500]
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__.IconX, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11___default()), {
                        dividers: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                container: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "Rating",
                                                mb: "5px",
                                                children: "Star rating"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                type: "number",
                                                step: "0.1",
                                                min: "0",
                                                max: "5",
                                                value: AvgRating,
                                                onChange: (e)=>{
                                                    if (e.target.value > 5) return alert("Maximum limit of five stars :)");
                                                    return handleRating(e.target.value);
                                                },
                                                id: "Rating",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_star_rating__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                                stars: AvgRating
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "ReviewDate",
                                                mb: "5px",
                                                children: "Review date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: ReviewDate,
                                                type: "date",
                                                id: "ReviewDate",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            ReviewDateError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-red-500",
                                                role: "alert",
                                                children: "This field required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "CustomerName",
                                                mb: "5px",
                                                children: "Customer name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: CustomerName,
                                                id: "CustomerName",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            CustomerNameError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-red-500",
                                                role: "alert",
                                                children: "This field required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "City",
                                                mb: "5px",
                                                children: "City"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: City,
                                                id: "City",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            CityError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-red-500",
                                                role: "alert",
                                                children: "This field required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "Contents",
                                                mb: "5px",
                                                children: "Contents"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                className: "w-full p-3 custom-text-area",
                                                onChange: onChangeInput,
                                                id: "Contents",
                                                value: Contents,
                                                rows: 7
                                            }),
                                            ContentsError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-red-500",
                                                role: "alert",
                                                children: "This field required"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_12___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: CloseModalFunction,
                                className: "px-2 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150",
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: InsertTestimonial,
                                className: "px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150",
                                children: "Save changes"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5327);
/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_1__);
// import "./styles.css";


function StarRating({ stars }) {
    // Star maximum
    const maxStars = 5;
    // Get the entire value
    const starPercentage = stars / maxStars * 100;
    // Round the percentage
    const starPercentageRounded = Math.round(starPercentage);
    const StarStyles = ()=>{
        return {
            width: starPercentageRounded + "%"
        };
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "stars-gray",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex stars-yellow",
            style: StarStyles()
        })
    });
}


/***/ })

};
;