import User from "../models/User";

export const getUserById = async (userId: string) => {
  const user = await User.findById(userId).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};

export const updateUser = async (userId: string, data: any) => {
  const user = await User.findByIdAndUpdate(userId, data, { new: true }).select(
    "-password"
  );
  if (!user) throw new Error("User not found");
  return user;
};
