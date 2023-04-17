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
exports.deleteUser = exports.getUser = exports.loginUser = exports.createUser = void 0;
const user_entity_1 = require("../entity/user.entity");
const db_1 = __importDefault(require("../loader/db"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const userInput = req.body;
            const newUser = userRepository.create(userInput);
            yield userRepository.save(newUser);
            res.status(200).json(newUser);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.createUser = createUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const { email, pw } = req.body;
            const user = yield userRepository.findOne({
                where: {
                    email: email,
                    pw: pw
                }
            });
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(401).send('Invalid email or password');
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.loginUser = loginUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const id = parseInt(req.params.userId);
            const user = yield userRepository.findOne({
                where: { id: id }
            });
            if (user) {
                res.status(200).json({
                    id: id,
                    email: user.email,
                });
            }
            else {
                res.status(404).send('User NOT FOUND');
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.getUser = getUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const id = parseInt(req.params.userId);
            const user = yield userRepository.findOne({
                where: { id: id }
            });
            if (user) {
                yield userRepository.remove(user);
                res.status(200).json({
                    id: id,
                    email: user.email,
                });
            }
            else {
                res.status(404).send('User NOT FOUND');
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map