const mysql = require('mysql2/promise');
const config = require('./config');
import * as dotenv from "dotenv";
dotenv.config();

async function query(sql, params) {
  try {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);
    return results;
  } catch (err) {
  }
}

module.exports = {
  query
}