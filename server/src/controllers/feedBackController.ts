import { Request, Response } from "express";
import * as feedbackService from "../services/feedBackService";

export const createFeedback = async (req: Request, res: Response) => {
  try {
    const { userId, text } = req.body;
    const feedback = await feedbackService.createFeedback(userId, text);
    res
      .status(201)
      .json({ message: "Feedback created successfully", feedback });
  } catch (error: any) {
    console.error("Error creating feedback:", error);
    res.status(400).json({ message: error.message });
  }
};

export const updateFeedback = async (req: Request, res: Response) => {
  try {
    const { feedbackId, text } = req.body;
    const updatedFeedback = await feedbackService.updateFeedback(
      feedbackId,
      text
    );
    res
      .status(200)
      .json({
        message: "Feedback updated successfully",
        feedback: updatedFeedback,
      });
  } catch (error: any) {
    console.error("Error updating feedback:", error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteFeedback = async (req: Request, res: Response) => {
  try {
    const { feedbackId } = req.params;
    await feedbackService.deleteFeedback(feedbackId);
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting feedback:", error);
    res.status(400).json({ message: error.message });
  }
};

export const getFeedbackByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const feedbacks = await feedbackService.getFeedbackByUser(userId);
    res.status(200).json({ feedbacks });
  } catch (error: any) {
    console.error("Error retrieving feedback:", error);
    res.status(400).json({ message: error.message });
  }
};
