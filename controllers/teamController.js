const db = require("../db");
const helper = require("../helper");

const getAllTeam = async (req, res) => {
  const rows = await db.query(`SELECT * FROM teams`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

module.exports = {
  getAllTeam,
};
