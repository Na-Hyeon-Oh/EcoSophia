"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { PORT } = process.env;
function loggerMiddleware(request, response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}
const app = (0, express_1.default)();
app.use(loggerMiddleware);
app.get('/hello', (request, response) => {
    response.send('Hello world!');
});
app.listen(PORT);
//# sourceMappingURL=logger.middleware.js.map