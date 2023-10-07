"use strict";
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 3234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_loader_backdrop_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layouts_blank_BlankLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4721);
/* harmony import */ var _components_container_PageContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5245);
/* harmony import */ var _components_Form_CustomTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const AdminLogin = ()=>{
    let [UserName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [Password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //Error state and button disabled
    let [isSumbitDisabled, setisSumbitDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [LoginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ShowLoader, setShowLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [UserNameError, setUserNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [PasswordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [CheckError, setCheckError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let defaultValues = {
        UserName: UserName,
        Password: Password
    };
    const onChangeInput = (event)=>{
        let InputId = event.currentTarget.id;
        let Value = event.target.value;
        isSumbitDisabled = false;
        setisSumbitDisabled(false);
        if (InputId === "UserName") {
            setUserName(Value);
            setUserNameError(false);
        } else {
            setPassword(Value);
            setPasswordError(false);
            setCheckError(false);
        }
    };
    //Submit API function 
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const OnSubmit = async ()=>{
        setShowLoader(true);
        defaultValues = {
            UserName: UserName,
            Password: Password
        };
        if (defaultValues.UserName === "") {
            isSumbitDisabled = true;
            setUserNameError(true);
        }
        if (defaultValues.Password === "") {
            isSumbitDisabled = true;
            setPasswordError(true);
        }
        //Api setup
        if (isSumbitDisabled !== true) {
            axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/auth/select", defaultValues).then((response)=>{
                console.log(response.data);
                sessionStorage.setItem("Auth", response.data.user.Id);
                setLoginError(false);
                setShowLoader(false);
                router.push(`/admin`);
            }).catch((error)=>{
                setLoginError(true);
                setShowLoader(true);
                console.error("Error:", error);
            });
        } else {
            setisSumbitDisabled(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        title: "Login",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: LoginError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                    className: "pb-5",
                    sx: {
                        width: "100%"
                    },
                    spacing: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_6___default()), {
                        severity: "error",
                        children: "User name or password is incorrect"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: ShowLoader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loader_backdrop_loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    ShowLoader: ShowLoader
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                sx: {
                    position: "relative",
                    "&:before": {
                        content: '""',
                        background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
                        backgroundSize: "400% 400%",
                        animation: "gradient 15s ease infinite",
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        opacity: "0.3"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                    container: true,
                    spacing: 0,
                    justifyContent: "center",
                    sx: {
                        height: "100vh"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        lg: 4,
                        xl: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Card, {
                            elevation: 9,
                            sx: {
                                p: 4,
                                zIndex: 1,
                                width: "100%",
                                maxWidth: "500px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "logo h-16",
                                        src: "/logo/header-logo.jpg",
                                        alt: "Eftapei",
                                        width: 180,
                                        height: 50,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                                    variant: "subtitle1",
                                                    fontWeight: 600,
                                                    component: "label",
                                                    mb: "5px",
                                                    children: "Email or Phone"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_CustomTextField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    onChange: onChangeInput,
                                                    value: UserName,
                                                    id: "UserName",
                                                    variant: "outlined",
                                                    fullWidth: true
                                                }),
                                                UserNameError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-red-500",
                                                    role: "alert",
                                                    children: "This field required"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                            mt: "25px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                                    variant: "subtitle1",
                                                    fontWeight: 600,
                                                    component: "label",
                                                    mb: "5px",
                                                    children: "Password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_CustomTextField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    onChange: onChangeInput,
                                                    value: Password,
                                                    id: "Password",
                                                    type: "password",
                                                    variant: "outlined",
                                                    fullWidth: true
                                                }),
                                                PasswordError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-red-500",
                                                    role: "alert",
                                                    children: "This field required"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                                            justifyContent: "space-between",
                                            direction: "row",
                                            alignItems: "center",
                                            my: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.FormGroup, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.FormControlLabel, {
                                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Checkbox, {
                                                            defaultChecked: true
                                                        }),
                                                        label: "Remeber this Device"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                                    component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                                    href: "/",
                                                    fontWeight: "500",
                                                    sx: {
                                                        textDecoration: "none",
                                                        color: "primary.main"
                                                    },
                                                    children: "Forgot Password ?"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                        className: "bg-primary-color text-white",
                                        variant: "contained",
                                        size: "large",
                                        fullWidth: true,
                                        onClick: OnSubmit,
                                        children: "Sign In"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                                    direction: "row",
                                    spacing: 1,
                                    justifyContent: "center",
                                    mt: 3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                            color: "textSecondary",
                                            variant: "h6",
                                            fontWeight: "500",
                                            children: "New to Eftapei?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                            component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                            href: "/admin/auth/register",
                                            fontWeight: "500",
                                            sx: {
                                                textDecoration: "none",
                                                color: "primary.main"
                                            },
                                            children: "Create an account"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLogin);
AdminLogin.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_blank_BlankLayout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;