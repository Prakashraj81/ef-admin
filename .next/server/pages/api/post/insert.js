"use strict";
(() => {
var exports = {};
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 3160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3160);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



// Define the upload directory as a local path
const uploadDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "uploads/"); // This assumes the "uploads" directory is in the root of your project
const storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({
    destination: (req, file, cb)=>{
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb)=>{
        const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});
const upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({
    storage
});
const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        upload.single("image")(req, res, (err)=>{
            if (err) {
                console.error(err);
                return res.status(400).end("File upload error.");
            }
            // Get the name and path of the uploaded file
            const uploadedFileName = req.file.originalname;
            const uploadedFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadDirectory, req.file.filename);
            console.log("Path:", uploadedFilePath);
            return res.status(200).end("File uploaded.");
        });
    } catch (error) {
        console.error(error);
        return res.status(500).end("Internal server error.");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7081));
module.exports = __webpack_exports__;

})();