import { getVideoInfo } from "@/controllers/videoController";
import nc from "next-connect";

const handler = nc();

handler.get(getVideoInfo);

export default handler;
