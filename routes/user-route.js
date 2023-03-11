import express from "express";
import { getAlluser,add} from "../controllers/user-controller";
const router = express.Router();


router.get("/",getAlluser);
router.post("/add",add);

export default router;