import {
  createFeedback,
  updateFeedback,
  deleteFeedback,
  getFeedbackByUser,
} from "../controllers/feedBackController";
import { Router } from "express";
const router = Router();

router.post("/", createFeedback);
router.put("/", updateFeedback);
router.delete("/:feedbackId", deleteFeedback);
router.get("/:userId", getFeedbackByUser);

export default router;
