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

eval("\nlet express = __webpack_require__(/*! express */ \"express\");\nlet sql = __webpack_require__(/*! mssql */ \"mssql\");\nlet dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nlet router = express.Router();\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\ndotenv.config();\nlet app = express();\nlet config = {\n    user: process.env.USER,\n    password: process.env.PASSWORD,\n    server: process.env.SERVER,\n    database: process.env.DATABASE,\n    options: {\n        encrypt: true,\n        port: 1433,\n        trustServerCertificate: true\n    }\n};\napp.listen(3000, ()=>{\n    console.log(\"API server is listening on port 3000\");\n});\nmodule.exports = {\n    sql,\n    config\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3RCLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlHLFNBQVNKLFFBQVFLLE1BQU07QUFFM0IsTUFBTUMsU0FBU0wsbUJBQU9BLENBQUM7QUFDdkIsTUFBTU0sS0FBS04sbUJBQU9BLENBQUM7QUFDbkIsTUFBTU8sT0FBT1AsbUJBQU9BLENBQUM7QUFHckJFLE9BQU9NLE1BQU07QUFDYixJQUFJQyxNQUFNVjtBQUVWLElBQUlTLFNBQVM7SUFDVEUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQ3RCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7SUFDOUJDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTTtJQUMxQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxRQUFRO0lBQzlCQyxTQUFTO1FBQ0xDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyx3QkFBd0I7SUFDNUI7QUFTSjtBQUdBZCxJQUFJZSxNQUFNLENBQUMsTUFBTTtJQUNiQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFFQUMsT0FBT0MsT0FBTyxHQUFHO0lBQ2IzQjtJQUNBTztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5sZXQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7IFxyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IGNvbmZpZyA9IHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXHJcbiAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LlNFUlZFUiwgXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsIFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGVuY3J5cHQ6IHRydWUsXHJcbiAgICAgICAgcG9ydDogMTQzMywgXHJcbiAgICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSwgXHJcbiAgICB9LFxyXG4gICAgLy8gdXNlcjogJ3NhJyxcclxuICAgIC8vIHBhc3N3b3JkOiAnQFByYWthc2hyYWo4MScsXHJcbiAgICAvLyBzZXJ2ZXI6ICcxMjcuMC4wLjFcXFxcR0pOJywgXHJcbiAgICAvLyBkYXRhYmFzZTogJ2RhdGFiYXNlX2VmJyxcclxuICAgIC8vIG9wdGlvbnM6IHtcclxuICAgIC8vICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSxcclxuICAgIC8vICAgcG9ydDogMTQzMyxcclxuICAgIC8vIH0sXHJcbn07XHJcbiAgXHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdBUEkgc2VydmVyIGlzIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAnKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNxbCxcclxuICAgIGNvbmZpZywgICAgXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInNxbCIsImRvdGVudiIsInJvdXRlciIsIlJvdXRlciIsIm11bHRlciIsImZzIiwicGF0aCIsImNvbmZpZyIsImFwcCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiVVNFUiIsInBhc3N3b3JkIiwiUEFTU1dPUkQiLCJzZXJ2ZXIiLCJTRVJWRVIiLCJkYXRhYmFzZSIsIkRBVEFCQVNFIiwib3B0aW9ucyIsImVuY3J5cHQiLCJwb3J0IiwidHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/insert.js":
/*!**********************************!*\
  !*** ./pages/api/auth/insert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n//User create api\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { Name, Email, PhoneNo, Password, AuthorityRights, CurrentDate } = req.body;\n    let Active = 1;\n    // Validate Phone Number: 10-digit\n    const phoneNoPattern = /^\\d{10}$/;\n    if (!PhoneNo || !PhoneNo.match(phoneNoPattern)) {\n        return res.status(400).json({\n            error: \"Invalid phone number\"\n        });\n    } else {\n        try {\n            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.connect(_config__WEBPACK_IMPORTED_MODULE_0__.config);\n            const query = `INSERT INTO authentication_master (name, email, phone_number, password, auth_rights, session_status, active, created_date, creadted_by) VALUES ('${Name}', '${Email}', '${PhoneNo}', '${Password}', '${AuthorityRights}', '1', ${Active}, '${CurrentDate}', 'Admin')`;\n            await _config__WEBPACK_IMPORTED_MODULE_0__.sql.query(query);\n            res.status(200).json({\n                message: \"Authentication inserted successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error inserting department:\", error);\n            res.status(500).json({\n                error: \"Internal server error\"\n            });\n        }\n    }\n}); // //Forget password api\n // export default async (req, res) => {\n //     const { Id, Password } = req.body;\n //     if(Id !== 0 && Password !== \"\") {\n //         try{\n //             await sql.connect(config);\n //             await sql.query`Update Authentication set Password=${Password} where Id=${Id}`;\n //             res.status(200).json({message: 'Authentication updated successfully'});\n //         } catch (error) {\n //             console.error('Error updating authentication:', error);\n //             res.status(500).json({ error: 'Internal server error' });\n //         }\n //     }\n //     else {\n //         console.log(\"Error\");\n //     }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9pbnNlcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLGlCQUFpQjtBQUNqQixpRUFBZSxPQUFPRSxLQUFLQztJQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxXQUFXLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtJQUNqRixJQUFJQyxTQUFTO0lBQ2Isa0NBQWtDO0lBQ2xDLE1BQU1DLGlCQUFpQjtJQUN2QixJQUFJLENBQUNOLFdBQVcsQ0FBQ0EsUUFBUU8sS0FBSyxDQUFDRCxpQkFBaUI7UUFDNUMsT0FBT1QsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXVCO0lBQ2hFLE9BQ0k7UUFDQSxJQUFJO1lBQ0EsTUFBTWhCLHdDQUFHQSxDQUFDaUIsT0FBTyxDQUFDaEIsMkNBQU1BO1lBQ3hCLE1BQU1pQixRQUFRLENBQUMsaUpBQWlKLEVBQUVkLEtBQUssSUFBSSxFQUFFQyxNQUFNLElBQUksRUFBRUMsUUFBUSxJQUFJLEVBQUVDLFNBQVMsSUFBSSxFQUFFQyxnQkFBZ0IsUUFBUSxFQUFFRyxPQUFPLEdBQUcsRUFBRUYsWUFBWSxXQUFXLENBQUM7WUFDcFIsTUFBTVQsd0NBQUdBLENBQUNrQixLQUFLLENBQUNBO1lBQ2hCZixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSSxTQUFTO1lBQXVDO1FBQzNFLEVBQUUsT0FBT0gsT0FBTztZQUNaSSxRQUFRSixLQUFLLENBQUMsK0JBQStCQTtZQUM3Q2IsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF3QjtRQUMxRDtJQUNKO0FBQ0osR0FBRSxDQUVGLHdCQUF3QjtDQUN4Qix1Q0FBdUM7Q0FDdkMseUNBQXlDO0NBQ3pDLHdDQUF3QztDQUN4QyxlQUFlO0NBQ2YseUNBQXlDO0NBQ3pDLDhGQUE4RjtDQUM5RixzRkFBc0Y7Q0FDdEYsNEJBQTRCO0NBQzVCLHNFQUFzRTtDQUN0RSx3RUFBd0U7Q0FDeEUsWUFBWTtDQUNaLFFBQVE7Q0FDUixhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLFFBQVE7Q0FDUixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvaW5zZXJ0LmpzPzBiNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3FsLCBjb25maWcgfSBmcm9tICcvY29uZmlnJztcclxuXHJcbi8vVXNlciBjcmVhdGUgYXBpXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBOYW1lLCBFbWFpbCwgUGhvbmVObywgUGFzc3dvcmQsIEF1dGhvcml0eVJpZ2h0cywgQ3VycmVudERhdGUgfSA9IHJlcS5ib2R5O1xyXG4gICAgbGV0IEFjdGl2ZSA9IDE7XHJcbiAgICAvLyBWYWxpZGF0ZSBQaG9uZSBOdW1iZXI6IDEwLWRpZ2l0XHJcbiAgICBjb25zdCBwaG9uZU5vUGF0dGVybiA9IC9eXFxkezEwfSQvO1xyXG4gICAgaWYgKCFQaG9uZU5vIHx8ICFQaG9uZU5vLm1hdGNoKHBob25lTm9QYXR0ZXJuKSkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnSW52YWxpZCBwaG9uZSBudW1iZXInIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBJTlNFUlQgSU5UTyBhdXRoZW50aWNhdGlvbl9tYXN0ZXIgKG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIHBhc3N3b3JkLCBhdXRoX3JpZ2h0cywgc2Vzc2lvbl9zdGF0dXMsIGFjdGl2ZSwgY3JlYXRlZF9kYXRlLCBjcmVhZHRlZF9ieSkgVkFMVUVTICgnJHtOYW1lfScsICcke0VtYWlsfScsICcke1Bob25lTm99JywgJyR7UGFzc3dvcmR9JywgJyR7QXV0aG9yaXR5UmlnaHRzfScsICcxJywgJHtBY3RpdmV9LCAnJHtDdXJyZW50RGF0ZX0nLCAnQWRtaW4nKWA7XHJcbiAgICAgICAgICAgIGF3YWl0IHNxbC5xdWVyeShxdWVyeSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0F1dGhlbnRpY2F0aW9uIGluc2VydGVkIHN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIGRlcGFydG1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAvL0ZvcmdldCBwYXNzd29yZCBhcGlcclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgICBjb25zdCB7IElkLCBQYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbi8vICAgICBpZihJZCAhPT0gMCAmJiBQYXNzd29yZCAhPT0gXCJcIikge1xyXG4vLyAgICAgICAgIHRyeXtcclxuLy8gICAgICAgICAgICAgYXdhaXQgc3FsLmNvbm5lY3QoY29uZmlnKTtcclxuLy8gICAgICAgICAgICAgYXdhaXQgc3FsLnF1ZXJ5YFVwZGF0ZSBBdXRoZW50aWNhdGlvbiBzZXQgUGFzc3dvcmQ9JHtQYXNzd29yZH0gd2hlcmUgSWQ9JHtJZH1gO1xyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogJ0F1dGhlbnRpY2F0aW9uIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5J30pO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGF1dGhlbnRpY2F0aW9uOicsIGVycm9yKTtcclxuLy8gICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcclxuLy8gICAgIH1cclxuLy8gfSJdLCJuYW1lcyI6WyJzcWwiLCJjb25maWciLCJyZXEiLCJyZXMiLCJOYW1lIiwiRW1haWwiLCJQaG9uZU5vIiwiUGFzc3dvcmQiLCJBdXRob3JpdHlSaWdodHMiLCJDdXJyZW50RGF0ZSIsImJvZHkiLCJBY3RpdmUiLCJwaG9uZU5vUGF0dGVybiIsIm1hdGNoIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29ubmVjdCIsInF1ZXJ5IiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/insert.js\n");

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