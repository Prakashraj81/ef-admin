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
exports.id = "pages/api/auth/select";
exports.ids = ["pages/api/auth/select"];
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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ "(api)/./pages/api/auth/select.js":
/*!**********************************!*\
  !*** ./pages/api/auth/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n // Import necessary modules and config\n\nconst secretKey = process.env.SENDINBLUE_API_KEY;\nfunction generateAuthToken(user) {\n    const payload = {\n        id: user.Id,\n        email: user.Email,\n        pwd: user.Password\n    };\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, secretKey, {\n        expiresIn: \"1h\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let { UserName, Password } = req.body;\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select id, auth_rights from authentication_master where phone_number=${UserName} and password=${Password} and active=1`;\n        if (result.recordset.length === 0) {\n            result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select id, auth_rights from authentication_master where email=${UserName} and password=${Password} and active=1`;\n        }\n        if (result.recordset.length !== 0) {\n            const user = result.recordset[0];\n            //Generate and return a JWT token\n            //const token = generateAuthToken(user);             \n            res.status(200).json({\n                user\n            });\n        } else {\n            // Invalid credentials            \n            res.status(401).json({\n                error: \"Invalid credentials\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: error\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zZWxlY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0MsQ0FBQyxzQ0FBc0M7QUFDOUM7QUFFL0IsTUFBTUcsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7QUFFaEQsU0FBU0Msa0JBQWtCQyxJQUFJO0lBQzNCLE1BQU1DLFVBQVU7UUFDWkMsSUFBSUYsS0FBS0csRUFBRTtRQUNYQyxPQUFPSixLQUFLSyxLQUFLO1FBQ2pCQyxLQUFLTixLQUFLTyxRQUFRO0lBQ3RCO0lBQ0EsT0FBT2Isd0RBQVEsQ0FBQ08sU0FBU04sV0FBVztRQUFFYyxXQUFXO0lBQUs7QUFDMUQ7QUFHQSxpRUFBZSxPQUFPQyxLQUFLQztJQUN2QixJQUFJLEVBQUNDLFFBQVEsRUFBRUwsUUFBUSxFQUFDLEdBQUdHLElBQUlHLElBQUk7SUFDbkMsSUFBSTtRQUNBLE1BQU1yQix3Q0FBR0EsQ0FBQ3NCLE9BQU8sQ0FBQ3JCLDJDQUFNQTtRQUN4QixJQUFJc0IsU0FBUyxNQUFNdkIsd0NBQUdBLENBQUN3QixLQUFLLENBQUMscUVBQXFFLEVBQUVKLFNBQVMsY0FBYyxFQUFFTCxTQUFTLGFBQWEsQ0FBQztRQUNwSixJQUFHUSxPQUFPRSxTQUFTLENBQUNDLE1BQU0sS0FBSyxHQUFHO1lBQzlCSCxTQUFTLE1BQU12Qix3Q0FBR0EsQ0FBQ3dCLEtBQUssQ0FBQyw4REFBOEQsRUFBRUosU0FBUyxjQUFjLEVBQUVMLFNBQVMsYUFBYSxDQUFDO1FBQzdJO1FBQ0EsSUFBSVEsT0FBT0UsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUMvQixNQUFNbEIsT0FBT2UsT0FBT0UsU0FBUyxDQUFDLEVBQUU7WUFDaEMsaUNBQWlDO1lBQ2pDLHFEQUFxRDtZQUNyRE4sSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRXBCO1lBQUs7UUFDaEMsT0FBTztZQUNILGtDQUFrQztZQUNsQ1csSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtRQUN4RDtJQUNKLEVBQUUsT0FBT0EsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4Q1YsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQTtRQUFNO0lBQ3hDO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL3NlbGVjdC5qcz8zYzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNxbCwgY29uZmlnIH0gZnJvbSAnL2NvbmZpZyc7IC8vIEltcG9ydCBuZWNlc3NhcnkgbW9kdWxlcyBhbmQgY29uZmlnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNlY3JldEtleSA9IHByb2Nlc3MuZW52LlNFTkRJTkJMVUVfQVBJX0tFWTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQXV0aFRva2VuKHVzZXIpIHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgaWQ6IHVzZXIuSWQsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuRW1haWwsICBcclxuICAgICAgICBwd2Q6IHVzZXIuUGFzc3dvcmQsICAgICAgXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldEtleSwgeyBleHBpcmVzSW46ICcxaCcgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGxldCB7VXNlck5hbWUsIFBhc3N3b3JkfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgU2VsZWN0IGlkLCBhdXRoX3JpZ2h0cyBmcm9tIGF1dGhlbnRpY2F0aW9uX21hc3RlciB3aGVyZSBwaG9uZV9udW1iZXI9JHtVc2VyTmFtZX0gYW5kIHBhc3N3b3JkPSR7UGFzc3dvcmR9IGFuZCBhY3RpdmU9MWA7XHJcbiAgICAgICAgaWYocmVzdWx0LnJlY29yZHNldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgc3FsLnF1ZXJ5YFNlbGVjdCBpZCwgYXV0aF9yaWdodHMgZnJvbSBhdXRoZW50aWNhdGlvbl9tYXN0ZXIgd2hlcmUgZW1haWw9JHtVc2VyTmFtZX0gYW5kIHBhc3N3b3JkPSR7UGFzc3dvcmR9IGFuZCBhY3RpdmU9MWA7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZWNvcmRzZXQubGVuZ3RoICE9PSAwKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC5yZWNvcmRzZXRbMF07XHJcbiAgICAgICAgICAgIC8vR2VuZXJhdGUgYW5kIHJldHVybiBhIEpXVCB0b2tlblxyXG4gICAgICAgICAgICAvL2NvbnN0IHRva2VuID0gZ2VuZXJhdGVBdXRoVG9rZW4odXNlcik7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHVzZXIgfSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJbnZhbGlkIGNyZWRlbnRpYWxzICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJyB9KTtcclxuICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5OicsIGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwiand0Iiwic2VjcmV0S2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRJTkJMVUVfQVBJX0tFWSIsImdlbmVyYXRlQXV0aFRva2VuIiwidXNlciIsInBheWxvYWQiLCJpZCIsIklkIiwiZW1haWwiLCJFbWFpbCIsInB3ZCIsIlBhc3N3b3JkIiwic2lnbiIsImV4cGlyZXNJbiIsInJlcSIsInJlcyIsIlVzZXJOYW1lIiwiYm9keSIsImNvbm5lY3QiLCJyZXN1bHQiLCJxdWVyeSIsInJlY29yZHNldCIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/select.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/select.js"));
module.exports = __webpack_exports__;

})();