"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/events/events",{

/***/ "./components/layouts/full/sidebar/MenuItems.tsx":
/*!*******************************************************!*\
  !*** ./components/layouts/full/sidebar/MenuItems.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniqueId */ \"./node_modules/lodash/uniqueId.js\");\n/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Menuitems = [\n    {\n        navlabel: false,\n        subheader: \"Home\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Dashboard\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconLayoutDashboard,\n        href: \"/admin/Dashborad\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Users\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconUsersGroup,\n        href: \"/admin/users/users\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Gallery\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPhotoPlus,\n        href: \"/admin/gallery/gallery\"\n    },\n    {\n        navlabel: true,\n        subheader: \"CONTENTS MANAGEMENT\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Post\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconArticle,\n        href: \"/admin/blog-post/blog-post\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Services\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconAssembly,\n        href: \"/admin/services/services\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Gallery\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPhotoPlus,\n        href: \"/admin/event-category/event-category\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Events\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCalendarEvent,\n        href: \"/admin/events/events\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Testimonials\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCertificate,\n        href: \"/admin/testimonials/testimonials\"\n    },\n    {\n        navlabel: true,\n        subheader: \"SUPPORT MANAGEMENT\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Enquiry\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTicket,\n        href: \"/admin/enquiry/enquiry\"\n    },\n    {\n        navlabel: true,\n        subheader: \"COMPANY MANAGEMENT\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"Company Info\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconBuildingCommunity,\n        href: \"/admin/company-info/company-info\"\n    },\n    {\n        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(),\n        title: \"FAQ\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconHelpOctagon,\n        href: \"/admin/faq/faq\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menuitems);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvZnVsbC9zaWRlYmFyL01lbnVJdGVtcy50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUc2QjtBQUVLO0FBRWxDLE1BQU1XLFlBQVk7SUFDaEI7UUFDRUMsVUFBVTtRQUNWQyxXQUFXO0lBQ2I7SUFDQTtRQUNFQyxJQUFJSixzREFBUUE7UUFDWkssT0FBTztRQUNQQyxNQUFNaEIsb0VBQW1CQTtRQUN6QmlCLE1BQU07SUFDUjtJQUNBO1FBQ0VILElBQUlKLHNEQUFRQTtRQUNaSyxPQUFPO1FBQ1BDLE1BQU1mLCtEQUFjQTtRQUNwQmdCLE1BQU07SUFDUjtJQUNBO1FBQ0VILElBQUlKLHNEQUFRQTtRQUNaSyxPQUFPO1FBQ1BDLE1BQU1kLDhEQUFhQTtRQUNuQmUsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsVUFBVTtRQUNWQyxXQUFXO0lBQ2I7SUFDQTtRQUNFQyxJQUFJSixzREFBUUE7UUFDWkssT0FBTztRQUNQQyxNQUFNYiw0REFBV0E7UUFDakJjLE1BQU07SUFDUjtJQUVBO1FBQ0VILElBQUlKLHNEQUFRQTtRQUNaSyxPQUFPO1FBQ1BDLE1BQU1aLDZEQUFZQTtRQUNsQmEsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsSUFBSUosc0RBQVFBO1FBQ1pLLE9BQU87UUFDUEMsTUFBTWQsOERBQWFBO1FBQ25CZSxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxJQUFJSixzREFBUUE7UUFDWkssT0FBTztRQUNQQyxNQUFNWCxrRUFBaUJBO1FBQ3ZCWSxNQUFNO0lBQ1I7SUFFQTtRQUNFSCxJQUFJSixzREFBUUE7UUFDWkssT0FBTztRQUNQQyxNQUFNVixnRUFBZUE7UUFDckJXLE1BQU07SUFDUjtJQUVBO1FBQ0VMLFVBQVU7UUFDVkMsV0FBVztJQUNiO0lBQ0E7UUFDRUMsSUFBSUosc0RBQVFBO1FBQ1pLLE9BQU87UUFDUEMsTUFBTVQsMkRBQVVBO1FBQ2hCVSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxVQUFVO1FBQ1ZDLFdBQVc7SUFDYjtJQUNBO1FBQ0VDLElBQUlKLHNEQUFRQTtRQUNaSyxPQUFPO1FBQ1BDLE1BQU1SLHNFQUFxQkE7UUFDM0JTLE1BQU07SUFDUjtJQUNBO1FBQ0VILElBQUlKLHNEQUFRQTtRQUNaSyxPQUFPO1FBQ1BDLE1BQU1QLGdFQUFlQTtRQUNyQlEsTUFBTTtJQUNSO0NBQ0Q7QUFFRCwrREFBZU4sU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvZnVsbC9zaWRlYmFyL01lbnVJdGVtcy50c3g/ZjA1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEljb25BcGVydHVyZSwgSWNvbkNvcHksIEljb25MYXlvdXREYXNoYm9hcmQsIEljb25Mb2dpbiwgSWNvbk1vb2RIYXBweSwgSWNvblR5cG9ncmFwaHksIEljb25Vc2VyUGx1cywgSWNvblVzZXJzR3JvdXAsIFxyXG4gIEljb25QaG90b1BsdXMsIEljb25BcnRpY2xlLCBJY29uQXNzZW1ibHksIEljb25DYWxlbmRhckV2ZW50LCBJY29uQ2VydGlmaWNhdGUsIEljb25UaWNrZXQsIEljb25CdWlsZGluZ0NvbW11bml0eSwgSWNvbkhlbHBPY3RhZ29uXHJcbn0gZnJvbSAnQHRhYmxlci9pY29ucy1yZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBNZW51aXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmF2bGFiZWw6IGZhbHNlLFxyXG4gICAgc3ViaGVhZGVyOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogdW5pcXVlSWQoKSxcclxuICAgIHRpdGxlOiAnRGFzaGJvYXJkJyxcclxuICAgIGljb246IEljb25MYXlvdXREYXNoYm9hcmQsXHJcbiAgICBocmVmOiAnL2FkbWluL0Rhc2hib3JhZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogdW5pcXVlSWQoKSxcclxuICAgIHRpdGxlOiAnVXNlcnMnLFxyXG4gICAgaWNvbjogSWNvblVzZXJzR3JvdXAsXHJcbiAgICBocmVmOiAnL2FkbWluL3VzZXJzL3VzZXJzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiB1bmlxdWVJZCgpLFxyXG4gICAgdGl0bGU6ICdHYWxsZXJ5JyxcclxuICAgIGljb246IEljb25QaG90b1BsdXMsXHJcbiAgICBocmVmOiAnL2FkbWluL2dhbGxlcnkvZ2FsbGVyeScsXHJcbiAgfSwgIFxyXG4gIHtcclxuICAgIG5hdmxhYmVsOiB0cnVlLFxyXG4gICAgc3ViaGVhZGVyOiAnQ09OVEVOVFMgTUFOQUdFTUVOVCcsXHJcbiAgfSwgIFxyXG4gIHtcclxuICAgIGlkOiB1bmlxdWVJZCgpLFxyXG4gICAgdGl0bGU6ICdQb3N0JyxcclxuICAgIGljb246IEljb25BcnRpY2xlLFxyXG4gICAgaHJlZjogJy9hZG1pbi9ibG9nLXBvc3QvYmxvZy1wb3N0JyxcclxuICB9LCAgICBcclxuICBcclxuICB7XHJcbiAgICBpZDogdW5pcXVlSWQoKSxcclxuICAgIHRpdGxlOiAnU2VydmljZXMnLFxyXG4gICAgaWNvbjogSWNvbkFzc2VtYmx5LFxyXG4gICAgaHJlZjogJy9hZG1pbi9zZXJ2aWNlcy9zZXJ2aWNlcycsXHJcbiAgfSwgXHJcbiAge1xyXG4gICAgaWQ6IHVuaXF1ZUlkKCksXHJcbiAgICB0aXRsZTogJ0dhbGxlcnknLFxyXG4gICAgaWNvbjogSWNvblBob3RvUGx1cyxcclxuICAgIGhyZWY6ICcvYWRtaW4vZXZlbnQtY2F0ZWdvcnkvZXZlbnQtY2F0ZWdvcnknLFxyXG4gIH0sICAgXHJcbiAge1xyXG4gICAgaWQ6IHVuaXF1ZUlkKCksXHJcbiAgICB0aXRsZTogJ0V2ZW50cycsXHJcbiAgICBpY29uOiBJY29uQ2FsZW5kYXJFdmVudCxcclxuICAgIGhyZWY6ICcvYWRtaW4vZXZlbnRzL2V2ZW50cycsXHJcbiAgfSwgXHJcbiAgXHJcbiAge1xyXG4gICAgaWQ6IHVuaXF1ZUlkKCksXHJcbiAgICB0aXRsZTogJ1Rlc3RpbW9uaWFscycsXHJcbiAgICBpY29uOiBJY29uQ2VydGlmaWNhdGUsXHJcbiAgICBocmVmOiAnL2FkbWluL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMnLFxyXG4gIH0sICAgICBcclxuICBcclxuICB7XHJcbiAgICBuYXZsYWJlbDogdHJ1ZSxcclxuICAgIHN1YmhlYWRlcjogJ1NVUFBPUlQgTUFOQUdFTUVOVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogdW5pcXVlSWQoKSxcclxuICAgIHRpdGxlOiAnRW5xdWlyeScsXHJcbiAgICBpY29uOiBJY29uVGlja2V0LFxyXG4gICAgaHJlZjogJy9hZG1pbi9lbnF1aXJ5L2VucXVpcnknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmF2bGFiZWw6IHRydWUsXHJcbiAgICBzdWJoZWFkZXI6ICdDT01QQU5ZIE1BTkFHRU1FTlQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IHVuaXF1ZUlkKCksXHJcbiAgICB0aXRsZTogJ0NvbXBhbnkgSW5mbycsXHJcbiAgICBpY29uOiBJY29uQnVpbGRpbmdDb21tdW5pdHksXHJcbiAgICBocmVmOiAnL2FkbWluL2NvbXBhbnktaW5mby9jb21wYW55LWluZm8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IHVuaXF1ZUlkKCksXHJcbiAgICB0aXRsZTogJ0ZBUScsXHJcbiAgICBpY29uOiBJY29uSGVscE9jdGFnb24sXHJcbiAgICBocmVmOiAnL2FkbWluL2ZhcS9mYXEnLFxyXG4gIH0sICAgIFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudWl0ZW1zO1xyXG4iXSwibmFtZXMiOlsiSWNvbkxheW91dERhc2hib2FyZCIsIkljb25Vc2Vyc0dyb3VwIiwiSWNvblBob3RvUGx1cyIsIkljb25BcnRpY2xlIiwiSWNvbkFzc2VtYmx5IiwiSWNvbkNhbGVuZGFyRXZlbnQiLCJJY29uQ2VydGlmaWNhdGUiLCJJY29uVGlja2V0IiwiSWNvbkJ1aWxkaW5nQ29tbXVuaXR5IiwiSWNvbkhlbHBPY3RhZ29uIiwidW5pcXVlSWQiLCJNZW51aXRlbXMiLCJuYXZsYWJlbCIsInN1YmhlYWRlciIsImlkIiwidGl0bGUiLCJpY29uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/full/sidebar/MenuItems.tsx\n"));

/***/ })

});