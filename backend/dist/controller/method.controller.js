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
exports.deleteMethod = exports.updateMethod = exports.getMethods = exports.createMethod = void 0;
const user_entity_1 = require("../entity/user.entity");
const method_entity_1 = require("../entity/method.entity");
const db_1 = __importDefault(require("../loader/db"));
function createMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { type, name } = req.body;
            const userId = parseInt(req.params.userId); // 로그인한 사용자의 ID
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const user = yield userRepository.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User NOT FOUND');
            }
            const methodRepository = db_1.default.getRepository(method_entity_1.Method);
            const method = yield methodRepository.create({
                user,
                type,
                name,
            });
            yield methodRepository.save(method);
            res.status(200).json(method);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.createMethod = createMethod;
function getMethods(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = parseInt(req.params.userId); // 로그인한 사용자의 ID
            const methodRepository = db_1.default.getRepository(method_entity_1.Method);
            const methods = yield methodRepository.find({
                where: {
                    user: { id: userId }
                },
                order: {
                    id: 'DESC'
                }
            });
            res.status(200).json(methods);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.getMethods = getMethods;
function updateMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.methodId);
            const { type, name } = req.body;
            const userId = parseInt(req.params.userId); // 로그인한 사용자의 ID
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const user = yield userRepository.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User NOT FOUND');
            }
            const methodRepository = db_1.default.getRepository(method_entity_1.Method);
            const method = yield methodRepository.findOne({
                where: {
                    id: id,
                    user: { id: userId },
                }
            });
            if (!method) {
                return res.status(404).send('Method not found');
            }
            method.type = type;
            method.name = name;
            yield methodRepository.save(method);
            res.status(200).json(method);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.updateMethod = updateMethod;
function deleteMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.methodId);
            const userId = parseInt(req.params.userId);
            const userRepository = db_1.default.getRepository(user_entity_1.User);
            const user = yield userRepository.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User NOT FOUND');
            }
            const methodRepository = db_1.default.getRepository(method_entity_1.Method);
            const method = yield methodRepository.findOne({
                where: {
                    id: id,
                    user: { id: userId },
                },
            });
            if (!method) {
                return res.status(404).send('Method NOT FOUND');
            }
            yield methodRepository.remove(method);
            res.status(200).json({ message: 'Method deleted' });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.deleteMethod = deleteMethod;
//# sourceMappingURL=method.controller.js.map