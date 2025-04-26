import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import feedbackRoutes from "./routes/feedbackRoutes";
import authRoutes from "./routes/authRoutes";
import portfolioRoutes from "./routes/portfolioRoutes";
import userRoutes from "./routes/userRoutes";
import cookieParser from "cookie-parser";

dotenv.config({ path: ".env.local" });

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/crypto_analyze";

// ROUTES
app.use("/feedbacks", feedbackRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/portfolio", portfolioRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running 🚀");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });
