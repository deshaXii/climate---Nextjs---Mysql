import {
  editService,
  deleteService,
  getService,
} from "@/controllers/ourServicesController";
import nc from "next-connect";
import cors from "cors";

const handler = nc();

handler.use(cors({ origin: "*" }));

handler.get(getService);
handler.delete(deleteService);

handler.put(editService);

export default handler;
