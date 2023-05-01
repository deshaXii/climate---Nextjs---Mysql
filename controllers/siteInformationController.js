const db = require("../db");
const helper = require("../helper");

const getSiteInformation = async (req, res) => {
  const rows = await db.query(`SELECT * FROM information`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

async function addSiteInformation(req, res) {
  const result = await db.query(
    `INSERT INTO information (description, email, video_url, address, map_url, phone, facebook, instagram, twitter, linkedin) VALUES (?,?,?,?,?,?,?,?,?)`,
    [
      req.body.description,
      req.body.email,
      req.body.video_url,
      req.body.address,
      req.body.map_url,
      req.body.phone,
      req.body.facebook,
      req.body.instagram,
      req.body.twitter,
      req.body.linkedin,
    ]
  );

  let message = "Error while adding site information";
  if (result.affectedRows) {
    message = "site information created successfully";
  }
  res.send(message);
  return {
    message,
  };
}

async function editSiteInformation(req, res) {
  const result = await db.query(
    `UPDATE information SET description = ?, email = ?, video_url = ?, address = ?, map_url = ?, phone = ?, facebook = ?, instagram = ?, twitter = ?, linkedin = ?`,
    [
      req.body.description,
      req.body.email,
      req.body.video_url,
      req.body.address,
      req.body.map_url,
      req.body.phone,
      req.body.facebook,
      req.body.instagram,
      req.body.twitter,
      req.body.linkedin,
    ]
  );

  let message = "Error While update site information";
  if (result.affectedRows) {
    message = "site information updated successfully";
  }
  res.json({ message, status: "success", result });
  return {
    message,
  };
}

module.exports = {
  addSiteInformation,
  getSiteInformation,
  editSiteInformation,
};
