"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
router.post('/', passport_1.default.authenticate('jwt', { session: false }), controller_1.createHistory);
router.get('/', controller_1.getHistories);
router.put('/:historyId', controller_1.updateHistory);
router.delete('/:historyId', controller_1.deleteHistory);
exports.default = router;
//# sourceMappingURL=history.routes.js.map