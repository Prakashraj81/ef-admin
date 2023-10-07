let express = require('express');
let sql = require('mssql');
let dotenv = require('dotenv'); 
let router = express.Router();
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

app.listen(4000, () => {
    console.log('API server is listening on port 3000');
});

module.exports = {
    sql,
    config,
};
