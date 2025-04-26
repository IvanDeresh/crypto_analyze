import { Router } from "express";
import * as userController from "../controllers/userController";
const router = Router();
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
export default router;
