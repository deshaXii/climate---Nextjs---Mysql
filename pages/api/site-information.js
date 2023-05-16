import {
  addSiteInformation,
  getSiteInformation,
  editSiteInformation,
} from "@/controllers/siteInformationController";
import nc from "next-connect";
import verifyToken from "@/middleware/verifyToken";

import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getSiteInformation);
handler.put(verifyToken, editSiteInformation);
handler.post(verifyToken, addSiteInformation);

export default handler;
