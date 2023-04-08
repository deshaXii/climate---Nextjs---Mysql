import nc from "next-connect";
import cors from "cors";
import {
  getBlogByID,
  deleteBlogById,
  update,
} from "@/controllers/blogController";
import multer from "multer";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(getBlogByID);
handler.delete(deleteBlogById);

const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);

handler.put(update);
export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
