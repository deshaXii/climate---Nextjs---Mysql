import { getAllTeam, addMember } from "@/controllers/teamController";
import multer from "multer";
import nc from "next-connect";
import verifyToken from "@/middleware/verifyToken";
import cors from "cors";

const handler = nc();

const upload = multer({
    storage: multer.diskStorage({
      destination: "./public/uploads",
      filename: (req, file, cb) => cb(null, 'climate-' + file.originalname.replace(/\s/g, "")),
    }),
  });

handler.use(cors({ origin: "*" }));

handler.get(getAllTeam);
const uploadMiddleware = upload.single("image");
handler.use(uploadMiddleware);

handler.post(verifyToken, addMember);

export default handler;

export const config = {
    api: {
      bodyParser: false,
    },
  };
  