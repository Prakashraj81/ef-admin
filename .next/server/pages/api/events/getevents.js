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
exports.id = "pages/api/events/getevents";
exports.ids = ["pages/api/events/getevents"];
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

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        port: 1433,\n        trustServerCertificate: true\n    }\n};\napp.listen(3000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyx3QkFBd0I7SUFDNUI7QUFTSjtBQUdBZCxJQUFJZSxNQUFNLENBQUMsTUFBTTtJQUNiQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFFQUMsT0FBT0MsT0FBTyxHQUFHO0lBQ2IzQjtJQUNBTztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5sZXQgc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcbmxldCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTsgXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5cbmRvdGVudi5jb25maWcoKTtcbmxldCBhcHAgPSBleHByZXNzKCk7XG5cbmxldCBjb25maWcgPSB7XG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXG4gICAgc2VydmVyOiBwcm9jZXNzLmVudi5TRVJWRVIsIFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRSwgXG4gICAgb3B0aW9uczoge1xuICAgICAgICBlbmNyeXB0OiB0cnVlLFxuICAgICAgICBwb3J0OiAxNDMzLCBcbiAgICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSwgXG4gICAgfSxcbiAgICAvLyB1c2VyOiAnc2EnLFxuICAgIC8vIHBhc3N3b3JkOiAnQFByYWthc2hyYWo4MScsXG4gICAgLy8gc2VydmVyOiAnMTI3LjAuMC4xXFxcXEdKTicsIFxuICAgIC8vIGRhdGFiYXNlOiAnZGF0YWJhc2VfZWYnLFxuICAgIC8vIG9wdGlvbnM6IHtcbiAgICAvLyAgIHRydXN0U2VydmVyQ2VydGlmaWNhdGU6IHRydWUsXG4gICAgLy8gICBwb3J0OiAxNDMzLFxuICAgIC8vIH0sXG59O1xuICBcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0FQSSBzZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCcpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNxbCxcbiAgICBjb25maWcsICAgIFxufTtcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInNxbCIsImRvdGVudiIsInJvdXRlciIsIlJvdXRlciIsIm11bHRlciIsImZzIiwicGF0aCIsImNvbmZpZyIsImFwcCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiVVNFUiIsInBhc3N3b3JkIiwiUEFTU1dPUkQiLCJzZXJ2ZXIiLCJTRVJWRVIiLCJkYXRhYmFzZSIsIkRBVEFCQVNFIiwib3B0aW9ucyIsImVuY3J5cHQiLCJwb3J0IiwidHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/events/getevents.js":
/*!***************************************!*\
  !*** ./pages/api/events/getevents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select count(id) from event_master`;\n        if (result.recordset.length !== 0) {\n            const count = result.recordset;\n            res.status(200).json({\n                count\n            });\n        } else {\n            res.status(401).json({\n                error: \"event list not found\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: error\n        });\n    } finally{\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL2dldGV2ZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsaUVBQWUsT0FBT0UsS0FBS0M7SUFDekIsSUFBSTtRQUNGLE1BQU1ILHdDQUFHQSxDQUFDSSxPQUFPLENBQUNILDJDQUFNQTtRQUN4QixJQUFJSSxTQUFTLE1BQU1MLHdDQUFHQSxDQUFDTSxLQUFLLENBQUMsa0NBQWtDLENBQUM7UUFDaEUsSUFBSUQsT0FBT0UsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUNqQyxNQUFNQyxRQUFRSixPQUFPRSxTQUFTO1lBQzlCSixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRjtZQUFNO1FBQy9CLE9BQU87WUFDTE4sSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF1QjtRQUN2RDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4Q1QsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQTtRQUFNO0lBQ3RDLFNBQVU7UUFDUixNQUFNWix3Q0FBR0EsQ0FBQ2MsS0FBSztJQUNqQjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZXZlbnRzL2dldGV2ZW50cy5qcz8wNDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNxbCwgY29uZmlnIH0gZnJvbSAnL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgc3FsLmNvbm5lY3QoY29uZmlnKTtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgU2VsZWN0IGNvdW50KGlkKSBmcm9tIGV2ZW50X21hc3RlcmA7ICAgIFxyXG4gICAgaWYgKHJlc3VsdC5yZWNvcmRzZXQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gcmVzdWx0LnJlY29yZHNldDtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb3VudCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdldmVudCBsaXN0IG5vdCBmb3VuZCcgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4ZWN1dGluZyBxdWVyeTonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgc3FsLmNsb3NlKCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwicmVxIiwicmVzIiwiY29ubmVjdCIsInJlc3VsdCIsInF1ZXJ5IiwicmVjb3Jkc2V0IiwibGVuZ3RoIiwiY291bnQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/getevents.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/getevents.js"));
module.exports = __webpack_exports__;

})();