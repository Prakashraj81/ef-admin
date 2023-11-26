"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/event-category/imageupload";
exports.ids = ["pages/api/event-category/imageupload"];
exports.modules = {

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/event-category/imageupload.js":
/*!*************************************************!*\
  !*** ./pages/api/event-category/imageupload.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Define the upload directory as a local path\nconst uploadDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"uploads/events-category\"); // This assumes the \"uploads\" directory is in the root of your project\nconst storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n    destination: (req, file, cb)=>{\n        cb(null, uploadDirectory);\n    },\n    filename: (req, file, cb)=>{\n        const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(file.originalname);\n        cb(null, Date.now() + ext);\n    }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        upload.single(\"image\")(req, res, (err)=>{\n            if (err) {\n                console.error(err);\n                return res.status(400).end(\"File upload error.\");\n            }\n            // Get the name and path of the uploaded file\n            const uploadedFileName = req.file.originalname;\n            const FilePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadDirectory, req.file.filename);\n            //return res.status(200).end({FilePath});\\\n            console.log(\"Path:\", FilePath);\n            res.status(200).json({\n                FilePath\n            });\n        });\n    } catch (error) {\n        console.error(error);\n        return res.status(500).end(\"Internal server error.\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnQtY2F0ZWdvcnkvaW1hZ2V1cGxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDMkI7QUFDL0I7QUFFeEIsOENBQThDO0FBQzlDLE1BQU1JLGtCQUFrQkQsZ0RBQVMsQ0FBQ0csUUFBUUMsR0FBRyxJQUFJLDRCQUE0QixzRUFBc0U7QUFFbkosTUFBTUMsVUFBVVIseURBQWtCLENBQUM7SUFDakNVLGFBQWEsQ0FBQ0MsS0FBS0MsTUFBTUM7UUFDdkJBLEdBQUcsTUFBTVQ7SUFDWDtJQUNBVSxVQUFVLENBQUNILEtBQUtDLE1BQU1DO1FBQ3BCLE1BQU1FLE1BQU1aLG1EQUFZLENBQUNTLEtBQUtLLFlBQVk7UUFDMUNKLEdBQUcsTUFBTUssS0FBS0MsR0FBRyxLQUFLSjtJQUN4QjtBQUNGO0FBRUEsTUFBTUssU0FBU3BCLDZDQUFNQSxDQUFDO0lBQUVRO0FBQVE7QUFDekIsTUFBTWEsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRUYsaUVBQWUsT0FBT1osS0FBS2E7SUFDekIsSUFBSTtRQUNGSixPQUFPSyxNQUFNLENBQUMsU0FBU2QsS0FBS2EsS0FBSyxDQUFDRTtZQUNoQyxJQUFJQSxLQUFLO2dCQUNQQyxRQUFRQyxLQUFLLENBQUNGO2dCQUNkLE9BQU9GLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUM7WUFDN0I7WUFDQSw2Q0FBNkM7WUFDN0MsTUFBTUMsbUJBQW1CcEIsSUFBSUMsSUFBSSxDQUFDSyxZQUFZO1lBQzlDLE1BQU1lLFdBQVc3QixnREFBUyxDQUFDQyxpQkFBaUJPLElBQUlDLElBQUksQ0FBQ0UsUUFBUTtZQUM3RCwwQ0FBMEM7WUFDMUNhLFFBQVFNLEdBQUcsQ0FBQyxTQUFTRDtZQUNyQlIsSUFBSUssTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQztnQkFBQ0Y7WUFBUTtRQUNoQztJQUNGLEVBQUUsT0FBT0osT0FBTztRQUNkRCxRQUFRQyxLQUFLLENBQUNBO1FBQ2QsT0FBT0osSUFBSUssTUFBTSxDQUFDLEtBQUtDLEdBQUcsQ0FBQztJQUM3QjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZXZlbnQtY2F0ZWdvcnkvaW1hZ2V1cGxvYWQuanM/ZTA4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHVwbG9hZCBkaXJlY3RvcnkgYXMgYSBsb2NhbCBwYXRoXHJcbmNvbnN0IHVwbG9hZERpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAndXBsb2Fkcy9ldmVudHMtY2F0ZWdvcnknKTsgLy8gVGhpcyBhc3N1bWVzIHRoZSBcInVwbG9hZHNcIiBkaXJlY3RvcnkgaXMgaW4gdGhlIHJvb3Qgb2YgeW91ciBwcm9qZWN0XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcclxuICBkZXN0aW5hdGlvbjogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuICAgIGNiKG51bGwsIHVwbG9hZERpcmVjdG9yeSk7XHJcbiAgfSxcclxuICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShmaWxlLm9yaWdpbmFsbmFtZSk7XHJcbiAgICBjYihudWxsLCBEYXRlLm5vdygpICsgZXh0KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IHN0b3JhZ2UgfSk7XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHVwbG9hZC5zaW5nbGUoJ2ltYWdlJykocmVxLCByZXMsIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgnRmlsZSB1cGxvYWQgZXJyb3IuJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gR2V0IHRoZSBuYW1lIGFuZCBwYXRoIG9mIHRoZSB1cGxvYWRlZCBmaWxlXHJcbiAgICAgIGNvbnN0IHVwbG9hZGVkRmlsZU5hbWUgPSByZXEuZmlsZS5vcmlnaW5hbG5hbWU7XHJcbiAgICAgIGNvbnN0IEZpbGVQYXRoID0gcGF0aC5qb2luKHVwbG9hZERpcmVjdG9yeSwgcmVxLmZpbGUuZmlsZW5hbWUpOyAgICAgIFxyXG4gICAgICAvL3JldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKHtGaWxlUGF0aH0pO1xcXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQYXRoOicsIEZpbGVQYXRoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe0ZpbGVQYXRofSk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmVuZCgnSW50ZXJuYWwgc2VydmVyIGVycm9yLicpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm11bHRlciIsIk5leHRBcGlSZXF1ZXN0IiwiTmV4dEFwaVJlc3BvbnNlIiwicGF0aCIsInVwbG9hZERpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwic3RvcmFnZSIsImRpc2tTdG9yYWdlIiwiZGVzdGluYXRpb24iLCJyZXEiLCJmaWxlIiwiY2IiLCJmaWxlbmFtZSIsImV4dCIsImV4dG5hbWUiLCJvcmlnaW5hbG5hbWUiLCJEYXRlIiwibm93IiwidXBsb2FkIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlcyIsInNpbmdsZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImVuZCIsInVwbG9hZGVkRmlsZU5hbWUiLCJGaWxlUGF0aCIsImxvZyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/event-category/imageupload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/event-category/imageupload.js"));
module.exports = __webpack_exports__;

})();