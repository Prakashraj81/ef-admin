"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/Dashborad",{

/***/ "./components/layouts/full/header/Profile.tsx":
/*!****************************************************!*\
  !*** ./components/layouts/full/header/Profile.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [anchorEl2, setAnchorEl2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick2 = (event)=>{\n        setAnchorEl2(event.currentTarget);\n    };\n    const handleClose2 = ()=>{\n        setAnchorEl2(null);\n    };\n    //Logout function\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const Logout = ()=>{\n        sessionStorage.setItem(\"Auth\", 0);\n        router.push(\"/admin/auth/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                size: \"large\",\n                \"aria-label\": \"show 11 new notifications\",\n                color: \"inherit\",\n                \"aria-controls\": \"msgs-menu\",\n                \"aria-haspopup\": \"true\",\n                sx: {\n                    ...typeof anchorEl2 === \"object\" && {\n                        color: \"primary.main\"\n                    }\n                },\n                onClick: handleClick2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                    src: \"/images/profile/user-1.jpg\",\n                    alt: \"image\",\n                    sx: {\n                        width: 35,\n                        height: 35\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                id: \"msgs-menu\",\n                anchorEl: anchorEl2,\n                keepMounted: true,\n                open: Boolean(anchorEl2),\n                onClose: handleClose2,\n                anchorOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"bottom\"\n                },\n                transformOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"top\"\n                },\n                sx: {\n                    \"& .MuiMenu-paper\": {\n                        width: \"200px\"\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconUser, {\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {\n                                children: \"My Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconMail, {\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {\n                                children: \"My Account\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconListCheck, {\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {\n                                children: \"My Tasks\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        mt: 1,\n                        py: 1,\n                        px: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            // href=\"/admin/auth/login\"\n                            onClick: Logout,\n                            variant: \"outlined\",\n                            color: \"primary\",\n                            // component={Link}\n                            fullWidth: true,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Prakashraj\\\\Prakashraj_A\\\\ef-admin\\\\components\\\\layouts\\\\full\\\\header\\\\Profile.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"sUZri+W+CeYlBKcwcToIQ2XCerE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvZnVsbC9oZWFkZXIvUHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQVdqQjtBQUVpRDtBQUV4RSxNQUFNYyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNZ0IsZUFBZSxDQUFDQztRQUNwQkYsYUFBYUUsTUFBTUMsYUFBYTtJQUNsQztJQUNBLE1BQU1DLGVBQWU7UUFDbkJKLGFBQWE7SUFDZjtJQUVBLGlCQUFpQjtJQUNqQixNQUFNSyxTQUFTbkIsc0RBQVNBO0lBQ3hCLE1BQU1vQixTQUFRO1FBQ1pDLGVBQWVDLE9BQU8sQ0FBQyxRQUFRO1FBQy9CSCxPQUFPSSxJQUFJLENBQUU7SUFDZjtJQUVBLHFCQUNFLDhEQUFDckIsOENBQUdBOzswQkFDRiw4REFBQ0cscURBQVVBO2dCQUNUbUIsTUFBSztnQkFDTEMsY0FBVztnQkFDWEMsT0FBTTtnQkFDTkMsaUJBQWM7Z0JBQ2RDLGlCQUFjO2dCQUNkQyxJQUFJO29CQUNGLEdBQUksT0FBT2hCLGNBQWMsWUFBWTt3QkFDbkNhLE9BQU87b0JBQ1QsQ0FBQztnQkFDSDtnQkFDQUksU0FBU2Y7MEJBRVQsNEVBQUNkLGlEQUFNQTtvQkFDTDhCLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pILElBQUk7d0JBQ0ZJLE9BQU87d0JBQ1BDLFFBQVE7b0JBQ1Y7Ozs7Ozs7Ozs7OzBCQU1KLDhEQUFDL0IsK0NBQUlBO2dCQUNIZ0MsSUFBRztnQkFDSEMsVUFBVXZCO2dCQUNWd0IsV0FBVztnQkFDWEMsTUFBTUMsUUFBUTFCO2dCQUNkMkIsU0FBU3RCO2dCQUNUdUIsY0FBYztvQkFBRUMsWUFBWTtvQkFBU0MsVUFBVTtnQkFBUztnQkFDeERDLGlCQUFpQjtvQkFBRUYsWUFBWTtvQkFBU0MsVUFBVTtnQkFBTTtnQkFDeERkLElBQUk7b0JBQ0Ysb0JBQW9CO3dCQUNsQkksT0FBTztvQkFDVDtnQkFDRjs7a0NBRUEsOERBQUMzQixtREFBUUE7OzBDQUNQLDhEQUFDQyx1REFBWUE7MENBQ1gsNEVBQUNJLHlEQUFRQTtvQ0FBQ3NCLE9BQU87Ozs7Ozs7Ozs7OzBDQUVuQiw4REFBQ3pCLHVEQUFZQTswQ0FBQzs7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ0YsbURBQVFBOzswQ0FDUCw4REFBQ0MsdURBQVlBOzBDQUNYLDRFQUFDRyx5REFBUUE7b0NBQUN1QixPQUFPOzs7Ozs7Ozs7OzswQ0FFbkIsOERBQUN6Qix1REFBWUE7MENBQUM7Ozs7Ozs7Ozs7OztrQ0FFaEIsOERBQUNGLG1EQUFRQTs7MENBQ1AsOERBQUNDLHVEQUFZQTswQ0FDWCw0RUFBQ0UsOERBQWFBO29DQUFDd0IsT0FBTzs7Ozs7Ozs7Ozs7MENBRXhCLDhEQUFDekIsdURBQVlBOzBDQUFDOzs7Ozs7Ozs7Ozs7a0NBRWhCLDhEQUFDTiw4Q0FBR0E7d0JBQUMyQyxJQUFJO3dCQUFHQyxJQUFJO3dCQUFHQyxJQUFJO2tDQUNyQiw0RUFBQzNDLGlEQUFNQTs0QkFDTCwyQkFBMkI7NEJBQzNCMEIsU0FBU1Y7NEJBQ1Q0QixTQUFROzRCQUNSdEIsT0FBTTs0QkFDTixtQkFBbUI7NEJBQ25CdUIsU0FBUztzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTFGTXJDOztRQVVXWixrREFBU0E7OztLQVZwQlk7QUE0Rk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2Z1bGwvaGVhZGVyL1Byb2ZpbGUudHN4P2RlOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIEF2YXRhcixcclxuICBCb3gsXHJcbiAgTWVudSxcclxuICBCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBNZW51SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBJY29uTGlzdENoZWNrLCBJY29uTWFpbCwgSWNvblVzZXIgfSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCBbYW5jaG9yRWwyLCBzZXRBbmNob3JFbDJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2syID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIHNldEFuY2hvckVsMihldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlMiA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsMihudWxsKTtcclxuICB9O1xyXG5cclxuICAvL0xvZ291dCBmdW5jdGlvblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IExvZ291dCA9KCk9PntcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJBdXRoXCIsIDApO1xyXG4gICAgcm91dGVyLnB1c2goYC9hZG1pbi9hdXRoL2xvZ2luYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDExIG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJtc2dzLW1lbnVcIlxyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgLi4uKHR5cGVvZiBhbmNob3JFbDIgPT09IFwib2JqZWN0XCIgJiYge1xyXG4gICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2syfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlL3VzZXItMS5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgd2lkdGg6IDM1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICB7LyogTWVzc2FnZSBEcm9wZG93biAqL31cclxuICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJtc2dzLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbDJ9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsMil9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2UyfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcImJvdHRvbVwiIH19XHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgXCImIC5NdWlNZW51LXBhcGVyXCI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxJY29uVXNlciB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQ+TXkgUHJvZmlsZTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPEljb25NYWlsIHdpZHRoPXsyMH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dD5NeSBBY2NvdW50PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8SWNvbkxpc3RDaGVjayB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQ+TXkgVGFza3M8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxCb3ggbXQ9ezF9IHB5PXsxfSBweD17Mn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIC8vIGhyZWY9XCIvYWRtaW4vYXV0aC9sb2dpblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e0xvZ291dH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgLy8gY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQXZhdGFyIiwiQm94IiwiTWVudSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJNZW51SXRlbSIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkljb25MaXN0Q2hlY2siLCJJY29uTWFpbCIsIkljb25Vc2VyIiwiUHJvZmlsZSIsImFuY2hvckVsMiIsInNldEFuY2hvckVsMiIsImhhbmRsZUNsaWNrMiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlMiIsInJvdXRlciIsIkxvZ291dCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJzaXplIiwiYXJpYS1sYWJlbCIsImNvbG9yIiwiYXJpYS1jb250cm9scyIsImFyaWEtaGFzcG9wdXAiLCJzeCIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwiYW5jaG9yRWwiLCJrZWVwTW91bnRlZCIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsImFuY2hvck9yaWdpbiIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInRyYW5zZm9ybU9yaWdpbiIsIm10IiwicHkiLCJweCIsInZhcmlhbnQiLCJmdWxsV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/full/header/Profile.tsx\n"));

/***/ })

});