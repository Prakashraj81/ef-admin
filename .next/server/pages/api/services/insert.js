"use strict";
(() => {
var exports = {};
exports.id = 5647;
exports.ids = [5647];
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

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

//User create api
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { Id, ServiceDate, Heading_1, Contents_1, Image_1, Heading_2, Contents_2, Image_2, Heading_3, Contents_3, Image_3, Heading_4, Contents_4, Image_4, ServiceAmount } = req.body;
    try {
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
        if (Heading_1 !== "" && Contents_1 !== "") {
            if (Id !== 0) {
                await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Update ServiceMaster set Date=${ServiceDate}, ServiceHeading_1=${Heading_1}, ServiceHeading_2=${Heading_2}, ServiceHeading_3=${Heading_3}, ServiceContent_1=${Contents_1}, ServiceContent_2=${Contents_2}, ServiceContent_3=${Contents_3}, Service_Image_1=${Image_1}, Service_Image_2=${Image_2}, Service_Image_3=${Image_3}, ServiceAmount=${ServiceAmount}, Active=${1}, Modified_Date=${ServiceDate}, Modified_By=${"Admin"} where Id=${Id}`;
                res.status(200).json({
                    message: "Event updated successfully"
                });
            } else {
                await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into ServiceMaster (Date, ServiceHeading_1, ServiceHeading_2, ServiceHeading_3, ServiceContent_1, ServiceContent_2, ServiceContent_3, Service_Image_1, Service_Image_2, Service_Image_3, ServiceAmount, Status, Active, Created_Date, Creadted_By) 
          values (${ServiceDate}, ${Heading_1}, ${Heading_2}, ${Heading_3}, ${Contents_1}, ${Contents_2}, ${Contents_3}, ${Image_1}, ${Image_2}, ${Image_3}, ${ServiceAmount}, ${"1"}, ${1}, ${ServiceDate}, ${"Admin"})`;
                res.status(200).json({
                    message: "Service inserted successfully"
                });
            }
        } else {
            res.status(500).json("Invalid service heading and contents");
        }
    } catch (error) {
        console.error("Error inserting service:", error);
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
var __webpack_exports__ = __webpack_require__.X(0, [19], () => (__webpack_exec__(196)));
module.exports = __webpack_exports__;

})();