import {
  editService,
  deleteService,
  getService,
} from "@/controllers/ourServicesController";
import nc from "next-connect";
import cors from "cors";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getService);
handler.delete(verifyToken, deleteService);

handler.put(verifyToken, editService);

export default handler;
