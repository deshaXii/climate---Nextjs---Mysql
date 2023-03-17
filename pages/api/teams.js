import { getAllTeam } from "@/controllers/teamController";
import nc from "next-connect";

import cors from "cors";

const handler = nc();

handler.use(
  cors({
    origin: "*",
  })
);
handler.get(getAllTeam);

export default handler;
