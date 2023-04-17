"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const index_1 = require("../entity/index");
const mysql = require('mysql');
const dbConfig = require('../config/db.config');
const dataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    entities: ["src/entity/*.entity.ts", "dist/entity/*.js", index_1.User, index_1.History, index_1.Method],
    logging: false,
    synchronize: true,
    charset: 'utf8mb4',
});
exports.default = dataSource;
//# sourceMappingURL=db.js.map