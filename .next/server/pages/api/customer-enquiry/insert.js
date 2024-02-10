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
exports.id = "pages/api/customer-enquiry/insert";
exports.ids = ["pages/api/customer-enquiry/insert"];
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

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        trustServerCertificate: true\n    }\n};\n// const storage = multer.diskStorage({\n//     destination: 'D:/Prakashraj/Prakashraj_A/ef-admin/uploads',\n//     filename: (req, file, cb) => {\n//       const ext = path.extname(file.originalname);\n//       cb(null, Date.now() + ext);\n//       console.log(\"ext\", ext);\n//     },\n//   });\n//   const upload = multer({ storage });\n//   app.use(express.json());\n//   app.use(express.urlencoded({ extended: true }));\n//   app.post('/api/post/insert', upload.single('image'), (req, res) => {\n//     if (!req.file) {\n//       return res.status(400).json({ error: 'No file uploaded.' });\n//     } \n//     return res.status(200).json({ message: 'Image uploaded successfully' });\n//   });\napp.listen(4000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsd0JBQXdCO0lBQzVCO0FBQ0o7QUFHQSx1Q0FBdUM7QUFDdkMsa0VBQWtFO0FBQ2xFLHFDQUFxQztBQUNyQyxxREFBcUQ7QUFDckQsb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQyxTQUFTO0FBQ1QsUUFBUTtBQUVSLHdDQUF3QztBQUV4Qyw2QkFBNkI7QUFDN0IscURBQXFEO0FBRXJELHlFQUF5RTtBQUN6RSx1QkFBdUI7QUFDdkIscUVBQXFFO0FBQ3JFLFNBQVM7QUFDVCwrRUFBK0U7QUFDL0UsUUFBUTtBQUtSYixJQUFJYyxNQUFNLENBQUMsTUFBTTtJQUNiQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFHQUMsT0FBT0MsT0FBTyxHQUFHO0lBQ2IxQjtJQUNBTztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5sZXQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7IFxyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGNvbmZpZyA9IHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXHJcbiAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LlNFUlZFUiwgXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsIFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGVuY3J5cHQ6IHRydWUsXHJcbiAgICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG59O1xyXG5cclxuXHJcbi8vIGNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xyXG4vLyAgICAgZGVzdGluYXRpb246ICdEOi9QcmFrYXNocmFqL1ByYWthc2hyYWpfQS9lZi1hZG1pbi91cGxvYWRzJyxcclxuLy8gICAgIGZpbGVuYW1lOiAocmVxLCBmaWxlLCBjYikgPT4ge1xyXG4vLyAgICAgICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUoZmlsZS5vcmlnaW5hbG5hbWUpO1xyXG4vLyAgICAgICBjYihudWxsLCBEYXRlLm5vdygpICsgZXh0KTtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJleHRcIiwgZXh0KTtcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcbiAgXHJcbi8vICAgY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZSB9KTtcclxuICBcclxuLy8gICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuLy8gICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuICBcclxuLy8gICBhcHAucG9zdCgnL2FwaS9wb3N0L2luc2VydCcsIHVwbG9hZC5zaW5nbGUoJ2ltYWdlJyksIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgaWYgKCFyZXEuZmlsZSkge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9KTtcclxuLy8gICAgIH0gXHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnSW1hZ2UgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuLy8gICB9KTtcclxuXHJcbiAgXHJcblxyXG5cclxuYXBwLmxpc3Rlbig0MDAwLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQVBJIHNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAzMDAwJyk7XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc3FsLFxyXG4gICAgY29uZmlnLCAgICBcclxufTtcclxuIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwic3FsIiwiZG90ZW52Iiwicm91dGVyIiwiUm91dGVyIiwibXVsdGVyIiwiZnMiLCJwYXRoIiwiY29uZmlnIiwiYXBwIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJVU0VSIiwicGFzc3dvcmQiLCJQQVNTV09SRCIsInNlcnZlciIsIlNFUlZFUiIsImRhdGFiYXNlIiwiREFUQUJBU0UiLCJvcHRpb25zIiwiZW5jcnlwdCIsInRydXN0U2VydmVyQ2VydGlmaWNhdGUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/customer-enquiry/insert.js":
/*!**********************************************!*\
  !*** ./pages/api/customer-enquiry/insert.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n//User create api\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { EnquiryDateInput, FirstNameInput, LastNameInput, EnquiryTypeInput, EmailInput, PhoneNumberInput, BusinessUnitInput, Address_1Input, Address_2Input, CityInput, DistrictInput, PincodeInput, StateInput, CountryInput, IndustryInput, IndustryOthersInput, JobLevelInput, JobTitleInput } = req.body;\n    try {\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into customer_enquiry_master (date, first_name, last_name, full_name, enquiry_type, email,\r\n         phone_number_1, industry, industry_others, job_level, job_title, business_unit, address_1, address_2, city,\r\n          district, pincode, state, country, active, created_date, creadted_by) \r\n          values (${EnquiryDateInput}, ${FirstNameInput}, ${LastNameInput}, ${FirstNameInput + LastNameInput},\r\n             ${EnquiryTypeInput}, ${EmailInput}, ${PhoneNumberInput}, ${IndustryInput}, ${IndustryOthersInput},\r\n              ${JobLevelInput}, ${JobTitleInput}, ${BusinessUnitInput}, ${Address_1Input}, ${Address_2Input},\r\n               ${CityInput}, ${DistrictInput}, ${PincodeInput}, ${StateInput}, ${CountryInput}, ${1}, ${EnquiryDateInput},\r\n                ${\"Admin\"})`;\n        res.status(200).json({\n            message: \"Customer enquiry inserted successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error inserting enquiry:\", error);\n        res.status(500).json({\n            error: error\n        });\n    } finally{\n        await _config__WEBPACK_IMPORTED_MODULE_0__.sql.close();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VzdG9tZXItZW5xdWlyeS9pbnNlcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLGlCQUFpQjtBQUNqQixpRUFBZSxPQUFPRSxLQUFLQztJQUN2QixNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLFVBQVUsRUFDakZDLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRUMsY0FBYyxFQUFFQyxjQUFjLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQzNHQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxtQkFBbUIsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUUsR0FBR25CLElBQUlvQixJQUFJO0lBQzNHLElBQUk7UUFDRixNQUFNdEIsd0NBQUdBLENBQUN1QixPQUFPLENBQUN0QiwyQ0FBTUE7UUFDeEIsTUFBTUQsd0NBQUdBLENBQUN3QixLQUFLLENBQUM7OztrQkFHSixFQUFFcEIsaUJBQWlCLEVBQUUsRUFBRUMsZUFBZSxFQUFFLEVBQUVDLGNBQWMsRUFBRSxFQUFFRCxpQkFBZUMsY0FBYzthQUM5RixFQUFFQyxpQkFBaUIsRUFBRSxFQUFFQyxXQUFXLEVBQUUsRUFBRUMsaUJBQWlCLEVBQUUsRUFBRVMsY0FBYyxFQUFFLEVBQUVDLG9CQUFvQjtjQUNoRyxFQUFFQyxjQUFjLEVBQUUsRUFBRUMsY0FBYyxFQUFFLEVBQUVYLGtCQUFrQixFQUFFLEVBQUVDLGVBQWUsRUFBRSxFQUFFQyxlQUFlO2VBQzdGLEVBQUVDLFVBQVUsRUFBRSxFQUFFQyxjQUFjLEVBQUUsRUFBRUMsYUFBYSxFQUFFLEVBQUVDLFdBQVcsRUFBRSxFQUFFQyxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRWIsaUJBQWlCO2dCQUN6RyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25CRCxJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXlDO0lBQ2hGLEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUMxQ3pCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLE9BQU9BO1FBQU07SUFDeEMsU0FDUTtRQUNOLE1BQU01Qix3Q0FBR0EsQ0FBQzhCLEtBQUs7SUFDakI7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2N1c3RvbWVyLWVucXVpcnkvaW5zZXJ0LmpzP2VlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3FsLCBjb25maWcgfSBmcm9tICcvY29uZmlnJztcclxuXHJcbi8vVXNlciBjcmVhdGUgYXBpXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBFbnF1aXJ5RGF0ZUlucHV0LCBGaXJzdE5hbWVJbnB1dCwgTGFzdE5hbWVJbnB1dCwgRW5xdWlyeVR5cGVJbnB1dCwgRW1haWxJbnB1dCwgXHJcbiAgICAgICAgUGhvbmVOdW1iZXJJbnB1dCwgQnVzaW5lc3NVbml0SW5wdXQsIEFkZHJlc3NfMUlucHV0LCBBZGRyZXNzXzJJbnB1dCwgQ2l0eUlucHV0LCBEaXN0cmljdElucHV0LCBQaW5jb2RlSW5wdXQsXHJcbiAgICAgICAgU3RhdGVJbnB1dCwgQ291bnRyeUlucHV0LCBJbmR1c3RyeUlucHV0LCBJbmR1c3RyeU90aGVyc0lucHV0LCBKb2JMZXZlbElucHV0LCBKb2JUaXRsZUlucHV0IH0gPSByZXEuYm9keTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNxbC5jb25uZWN0KGNvbmZpZyk7XHJcbiAgICAgIGF3YWl0IHNxbC5xdWVyeWBJbnNlcnQgaW50byBjdXN0b21lcl9lbnF1aXJ5X21hc3RlciAoZGF0ZSwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBmdWxsX25hbWUsIGVucXVpcnlfdHlwZSwgZW1haWwsXHJcbiAgICAgICAgIHBob25lX251bWJlcl8xLCBpbmR1c3RyeSwgaW5kdXN0cnlfb3RoZXJzLCBqb2JfbGV2ZWwsIGpvYl90aXRsZSwgYnVzaW5lc3NfdW5pdCwgYWRkcmVzc18xLCBhZGRyZXNzXzIsIGNpdHksXHJcbiAgICAgICAgICBkaXN0cmljdCwgcGluY29kZSwgc3RhdGUsIGNvdW50cnksIGFjdGl2ZSwgY3JlYXRlZF9kYXRlLCBjcmVhZHRlZF9ieSkgXHJcbiAgICAgICAgICB2YWx1ZXMgKCR7RW5xdWlyeURhdGVJbnB1dH0sICR7Rmlyc3ROYW1lSW5wdXR9LCAke0xhc3ROYW1lSW5wdXR9LCAke0ZpcnN0TmFtZUlucHV0K0xhc3ROYW1lSW5wdXR9LFxyXG4gICAgICAgICAgICAgJHtFbnF1aXJ5VHlwZUlucHV0fSwgJHtFbWFpbElucHV0fSwgJHtQaG9uZU51bWJlcklucHV0fSwgJHtJbmR1c3RyeUlucHV0fSwgJHtJbmR1c3RyeU90aGVyc0lucHV0fSxcclxuICAgICAgICAgICAgICAke0pvYkxldmVsSW5wdXR9LCAke0pvYlRpdGxlSW5wdXR9LCAke0J1c2luZXNzVW5pdElucHV0fSwgJHtBZGRyZXNzXzFJbnB1dH0sICR7QWRkcmVzc18ySW5wdXR9LFxyXG4gICAgICAgICAgICAgICAke0NpdHlJbnB1dH0sICR7RGlzdHJpY3RJbnB1dH0sICR7UGluY29kZUlucHV0fSwgJHtTdGF0ZUlucHV0fSwgJHtDb3VudHJ5SW5wdXR9LCAkezF9LCAke0VucXVpcnlEYXRlSW5wdXR9LFxyXG4gICAgICAgICAgICAgICAgJHtcIkFkbWluXCJ9KWA7XHJcbiAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0N1c3RvbWVyIGVucXVpcnkgaW5zZXJ0ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnNlcnRpbmcgZW5xdWlyeTonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yIH0pO1xyXG4gIH1cclxuICBmaW5hbGx5IHtcclxuICAgIGF3YWl0IHNxbC5jbG9zZSgpO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsic3FsIiwiY29uZmlnIiwicmVxIiwicmVzIiwiRW5xdWlyeURhdGVJbnB1dCIsIkZpcnN0TmFtZUlucHV0IiwiTGFzdE5hbWVJbnB1dCIsIkVucXVpcnlUeXBlSW5wdXQiLCJFbWFpbElucHV0IiwiUGhvbmVOdW1iZXJJbnB1dCIsIkJ1c2luZXNzVW5pdElucHV0IiwiQWRkcmVzc18xSW5wdXQiLCJBZGRyZXNzXzJJbnB1dCIsIkNpdHlJbnB1dCIsIkRpc3RyaWN0SW5wdXQiLCJQaW5jb2RlSW5wdXQiLCJTdGF0ZUlucHV0IiwiQ291bnRyeUlucHV0IiwiSW5kdXN0cnlJbnB1dCIsIkluZHVzdHJ5T3RoZXJzSW5wdXQiLCJKb2JMZXZlbElucHV0IiwiSm9iVGl0bGVJbnB1dCIsImJvZHkiLCJjb25uZWN0IiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/customer-enquiry/insert.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/customer-enquiry/insert.js"));
module.exports = __webpack_exports__;

})();