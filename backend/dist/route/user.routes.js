"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.post('/', controller_1.createUser);
router.post('/login', controller_1.loginUser);
router.get('/:userId', controller_1.getUser);
router.delete('/:userId', controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map