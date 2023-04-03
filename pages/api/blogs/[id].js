import nc from "next-connect";
import cors from "cors";
import {
  getBlogByID,
  deleteBlogById,
  update,
} from "@/controllers/blogController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getBlogByID);
handler.put(update);
handler.delete(deleteBlogById);
export default handler;
