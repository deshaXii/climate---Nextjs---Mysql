import { addSeo, getSeo, editSeo } from "@/controllers/seoController";
import nc from "next-connect";

import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getSeo);
handler.put(editSeo);
handler.post(addSeo);

export default handler;
