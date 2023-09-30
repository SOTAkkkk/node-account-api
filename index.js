const mysql = require('mysql2/promise');

require('dotenv').config()

getAccounts();

async function getAccounts() {
    const con = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    })
    const [rows, fields] = await con.execute('SELECT * FROM `accounts`');
    console.log(rows, fields)
}
