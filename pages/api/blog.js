import nc from "next-connect";
import { create, getMultiple } from "../../controllers/blogController";
import cors from "cors";

const handler = nc();

app.use(
  cors({
    origin: "https://climate-nextjs-mysql.vercel.app/",
  })
);

handler.get(getMultiple);
handler.post(create);

export default handler;
