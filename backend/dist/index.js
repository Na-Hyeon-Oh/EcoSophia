"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const route_1 = __importDefault(require("./route"));
const db_1 = __importDefault(require("./loader/db"));
// Establish db connection
db_1.default
    .initialize()
    .then(() => {
    console.log("Data Source(DB Connection) has been initialized");
})
    .catch((err) => {
    console.error("Error during Data Source initialized: ", err);
});
// Create app and Setup express app
const app = (0, express_1.default)();
const PORT = config_1.default.port;
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require('cors');
// template rendering engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // request body를 express에서 json으로 받아옴
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.get('/', (req, res) => {
    res.send('Hello Express!');
});
app.use('/api', route_1.default); // '/api' 엔드포인트에 요청이 들어오면 api 폴더로 분기
app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(PORT, () => {
    console.log(`
    ########################################
       Server is listening on port 8080      
    ########################################
    `);
}).on("error", (err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map