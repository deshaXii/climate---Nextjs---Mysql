import { sendMessage } from "@/controllers/contactController";
import nc from "next-connect";

const handler = nc();

handler.post(sendMessage);

export default handler;
