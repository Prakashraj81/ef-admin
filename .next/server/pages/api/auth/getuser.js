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
exports.id = "pages/api/auth/getuser";
exports.ids = ["pages/api/auth/getuser"];
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

/***/ "(api)/./pages/api/auth/getuser.js":
/*!***********************************!*\
  !*** ./pages/api/auth/getuser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n// import { sql, config } from '/config';\n// export default async (req, res) => {\n//   try {\n//     await sql.connect(config);\n//     let result = await sql.query`Select count(id) from authentication_master`;    \n//     if (result.recordset.length !== 0) {\n//       const count = result.recordset;\n//       res.status(200).json({ count });\n//     } else {\n//       res.status(401).json({ error: 'User count not found' });\n//     }\n//   } catch (error) {\n//     console.error('Error executing query:', error);\n//     res.status(500).json({ error: error });\n//   } finally {\n//     await sql.close();\n//   }\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let { EnterOTP } = req.body;\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let result;\n        if (EnterOTP !== \"\") {\n            result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select auth_otp from auth_otp_table where auth_otp=${EnterOTP}`;\n        } else {\n            result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select * from auth_otp_table`;\n        }\n        if (result.recordset.length !== 0) {\n            const user = result.recordset;\n            res.status(200).json({\n                user\n            });\n        } else {\n            res.status(401).json({\n                error: \"User list not found\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9nZXR1c2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlDQUF5QztBQUV6Qyx1Q0FBdUM7QUFDdkMsVUFBVTtBQUNWLGlDQUFpQztBQUNqQyxxRkFBcUY7QUFDckYsMkNBQTJDO0FBQzNDLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsZUFBZTtBQUNmLGlFQUFpRTtBQUNqRSxRQUFRO0FBQ1Isc0JBQXNCO0FBQ3RCLHNEQUFzRDtBQUN0RCw4Q0FBOEM7QUFDOUMsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixNQUFNO0FBQ04sS0FBSztBQUdpQztBQUV0QyxpRUFBZSxPQUFPRSxLQUFLQztJQUN6QixJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHRixJQUFJRyxJQUFJO0lBQzNCLElBQUk7UUFDRixNQUFNTCx3Q0FBR0EsQ0FBQ00sT0FBTyxDQUFDTCwyQ0FBTUE7UUFDeEIsSUFBSU07UUFDSixJQUFJSCxhQUFhLElBQUk7WUFDbkJHLFNBQVMsTUFBTVAsd0NBQUdBLENBQUNRLEtBQUssQ0FBQyxtREFBbUQsRUFBRUosU0FBUyxDQUFDO1FBQzFGLE9BQU87WUFDTEcsU0FBUyxNQUFNUCx3Q0FBR0EsQ0FBQ1EsS0FBSyxDQUFDLDRCQUE0QixDQUFDO1FBQ3hEO1FBRUEsSUFBSUQsT0FBT0UsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUNqQyxNQUFNQyxPQUFPSixPQUFPRSxTQUFTO1lBQzdCTixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRjtZQUFLO1FBQzlCLE9BQU87WUFDTFIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtRQUN0RDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4Q1gsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCO0lBQ3hELFNBQVU7UUFDUixNQUFNZCx3Q0FBR0EsQ0FBQ2dCLEtBQUs7SUFDakI7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvZ2V0dXNlci5qcz9jNzBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHNxbCwgY29uZmlnIH0gZnJvbSAnL2NvbmZpZyc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgYXdhaXQgc3FsLmNvbm5lY3QoY29uZmlnKTtcclxuLy8gICAgIGxldCByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgU2VsZWN0IGNvdW50KGlkKSBmcm9tIGF1dGhlbnRpY2F0aW9uX21hc3RlcmA7ICAgIFxyXG4vLyAgICAgaWYgKHJlc3VsdC5yZWNvcmRzZXQubGVuZ3RoICE9PSAwKSB7XHJcbi8vICAgICAgIGNvbnN0IGNvdW50ID0gcmVzdWx0LnJlY29yZHNldDtcclxuLy8gICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb3VudCB9KTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdVc2VyIGNvdW50IG5vdCBmb3VuZCcgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4ZWN1dGluZyBxdWVyeTonLCBlcnJvcik7XHJcbi8vICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuLy8gICB9IGZpbmFsbHkge1xyXG4vLyAgICAgYXdhaXQgc3FsLmNsb3NlKCk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbmltcG9ydCB7IHNxbCwgY29uZmlnIH0gZnJvbSAnL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBsZXQgeyBFbnRlck9UUCB9ID0gcmVxLmJvZHk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHNxbC5jb25uZWN0KGNvbmZpZyk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKEVudGVyT1RQICE9PSBcIlwiKSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHNxbC5xdWVyeWBTZWxlY3QgYXV0aF9vdHAgZnJvbSBhdXRoX290cF90YWJsZSB3aGVyZSBhdXRoX290cD0ke0VudGVyT1RQfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgU2VsZWN0ICogZnJvbSBhdXRoX290cF90YWJsZWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC5yZWNvcmRzZXQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHQucmVjb3Jkc2V0O1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHVzZXIgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVXNlciBsaXN0IG5vdCBmb3VuZCcgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4ZWN1dGluZyBxdWVyeTonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgc3FsLmNsb3NlKCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwicmVxIiwicmVzIiwiRW50ZXJPVFAiLCJib2R5IiwiY29ubmVjdCIsInJlc3VsdCIsInF1ZXJ5IiwicmVjb3Jkc2V0IiwibGVuZ3RoIiwidXNlciIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/getuser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/getuser.js"));
module.exports = __webpack_exports__;

})();