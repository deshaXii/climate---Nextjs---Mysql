import nc from "next-connect";
import multer from "multer";
import cors from "cors";
import {
  showMember,
  deleteMember,
  editMember,
} from "@/controllers/teamController";
import verifyToken from "@/middleware/verifyToken";

const handler = nc();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, 'climate-' + file.originalname.replace(/\s/g, "")),
  }),
});

handler.use(cors({ origin: "*" }));

handler.get(showMember);
handler.delete(verifyToken, deleteMember);
const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);
handler.put(verifyToken, editMember);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
