"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controller/index");
const router = (0, express_1.Router)();
router.post('/', index_1.createUser);
router.post('/login', index_1.loginUser);
router.get('/:userId', index_1.getUser);
router.delete('/:userId', index_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map