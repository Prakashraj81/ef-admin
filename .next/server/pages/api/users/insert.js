"use strict";
(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994];
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

/***/ 4735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

//User create api
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { Id, Name, Email, PhoneNo, Password, Created_Date } = req.body;
    // Validate Phone Number: 10-digit
    const phoneNoPattern = /^\d{10}$/;
    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {
        return res.status(400).json({
            error: "Invalid phone number"
        });
    } else {
        try {
            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
            if (Id !== 0) {
                await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`UPDATE Authentication SET Name=${Name}, Email=${Email}, PhoneNo=${PhoneNo}, Password=${Password}, OTP=${"123456"}, SessionStatus=${"1"}, Active=${1}, Modified_Date=${Created_Date}, Modified_By=${"Admin"} WHERE Id=${Id}`;
            } else {
                await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into Authentication (Name, Email, PhoneNo, Password, OTP, SessionStatus, Active, Created_Date, Creadted_By) values (${Name}, ${Email}, ${PhoneNo}, ${Password}, ${"123456"}, ${"1"}, ${1}, ${Created_Date}, ${"Admin"})`;
            }
            res.status(200).json({
                message: "User inserted successfully"
            });
        } catch (error) {
            console.error("Error inserting user:", error);
            res.status(500).json({
                error: "Internal server error"
            });
        }
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [19], () => (__webpack_exec__(4735)));
module.exports = __webpack_exports__;

})();