"use strict";
exports.id = 3193;
exports.ids = [3193];
exports.modules = {

/***/ 3193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPost)
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
function AddPost({ EditModalOpen, CloseModalFunction }) {
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    };
    const handleUpload = async ()=>{
        if (!file) {
            console.error("No file selected.");
            console.log("No file selected.");
            return;
        }
        const formData = new FormData();
        formData.append("image", file);
        try {
            const response = await fetch("/api/post/insert", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                //const data = await response.json();
                console.log("Image uploaded successfully. Image path:", response);
            //   if (data.imagePath) {
            //     console.log('Image uploaded successfully. Image path:', data.imagePath);
            //   } else {
            //     console.error('Image upload failed. Image path not received.');
            //   }
            } else {
                console.error("Image upload failed");
            }
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };
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
                    children: "Add Post"
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
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "file",
                                            onChange: handleFileChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleUpload,
                                            children: "Upload Image"
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
                                            htmlFor: "username",
                                            mb: "5px",
                                            children: "Question"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                                            htmlFor: "username",
                                            mb: "5px",
                                            children: "Answer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_theme_elements_CustomTextAreaField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            maxRows: 10,
                                            className: "w-full Mui-TextField",
                                            variant: "outlined",
                                            row: 4
                                        })
                                    ]
                                })
                            ]
                        })
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