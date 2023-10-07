"use strict";
(() => {
var exports = {};
exports.id = 89;
exports.ids = [89];
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

/***/ 19:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let express = __webpack_require__(6860);
let sql = __webpack_require__(9424);
let dotenv = __webpack_require__(5142);
let router = express.Router();
dotenv.config();
let app = express();
let config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
app.listen(4000, ()=>{
    console.log("API server is listening on port 3000");
});
module.exports = {
    sql,
    config
};


/***/ }),

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

//User create api
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { Name, Email, PhoneNo, Password, Created_Date } = req.body;
    // Validate Phone Number: 10-digit
    const phoneNoPattern = /^\d{10}$/;
    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {
        return res.status(400).json({
            error: "Invalid phone number"
        });
    } else {
        try {
            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);
            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into Authentication (Name, Email, PhoneNo, Password, OTP, SessionStatus, Active, Created_Date, Creadted_By) values (${Name}, ${Email}, ${PhoneNo}, ${Password}, ${"123456"}, ${"1"}, ${1}, ${Created_Date}, ${"Admin"})`;
            res.status(200).json({
                message: "Authentication inserted successfully"
            });
        } catch (error) {
            console.error("Error inserting department:", error);
            res.status(500).json({
                error: "Internal server error"
            });
        }
    }
}); // //Forget password api
 // export default async (req, res) => {
 //     const { Id, Password } = req.body;
 //     if(Id !== 0 && Password !== "") {
 //         try{
 //             await sql.connect(config);
 //             await sql.query`Update Authentication set Password=${Password} where Id=${Id}`;
 //             res.status(200).json({message: 'Authentication updated successfully'});
 //         } catch (error) {
 //             console.error('Error updating authentication:', error);
 //             res.status(500).json({ error: 'Internal server error' });
 //         }
 //     }
 //     else {
 //         console.log("Error");
 //     }
 // }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6628));
module.exports = __webpack_exports__;

})();