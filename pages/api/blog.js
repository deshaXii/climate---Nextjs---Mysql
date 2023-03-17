import nc from "next-connect";
import { create, getMultiple } from "../../controllers/blogController";
import cors from "cors";

const handler = nc();

handler.use(
  cors({
    origin: "*",
  })
);

handler.get(getMultiple);
handler.post(create);

export default handler;
