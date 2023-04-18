import mysql from "mysql2/promise";
import { config } from "./config";

 const pool= mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database
});
console.log(config.host)
export default async function main() {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database');
    connection.release();
  }

  




