import { setIntro } from "@/controllers/imagesController";
import nc from "next-connect";
import cors from "cors";
import multer from "multer";

const handler = nc();

handler.use(cors({ origin: "*" }));

export default handler;

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, 'climate-' + file.originalname.replace(/\s/g, "")),
  }),
});

const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);

handler.post(setIntro);

export const config = {
  api: {
    bodyParser: false,
  },
};
