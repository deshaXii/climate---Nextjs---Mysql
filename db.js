const mysql = require("mysql2/promise");
const config = require("./config");
import * as dotenv from "dotenv";
dotenv.config();

async function query(sql, params) {
  const pool = mysql.createPool(config.db);

  // Use a connection from the pool
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } finally {
    connection.release();
  }
}

module.exports = {
  query,
};
