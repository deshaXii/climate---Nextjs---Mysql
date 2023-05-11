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
const getService = async (req, res) => {
  const rows = await db.query(
    `SELECT * FROM services WHERE id=${req.query.id}`
  );
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

async function addService(req, res) {
  const result = await db.query(
    `INSERT INTO services (text, value) VALUES (?,?)`,
    [req.body.text, req.body.value]
  );
  let message = "Error while adding service";
  if (result.affectedRows) {
    message = "service created successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

async function deleteService(req, res) {
  const result = await db.query(
    `DELETE FROM services WHERE id=${req.query.id}`
  );
  let message = "Error while deleting service";
  if (result.affectedRows) {
    message = "service deleted successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

async function editService(req, res) {
  const result = await db.query(
    `UPDATE services SET text = ?, value = ? WHERE id=${req.query.id}`,
    [req.body.text, req.body.value]
  );

  let message = "Error While update service";
  if (result.affectedRows) {
    message = "service updated successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

module.exports = {
  addService,
  getOurServices,
  editService,
  getService,
  deleteService,
};
