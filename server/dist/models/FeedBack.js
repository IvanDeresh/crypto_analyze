import mongoose from "mongoose";
const FeedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    text: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const Feedback = mongoose.model("Feedback", FeedbackSchema);
export default Feedback;
