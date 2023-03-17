import { sendMessage } from "@/controllers/contactController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

app.use(
  cors({
    origin: "https://climate-nextjs-mysql.vercel.app/",
  })
);
handler.post(sendMessage);

export default handler;
