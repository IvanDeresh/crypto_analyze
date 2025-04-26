var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as portfolioService from "../services/portfolioService";
export const addPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const portfolio = yield portfolioService.addPortfolio(userId, req.body);
        res.status(201).json(portfolio);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
export const removePortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { platform } = req.body;
        const portfolios = yield portfolioService.removePortfolio(userId, platform);
        res.json(portfolios);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
export const getPortfolios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const portfolios = yield portfolioService.getUserPortfolios(userId);
        res.json(portfolios);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
