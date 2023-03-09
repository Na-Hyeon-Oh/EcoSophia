"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
router.post('/', index_1.UserController.createUser);
router.get('/:userId', index_1.UserController.findUserById);
router.put('/:userId', index_1.UserController.updateUser);
router.delete('/:userId', index_1.UserController.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map