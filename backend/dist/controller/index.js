"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistory = exports.updateHistory = exports.getHistories = exports.createHistory = exports.deleteUser = exports.getUser = exports.loginUser = exports.createUser = void 0;
const user_controller_1 = require("./user.controller");
Object.defineProperty(exports, "createUser", { enumerable: true, get: function () { return user_controller_1.createUser; } });
Object.defineProperty(exports, "loginUser", { enumerable: true, get: function () { return user_controller_1.loginUser; } });
Object.defineProperty(exports, "getUser", { enumerable: true, get: function () { return user_controller_1.getUser; } });
Object.defineProperty(exports, "deleteUser", { enumerable: true, get: function () { return user_controller_1.deleteUser; } });
const history_controller_1 = require("./history.controller");
Object.defineProperty(exports, "createHistory", { enumerable: true, get: function () { return history_controller_1.createHistory; } });
Object.defineProperty(exports, "getHistories", { enumerable: true, get: function () { return history_controller_1.getHistories; } });
Object.defineProperty(exports, "updateHistory", { enumerable: true, get: function () { return history_controller_1.updateHistory; } });
Object.defineProperty(exports, "deleteHistory", { enumerable: true, get: function () { return history_controller_1.deleteHistory; } });
//# sourceMappingURL=index.js.map