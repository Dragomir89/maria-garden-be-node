"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.creteUser = creteUser;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    connectionLimit: 10,
});
async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM test_users limit 10');
    console.log(rows);
    return rows;
    // const res = await pool.query('SHOW TABLES');
    // return res;
}
async function getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM test_users WHERE ID = ?', [id]);
    const users = rows;
    return rows[0];
}
async function creteUser(firstName, lastName, age) {
    const result = await pool.query('INSERT INTO test_users (first_name, last_name, age) VALUES (?, ?, ?)', [firstName, lastName, age]);
    return result;
}
exports.default = pool;
