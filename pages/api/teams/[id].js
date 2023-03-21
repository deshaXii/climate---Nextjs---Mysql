import nc from "next-connect";

import cors from "cors";
import { showMember, deleteMember, editMember } from "@/controllers/teamController";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(showMember);
handler.put(editMember);
handler.delete(deleteMember);

export default handler;
