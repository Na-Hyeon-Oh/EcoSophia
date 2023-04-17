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
exports.deleteHistory = exports.updateHistory = exports.getHistories = exports.createHistory = void 0;
const entity_1 = require("../entity");
const db_1 = __importDefault(require("../loader/db"));
function createHistory(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { date, methodId, content, cost, tags } = req.body;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // 로그인한 사용자의 ID
            const userRepository = db_1.default.getRepository(entity_1.User);
            const user = yield userRepository.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User NOT FOUND');
            }
            const methodRepository = db_1.default.getRepository(entity_1.Method);
            const method = yield methodRepository.findOne({
                where: {
                    id: methodId,
                    user: { id: userId },
                }
            });
            if (!method) {
                return res.status(404).send('Method NOT FOUND');
            }
            const historyRepository = db_1.default.getRepository(entity_1.History);
            const history = yield historyRepository.create({
                user,
                date,
                method,
                content,
                cost,
                tags
            });
            yield historyRepository.save(history);
            res.status(200).json(history);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.createHistory = createHistory;
function getHistories(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // 로그인한 사용자의 ID
            const historyRepository = db_1.default.getRepository(entity_1.History);
            const histories = yield historyRepository.find({
                where: {
                    user: { id: userId }
                },
                relations: ['method'],
                order: {
                    date: 'DESC'
                }
            });
            res.status(200).json(histories);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.getHistories = getHistories;
function updateHistory(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.historyId;
            const { date, methodId, content, cost, tags } = req.body;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // 로그인한 사용자의 ID
            const userRepository = db_1.default.getRepository(entity_1.User);
            const user = yield userRepository.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User NOT FOUND');
            }
            const historyRepository = db_1.default.getRepository(entity_1.History);
            const history = yield historyRepository.findOne({
                where: {
                    id: parseInt(id),
                    user: { id: userId },
                },
                relations: ['method'],
            });
            if (!history) {
                return res.status(404).send('History NOT FOUND');
            }
            const methodRepository = db_1.default.getRepository(entity_1.Method);
            const method = yield methodRepository.findOne({
                where: {
                    id: methodId,
                    user: { id: userId },
                }
            });
            if (!method) {
                return res.status(404).send('Method not found');
            }
            history.date = date;
            history.method = method;
            history.content = content;
            history.cost = cost;
            history.tags = tags;
            yield historyRepository.save(history);
            res.status(200).json(history);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.updateHistory = updateHistory;
function deleteHistory(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.historyId;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            const userRepository = db_1.default.getRepository(entity_1.User);
            const user = yield userRepository.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User NOT FOUND');
            }
            const historyRepository = db_1.default.getRepository(entity_1.History);
            const history = yield historyRepository.findOne({
                where: {
                    id: parseInt(id),
                    user: { id: userId },
                },
                relations: ['method'],
            });
            if (!history) {
                return res.status(404).send('History NOT FOUND');
            }
            yield historyRepository.remove(history);
            res.status(200).json({ message: 'History deleted' });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    });
}
exports.deleteHistory = deleteHistory;
//# sourceMappingURL=history.controller.js.map