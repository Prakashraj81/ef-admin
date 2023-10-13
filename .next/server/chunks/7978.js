exports.id = 7978;
exports.ids = [7978];
exports.modules = {

/***/ 7329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/index.css
var styles = __webpack_require__(9517);
// EXTERNAL MODULE: ./styles/animate.css
var animate = __webpack_require__(9687);
// EXTERNAL MODULE: ./styles/responsive.css
var responsive = __webpack_require__(6050);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
;// CONCATENATED MODULE: ./styles/themes/theme.js


// Create a theme instance.
const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#5D87FF",
            light: "#ECF2FF",
            dark: "#4570EA",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#49BEFF",
            light: "#E8F7FF",
            dark: "#23afdb",
            contrastText: "#ffffff"
        },
        success: {
            main: "#3BB900",
            light: "#ECFBE6",
            dark: "#3BB900",
            contrastText: "#ffffff"
        },
        info: {
            main: "#539BFF",
            light: "#EBF3FE",
            dark: "#1682d4",
            contrastText: "#ffffff"
        },
        error: {
            main: "#F4002C",
            light: "#FFE8EC",
            dark: "#F4002C",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#F49200",
            light: "#FFF6E8",
            dark: "#F49200",
            contrastText: "#ffffff"
        }
    },
    typography: {}
});
/* harmony default export */ const themes_theme = (theme);

;// CONCATENATED MODULE: ./pages/_app.tsx








const MyApp = (props)=>{
    const { Component, pageProps } = props;
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Eftapei-Admin"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_.ThemeProvider, {
                theme: themes_theme,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((CssBaseline_default()), {}),
                    getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    }))
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9687:
/***/ (() => {



/***/ }),

/***/ 9517:
/***/ (() => {



/***/ }),

/***/ 6050:
/***/ (() => {



/***/ })

};
;