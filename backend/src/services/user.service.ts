import {User} from "../dtos/user.interface";
import {UserResponse} from "../dtos/userResponse.interface";
import UserModel from "../models/user.model";

const createUser = async (user: User): Promise<UserResponse> => {
    try {
        const userModel = new UserModel({
           name: user.name,
           id: user.id,
           pw: user.pw
        });
        await userModel.save();

        return {
            _id: userModel._id
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async (userId: string): Promise<UserResponse | null> => {
    try {
        const userModel = await UserModel.findById(userId);
        if(!userModel) return null;
        return userModel;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: string, user: User): Promise<UserResponse | null> => {
    try {
        await UserModel.findByIdAndUpdate(userId, user);
        const userModel = await findUserById(userId);
        if(!userModel) return null;
        return userModel;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteUser = async (userId: string): Promise<UserResponse | null> => {
    try {
        const userModel = await UserModel.findByIdAndDelete(userId);
        if(!userModel) return null;
        return userModel;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createUser,
    findUserById,
    updateUser,
    deleteUser
}