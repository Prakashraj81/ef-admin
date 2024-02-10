"use strict";
(() => {
var exports = {};
exports.id = 9797;
exports.ids = [9797];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 6860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 9424:
/***/ ((module) => {

module.exports = require("mssql");

/***/ }),

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

//User create api
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { Id, ReviewDate, CustomerName, City, Contents, AvgRating } = req.body;
    try {
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
        if (Id !== 0) {
            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Update TestimonialsMaster set Date=${ReviewDate}, CustomerName=${CustomerName}, City=${City}, Message=${Contents}, Rating=${AvgRating}, StarRating=${AvgRating}, Active=${1}, Modified_Date=${ReviewDate}, Modified_By=${"Admin"} where Id=${Id}`;
            res.status(200).json({
                message: "Testimonial updated successfully"
            });
        } else {
            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into TestimonialsMaster (Date, CustomerName, City, Message, Rating, StarRating, Status, Active, Created_Date, Creadted_By) values (${ReviewDate}, ${CustomerName}, ${City}, ${Contents}, ${AvgRating}, ${AvgRating}, ${"1"}, ${1}, ${ReviewDate}, ${"Admin"})`;
            res.status(200).json({
                message: "Testimonial inserted successfully"
            });
        }
    } catch (error) {
        console.error("Error inserting testimonial:", error);
        res.status(500).json({
            error: error
        });
    } finally{
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [19], () => (__webpack_exec__(832)));
module.exports = __webpack_exports__;

})();