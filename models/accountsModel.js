require('dotenv').config()

const db = require('../db/db');

async function getAllAccounts() {
    // データベース接続を取得
    const connection = await db.getConnection();
    const [rows, fields] = await connection.execute('SELECT * FROM `accounts`');
    return rows
}

async function createAccount(name) {
    const connection = await db.getConnection();
    await connection.execute('INSERT INTO `accounts` (`name`, `created_at`, `updated_at`) VALUES (?, NOW(), NOW())', [name]);
}

async function updateAccount(id, name) {
    const connection = await db.getConnection();
    await connection.execute('UPDATE `accounts` SET `name` = ? WHERE `id` = ?', [name, id])
}

async function deleteAccount(id) {
    const connection = await db.getConnection();
    await connection.execute('DELETE FROM `accounts` WHERE `id` = ?', [id])
}

// モジュールとして使えるように関数をエクスポート
module.exports = {
    getAllAccounts, createAccount, updateAccount, deleteAccount
};
