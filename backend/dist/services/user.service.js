"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userModel = new user_model_1.default({
            name: user.name,
            id: user.id,
            pw: user.pw
        });
        yield userModel.save();
        return {
            _id: userModel.id
        };
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const findUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userModel = yield user_model_1.default.findById(userId);
        if (!userModel)
            return null;
        return userModel;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const updateUser = (userId, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.findByIdAndUpdate(userId, user);
        const userModel = yield findUserById(userId);
        if (!userModel)
            return null;
        return userModel;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userModel = yield user_model_1.default.findByIdAndDelete(userId);
        if (!userModel)
            return null;
        return userModel;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = {
    createUser,
    findUserById,
    updateUser,
    deleteUser
};
//# sourceMappingURL=user.service.js.map