const db = require("../db");
const helper = require("../helper");

const sendMessage = async (req, res) => {
  const result = await db.query(
    `INSERT INTO contacts (name, email, phone, message) VALUES (?,?,?,?)`,
    [req.body.name, req.body.email, req.body.phone, req.body.message]
  );

  let message = "Error while sending message to contact";
  if (result.affectedRows) {
    message = "Contact message sent successfully";
  }
  res.send({ message, statues: "success" });
  return {
    message,
  };
};

const getMessages = async (req, res) => {
  const rows = await db.query(`SELECT * FROM contacts`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

module.exports = {
  sendMessage,
  getMessages,
};
