import nc from "next-connect";
import cors from "cors";
import { getAllPinnedCategories } from "@/controllers/blogController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAllPinnedCategories);

export default handler;
