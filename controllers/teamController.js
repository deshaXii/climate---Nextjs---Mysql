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

const showMember = async (req, res) => {
  const rows = await db.query(`SELECT * FROM teams WHERE id=${req.query.id};`);
  const data = helper.emptyOrRows(rows);
  res.json(data[0]);
  return {
    data,
  };
};

const deleteMember = async (req, res) => {
  const result = await db.query(`DELETE FROM teams WHERE id=${req.query.id};`);
  let message = "Error in deleting member";
  if (result.affectedRows) {
    message = "Member deleted successfully";
  }
  res.send(message);
  return {
    message,
  };
};

async function addMember(req, res) {
  const result = await db.query(
    `INSERT INTO teams (name, jobname, image, facebook, instagram, linkedin) VALUES (?,?,?,?,?,?)`,
    [
      req.body.name,
      req.body.jobname,
      req.body.image,
      req.body.facebook,
      req.body.instagram,
      req.body.linkedin,
    ]
  );

  let message = "Error in creating teams";
  if (result.affectedRows) {
    message = "teams created successfully";
  }
  res.send(message);
  return {
    message,
  };
}

async function editMember(req, res) {
  const result = await db.query(
    `UPDATE teams SET name = ?, jobname = ?, image = ?, facebook = ?, instagram = ?, linkedin = ? WHERE id=${req.query.id}`,
    [
      req.body.name,
      req.body.jobname,
      req.body.image,
      req.body.facebook,
      req.body.instagram,
      req.body.linkedin,
    ]
  );

  let message = "Error in edit team member";
  if (result.affectedRows) {
    message = "team member info updated successfully";
  }
  res.send(message);
  return {
    message,
  };
}

module.exports = {
  getAllTeam,
  deleteMember,
  showMember,
  addMember,
  editMember,
};
