const db = require("../db");
const helper = require("../helper");
const config = require("../config");

const getAllBlogs = async (req, res) => {
  // const offset = helper.getOffset(1, config.listPerPage);
  // const rows = await db.query(
  //   `SELECT * FROM blogs LIMIT ${config.listPerPage} OFFSET ${offset}`
  // );
  const rows =
    await db.query(`SELECT b.id, b.title, b.image, b.description, b.time,
  GROUP_CONCAT(c.id SEPARATOR ', ') AS category_ids,
  GROUP_CONCAT(c.name SEPARATOR ', ') AS category_names
FROM blogs b
JOIN blog_category bc ON bc.blog_id = b.id
JOIN categories c ON c.id = bc.category_id
GROUP BY b.id;`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const getBlogsByCategory = async (req, res) => {
  const rows = await db.query(`SELECT b.*
    FROM blogs b
    JOIN blog_category bc ON bc.blog_id = b.id
    JOIN categories c ON c.id = bc.category_id
    WHERE c.id = ${req.query.id};`);
  const data = helper.emptyOrRows(rows);
  console.log(data);
  res.json(data);
  return {
    data,
  };
};

const getAllCategories = async (req, res) => {
  const rows = await db.query(`SELECT * FROM categories`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const getAllPinnedCategories = async (req, res) => {
  const rows = await db.query(`SELECT * FROM categories WHERE pinned = 1`);
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

const getCategory = async (req, res) => {
  const rows = await db.query(
    `SELECT * FROM categories WHERE id = ${req.query.id}`
  );
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

const deleteCategory = async (req, res) => {
  const result = await db.query(
    `DELETE FROM categories WHERE id=${req.query.id};`
  );
  let message = "Error while deleting category";
  if (result.affectedRows) {
    message = "category deleted successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
};

async function create(req, res) {
  try {
    if (!req.file || req.file.fieldname !== "image") {
      res.json({ message: "Please upload an image file", status: "error" });
      return { message: "Please upload an image file" };
    }
    const result1 = await db.query(
      "INSERT INTO blogs (title, description, image, time) VALUES (?, ?, ?, ?)",
      [req.body.title, req.body.description, req.file.filename, new Date()]
    );

    const blogId = result1.insertId;

    // Insert categories into the 'blog_category' table
    const result2 = await db.query(
      "INSERT INTO blog_category (blog_id, category_id) SELECT ?, id FROM categories WHERE id IN (" +
        req.body.selectedCategories.join() +
        ")",
      [blogId]
    );

    let message = "Error while creating blog";
    if (result1.affectedRows && result2.affectedRows) {
      message = "Blog created successfully";
    }
    res.json({ message, status: "success" });
    return { message };
  } catch (error) {
    console.error(error);
    res.json({ message: "Error while creating blog", status: "error" });
    return { message: "Error while creating blog" };
  }
}

async function addNewCategory(req, res) {
  const result = await db.query(`INSERT INTO categories (name) VALUES (?)`, [
    req.body.name,
  ]);

  let message = "Error while creating category";
  if (result.affectedRows) {
    message = "category created successfully";
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

async function editCategory(req, res) {
  const result = await db.query(
    `UPDATE categories SET name = ? WHERE id=${req.query.id}`,
    [req.body.name]
  );

  let message = "Error while updating the category";
  if (result.affectedRows) {
    message = "Category updated successfully";
  }
  res.json({ message, status: "success" });
  return {
    message,
  };
}

async function pinCategory(req, res) {
  const result = await db.query(
    `UPDATE categories SET pinned = ? WHERE id=${req.query.id}`,
    [req.body.isPinned]
  );

  let message = "Error while Pinnding the category";
  if (result.affectedRows) {
    message = `Category ${
      req.body.isPinned ? "added to" : "removed from"
    } Nav successfully`;
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
  getBlogsByCategory,
  update,
  getAllPinnedCategories,
  editCategory,
  pinCategory,
  getCategory,
  getAllCategories,
  deleteCategory,
  addNewCategory,
};
