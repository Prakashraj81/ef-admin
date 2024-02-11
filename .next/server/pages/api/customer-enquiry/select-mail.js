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
exports.id = "pages/api/customer-enquiry/select-mail";
exports.ids = ["pages/api/customer-enquiry/select-mail"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mssql");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        port: 1433,\n        trustServerCertificate: true\n    }\n};\napp.listen(3000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyx3QkFBd0I7SUFDNUI7QUFDSjtBQUlBZCxJQUFJZSxNQUFNLENBQUMsTUFBTTtJQUNiQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFFQUMsT0FBT0MsT0FBTyxHQUFHO0lBQ2IzQjtJQUNBTztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5sZXQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7IFxyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGNvbmZpZyA9IHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXHJcbiAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LlNFUlZFUiwgXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsIFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGVuY3J5cHQ6IHRydWUsXHJcbiAgICAgICAgcG9ydDogMTQzMywgXHJcbiAgICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG59O1xyXG4gIFxyXG5cclxuXHJcbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0FQSSBzZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCcpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc3FsLFxyXG4gICAgY29uZmlnLCAgICBcclxufTtcclxuIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwic3FsIiwiZG90ZW52Iiwicm91dGVyIiwiUm91dGVyIiwibXVsdGVyIiwiZnMiLCJwYXRoIiwiY29uZmlnIiwiYXBwIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJVU0VSIiwicGFzc3dvcmQiLCJQQVNTV09SRCIsInNlcnZlciIsIlNFUlZFUiIsImRhdGFiYXNlIiwiREFUQUJBU0UiLCJvcHRpb25zIiwiZW5jcnlwdCIsInBvcnQiLCJ0cnVzdFNlcnZlckNlcnRpZmljYXRlIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/customer-enquiry/select-mail.js":
/*!***************************************************!*\
  !*** ./pages/api/customer-enquiry/select-mail.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let { Id } = req.body;\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select * from customer_enquiry_master where enquiry_type=${\"Email\"}`;\n        if (result.recordset.length !== 0) {\n            const enquiry = result.recordset;\n            res.status(200).json({\n                enquiry\n            });\n        } else {\n            res.status(401).json({\n                error: \"Enquiry list not found\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: error\n        });\n    } finally{\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VzdG9tZXItZW5xdWlyeS9zZWxlY3QtbWFpbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsaUVBQWUsT0FBT0UsS0FBS0M7SUFDekIsSUFBSSxFQUFFQyxFQUFFLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtJQUNyQixJQUFJO1FBQ0YsTUFBTUwsd0NBQUdBLENBQUNNLE9BQU8sQ0FBQ0wsMkNBQU1BO1FBQ3hCLElBQUlNLFNBQVMsTUFBTVAsd0NBQUdBLENBQUNRLEtBQUssQ0FBQyx5REFBeUQsRUFBRSxRQUFRLENBQUM7UUFDakcsSUFBSUQsT0FBT0UsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUNqQyxNQUFNQyxVQUFVSixPQUFPRSxTQUFTO1lBQ2hDTixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRjtZQUFRO1FBQ2pDLE9BQU87WUFDTFIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF5QjtRQUN6RDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4Q1gsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQTtRQUFNO0lBQ3RDLFNBQVU7UUFDUixNQUFNZCx3Q0FBR0EsQ0FBQ2dCLEtBQUs7SUFDakI7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2N1c3RvbWVyLWVucXVpcnkvc2VsZWN0LW1haWwuanM/NDE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcWwsIGNvbmZpZyB9IGZyb20gJy9jb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgbGV0IHsgSWQgfSA9IHJlcS5ib2R5O1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHNxbC5xdWVyeWBTZWxlY3QgKiBmcm9tIGN1c3RvbWVyX2VucXVpcnlfbWFzdGVyIHdoZXJlIGVucXVpcnlfdHlwZT0ke1wiRW1haWxcIn1gO1xyXG4gICAgaWYgKHJlc3VsdC5yZWNvcmRzZXQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGVucXVpcnkgPSByZXN1bHQucmVjb3Jkc2V0O1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGVucXVpcnkgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnRW5xdWlyeSBsaXN0IG5vdCBmb3VuZCcgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4ZWN1dGluZyBxdWVyeTonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgc3FsLmNsb3NlKCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwicmVxIiwicmVzIiwiSWQiLCJib2R5IiwiY29ubmVjdCIsInJlc3VsdCIsInF1ZXJ5IiwicmVjb3Jkc2V0IiwibGVuZ3RoIiwiZW5xdWlyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/customer-enquiry/select-mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/customer-enquiry/select-mail.js"));
module.exports = __webpack_exports__;

})();