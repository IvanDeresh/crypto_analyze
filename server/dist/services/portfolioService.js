var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/User";
export const addPortfolio = (userId, portfolioData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(userId);
    if (!user)
        throw new Error("User not found");
    user.portfolios.push(portfolioData);
    yield user.save();
    return user.portfolios;
});
export const removePortfolio = (userId, platform) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(userId);
    if (!user)
        throw new Error("User not found");
    user.portfolios = user.portfolios.filter((p) => p.platform !== platform);
    yield user.save();
    return user.portfolios;
});
export const getUserPortfolios = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(userId).select("portfolios");
    if (!user)
        throw new Error("User not found");
    return user.portfolios;
});
