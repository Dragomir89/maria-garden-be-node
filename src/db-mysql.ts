import mysql, { RowDataPacket } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectionLimit: 10,
});

export async function getUsers() {
  const [rows] = await pool.query('SELECT * FROM test_users limit 10');
  console.log(rows);
  return rows;
  // const res = await pool.query('SHOW TABLES');
  // return res;
}

interface User {
  ID: number;
  first_name: string;
  last_name: string;
  age: number;
}

export async function getUserById(id: number): Promise<User | undefined> {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM test_users WHERE ID = ?',
    [id]
  );
  const users = rows as User[];
  return rows[0] as User;
}

export async function creteUser(
  firstName: string,
  lastName: string,
  age: number
) {
  const result = await pool.query(
    'INSERT INTO test_users (first_name, last_name, age) VALUES (?, ?, ?)',
    [firstName, lastName, age]
  );
  return result;
}

export default pool;
