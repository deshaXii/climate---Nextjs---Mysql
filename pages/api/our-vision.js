import {
  addOurVision,
  getOurVision,
  editOurVision,
} from "@/controllers/ourVisionController";
import nc from "next-connect";
import multer from "multer";
import cors from "cors";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(getOurVision);

const uploadMiddleware = upload.any();
handler.use(uploadMiddleware);

handler.put(editOurVision);
handler.post(addOurVision);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
