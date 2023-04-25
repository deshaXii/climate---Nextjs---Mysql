const db = require("../db");
const helper = require("../helper");

function setDataArray(req) {
  const { body, files } = req;
  const data = [
    body.first_section_description,
    body.second_section_description,
    body.second_section_image || "",
    body.third_section_description,
    body.third_section_image || "",
    body.fourth_section_description,
    body.fourth_section_image || "",
  ];

  files.forEach((file) => {
    switch (file.fieldname) {
      case "second_section_image":
        data[2] = file.filename;
        break;
      case "third_section_image":
        data[4] = file.filename;
        break;
      case "fourth_section_image":
        data[6] = file.filename;
        break;
    }
  });

  return data;
}

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
    `INSERT INTO vision (first_section_description, second_section_description, second_section_image, third_section_description, third_section_image, fourth_section_description, fourth_section_image) VALUES (?,?,?,?,?,?,?)`,
    setDataArray(req)
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
  const result = await db.query(
    `UPDATE vision SET first_section_description = ?, second_section_description = ?, second_section_image = ?, third_section_description = ?, third_section_image = ?, fourth_section_description = ?, fourth_section_image = ?`,
    setDataArray(req)
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
