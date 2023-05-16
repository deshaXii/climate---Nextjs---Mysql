import nc from "next-connect";
import cors from "cors";
import { getBlogsByCategory, deleteCategory } from "@/controllers/blogController";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getBlogsByCategory);
handler.delete(verifyToken, deleteCategory);

export default handler;
