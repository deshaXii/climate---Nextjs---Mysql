import {
  addService,
  getOurServices,
} from "@/controllers/ourServicesController";
import nc from "next-connect";
import cors from "cors";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getOurServices);
handler.post(verifyToken, addService);

export default handler;