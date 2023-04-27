const db = require("../db");
import { setCookie } from "@/helpers/cookies";
import bcrypt from "bcrypt";
import helper from "../helper";
import jwt from "jsonwebtoken";

const loginAdmin = async (req, res) => {
  const rows = await db.query(`SELECT * FROM admins`);
  const data = helper.emptyOrRows(rows);

  const emailFound = data.filter((item) => {
    if (item.email === req.body.email) {
      return item;
    }
  });
  const isMatch = bcrypt.compareSync(req.body.password, emailFound[0].password);

  const loginValidation = () => {
    return new Promise(async (resolve, reject) => {
      if (req.body.email == "" || req.body.password == "") {
        reject("Please fill all fields");
      }
      if (emailFound && isMatch) {
        const token = jwt.sign(
          {
            id: emailFound.id,
            name: emailFound.name,
            email: emailFound.email,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: 60 * 60 * 24 * 14,
          }
        );
        emailFound.password = undefined;
        setCookie(res, "userToken", token, {
          httpOnly: true,
          maxAge: 3600,
          path: "/",
        });
        resolve({
          status: "sucsses",
          message: "You have been logged in",
          token: token,
          userData: emailFound,
        });
      } else if (emailFound) {
        reject("The password is incorrect");
      } else {
        console.log("email is not founded");
        reject("Email not found");
      }
    });
  };
  loginValidation()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

module.exports = {
  loginAdmin,
};
