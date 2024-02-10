"use strict";
(() => {
var exports = {};
exports.id = 9383;
exports.ids = [9383];
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

/***/ 6958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5038);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

//User create api
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { EnquiryDateInput, FirstNameInput, LastNameInput, EnquiryTypeInput, EmailInput, PhoneNumberInput, BusinessUnitInput, Address_1Input, Address_2Input, CityInput, DistrictInput, PincodeInput, StateInput, CountryInput, IndustryInput, IndustryOthersInput, JobLevelInput, JobTitleInput } = req.body;
    try {
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into customer_enquiry_master (date, first_name, last_name, full_name, enquiry_type, email,
         phone_number_1, industry, industry_others, job_level, job_title, business_unit, address_1, address_2, city,
          district, pincode, state, country, active, created_date, creadted_by) 
          values (${EnquiryDateInput}, ${FirstNameInput}, ${LastNameInput}, ${FirstNameInput + LastNameInput},
             ${EnquiryTypeInput}, ${EmailInput}, ${PhoneNumberInput}, ${IndustryInput}, ${IndustryOthersInput},
              ${JobLevelInput}, ${JobTitleInput}, ${BusinessUnitInput}, ${Address_1Input}, ${Address_2Input},
               ${CityInput}, ${DistrictInput}, ${PincodeInput}, ${StateInput}, ${CountryInput}, ${1}, ${EnquiryDateInput},
                ${"Admin"})`;
        res.status(200).json({
            message: "Customer enquiry inserted successfully"
        });
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
var __webpack_exports__ = __webpack_require__.X(0, [19], () => (__webpack_exec__(6958)));
module.exports = __webpack_exports__;

})();