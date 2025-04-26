import mongoose, { Schema } from "mongoose";
export const PortfolioSchema = new Schema({
    platform: { type: String, required: true },
    accountName: { type: String },
    connectedAt: { type: Date, default: Date.now },
    credentials: { type: mongoose.Schema.Types.Mixed },
}, { _id: false });
