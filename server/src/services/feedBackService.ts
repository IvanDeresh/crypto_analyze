import Feedback from "../models/FeedBack";
import mongoose from "mongoose";

export const createFeedback = async (userId: string, text: string) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid user ID");
  }

  if (!text) {
    throw new Error("Feedback text is required");
  }

  const feedback = new Feedback({ userId, text });
  return await feedback.save();
};

export const updateFeedback = async (feedbackId: string, text: string) => {
  if (!text) {
    throw new Error("Feedback text is required");
  }

  const feedback = await Feedback.findById(feedbackId);
  if (!feedback) {
    throw new Error("Feedback not found");
  }

  feedback.text = text;
  feedback.updatedAt = new Date();
  return await feedback.save();
};

export const deleteFeedback = async (feedbackId: string) => {
  const feedback = await Feedback.findById(feedbackId);
  if (!feedback) {
    throw new Error("Feedback not found");
  }

  await feedback.deleteOne();
};

export const getFeedbackByUser = async (userId: string) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid user ID");
  }

  return await Feedback.find({ userId }).sort({ createdAt: -1 });
};
