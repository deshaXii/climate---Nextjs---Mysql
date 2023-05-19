const db = require("../db");
const helper = require("../helper");

const getOurServices = async (req, res) => {
  const rows = await db.query(`SELECT * FROM services`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

async function addOurServices(req, res) {
  if (!req.file?.filename) {
    res.json({ status: "failed", message: "please upload image" });
    return;
  }
  const result = await db.query(
    `INSERT INTO services (section_description, section_image) VALUES (?,?)`,
    [req.body.description, req.file.filename]
  );

  let message = "Error while creating Services Info";
  if (result.affectedRows) {
    message = "Services Info created successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

async function editOurServices(req, res) {
  const result = await db.query(
    `UPDATE services SET section_description = ?, section_image = ?`,
    [req.body.description, req.file ? req.file.filename : req.body.image]
  );

  let message = "Error in edit Services Info";
  if (result.affectedRows) {
    message = "Services Info updated successfully";
  }
  res.json({ message, status: "success" });
}

module.exports = {
  getOurServices,
  editOurServices,
  addOurServices,
};
