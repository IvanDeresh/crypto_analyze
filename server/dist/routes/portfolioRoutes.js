import { Router } from "express";
import * as portfolioController from "../controllers/portfolioController";
const router = Router();
router.post("/:userId", portfolioController.addPortfolio);
router.delete("/:userId", portfolioController.removePortfolio);
router.get("/:userId", portfolioController.getPortfolios);
export default router;
