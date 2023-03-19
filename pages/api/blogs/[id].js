import nc from "next-connect";
import cors from "cors";
import { getBlogByID } from "@/controllers/blogController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getBlogByID);

export default handler;
