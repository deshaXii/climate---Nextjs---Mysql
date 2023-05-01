const db = require("../db");
const helper = require("../helper");
const config = require("../config");

const getAllBlogs = async (req, res) => {
  // const offset = helper.getOffset(1, config.listPerPage);
  // const rows = await db.query(
  //   `SELECT * FROM blogs LIMIT ${config.listPerPage} OFFSET ${offset}`
  // );
  const rows = await db.query(`SELECT * FROM blogs`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const getBlogByID = async (req, res) => {
  const rows = await db.query(`SELECT * FROM blogs WHERE id = ${req.query.id}`);
  const data = helper.emptyOrRows(rows);
  res.json(data[0]);
  return {
    data,
  };
};

const deleteBlogById = async (req, res) => {
  const result = await db.query(`DELETE FROM blogs WHERE id=${req.query.id};`);
  let message = "Error while deleting blog";
  if (result.affectedRows) {
    message = "blog deleted successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
};

async function create(req, res) {
  const result = await db.query(
    `INSERT INTO blogs (title, description, image) VALUES (?,?,?)`,
    [req.body.title, req.body.description, req.file.filename]
  );

  let message = "Error while creating blog";
  if (result.affectedRows) {
    message = "blog created successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

async function update(req, res) {
  const result = await db.query(
    `UPDATE blogs SET title = ?, image = ?, description = ? WHERE id=${req.query.id}`,
    [req.body.title, req.file.filename, req.body.description]
  );

  let message = "Error while editing the blog";
  if (result.affectedRows) {
    message = "blog updated successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

module.exports = {
  getAllBlogs,
  getBlogByID,
  deleteBlogById,
  create,
  update,
};
