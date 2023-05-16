import { deleteMessageById } from "@/controllers/contactController";
import nc from "next-connect";
import cors from "cors";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.delete(verifyToken, deleteMessageById);

export default handler;
