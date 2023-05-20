import {
  addOurVision,
  getOurVision,
  editOurVision,
} from "@/controllers/ourVisionController";
import nc from "next-connect";
import multer from "multer";
import cors from "cors";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, 'climate-' + file.originalname.replace(/\s/g, "")),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(getOurVision);

const uploadMiddleware = upload.any();
handler.use(uploadMiddleware);

handler.put(verifyToken, editOurVision);
handler.post(verifyToken, addOurVision);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
