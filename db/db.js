const mysql = require('mysql2/promise');
require('dotenv').config()


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
})

// データベースへの接続を取得する関数
async function getConnection() {
    return await pool.getConnection();
}

module.exports = { getConnection }