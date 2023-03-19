import { getVideoInfo } from "@/controllers/videoController";
import nc from "next-connect";

import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getVideoInfo);

export default handler;
