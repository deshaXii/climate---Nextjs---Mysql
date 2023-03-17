import nc from "next-connect";
import { create, getMultiple } from "../../controllers/blogController";

const handler = nc();

console.log(handler);

handler.get(getMultiple);
handler.post(create);

export default handler;
