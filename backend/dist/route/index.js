"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const history_routes_1 = __importDefault(require("./history.routes"));
const router = (0, express_1.Router)();
// user 계정 생성/관리
router.use('/user', user_routes_1.default);
// user별 history 관리
router.use('/history', history_routes_1.default);
router.use('/', function (req, res) {
    res.render('index', {
        title: "Hello Google Cloud App Engine!"
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map