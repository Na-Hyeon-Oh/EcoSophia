"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controller/index");
const router = (0, express_1.Router)();
router.post('/', index_1.createHistory);
router.get('/', index_1.getHistories);
router.put('/:historyId', index_1.updateHistory);
router.delete('/:historyId', index_1.deleteHistory);
exports.default = router;
//# sourceMappingURL=history.routes.js.map