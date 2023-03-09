"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./loaders/db"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
require('dotenv').config();
(0, db_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json()); // request body를 express에서 json으로 받아옴
app.use('/api', routes_1.default); // /api 엔드포인트에 요청이 들어오면 api 폴더로 분기
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.get('/', (req, res, next) => {
    res.send('Hello Express!');
});
app.listen('8000', () => {
    console.log(`
    ########################################
       Server is listening on port 8000      
    ########################################
    `);
}).on("error", (err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map