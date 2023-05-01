import nc from "next-connect";
import cors from "cors";
import { getAllBlogs, create } from "@/controllers/blogController";
import multer from "multer";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(getAllBlogs);

const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);

handler.post(create);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
