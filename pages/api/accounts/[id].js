import {
  editAccount,
  getAccount,
  deleteAccount,
} from "@/controllers/usersController";
import nc from "next-connect";
import cors from "cors";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getAccount);
handler.put(verifyToken, editAccount);
handler.delete(verifyToken, deleteAccount);

export default handler;
