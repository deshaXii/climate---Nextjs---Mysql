import { getAllAccounts, addAccount } from "@/controllers/usersController";
import nc from "next-connect";
import cors from "cors";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAllAccounts);
handler.post(verifyToken, addAccount);

export default handler;
