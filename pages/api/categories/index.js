import nc from "next-connect";
import cors from "cors";
import {
  getAllCategories,
  addNewCategory,
} from "@/controllers/blogController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAllCategories);
handler.post(addNewCategory);

export default handler;
