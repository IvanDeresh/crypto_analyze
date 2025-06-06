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
export const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(userId).select("-password");
    if (!user)
        throw new Error("User not found");
    return user;
});
export const updateUser = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findByIdAndUpdate(userId, data, { new: true }).select("-password");
    if (!user)
        throw new Error("User not found");
    return user;
});
