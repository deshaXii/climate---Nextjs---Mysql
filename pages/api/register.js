import { addAdmin } from "@/controllers/usersController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.post(addAdmin);

export default handler;
