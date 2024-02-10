"use strict";
exports.id = 3731;
exports.ids = [3731];
exports.modules = {

/***/ 3731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddService)
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
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_shared_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3417);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_14__]);
axios__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















//import router from "/router";
const BootstrapDialog = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default()))(({ theme: theme1 })=>({
        "& .MuiDialogContent-root": {
            padding: theme1.spacing(2)
        },
        "& .MuiDialogActions-root": {
            padding: theme1.spacing(1)
        }
    }));
function AddService({ EditValue, EditModalOpen, CloseModalFunction }) {
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let [CurrentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [UpdateId, setUpdateId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [Id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [ImageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [ShowLoader, setShowLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ServiceDate, setServiceDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [ServiceAmount, setServiceAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let [Heading_1, setHeading_1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Heading_2, setHeading_2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Heading_3, setHeading_3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Heading_4, setHeading_4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Contents_1, setContents_1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Contents_2, setContents_2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Contents_3, setContents_3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Contents_4, setContents_4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Image_1, setImage_1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Image_2, setImage_2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Image_3, setImage_3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Image_4, setImage_4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [FirstService, setFirstService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    let [SecondService, setSecondService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ThirdService, setThirdService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [FourthService, setFourthService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //Error state and button disabled
    let [isSumbitDisabled, setisSumbitDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [Heading_1Error, setHeading_1Error] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [Contents_1Error, setContents_1Error] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [PageLoadStatus, setPageLoadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Get the current date in the format "YYYY-MM-DD"
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setServiceDate(formattedDate);
        console.log(EditValue);
    }, [
        ImageFile
    ]);
    const AddService = (event)=>{
        let serviceId = event.currentTarget.id;
        if (serviceId === "FirstService") {
            setFirstService(true);
            setSecondService(false);
            setThirdService(false);
            setFourthService(false);
        } else if (serviceId === "SecondService") {
            setFirstService(false);
            setSecondService(true);
            setThirdService(false);
            setFourthService(false);
        } else if (serviceId === "ThirdService") {
            setFirstService(false);
            setSecondService(false);
            setThirdService(true);
            setFourthService(false);
        } else {
            setFirstService(false);
            setSecondService(false);
            setThirdService(false);
            setFourthService(true);
        }
    };
    const handleFileChange = (e)=>{
        let ImageId = e.currentTarget.id;
        ImageFile = e.target.files[0];
        setImageFile(ImageFile);
        handleServiceImageUpload(ImageFile, ImageId);
    };
    const handleServiceImageUpload = async (ImageFile, ImageId)=>{
        if (!ImageFile) {
            console.error("No file selected.");
            console.log("No file selected.");
            return;
        }
        const formData = new FormData();
        formData.append("image", ImageFile);
        try {
            const response = await fetch("/api/services/imageupload", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                const responseData = await response.json();
                const fullPath = responseData.FilePath;
                let ServiceImage = fullPath.split("\\").pop();
                if (ImageId === "Image_1") {
                    Image_1 = ServiceImage;
                    setImage_1(ServiceImage);
                } else if (ImageId === "Image_2") {
                    Image_2 = ServiceImage;
                    setImage_2(ServiceImage);
                } else if (ImageId === "Image_3") {
                    Image_3 = ServiceImage;
                    setImage_3(ServiceImage);
                } else {
                    Image_4 = ServiceImage;
                    setImage_4(ServiceImage);
                }
            } else {
                console.error("Service image upload failed");
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
        if (InputId === "Heading_1") {
            setHeading_1(Value);
            setHeading_1Error(false);
        } else if (InputId === "Contents_1") {
            setContents_1(Value);
            setContents_1Error(false);
        } else if (InputId === "Heading_2") {
            setHeading_2(Value);
        } else if (InputId === "Contents_2") {
            setContents_2(Value);
        } else if (InputId === "Heading_3") {
            setHeading_3(Value);
        } else if (InputId === "Contents_3") {
            setContents_3(Value);
        } else if (InputId === "Heading_4") {
            setHeading_4(Value);
        } else {
            setContents_4(Value);
        }
    };
    //Submit API function 
    const InsertService = async ()=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const formattedDate = `${year}-${month}-${day}`;
        setCurrentDate(formattedDate);
        console.log(formattedDate);
        let defaultValues = {
            Id: UpdateId,
            ServiceDate: ServiceDate,
            Heading_1: Heading_1,
            Contents_1: Contents_1,
            Image_1: Image_1,
            ServiceAmount: ServiceAmount,
            Heading_2: Heading_2,
            Contents_2: Contents_2,
            Image_2: Image_2,
            Heading_3: Heading_3,
            Contents_3: Contents_3,
            Image_3: Image_3,
            Heading_4: Heading_4,
            Contents_4: Contents_4,
            Image_4: Image_4,
            ServiceAmount: ServiceAmount,
            Created_Date: CurrentDate
        };
        CloseModalFunction();
        setShowLoader(true);
        if (defaultValues.Heading_1 === "") {
            isSumbitDisabled = true;
            setHeading_1Error(true);
        }
        if (defaultValues.Contents_1 === "") {
            isSumbitDisabled = true;
            setContents_1Error(true);
        }
        //Api setup
        if (isSumbitDisabled !== true) {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_14__["default"].post("/api/services/insert", {
                    Id,
                    ServiceDate,
                    Heading_1,
                    Contents_1,
                    Image_1,
                    Heading_2,
                    Contents_2,
                    Image_2,
                    Heading_3,
                    Contents_3,
                    Image_3,
                    Heading_4,
                    Contents_4,
                    Image_4,
                    ServiceAmount
                });
                setShowLoader(false);
                setPageLoadStatus(false);
            } catch (error) {
                CloseModalFunction();
                setShowLoader(false);
                console.error("Error inserting service:", error);
                console.log("Error inserting service:", error);
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
                setHeading_1("");
                setContents_1("");
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, "0");
                const day = String(today.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`;
                setServiceDate(formattedDate);
            } else {
                if (EditValue.Id !== 0) {
                    setUpdateId(EditValue.Id);
                    setId(EditValue.Id);
                } else {
                    setUpdateId(0);
                    setId(0);
                }
                if (EditValue.Date !== "") {
                    const dateObject = new Date(EditValue.Date);
                    if (!isNaN(dateObject.getTime())) {
                        const splitdate = dateObject.toISOString().split("T")[0];
                        setServiceDate(splitdate);
                    } else {
                        console.error("Invalid date format:", EditValue.Date);
                    }
                } else {
                    setServiceDate(ServiceDate);
                }
                if (EditValue.ServiceHeading_1 !== "") {
                    setHeading_1(EditValue.ServiceHeading_1);
                } else {
                    setHeading_1("");
                }
                if (EditValue.ServiceHeading_2 !== "") {
                    setHeading_2(EditValue.ServiceHeading_2);
                } else {
                    setHeading_2("");
                }
                if (EditValue.ServiceHeading_3 !== "") {
                    setHeading_3(EditValue.ServiceHeading_3);
                } else {
                    setHeading_3("");
                }
                if (EditValue.ServiceContent_1 !== "") {
                    setContents_1(EditValue.ServiceContent_1);
                } else {
                    setContents_1("");
                }
                if (EditValue.ServiceContent_2 !== "") {
                    setContents_2(EditValue.ServiceContent_2);
                } else {
                    setContents_2("");
                }
                if (EditValue.ServiceContent_3 !== "") {
                    setContents_3(EditValue.ServiceContent_3);
                } else {
                    setContents_3("");
                }
                if (EditValue.Service_Image_1 !== "") {
                    setImage_1(EditValue.Service_Image_1);
                } else {
                    setImage_1("");
                }
            }
        }, [
            EditValue
        ]);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BootstrapDialog, {
            open: EditModalOpen,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default()), {
                    sx: {
                        m: 0,
                        p: 2
                    },
                    id: "customized-dialog-title",
                    children: "Add Service"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                    "aria-label": "close",
                    onClick: CloseModalFunction,
                    sx: {
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme)=>theme.palette.grey[500]
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.IconX, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                    dividers: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex justify-between items-center px-2 py-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        id: "FirstService",
                                        onClick: AddService,
                                        className: FirstService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main",
                                        children: "Service-1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        id: "SecondService",
                                        onClick: AddService,
                                        className: SecondService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main",
                                        children: "Service-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        id: "ThirdService",
                                        onClick: AddService,
                                        className: ThirdService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main",
                                        children: "Service-3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        id: "FourthService",
                                        onClick: AddService,
                                        className: FourthService ? "bg-primary-main text-primary-light hover:bg-primary-main hover:text-primary-light" : "border border-white bg-primary-light text-primary-main",
                                        children: "Service-4"
                                    })
                                ]
                            }),
                            FirstService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                                    mb: "5px",
                                                    children: "Heading"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    onChange: onChangeInput,
                                                    id: "Heading_1",
                                                    value: Heading_1,
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
                                                    mb: "5px",
                                                    children: "Content"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "w-full p-3 custom-text-area",
                                                    onChange: onChangeInput,
                                                    id: "Contents_1",
                                                    value: Contents_1,
                                                    rows: 7
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image-sec w-full flex justify-between items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                id: "Image_1",
                                                onChange: handleFileChange
                                            })
                                        })
                                    ]
                                })
                            }),
                            SecondService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                                    mb: "5px",
                                                    children: "Sub heading-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    onChange: onChangeInput,
                                                    id: "Heading_2",
                                                    value: Heading_2,
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
                                                    mb: "5px",
                                                    children: "Sub content-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "w-full p-3 custom-text-area",
                                                    onChange: onChangeInput,
                                                    id: "Contents_2",
                                                    value: Contents_2,
                                                    rows: 7
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image-sec w-full flex justify-between items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                id: "Image_2",
                                                onChange: handleFileChange
                                            })
                                        })
                                    ]
                                })
                            }),
                            ThirdService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                                    mb: "5px",
                                                    children: "Sub heading-3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    onChange: onChangeInput,
                                                    id: "Heading_3",
                                                    value: Heading_3,
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
                                                    mb: "5px",
                                                    children: "Sub content-3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "w-full p-3 custom-text-area",
                                                    onChange: onChangeInput,
                                                    id: "Contents_3",
                                                    value: Contents_3,
                                                    rows: 7
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image-sec w-full flex justify-between items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                id: "Image_3",
                                                onChange: handleFileChange
                                            })
                                        })
                                    ]
                                })
                            }),
                            FourthService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                                    mb: "5px",
                                                    children: "Sub heading-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    onChange: onChangeInput,
                                                    id: "Heading_4",
                                                    value: Heading_4,
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
                                                    mb: "5px",
                                                    children: "Sub content-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "w-full p-3 custom-text-area",
                                                    onChange: onChangeInput,
                                                    id: "Contents_4",
                                                    value: Contents_4,
                                                    rows: 7
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image-sec w-full flex justify-between items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                id: "Image_4",
                                                onChange: handleFileChange
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "px-2 py-1 bg-error-main text-white hover:bg-white border hover:border-error-main hover:text-error-main rounded-sm transition duration-300 delay-150",
                            onClick: CloseModalFunction,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "px-2 py-1 bg-primary-main text-white hover:bg-white border hover:border-primary-main hover:text-primary-main rounded-sm transition duration-300 delay-150",
                            onClick: InsertService,
                            children: "Save changes"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;