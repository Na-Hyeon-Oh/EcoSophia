"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.post('/:userId', controller_1.createMethod);
router.get('/:userId', controller_1.getMethods);
router.put('/:userId/:methodId', controller_1.updateMethod);
router.delete('/:userId/:methodId', controller_1.deleteMethod);
exports.default = router;
//# sourceMappingURL=method.routes.js.map