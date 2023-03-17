const db = require("../db");
const helper = require("../helper");

const getVideoInfo = async (req, res) => {
  const rows = await db.query(`SELECT * FROM video`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

module.exports = {
  getVideoInfo,
};
