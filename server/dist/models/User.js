import mongoose, { Schema } from "mongoose";
import { PortfolioSchema } from "./Portfolio";
const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    portfolios: [PortfolioSchema],
}, {
    timestamps: true,
});
const User = mongoose.model("User", UserSchema);
export default User;
