"use strict";
(() => {
var exports = {};
exports.id = 303;
exports.ids = [303];
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

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth_select)
});

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(19);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/select.js
 // Import necessary modules and config

const secretKey = process.env.SENDINBLUE_API_KEY;
function generateAuthToken(user) {
    const payload = {
        id: user.Id,
        email: user.Email,
        pwd: user.Password
    };
    return external_jsonwebtoken_default().sign(payload, secretKey, {
        expiresIn: "1h"
    });
}
/* harmony default export */ const auth_select = (async (req, res)=>{
    let { UserName, Password } = req.body;
    try {
        await config.sql.connect(config.config);
        let result = await config.sql.query`Select Id from Authentication where PhoneNo=${UserName} and Password=${Password} and Active=1`;
        if (result.recordset.length === 0) {
            result = await config.sql.query`Select Id from Authentication where Email=${UserName} and Password=${Password} and Active=1`;
        }
        if (result.recordset.length !== 0) {
            const user = result.recordset[0];
            // Generate and return a JWT token
            const token = generateAuthToken(user);
            res.status(200).json({
                token,
                user
            });
        } else {
            // Invalid credentials            
            res.status(401).json({
                error: "Invalid credentials"
            });
        }
        res.json(result.recordset);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2015));
module.exports = __webpack_exports__;

})();