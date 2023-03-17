import { getAllTeam } from "@/controllers/teamController";
import nc from "next-connect";

import cors from "cors";

const handler = nc();

app.use(
  cors({
    origin: "https://climate-nextjs-mysql.vercel.app/",
  })
);
handler.get(getAllTeam);

export default handler;
