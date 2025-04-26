import User from "../models/User";
import bcrypt from "bcryptjs";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return user;
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  return user;
};
