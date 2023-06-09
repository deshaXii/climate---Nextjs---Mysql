const db = require("../db");
const helper = require("../helper");
const config = require("../config");
const slugify = require("slugify");

const getAllBlogs = async (req, res) => {
  const rows =
    await db.query(`SELECT b.id, b.title, b.image, b.description, b.time, b.slug,
  GROUP_CONCAT(c.id SEPARATOR ', ') AS category_ids,
  GROUP_CONCAT(c.name SEPARATOR ', ') AS category_names
  FROM blogs b
  JOIN blog_category bc ON bc.blog_id = b.id
  JOIN categories c ON c.id = bc.category_id
  WHERE c.name != 'services'
  GROUP BY b.id;`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const getBlogsByCategory = async (req, res) => {
  const rows = await db.query(
    `SELECT b.*
    FROM blogs b
    JOIN blog_category bc ON bc.blog_id = b.id
    JOIN categories c ON c.id = bc.category_id
    WHERE c.slug = ?;`,
    [req.query.slug]
  );
  const data = helper.emptyOrRows(rows);
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
  let query = `SELECT * FROM blogs WHERE slug = ?`;
  const rows = await db.query(query, [req.query.slug]);
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
  const result = await db.query(`DELETE FROM blogs WHERE slug = ?;`, [
    req.query.slug,
  ]);
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
    `DELETE FROM categories WHERE slug=${req.query.slug};`
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

    const slug = slugify(req.body.title, {
      lower: true,
      strict: true,
    });

    let uniqueSlug = slug;
    let counter = 1;

    while (true) {
      const rows = await db.query("SELECT * FROM blogs WHERE slug = ?", [
        uniqueSlug,
      ]);
      if (rows.length === 0) {
        break;
      }
      counter++;
      uniqueSlug = `${slug}-${counter}`;
    }

    const query =
      "INSERT INTO blogs (title, description, image, time, slug) VALUES (?, ?, ?, ?, ?)";
    const result1 = await db.query(query, [
      req.body.title,
      req.body.description,
      req.file.filename,
      new Date(),
      uniqueSlug,
    ]);

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
  const slug = slugify(req.body.name, {
    lower: true,
    strict: true,
  });

  let uniqueSlug = slug;
  let counter = 1;

  while (true) {
    const rows = await db.query("SELECT * FROM categories WHERE slug = ?", [
      uniqueSlug,
    ]);
    if (rows.length === 0) {
      break;
    }
    counter++;
    uniqueSlug = `${slug}-${counter}`;
  }

  const query = "INSERT INTO categories (name, slug) VALUES (?, ?)";
  const result = await db.query(query, [req.body.name, uniqueSlug]);

  let message = "Error while creating category";
  if (result.affectedRows) {
    message = "category created successfully";
  }
  res.json({ message, status: "success" });
}

async function update(req, res) {
  try {
    const blog = await db.query("SELECT * FROM blogs WHERE id = ?", [
      req.query.slug,
    ]);

    const existingSlug = blog[0].slug;
    const newTitle = req.body.title;
    const newSlug = slugify(newTitle, {
      lower: true,
      strict: true,
    });

    let uniqueSlug = newSlug;

    // Check if title has been updated before generating a new uniqueSlug
    if (newTitle !== blog[0].title) {
      let counter = 1;
      while (true) {
        const rows = await db.query("SELECT * FROM blogs WHERE slug = ?", [
          uniqueSlug,
        ]);
        if (rows.length === 0) {
          break;
        }
        counter++;
        uniqueSlug = `${newSlug}-${counter}`;
      }
    }

    const result1 = await db.query(
      `UPDATE blogs SET title = ?, description = ?, image = ?, slug = ? WHERE id = ${req.query.slug}`,
      [
        req.body.title,
        req.body.description,
        req.file ? req.file.filename : req.body.image,
        uniqueSlug,
      ]
    );

    // Delete all existing rows for this blog_id
    await db.query("DELETE FROM blog_category WHERE blog_id = ?", [
      req.query.slug,
    ]);

    // Insert categories into the 'blog_category' table
    const result2 = await db.query(
      "INSERT INTO blog_category (blog_id, category_id) SELECT ?, id FROM categories WHERE id IN (" +
        req.body.selectedCategories.join() +
        ")",
      [req.query.slug]
    );

    let message = "Error while creating blog";
    if (result1.affectedRows && result2.affectedRows) {
      message = "Blog updated successfully";
    }
    res.json({ message, status: "success" });
    return { message };
  } catch (error) {
    console.error(error);
    res.json({ message: "Error while updated blog", status: "error" });
    return { message: "Error while updated blog" };
  }
}

async function editCategory(req, res) {
  const slug = slugify(req.body.name, {
    lower: true,
    strict: true,
  });

  let uniqueSlug = slug;
  let counter = 1;

  while (true) {
    const rows = await db.query("SELECT * FROM categories WHERE slug = ?", [
      uniqueSlug,
    ]);
    if (rows.length === 0) {
      break;
    }
    counter++;
    uniqueSlug = `${slug}-${counter}`;
  }

  const result = await db.query(
    `UPDATE categories SET name = ?, slug = ? WHERE id=${req.query.id}`,
    [req.body.name, uniqueSlug]
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
