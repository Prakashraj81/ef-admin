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
exports.id = "pages/api/services/getservices";
exports.ids = ["pages/api/services/getservices"];
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

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        port: 1433,\n        trustServerCertificate: true\n    }\n};\napp.listen(3000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyx3QkFBd0I7SUFDNUI7QUFTSjtBQUdBZCxJQUFJZSxNQUFNLENBQUMsTUFBTTtJQUNiQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFFQUMsT0FBT0MsT0FBTyxHQUFHO0lBQ2IzQjtJQUNBTztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5sZXQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7IFxyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGNvbmZpZyA9IHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXHJcbiAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LlNFUlZFUiwgXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsIFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGVuY3J5cHQ6IHRydWUsXHJcbiAgICAgICAgcG9ydDogMTQzMywgXHJcbiAgICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gICAgLy8gdXNlcjogJ3NhJyxcclxuICAgIC8vIHBhc3N3b3JkOiAnQFByYWthc2hyYWo4MScsXHJcbiAgICAvLyBzZXJ2ZXI6ICcxMjcuMC4wLjFcXFxcR0pOJywgXHJcbiAgICAvLyBkYXRhYmFzZTogJ2RhdGFiYXNlX2VmJyxcclxuICAgIC8vIG9wdGlvbnM6IHtcclxuICAgIC8vICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSxcclxuICAgIC8vICAgcG9ydDogMTQzMyxcclxuICAgIC8vIH0sXHJcbn07XHJcbiAgXHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdBUEkgc2VydmVyIGlzIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAnKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNxbCxcclxuICAgIGNvbmZpZywgICAgXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInNxbCIsImRvdGVudiIsInJvdXRlciIsIlJvdXRlciIsIm11bHRlciIsImZzIiwicGF0aCIsImNvbmZpZyIsImFwcCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiVVNFUiIsInBhc3N3b3JkIiwiUEFTU1dPUkQiLCJzZXJ2ZXIiLCJTRVJWRVIiLCJkYXRhYmFzZSIsIkRBVEFCQVNFIiwib3B0aW9ucyIsImVuY3J5cHQiLCJwb3J0IiwidHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/services/getservices.js":
/*!*******************************************!*\
  !*** ./pages/api/services/getservices.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select count(id) from service_master`;\n        if (result.recordset.length !== 0) {\n            const count = result.recordset;\n            res.status(200).json({\n                count\n            });\n        } else {\n            res.status(401).json({\n                error: \"service list not found\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: error\n        });\n    } finally{\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvZ2V0c2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLGlFQUFlLE9BQU9FLEtBQUtDO0lBQ3pCLElBQUk7UUFDRixNQUFNSCx3Q0FBR0EsQ0FBQ0ksT0FBTyxDQUFDSCwyQ0FBTUE7UUFDeEIsSUFBSUksU0FBUyxNQUFNTCx3Q0FBR0EsQ0FBQ00sS0FBSyxDQUFDLG9DQUFvQyxDQUFDO1FBQ2xFLElBQUlELE9BQU9FLFNBQVMsQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDakMsTUFBTUMsUUFBUUosT0FBT0UsU0FBUztZQUM5QkosSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUY7WUFBTTtRQUMvQixPQUFPO1lBQ0xOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBeUI7UUFDekQ7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeENULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBT0E7UUFBTTtJQUN0QyxTQUFVO1FBQ1IsTUFBTVosd0NBQUdBLENBQUNjLEtBQUs7SUFDakI7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NlcnZpY2VzL2dldHNlcnZpY2VzLmpzPzM0ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3FsLCBjb25maWcgfSBmcm9tICcvY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHNxbC5xdWVyeWBTZWxlY3QgY291bnQoaWQpIGZyb20gc2VydmljZV9tYXN0ZXJgOyAgICBcclxuICAgIGlmIChyZXN1bHQucmVjb3Jkc2V0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBjb3VudCA9IHJlc3VsdC5yZWNvcmRzZXQ7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY291bnQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnc2VydmljZSBsaXN0IG5vdCBmb3VuZCcgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4ZWN1dGluZyBxdWVyeTonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgc3FsLmNsb3NlKCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwicmVxIiwicmVzIiwiY29ubmVjdCIsInJlc3VsdCIsInF1ZXJ5IiwicmVjb3Jkc2V0IiwibGVuZ3RoIiwiY291bnQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/getservices.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/getservices.js"));
module.exports = __webpack_exports__;

})();