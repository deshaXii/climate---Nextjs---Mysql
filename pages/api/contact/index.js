import { sendMessage, getMessages } from "@/controllers/contactController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.post(sendMessage);
handler.get(getMessages);

export default handler;
