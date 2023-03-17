import { getAllTeam } from "@/controllers/teamController";
import nc from "next-connect";

const handler = nc();

handler.get(getAllTeam);

export default handler;
