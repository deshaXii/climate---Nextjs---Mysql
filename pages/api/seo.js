import { addSeo, getSeo, editSeo } from "@/controllers/seoController";
import nc from "next-connect";
import verifyToken from "@/middleware/verifyToken";

import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getSeo);
handler.put(verifyToken, editSeo);
handler.post(verifyToken, addSeo);

export default handler;
