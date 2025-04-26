import * as authService from "../services/authServie";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../types";
import User from "../models/User";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const { user, token } = await authService.register(name, email, password);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getCurrentUser = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ user });
  } catch (error: any) {
    console.error("Failed to fetch user:", error);
    res.status(400).json({ message: "Failed to fetch user" });
  }
};

export const logout = (req: Request, res: Response) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error: any) {
    res.status(400).json({ message: "Logout failed" });
  }
};
