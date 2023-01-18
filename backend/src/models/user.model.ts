import * as mongoose from 'mongoose';
import { User } from '../dtos/user.interface';

const UserSchema = new mongoose.Schema({
    name: String,
    id: String,
    pw: String,
});

const UserModel = mongoose.model<User & mongoose.Document>('User', UserSchema);

export default UserModel;