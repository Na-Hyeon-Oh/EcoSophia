"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.post('/:userId', controller_1.createHistory);
router.get('/:userId', controller_1.getHistories);
router.put('/:userId/:historyId', controller_1.updateHistory);
router.delete('/:userId/:historyId', controller_1.deleteHistory);
exports.default = router;
//# sourceMappingURL=history.routes.js.map