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

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        port: 1433,\n        trustServerCertificate: true\n    }\n};\nconst pool = new sql.ConnectionPool(config);\npool.connect().then((pool)=>{\n    console.log(\"Connected to the database\");\n    // Your database-related code goes here\n    // Close the connection pool when done\n    pool.close();\n}).catch((err)=>{\n    console.error(\"Error connecting to the database:\", err);\n});\napp.listen(3000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyx3QkFBd0I7SUFDNUI7QUFTSjtBQUVBLE1BQU1DLE9BQU8sSUFBSXZCLElBQUl3QixjQUFjLENBQUNqQjtBQUVwQ2dCLEtBQUtFLE9BQU8sR0FBR0MsSUFBSSxDQUFDLENBQUNIO0lBQ25CSSxRQUFRQyxHQUFHLENBQUM7SUFFWix1Q0FBdUM7SUFFdkMsc0NBQXNDO0lBQ3RDTCxLQUFLTSxLQUFLO0FBQ1osR0FBR0MsS0FBSyxDQUFDLENBQUNDO0lBQ1JKLFFBQVFLLEtBQUssQ0FBQyxxQ0FBcUNEO0FBQ3JEO0FBR0F2QixJQUFJeUIsTUFBTSxDQUFDLE1BQU07SUFDYk4sUUFBUUMsR0FBRyxDQUFDO0FBQ2hCO0FBRUFNLE9BQU9DLE9BQU8sR0FBRztJQUNibkM7SUFDQU87QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbmZpZy5qcz9jMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxubGV0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpOyBcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxubGV0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmxldCBjb25maWcgPSB7XHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBBU1NXT1JELFxyXG4gICAgc2VydmVyOiBwcm9jZXNzLmVudi5TRVJWRVIsIFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFLCBcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBlbmNyeXB0OiB0cnVlLFxyXG4gICAgICAgIHBvcnQ6IDE0MzMsIFxyXG4gICAgICAgIHRydXN0U2VydmVyQ2VydGlmaWNhdGU6IHRydWUsIFxyXG4gICAgfSxcclxuICAgIC8vIHVzZXI6ICdzYScsXHJcbiAgICAvLyBwYXNzd29yZDogJ0BQcmFrYXNocmFqODEnLFxyXG4gICAgLy8gc2VydmVyOiAnMTI3LjAuMC4xXFxcXEdKTicsIC8vIE5vdGU6IFVzZSAnXFxcXCcgdG8gc2VwYXJhdGUgdGhlIHNlcnZlciBhbmQgaW5zdGFuY2UgbmFtZXNcclxuICAgIC8vIGRhdGFiYXNlOiAnZGF0YWJhc2VfZWYnLFxyXG4gICAgLy8gb3B0aW9uczoge1xyXG4gICAgLy8gICB0cnVzdFNlcnZlckNlcnRpZmljYXRlOiB0cnVlLCAvLyBBY2NlcHQgc2VsZi1zaWduZWQgY2VydGlmaWNhdGVzIChvbmx5IGZvciBkZXZlbG9wbWVudClcclxuICAgIC8vICAgcG9ydDogMTQzMyxcclxuICAgIC8vIH0sXHJcbn07XHJcbiAgXHJcbmNvbnN0IHBvb2wgPSBuZXcgc3FsLkNvbm5lY3Rpb25Qb29sKGNvbmZpZyk7XHJcblxyXG5wb29sLmNvbm5lY3QoKS50aGVuKChwb29sKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKTtcclxuICBcclxuICAvLyBZb3VyIGRhdGFiYXNlLXJlbGF0ZWQgY29kZSBnb2VzIGhlcmVcclxuXHJcbiAgLy8gQ2xvc2UgdGhlIGNvbm5lY3Rpb24gcG9vbCB3aGVuIGRvbmVcclxuICBwb29sLmNsb3NlKCk7XHJcbn0pLmNhdGNoKChlcnIpID0+IHtcclxuICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTonLCBlcnIpO1xyXG59KTtcclxuXHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdBUEkgc2VydmVyIGlzIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAnKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNxbCxcclxuICAgIGNvbmZpZywgICAgXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInNxbCIsImRvdGVudiIsInJvdXRlciIsIlJvdXRlciIsIm11bHRlciIsImZzIiwicGF0aCIsImNvbmZpZyIsImFwcCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiVVNFUiIsInBhc3N3b3JkIiwiUEFTU1dPUkQiLCJzZXJ2ZXIiLCJTRVJWRVIiLCJkYXRhYmFzZSIsIkRBVEFCQVNFIiwib3B0aW9ucyIsImVuY3J5cHQiLCJwb3J0IiwidHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZSIsInBvb2wiLCJDb25uZWN0aW9uUG9vbCIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImxpc3RlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

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