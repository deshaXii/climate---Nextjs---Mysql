const db = require("../db");
const helper = require("../helper");

const getOurVision = async (req, res) => {
  const rows = await db.query(`SELECT * FROM vision`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

async function addOurVision(req, res) {
  const result = await db.query(
    `INSERT INTO vision (first_section_title, first_section_description, first_section_advice, first_section_image, second_section_title, second_section_description, second_section_image) VALUES (?,?,?,?,?,?,?)`,
    [
      req.body.first_section_title,
      req.body.first_section_description,
      req.body.first_section_advice,
      req.files[0].filename,
      req.body.second_section_title,
      req.body.second_section_description,
      req.files[1].filename,
    ]
  );
  let message = "Error while adding site vision";
  if (result.affectedRows) {
    message = "site vision created successfully";
  }
  res.send(message);
  return {
    message,
  };
}

async function editOurVision(req, res) {
  console.log(req.files.length);
  // 0 && fieldname == 'first_section_image'
  // 1 && fieldname == 'second_section_image'
  console.log(req.files);
  const result = await db.query(
    `UPDATE vision SET first_section_title = ?, first_section_description = ?, first_section_advice = ?, first_section_image = ?, second_section_title = ?, second_section_description = ?, second_section_image = ?`,
    [
      req.body.first_section_title,
      req.body.first_section_description,
      req.body.first_section_advice,
      req.files.length >= 1 && req.files[0].fieldname === "first_section_image"
        ? req.files[0].filename
        : req.body.first_section_image,
      req.body.second_section_title,
      req.body.second_section_description,
      req.files.length ? req.files[1].filename : req.body.second_section_image,
    ]
  );

  let message = "Error While update site vision";
  if (result.affectedRows) {
    message = "site vision updated successfully";
  }
  res.send(result);
  return {
    message,
  };
}

module.exports = {
  addOurVision,
  getOurVision,
  editOurVision,
};
