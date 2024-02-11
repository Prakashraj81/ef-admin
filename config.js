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
        port: 1433, 
        trustServerCertificate: true, 
    },
    // user: 'sa',
    // password: '@Prakashraj81',
    // server: '127.0.0.1\\GJN', 
    // database: 'database_ef',
    // options: {
    //   trustServerCertificate: true,
    //   port: 1433,
    // },
};
  

app.listen(3000, () => {
    console.log('API server is listening on port 3000');
});

module.exports = {
    sql,
    config,    
};
