import { DataSource } from 'typeorm';

import { User } from '../entity/user.entity';
import { History } from "../entity/history.entity";
import { Method } from '../entity/method.entity';

const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const dataSource = new DataSource({
    type: "mysql",
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    entities: ["src/entity/*.entity.ts", "dist/entity/*.js", User, History, Method],
    logging: false,
    synchronize: true,
    charset: 'utf8mb4',
})

export default dataSource;