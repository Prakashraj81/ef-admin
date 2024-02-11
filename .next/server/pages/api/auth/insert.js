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
exports.id = "pages/api/auth/insert";
exports.ids = ["pages/api/auth/insert"];
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

/***/ "(api)/./pages/api/auth/insert.js":
/*!**********************************!*\
  !*** ./pages/api/auth/insert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n//User create api\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { Name, Email, PhoneNo, Password, AuthorityRights, Created_Date } = req.body;\n    // Validate Phone Number: 10-digit\n    const phoneNoPattern = /^\\d{10}$/;\n    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {\n        return res.status(400).json({\n            error: \"Invalid phone number\"\n        });\n    } else {\n        try {\n            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query`Insert into authentication_master (name, email, phone_number, password, auth_rights, session_status, active, created_date, creadted_by) values (${Name}, ${Email}, ${PhoneNo}, ${Password}, ${AuthorityRights}, ${\"1\"}, ${1}, ${Created_Date}, ${\"Admin\"})`;\n            res.status(200).json({\n                message: \"Authentication inserted successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error inserting department:\", error);\n            res.status(500).json({\n                error: \"Internal server error\"\n            });\n        }\n    }\n}); // //Forget password api\n // export default async (req, res) => {\n //     const { Id, Password } = req.body;\n //     if(Id !== 0 && Password !== \"\") {\n //         try{\n //             await sql.connect(config);\n //             await sql.query`Update Authentication set Password=${Password} where Id=${Id}`;\n //             res.status(200).json({message: 'Authentication updated successfully'});\n //         } catch (error) {\n //             console.error('Error updating authentication:', error);\n //             res.status(500).json({ error: 'Internal server error' });\n //         }\n //     }\n //     else {\n //         console.log(\"Error\");\n //     }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9pbnNlcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLGlCQUFpQjtBQUNqQixpRUFBZSxPQUFPRSxLQUFLQztJQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxZQUFZLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtJQUNsRixrQ0FBa0M7SUFDbEMsTUFBTUMsaUJBQWlCO0lBQ3ZCLElBQUksQ0FBQ0wsV0FBVyxDQUFDQSxRQUFRTSxLQUFLLENBQUNELGlCQUFpQjtRQUM1QyxPQUFPUixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBdUI7SUFDaEUsT0FDSTtRQUNBLElBQUk7WUFDQSxNQUFNZix3Q0FBR0EsQ0FBQ2dCLE9BQU8sQ0FBQ2YsMkNBQU1BO1lBQ3hCLE1BQU1ELHdDQUFHQSxDQUFDaUIsS0FBSyxDQUFDLGdKQUFnSixFQUFFYixLQUFLLEVBQUUsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxTQUFTLEVBQUUsRUFBRUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRUMsYUFBYSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM1FOLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVJLFNBQVM7WUFBdUM7UUFDM0UsRUFBRSxPQUFPSCxPQUFPO1lBQ1pJLFFBQVFKLEtBQUssQ0FBQywrQkFBK0JBO1lBQzdDWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXdCO1FBQzFEO0lBQ0o7QUFDSixHQUFFLENBRUYsd0JBQXdCO0NBQ3hCLHVDQUF1QztDQUN2Qyx5Q0FBeUM7Q0FDekMsd0NBQXdDO0NBQ3hDLGVBQWU7Q0FDZix5Q0FBeUM7Q0FDekMsOEZBQThGO0NBQzlGLHNGQUFzRjtDQUN0Riw0QkFBNEI7Q0FDNUIsc0VBQXNFO0NBQ3RFLHdFQUF3RTtDQUN4RSxZQUFZO0NBQ1osUUFBUTtDQUNSLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMsUUFBUTtDQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9pbnNlcnQuanM/MGI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcWwsIGNvbmZpZyB9IGZyb20gJy9jb25maWcnO1xyXG5cclxuLy9Vc2VyIGNyZWF0ZSBhcGlcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IE5hbWUsIEVtYWlsLCBQaG9uZU5vLCBQYXNzd29yZCwgQXV0aG9yaXR5UmlnaHRzLCBDcmVhdGVkX0RhdGUgfSA9IHJlcS5ib2R5O1xyXG4gICAgLy8gVmFsaWRhdGUgUGhvbmUgTnVtYmVyOiAxMC1kaWdpdFxyXG4gICAgY29uc3QgcGhvbmVOb1BhdHRlcm4gPSAvXlxcZHsxMH0kLztcclxuICAgIGlmICghUGhvbmVObyB8fCAhUGhvbmVOby5tYXRjaChwaG9uZU5vUGF0dGVybikpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgcGhvbmUgbnVtYmVyJyB9KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgc3FsLmNvbm5lY3QoY29uZmlnKTtcclxuICAgICAgICAgICAgYXdhaXQgc3FsLnF1ZXJ5YEluc2VydCBpbnRvIGF1dGhlbnRpY2F0aW9uX21hc3RlciAobmFtZSwgZW1haWwsIHBob25lX251bWJlciwgcGFzc3dvcmQsIGF1dGhfcmlnaHRzLCBzZXNzaW9uX3N0YXR1cywgYWN0aXZlLCBjcmVhdGVkX2RhdGUsIGNyZWFkdGVkX2J5KSB2YWx1ZXMgKCR7TmFtZX0sICR7RW1haWx9LCAke1Bob25lTm99LCAke1Bhc3N3b3JkfSwgJHtBdXRob3JpdHlSaWdodHN9LCAke1wiMVwifSwgJHsxfSwgJHtDcmVhdGVkX0RhdGV9LCAke1wiQWRtaW5cIn0pYDtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQXV0aGVudGljYXRpb24gaW5zZXJ0ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnNlcnRpbmcgZGVwYXJ0bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIC8vRm9yZ2V0IHBhc3N3b3JkIGFwaVxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgSWQsIFBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuLy8gICAgIGlmKElkICE9PSAwICYmIFBhc3N3b3JkICE9PSBcIlwiKSB7XHJcbi8vICAgICAgICAgdHJ5e1xyXG4vLyAgICAgICAgICAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4vLyAgICAgICAgICAgICBhd2FpdCBzcWwucXVlcnlgVXBkYXRlIEF1dGhlbnRpY2F0aW9uIHNldCBQYXNzd29yZD0ke1Bhc3N3b3JkfSB3aGVyZSBJZD0ke0lkfWA7XHJcbi8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiAnQXV0aGVudGljYXRpb24gdXBkYXRlZCBzdWNjZXNzZnVsbHknfSk7XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYXV0aGVudGljYXRpb246JywgZXJyb3IpO1xyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xyXG4vLyAgICAgfVxyXG4vLyB9Il0sIm5hbWVzIjpbInNxbCIsImNvbmZpZyIsInJlcSIsInJlcyIsIk5hbWUiLCJFbWFpbCIsIlBob25lTm8iLCJQYXNzd29yZCIsIkF1dGhvcml0eVJpZ2h0cyIsIkNyZWF0ZWRfRGF0ZSIsImJvZHkiLCJwaG9uZU5vUGF0dGVybiIsIm1hdGNoIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29ubmVjdCIsInF1ZXJ5IiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/insert.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/insert.js"));
module.exports = __webpack_exports__;

})();