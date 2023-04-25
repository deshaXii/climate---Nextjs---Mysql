import jwt from "jsonwebtoken";

const secretKey = "your-secret-key";

// Generate an authentication token
export const token = jwt.sign({ userId: "user-id" }, secretKey, {
  expiresIn: "30d",
});
