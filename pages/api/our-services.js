import nc from "next-connect";
import multer from "multer";
import cors from "cors";
import {
  getOurServices,
  addOurServices,
  editOurServices,
} from "@/controllers/ourServicesController";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, 'climate-' + file.originalname.replace(/\s/g, "")),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(getOurServices);
const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);
handler.post(verifyToken, addOurServices);
handler.put(verifyToken, editOurServices);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
