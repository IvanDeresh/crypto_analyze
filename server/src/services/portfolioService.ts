import User from "../models/User";

export const addPortfolio = async (userId: string, portfolioData: any) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.portfolios.push(portfolioData);
  await user.save();
  return user.portfolios;
};

export const removePortfolio = async (userId: string, platform: string) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.portfolios = user.portfolios.filter((p: any) => p.platform !== platform);
  await user.save();
  return user.portfolios;
};

export const getUserPortfolios = async (userId: string) => {
  const user = await User.findById(userId).select("portfolios");
  if (!user) throw new Error("User not found");

  return user.portfolios;
};
