"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
const history_entity_1 = require("../entity/history.entity");
const method_entity_1 = require("../entity/method.entity");
const mysql = require('mysql');
const dbConfig = require('../config/db.config');
const dataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    entities: ["src/entity/*.entity.ts", "dist/entity/*.js", user_entity_1.User, history_entity_1.History, method_entity_1.Method],
    logging: false,
    synchronize: true,
    charset: 'utf8mb4',
});
exports.default = dataSource;
//# sourceMappingURL=db.js.map