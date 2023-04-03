import { getVideoInfo } from "@/controllers/videoController";
import nc from "next-connect";

import cors from "cors";

const handler = nc({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
});

handler.use(cors({ origin: "*" }));

handler.get(getVideoInfo);

export default handler;
