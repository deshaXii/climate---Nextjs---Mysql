import { loginAdmin } from "@/controllers/usersController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.post(loginAdmin);

export default handler;
