import { setCookie } from "@/helpers/cookies";

const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.cookies.userToken;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (err) {
    setCookie(res, "userToken", null, {
      httpOnly: true,
      maxAge: 3600,
      path: "/",
    });
    return res.status(401).json({ message: "Unauthorized" });
  }
}

export default verifyToken;
