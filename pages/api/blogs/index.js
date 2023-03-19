import nc from "next-connect";
import cors from "cors";
import { getAllBlogs, getBlogByID, create } from "@/controllers/blogController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAllBlogs);
handler.get(getBlogByID);
handler.post(create);

export default handler;
