import nc from "next-connect";
import cors from "cors";
import {
  getCategory,
  editCategory,
  pinCategory,
} from "@/controllers/blogController";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getCategory);
handler.post(pinCategory);
handler.put(verifyToken, editCategory);

export default handler;
