import nc from "next-connect";
import cors from "cors";
import { getBlogsByCategory, deleteCategory } from "@/controllers/blogController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getBlogsByCategory);
handler.delete(deleteCategory);

export default handler;
