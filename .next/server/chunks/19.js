"use strict";
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 5038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let express = __webpack_require__(6860);
let sql = __webpack_require__(9424);
let dotenv = __webpack_require__(5142);
let router = express.Router();
const multer = __webpack_require__(1738);
const fs = __webpack_require__(7147);
const path = __webpack_require__(1017);
dotenv.config();
let app = express();
let config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
// const storage = multer.diskStorage({
//     destination: 'D:/Prakashraj/Prakashraj_A/ef-admin/uploads',
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       cb(null, Date.now() + ext);
//       console.log("ext", ext);
//     },
//   });
//   const upload = multer({ storage });
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));
//   app.post('/api/post/insert', upload.single('image'), (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded.' });
//     } 
//     return res.status(200).json({ message: 'Image uploaded successfully' });
//   });
app.listen(4000, ()=>{
    console.log("API server is listening on port 3000");
});
module.exports = {
    sql,
    config
};


/***/ })

};
;