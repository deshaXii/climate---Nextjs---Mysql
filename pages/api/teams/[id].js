import nc from "next-connect";
import multer from "multer";
import cors from "cors";
import {
  showMember,
  deleteMember,
  editMember,
} from "@/controllers/teamController";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(showMember);
handler.delete(deleteMember);
const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);
handler.put(editMember);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
