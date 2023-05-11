import {
  addService,
  getOurServices,
} from "@/controllers/ourServicesController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getOurServices);
handler.post(addService);

export default handler;
