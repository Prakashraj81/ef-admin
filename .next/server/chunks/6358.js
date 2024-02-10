"use strict";
exports.id = 6358;
exports.ids = [6358];
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

/***/ 6358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddEvent)
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
/* harmony import */ var _star_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7492);
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
function AddEvent({ EditValue, EditModalOpen, CloseModalFunction }) {
    let [UpdateId, setUpdateId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [Id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [EventDate, setEventDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [CategoryList, setCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let [EventCategoryRefId, setEventCategoryRefId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [EventHeading, setEventHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [EventName, setEventName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [EventImage, setEventImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [EventAmount, setEventAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [EventClassCount, setEventClassCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [EventMembers, setEventMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [EventRating, setEventRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [EventStarRating, setEventStarRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [CurrentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [ImageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [LoginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ShowLoader, setShowLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //Error state and button disabled
    let [isSumbitDisabled, setisSumbitDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [EventHeadingError, setEventHeadingError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [EventDateError, setEventDateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [EventAmountError, setEventAmountError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [PageLoadStatus, setPageLoadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Get the current date in the format "YYYY-MM-DD"
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setEventDate(formattedDate);
        GetCategoryList();
    }, [
        EventImage,
        ImageFile
    ]);
    const GetCategoryList = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_19__["default"].post("/api/event-category/geteventcategory");
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
    const dropdownCategoryList = (event)=>{
        let CategoryId = Number(event.target.value);
        setEventCategoryRefId(CategoryId);
    };
    const handleRating = (input)=>{
        setEventStarRating(input);
        setEventRating(input);
    };
    const handleFileChange = (e)=>{
        setImageFile(e.target.files[0]);
        console.log(ImageFile);
    };
    const handleEventImageUpload = async ()=>{
        if (!ImageFile) {
            console.error("No file selected.");
            console.log("No file selected.");
            return;
        }
        const formData = new FormData();
        formData.append("image", ImageFile);
        try {
            const response = await fetch("/api/events/imageupload", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                const responseData = await response.json();
                const fullPath = responseData.FilePath;
                EventImage = fullPath.split("\\").pop();
                setEventImage(EventImage);
                //Insert event
                InsertEvent();
            } else {
                console.error("Event image upload failed");
            }
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };
    const onChangeInput = (event)=>{
        let InputId = event.currentTarget.id;
        let Value = event.target.value;
        isSumbitDisabled = false;
        setisSumbitDisabled(false);
        if (InputId === "EventHeading") {
            setEventHeading(Value);
            setEventName(Value);
            setEventHeadingError(false);
        } else if (InputId === "EventClassCount") {
            setEventClassCount(Value);
        } else if (InputId === "EventMembers") {
            setEventMembers(Value);
        } else if (InputId === "EventAmount") {
            setEventAmount(Value);
            setEventAmountError(false);
        } else if (InputId === "EventRating") {
            setEventStarRating(Value);
            setEventRating(Value);
        } else {
            setEventClassCount(Value);
        }
    };
    //Submit API function 
    const InsertEvent = async ()=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const formattedDate = `${year}-${month}-${day}`;
        setCurrentDate(formattedDate);
        console.log(formattedDate);
        let defaultValues = {
            Id: UpdateId,
            EventDate: EventDate,
            EventCategoryRefId: EventCategoryRefId,
            EventHeading: EventHeading,
            EventName: EventName,
            EventImage: EventImage,
            EventAmount: EventAmount,
            EventClassCount: EventClassCount,
            EventMembers: EventMembers,
            EventRating: EventRating,
            EventStarRating: EventStarRating,
            Created_Date: CurrentDate
        };
        CloseModalFunction();
        setShowLoader(true);
        if (defaultValues.EventDate === "") {
            isSumbitDisabled = true;
            setEventDateError(true);
        }
        if (defaultValues.EventHeading === "") {
            isSumbitDisabled = true;
            setEventHeadingError(true);
        }
        if (defaultValues.EventAmount === "") {
            isSumbitDisabled = true;
            setEventAmountError(true);
        }
        //Api setup
        if (isSumbitDisabled !== true) {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_19__["default"].post("/api/events/insert", {
                    Id,
                    EventDate,
                    EventCategoryRefId,
                    EventHeading,
                    EventName,
                    EventImage,
                    EventAmount,
                    EventClassCount,
                    EventMembers,
                    EventRating,
                    EventStarRating
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
                setEventRating(0);
                setEventHeading("");
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, "0");
                const day = String(today.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`;
                setEventDate(formattedDate);
            } else {
                if (EditValue.Id !== 0) {
                    setUpdateId(EditValue.Id);
                    setId(EditValue.Id);
                } else {
                    setUpdateId(0);
                    setId(0);
                }
                if (EditValue.EventDate !== "") {
                    const dateObject = new Date(EditValue.EventDate);
                    if (!isNaN(dateObject.getTime())) {
                        const splitdate = dateObject.toISOString().split("T")[0];
                        setEventDate(splitdate);
                    } else {
                        console.error("Invalid date format:", EditValue.EventDate);
                    }
                } else {
                    setEventDate(EventDate);
                }
                if (EditValue.EventCategoryRefId !== 0) {
                    setEventCategoryRefId(EditValue.EventCategoryRefId);
                } else {
                    setEEventCategoryRefId(0);
                }
                if (EditValue.EventHeading !== "") {
                    setEventHeading(EditValue.EventHeading);
                    setEventName(EditValue.EventHeading);
                } else {
                    setEventHeading("");
                    setEventName("");
                }
                if (EditValue.EventClassCount !== 0) {
                    setEventClassCount(EditValue.EventClassCount);
                } else {
                    setEventClassCount(0);
                }
                if (EditValue.EventMembers !== 0) {
                    setEventMembers(EditValue.EventMembers);
                } else {
                    setEventMembers(0);
                }
                if (EditValue.EventAmount !== 0) {
                    setEventAmount(EditValue.EventAmount);
                } else {
                    setEventAmount(0);
                }
                if (EditValue.EventRating !== 0) {
                    setEventRating(EditValue.EventRating);
                    setEventStarRating(EditValue.EventStarRating);
                } else {
                    setEventRating(0);
                    setEventStarRating(0);
                }
                if (EditValue.EventImage !== "") {
                    setEventImage(EditValue.EventImage);
                } else {
                    setEventImage("");
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
                        children: "Add Event"
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
                                                htmlFor: "EventDate",
                                                mb: "5px",
                                                children: "Event date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: EventDate,
                                                type: "date",
                                                id: "EventDate",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            EventDateError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-red-500",
                                                role: "alert",
                                                children: "This field required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "EventCategoryRefId",
                                                mb: "5px",
                                                children: [
                                                    "Event category ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "text-red",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                className: "w-full p-3 custom-text-area",
                                                onChange: dropdownCategoryList,
                                                variant: "outlined",
                                                fullWidth: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "0",
                                                        id: "0",
                                                        children: "Select category name"
                                                    }),
                                                    CategoryList && CategoryList.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            id: list.Id,
                                                            value: list.Id,
                                                            children: list.EventCategoryName
                                                        }, list.EventCategoryName))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "EventHeading",
                                                mb: "5px",
                                                children: [
                                                    "Event heading ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "text-red",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: EventHeading,
                                                id: "EventHeading",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            EventHeadingError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
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
                                                htmlFor: "EventClassCount",
                                                mb: "5px",
                                                children: "Event class count"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: EventClassCount,
                                                id: "EventClassCount",
                                                variant: "outlined",
                                                fullWidth: true
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
                                                htmlFor: "EventMembers",
                                                mb: "5px",
                                                children: "Event members"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: EventMembers,
                                                id: "EventMembers",
                                                variant: "outlined",
                                                fullWidth: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full inline-block mb-7",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                variant: "subtitle1",
                                                fontWeight: 600,
                                                component: "label",
                                                htmlFor: "EventAmount",
                                                mb: "5px",
                                                children: [
                                                    "Event amount ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "text-red",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onChange: onChangeInput,
                                                value: EventAmount,
                                                id: "EventAmount",
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            EventAmountError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
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
                                                htmlFor: "Rating",
                                                mb: "5px",
                                                children: "Event rating"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                type: "number",
                                                step: "0.1",
                                                min: "0",
                                                max: "5",
                                                value: EventRating,
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
                                                stars: EventRating
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
                                                htmlFor: "EventImage",
                                                mb: "5px",
                                                children: "Event image (optional)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "image-sec w-full flex justify-between items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "file",
                                                    onChange: handleFileChange
                                                })
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
                                onClick: handleEventImageUpload,
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

/***/ 7492:
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