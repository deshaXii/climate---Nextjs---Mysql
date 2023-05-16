import nc from "next-connect";
import cors from "cors";
import {
  getAllCategories,
  addNewCategory,
} from "@/controllers/blogController";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAllCategories);
handler.post(verifyToken, addNewCategory);

export default handler;
