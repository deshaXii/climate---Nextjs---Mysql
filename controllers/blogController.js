const db = require("../db");
const helper = require("../helper");
const config = require("../config");

const getAllBlogs = async (req, res) => {
  // const offset = helper.getOffset(1, config.listPerPage);
  const rows = await db.query(`SELECT * FROM blogs`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const getBlogByID = async (req, res) => {
  // const offset = helper.getOffset(1, config.listPerPage);
  const rows = await db.query(`SELECT * FROM blogs WHERE id = ${req.query.id}`);
  const data = helper.emptyOrRows(rows);
  res.json(data[0]);
  return {
    data,
  };
};

const deleteBlogById = async (req, res) => {
  const result = await db.query(`DELETE FROM blogs WHERE id=${req.query.id};`);
  let message = "Error in deleting blog";
  if (result.affectedRows) {
    message = "blog deleted successfully";
  }
  res.send(message);
  return {
    message,
  };
};

async function create(req, res) {
  const result = await db.query(
    `INSERT INTO blogs (title, description, time) VALUES (?,?,?)`,
    [req.body.title, req.body.description, req.body.time]
  );

  let message = "Error in creating blogs";
  if (result.affectedRows) {
    message = "blogs created successfully";
  }
  res.send(message);
  return {
    message,
  };
}

async function update(req, res) {
  const result = await db.query(
    `UPDATE blogs SET title = ?, image = ?, description = ? WHERE id=${req.query.id}`,
    [req.body.title, req.body.image, req.body.description]
  );

  let message = "Error in edit blog item";
  if (result.affectedRows) {
    message = "blog item info updated successfully";
  }
  res.send(message);
  return {
    message,
  };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM blogs WHERE id=${id}`);

  let message = "Error in deleting blogs";

  if (result.affectedRows) {
    message = "blogs deleted successfully";
  }

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
  remove,
};
