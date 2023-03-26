import { User } from '../dtos/user.interface';

const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connectDB = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,
    database: dbConfig.DB
});

function getAllUsers(callback: (users: User[]) => void): void {
    connectDB.query("SELECT * FROM user", (error: any, rows: any, fields: any) => {
        if(error) {
            console.error("Error fetching users from db: ", error);
            callback([]);
            return;
        }
        const users = rows.map((row: any) => ({
            id: row.id,
            email: row.email,
            password: row.password
        }));
        callback(users);
    });
};

module.exports = {
    getAllUsers
}
//export default getAllUsers;