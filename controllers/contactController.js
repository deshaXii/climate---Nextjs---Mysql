const db = require("../db");

const sendMessage = async (req, res) => {
  const result = await db.query(
    `INSERT INTO contacts (name, email, message) VALUES (?,?,?)`,
    [req.body.name, req.body.email, req.body.message]
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

module.exports = {
  sendMessage,
};
