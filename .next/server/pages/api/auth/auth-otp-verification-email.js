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
exports.id = "pages/api/auth/auth-otp-verification-email";
exports.ids = ["pages/api/auth/auth-otp-verification-email"];
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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

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

/***/ "(api)/./pages/api/auth/auth-otp-verification-email.js":
/*!*******************************************************!*\
  !*** ./pages/api/auth/auth-otp-verification-email.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1___default().createTransport({\n    host: \"smtp.gmail.com\",\n    port: 587,\n    secure: false,\n    auth: {\n        user: \"kassaposprakash@gmail.com\",\n        pass: \"xcbffvhzbbfcxrwc\" //xcbf fvhz bbfc xrwc\n    }\n});\ntransporter.verify((error, success)=>{\n    if (error) {\n        console.error(\"SMTP verification failed:\", error);\n    } else {\n        console.log(\"SMTP server is ready to send emails\");\n    }\n});\nconsole.log(\"Transporter Configuration:\", transporter.options);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let { Name, Email, PhoneNo, CurrentDate } = req.body;\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        let otp = generateOTP();\n        let email = req.body.Email;\n        let phone_number = req.body.PhoneNo;\n        const query = `INSERT INTO auth_otp_table (name, email, phone_number, auth_otp, status, active, created_date, creadted_by) VALUES ('${Name}', '${Email}', '${PhoneNo}', '${otp}', 'verified', '1', '${CurrentDate}', 'Admin')`;\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query(query);\n        // Send OTP via email\n        const mailOptions = {\n            from: \"kassaposprakash@gmail.com\",\n            to: \"aprakashraj81@gmail.com\",\n            subject: \"Email OTP Verification\",\n            text: `Your OTP for email verification is: ${otp}`\n        };\n        await transporter.sendMail(mailOptions, (error, info)=>{\n            if (error) {\n                console.error(\"Error sending email:\", error);\n                res.status(500).json({\n                    error: \"Error sending email\"\n                });\n            } else {\n                console.log(\"Email sent: \" + info.response);\n            }\n        });\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();\n        res.json({\n            message: \"OTP sent successfully\",\n            email,\n            phone_number,\n            otp\n        });\n    } catch (error) {\n        console.error(\"Error executing query:\", error);\n        res.status(500).json({\n            error: error\n        });\n    }\n});\nfunction generateOTP() {\n    return Math.floor(1000 + Math.random() * 9000).toString();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9hdXRoLW90cC12ZXJpZmljYXRpb24tZW1haWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDRjtBQUVwQyxNQUFNRyxjQUFjRCxpRUFBMEIsQ0FBQztJQUMzQ0csTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsTUFBTTtRQUNGQyxNQUFNO1FBQ05DLE1BQU0sbUJBQW1CLHFCQUFxQjtJQUNsRDtBQUNKO0FBQ0FQLFlBQVlRLE1BQU0sQ0FBQyxDQUFDQyxPQUFPQztJQUN2QixJQUFJRCxPQUFPO1FBQ1BFLFFBQVFGLEtBQUssQ0FBQyw2QkFBNkJBO0lBQy9DLE9BQU87UUFDSEUsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0o7QUFDQUQsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QlosWUFBWWEsT0FBTztBQUU3RCxpRUFBZSxPQUFPQyxLQUFLQztJQUN2QixJQUFJLEVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBQyxHQUFHTCxJQUFJTSxJQUFJO0lBQ2xELElBQUk7UUFDQSxNQUFNdkIsd0NBQUdBLENBQUN3QixPQUFPLENBQUN2QiwyQ0FBTUE7UUFDeEIsSUFBSXdCLE1BQU1DO1FBQ1YsSUFBSUMsUUFBUVYsSUFBSU0sSUFBSSxDQUFDSCxLQUFLO1FBQzFCLElBQUlRLGVBQWVYLElBQUlNLElBQUksQ0FBQ0YsT0FBTztRQUNuQyxNQUFNUSxRQUFRLENBQUMscUhBQXFILEVBQUVWLEtBQUssSUFBSSxFQUFFQyxNQUFNLElBQUksRUFBRUMsUUFBUSxJQUFJLEVBQUVJLElBQUkscUJBQXFCLEVBQUVILFlBQVksV0FBVyxDQUFDO1FBQzlOLE1BQU10Qix3Q0FBR0EsQ0FBQzZCLEtBQUssQ0FBQ0E7UUFFaEIscUJBQXFCO1FBQ3JCLE1BQU1DLGNBQWM7WUFDaEJDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTO1lBQ1RDLE1BQU0sQ0FBQyxvQ0FBb0MsRUFBRVQsSUFBSSxDQUFDO1FBQ3REO1FBQ0EsTUFBTXRCLFlBQVlnQyxRQUFRLENBQUNMLGFBQWEsQ0FBQ2xCLE9BQU93QjtZQUM1QyxJQUFJeEIsT0FBTztnQkFDUEUsUUFBUUYsS0FBSyxDQUFDLHdCQUF3QkE7Z0JBQ3RDTSxJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRTFCLE9BQU87Z0JBQXNCO1lBQ3hELE9BQU87Z0JBQ0hFLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJxQixLQUFLRyxRQUFRO1lBQzlDO1FBQ0o7UUFDQSxNQUFNdkMsd0NBQUdBLENBQUN3QyxLQUFLO1FBQ2Z0QixJQUFJb0IsSUFBSSxDQUFDO1lBQUVHLFNBQVM7WUFBeUJkO1lBQU9DO1lBQWNIO1FBQUk7SUFDMUUsRUFBRSxPQUFPYixPQUFPO1FBQ1pFLFFBQVFGLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDTSxJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFMUIsT0FBT0E7UUFBTTtJQUN4QztBQUNKLEdBQUU7QUFFRixTQUFTYztJQUNMLE9BQU9nQixLQUFLQyxLQUFLLENBQUMsT0FBT0QsS0FBS0UsTUFBTSxLQUFLLE1BQU1DLFFBQVE7QUFDM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9hdXRoLW90cC12ZXJpZmljYXRpb24tZW1haWwuanM/ZGJmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcWwsIGNvbmZpZyB9IGZyb20gJy9jb25maWcnO1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuICAgIHBvcnQ6IDU4NywgLy8gb3IgNTg3IGZvciBUTFNcclxuICAgIHNlY3VyZTogZmFsc2UsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogJ2thc3NhcG9zcHJha2FzaEBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3M6ICd4Y2JmZnZoemJiZmN4cndjJyAvL3hjYmYgZnZoeiBiYmZjIHhyd2NcclxuICAgIH1cclxufSk7XHJcbnRyYW5zcG9ydGVyLnZlcmlmeSgoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NNVFAgdmVyaWZpY2F0aW9uIGZhaWxlZDonLCBlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTTVRQIHNlcnZlciBpcyByZWFkeSB0byBzZW5kIGVtYWlscycpO1xyXG4gICAgfVxyXG59KTtcclxuY29uc29sZS5sb2coJ1RyYW5zcG9ydGVyIENvbmZpZ3VyYXRpb246JywgdHJhbnNwb3J0ZXIub3B0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGxldCB7TmFtZSwgRW1haWwsIFBob25lTm8sIEN1cnJlbnREYXRlfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4gICAgICAgIGxldCBvdHAgPSBnZW5lcmF0ZU9UUCgpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IHJlcS5ib2R5LkVtYWlsO1xyXG4gICAgICAgIGxldCBwaG9uZV9udW1iZXIgPSByZXEuYm9keS5QaG9uZU5vO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBJTlRPIGF1dGhfb3RwX3RhYmxlIChuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBhdXRoX290cCwgc3RhdHVzLCBhY3RpdmUsIGNyZWF0ZWRfZGF0ZSwgY3JlYWR0ZWRfYnkpIFZBTFVFUyAoJyR7TmFtZX0nLCAnJHtFbWFpbH0nLCAnJHtQaG9uZU5vfScsICcke290cH0nLCAndmVyaWZpZWQnLCAnMScsICcke0N1cnJlbnREYXRlfScsICdBZG1pbicpYDtcclxuICAgICAgICBhd2FpdCBzcWwucXVlcnkocXVlcnkpO1xyXG5cclxuICAgICAgICAvLyBTZW5kIE9UUCB2aWEgZW1haWxcclxuICAgICAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZnJvbTogJ2thc3NhcG9zcHJha2FzaEBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICB0bzogJ2FwcmFrYXNocmFqODFAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgc3ViamVjdDogJ0VtYWlsIE9UUCBWZXJpZmljYXRpb24nLFxyXG4gICAgICAgICAgICB0ZXh0OiBgWW91ciBPVFAgZm9yIGVtYWlsIHZlcmlmaWNhdGlvbiBpczogJHtvdHB9YFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIChlcnJvciwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZW1haWw6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIHNlbmRpbmcgZW1haWwnIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsIHNlbnQ6ICcgKyBpbmZvLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IHNxbC5jbG9zZSgpO1xyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ09UUCBzZW50IHN1Y2Nlc3NmdWxseScsIGVtYWlsLCBwaG9uZV9udW1iZXIsIG90cCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5OicsIGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlT1RQKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoMTAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwKS50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInNxbCIsImNvbmZpZyIsIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwidmVyaWZ5IiwiZXJyb3IiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyZXEiLCJyZXMiLCJOYW1lIiwiRW1haWwiLCJQaG9uZU5vIiwiQ3VycmVudERhdGUiLCJib2R5IiwiY29ubmVjdCIsIm90cCIsImdlbmVyYXRlT1RQIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJxdWVyeSIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzZW5kTWFpbCIsImluZm8iLCJzdGF0dXMiLCJqc29uIiwicmVzcG9uc2UiLCJjbG9zZSIsIm1lc3NhZ2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/auth-otp-verification-email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/auth-otp-verification-email.js"));
module.exports = __webpack_exports__;

})();