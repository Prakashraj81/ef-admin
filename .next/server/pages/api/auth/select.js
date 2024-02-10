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

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        trustServerCertificate: true\n    }\n};\n// const storage = multer.diskStorage({\n//     destination: 'D:/Prakashraj/Prakashraj_A/ef-admin/uploads',\n//     filename: (req, file, cb) => {\n//       const ext = path.extname(file.originalname);\n//       cb(null, Date.now() + ext);\n//       console.log(\"ext\", ext);\n//     },\n//   });\n//   const upload = multer({ storage });\n//   app.use(express.json());\n//   app.use(express.urlencoded({ extended: true }));\n//   app.post('/api/post/insert', upload.single('image'), (req, res) => {\n//     if (!req.file) {\n//       return res.status(400).json({ error: 'No file uploaded.' });\n//     } \n//     return res.status(200).json({ message: 'Image uploaded successfully' });\n//   });\napp.listen(4000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsd0JBQXdCO0lBQzVCO0FBQ0o7QUFHQSx1Q0FBdUM7QUFDdkMsa0VBQWtFO0FBQ2xFLHFDQUFxQztBQUNyQyxxREFBcUQ7QUFDckQsb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQyxTQUFTO0FBQ1QsUUFBUTtBQUVSLHdDQUF3QztBQUV4Qyw2QkFBNkI7QUFDN0IscURBQXFEO0FBRXJELHlFQUF5RTtBQUN6RSx1QkFBdUI7QUFDdkIscUVBQXFFO0FBQ3JFLFNBQVM7QUFDVCwrRUFBK0U7QUFDL0UsUUFBUTtBQUtSYixJQUFJYyxNQUFNLENBQUMsTUFBTTtJQUNiQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFHQUMsT0FBT0MsT0FBTyxHQUFHO0lBQ2IxQjtJQUNBTztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5sZXQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7IFxyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGNvbmZpZyA9IHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXHJcbiAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LlNFUlZFUiwgXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsIFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGVuY3J5cHQ6IHRydWUsXHJcbiAgICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG59O1xyXG5cclxuXHJcbi8vIGNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xyXG4vLyAgICAgZGVzdGluYXRpb246ICdEOi9QcmFrYXNocmFqL1ByYWthc2hyYWpfQS9lZi1hZG1pbi91cGxvYWRzJyxcclxuLy8gICAgIGZpbGVuYW1lOiAocmVxLCBmaWxlLCBjYikgPT4ge1xyXG4vLyAgICAgICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUoZmlsZS5vcmlnaW5hbG5hbWUpO1xyXG4vLyAgICAgICBjYihudWxsLCBEYXRlLm5vdygpICsgZXh0KTtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJleHRcIiwgZXh0KTtcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcbiAgXHJcbi8vICAgY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZSB9KTtcclxuICBcclxuLy8gICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuLy8gICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuICBcclxuLy8gICBhcHAucG9zdCgnL2FwaS9wb3N0L2luc2VydCcsIHVwbG9hZC5zaW5nbGUoJ2ltYWdlJyksIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgaWYgKCFyZXEuZmlsZSkge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9KTtcclxuLy8gICAgIH0gXHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnSW1hZ2UgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuLy8gICB9KTtcclxuXHJcbiAgXHJcblxyXG5cclxuYXBwLmxpc3Rlbig0MDAwLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQVBJIHNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAzMDAwJyk7XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc3FsLFxyXG4gICAgY29uZmlnLCAgICBcclxufTtcclxuIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwic3FsIiwiZG90ZW52Iiwicm91dGVyIiwiUm91dGVyIiwibXVsdGVyIiwiZnMiLCJwYXRoIiwiY29uZmlnIiwiYXBwIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJVU0VSIiwicGFzc3dvcmQiLCJQQVNTV09SRCIsInNlcnZlciIsIlNFUlZFUiIsImRhdGFiYXNlIiwiREFUQUJBU0UiLCJvcHRpb25zIiwiZW5jcnlwdCIsInRydXN0U2VydmVyQ2VydGlmaWNhdGUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/select.js":
/*!**********************************!*\
  !*** ./pages/api/auth/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n // Import necessary modules and config\n\nconst secretKey = process.env.SENDINBLUE_API_KEY;\nfunction generateAuthToken(user) {\n    const payload = {\n        id: user.Id,\n        email: user.Email,\n        pwd: user.Password\n    };\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, secretKey, {\n        expiresIn: \"1h\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let { UserName, Password } = req.body;\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select Id from Authentication where PhoneNo=${UserName} and Password=${Password} and Active=1`;\n        if (result.recordset.length === 0) {\n            result = await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Select Id from Authentication where Email=${UserName} and Password=${Password} and Active=1`;\n        }\n        if (result.recordset.length !== 0) {\n            const user = result.recordset[0];\n            //Generate and return a JWT token\n            //const token = generateAuthToken(user);             \n            res.status(200).json({\n                user\n            });\n        } else {\n            // Invalid credentials            \n            res.status(401).json({\n                error: \"Invalid credentials\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: error\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zZWxlY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0MsQ0FBQyxzQ0FBc0M7QUFDOUM7QUFFL0IsTUFBTUcsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7QUFFaEQsU0FBU0Msa0JBQWtCQyxJQUFJO0lBQzNCLE1BQU1DLFVBQVU7UUFDWkMsSUFBSUYsS0FBS0csRUFBRTtRQUNYQyxPQUFPSixLQUFLSyxLQUFLO1FBQ2pCQyxLQUFLTixLQUFLTyxRQUFRO0lBQ3RCO0lBQ0EsT0FBT2Isd0RBQVEsQ0FBQ08sU0FBU04sV0FBVztRQUFFYyxXQUFXO0lBQUs7QUFDMUQ7QUFHQSxpRUFBZSxPQUFPQyxLQUFLQztJQUN2QixJQUFJLEVBQUNDLFFBQVEsRUFBRUwsUUFBUSxFQUFDLEdBQUdHLElBQUlHLElBQUk7SUFDbkMsSUFBSTtRQUNBLE1BQU1yQix3Q0FBR0EsQ0FBQ3NCLE9BQU8sQ0FBQ3JCLDJDQUFNQTtRQUN4QixJQUFJc0IsU0FBUyxNQUFNdkIsd0NBQUdBLENBQUN3QixLQUFLLENBQUMsNENBQTRDLEVBQUVKLFNBQVMsY0FBYyxFQUFFTCxTQUFTLGFBQWEsQ0FBQztRQUMzSCxJQUFHUSxPQUFPRSxTQUFTLENBQUNDLE1BQU0sS0FBSyxHQUFHO1lBQzlCSCxTQUFTLE1BQU12Qix3Q0FBR0EsQ0FBQ3dCLEtBQUssQ0FBQywwQ0FBMEMsRUFBRUosU0FBUyxjQUFjLEVBQUVMLFNBQVMsYUFBYSxDQUFDO1FBQ3pIO1FBQ0EsSUFBSVEsT0FBT0UsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUMvQixNQUFNbEIsT0FBT2UsT0FBT0UsU0FBUyxDQUFDLEVBQUU7WUFDaEMsaUNBQWlDO1lBQ2pDLHFEQUFxRDtZQUNyRE4sSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRXBCO1lBQUs7UUFDaEMsT0FBTztZQUNILGtDQUFrQztZQUNsQ1csSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtRQUN4RDtJQUNKLEVBQUUsT0FBT0EsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4Q1YsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQTtRQUFNO0lBQ3hDO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL3NlbGVjdC5qcz8zYzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNxbCwgY29uZmlnIH0gZnJvbSAnL2NvbmZpZyc7IC8vIEltcG9ydCBuZWNlc3NhcnkgbW9kdWxlcyBhbmQgY29uZmlnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNlY3JldEtleSA9IHByb2Nlc3MuZW52LlNFTkRJTkJMVUVfQVBJX0tFWTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQXV0aFRva2VuKHVzZXIpIHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgaWQ6IHVzZXIuSWQsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuRW1haWwsICBcclxuICAgICAgICBwd2Q6IHVzZXIuUGFzc3dvcmQsICAgICAgXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldEtleSwgeyBleHBpcmVzSW46ICcxaCcgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGxldCB7VXNlck5hbWUsIFBhc3N3b3JkfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgU2VsZWN0IElkIGZyb20gQXV0aGVudGljYXRpb24gd2hlcmUgUGhvbmVObz0ke1VzZXJOYW1lfSBhbmQgUGFzc3dvcmQ9JHtQYXNzd29yZH0gYW5kIEFjdGl2ZT0xYDtcclxuICAgICAgICBpZihyZXN1bHQucmVjb3Jkc2V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgU2VsZWN0IElkIGZyb20gQXV0aGVudGljYXRpb24gd2hlcmUgRW1haWw9JHtVc2VyTmFtZX0gYW5kIFBhc3N3b3JkPSR7UGFzc3dvcmR9IGFuZCBBY3RpdmU9MWA7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZWNvcmRzZXQubGVuZ3RoICE9PSAwKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC5yZWNvcmRzZXRbMF07XHJcbiAgICAgICAgICAgIC8vR2VuZXJhdGUgYW5kIHJldHVybiBhIEpXVCB0b2tlblxyXG4gICAgICAgICAgICAvL2NvbnN0IHRva2VuID0gZ2VuZXJhdGVBdXRoVG9rZW4odXNlcik7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHVzZXIgfSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJbnZhbGlkIGNyZWRlbnRpYWxzICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJyB9KTtcclxuICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5OicsIGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwiand0Iiwic2VjcmV0S2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRJTkJMVUVfQVBJX0tFWSIsImdlbmVyYXRlQXV0aFRva2VuIiwidXNlciIsInBheWxvYWQiLCJpZCIsIklkIiwiZW1haWwiLCJFbWFpbCIsInB3ZCIsIlBhc3N3b3JkIiwic2lnbiIsImV4cGlyZXNJbiIsInJlcSIsInJlcyIsIlVzZXJOYW1lIiwiYm9keSIsImNvbm5lY3QiLCJyZXN1bHQiLCJxdWVyeSIsInJlY29yZHNldCIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/select.js\n");

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