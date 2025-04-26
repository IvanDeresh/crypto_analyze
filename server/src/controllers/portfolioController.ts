import * as portfolioService from "../services/portfolioService";
import { Request, Response } from "express";

export const addPortfolio = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const portfolio = await portfolioService.addPortfolio(userId, req.body);
    res.status(201).json(portfolio);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const removePortfolio = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { platform } = req.body;
    const portfolios = await portfolioService.removePortfolio(userId, platform);
    res.json(portfolios);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getPortfolios = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const portfolios = await portfolioService.getUserPortfolios(userId);
    res.json(portfolios);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
