import mongoose, { Document, Schema } from "mongoose";
import { IPortfolio, PortfolioSchema } from "./Portfolio";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  portfolios: IPortfolio[];
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    portfolios: [PortfolioSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
