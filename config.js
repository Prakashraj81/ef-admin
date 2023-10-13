let express = require('express');
let sql = require('mssql');
let dotenv = require('dotenv'); 
let router = express.Router();

const multer = require('multer');
const fs = require('fs');
const path = require('path');


dotenv.config();
let app = express();

let config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER, 
    database: process.env.DATABASE, 
    options: {
        encrypt: true,
        trustServerCertificate: true, 
    },
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

  


app.listen(4000, () => {
    console.log('API server is listening on port 3000');
});


module.exports = {
    sql,
    config,    
};
