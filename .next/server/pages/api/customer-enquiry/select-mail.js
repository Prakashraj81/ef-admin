"use strict";
(() => {
var exports = {};
exports.id = 4466;
exports.ids = [4466];
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

/***/ 9496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let { Id } = req.body;
    try {
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
        let result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select * from customer_enquiry_master where enquiry_type=${"Email"}`;
        if (result.recordset.length !== 0) {
            const enquiry = result.recordset;
            res.status(200).json({
                enquiry
            });
        } else {
            res.status(401).json({
                error: "Enquiry list not found"
            });
        }
    } catch (error) {
        console.error("Error executing query:", error);
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
var __webpack_exports__ = __webpack_require__.X(0, [19], () => (__webpack_exec__(9496)));
module.exports = __webpack_exports__;

})();