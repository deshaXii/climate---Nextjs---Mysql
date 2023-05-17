import { getAllImages } from "@/controllers/imagesController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAllImages);

export default handler;
