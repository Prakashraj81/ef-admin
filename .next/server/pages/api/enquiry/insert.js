"use strict";
(() => {
var exports = {};
exports.id = 8268;
exports.ids = [8268];
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

/***/ 253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

//User create api
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { Id, EnquiryDate, FullName, Email, PhoneNo, Message } = req.body;
    try {
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
        if (FullName !== "" && Email !== "") {
            if (Id !== 0) {
                await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Update EnquiryListMaster set Date=${EnquiryDate}, FullName=${FullName}, Email=${Email}, PhoneNo=${PhoneNo}, Message=${Message}, Active=${1}, Modified_Date=${EnquiryDate}, Modified_By=${"Admin"} where Id=${Id}`;
                res.status(200).json({
                    message: "Enquiry updated successfully"
                });
            } else {
                await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into EnquiryListMaster (Date, FullName, Email, PhoneNo, Message, Status, Active, Created_Date, Creadted_By) 
          values (${EnquiryDate}, ${FullName}, ${Email}, ${PhoneNo}, ${Message}, ${"1"}, ${1}, ${EnquiryDate}, ${"Admin"})`;
                res.status(200).json({
                    message: "Enquiry inserted successfully"
                });
            }
        } else {
            res.status(500).json("Invalid enquiry name and email");
        }
    } catch (error) {
        console.error("Error inserting enquiry:", error);
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
var __webpack_exports__ = __webpack_require__.X(0, [19], () => (__webpack_exec__(253)));
module.exports = __webpack_exports__;

})();