import mongoose, { Document, Schema } from "mongoose";

export interface IPortfolio extends Document {
  platform: string;
  accountName?: string;
  connectedAt: Date;
  credentials: any;
}

export const PortfolioSchema: Schema = new Schema<IPortfolio>(
  {
    platform: { type: String, required: true },
    accountName: { type: String },
    connectedAt: { type: Date, default: Date.now },
    credentials: { type: mongoose.Schema.Types.Mixed },
  },
  { _id: false }
);
