import {
  addSiteInformation,
  getSiteInformation,
  editSiteInformation,
} from "@/controllers/siteInformationController";
import nc from "next-connect";

import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getSiteInformation);
handler.put(editSiteInformation);
handler.post(addSiteInformation);

export default handler;
