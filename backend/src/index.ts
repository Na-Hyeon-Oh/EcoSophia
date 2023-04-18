import express, { Request, Response, NextFunction } from "express";
import config from "./config";
import routes from './route';
import ErrorType from './dto/errorType.interface';
import DataSource from './loader/db';

// Establish db connection
DataSource
    .initialize()
    .then(() => {
        console.log("Data Source(DB Connection) has been initialized")
    })
    .catch((err: ErrorType) => {
        console.error("Error during Data Source initialized: ", err)
    })

// Create app and Setup express app
const app = express();
const PORT = config.port;
const bodyParser = require("body-parser");
require('dotenv').config();

// template rendering engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());                // request body를 express에서 json으로 받아옴

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Express!');
});

app.use('/api', routes);      // '/api' 엔드포인트에 요청이 들어오면 api 폴더로 분기

app.use(function (err: ErrorType, req: Request, res: Response) {
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
}).on("error", (err: ErrorType) => {
    console.error(err);
    process.exit(1);
});