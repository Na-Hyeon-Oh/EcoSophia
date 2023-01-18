import { Request, Response } from 'express';
import { User } from "../dtos/user.interface";
import statusCode from "../utils/statusCode";
import message from "../utils/responseMessage";
import util from "../utils/util";
import { UserService } from "../services";

const createUser = async (req: Request, res: Response): Promise<void> => {
    const user: User = req.body;
    try {
        const data = await UserService.createUser(user);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.POST_SUCCESS, data));
    } catch (error) {
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const findUserById = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    try {
        const data = await UserService.findUserById(userId);
        res.status(statusCode.CREATED).send(util.success(statusCode.OK, message.GET_SUCCESS, data));
    } catch (error) {
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
    const user: User = req.body;
    const { userId } = req.params;
    try {
        const data = await UserService.updateUser(userId, user);
        res.status(statusCode.CREATED).send(util.success(statusCode.OK, message.UPDATE_SUCCESS, data));
    } catch (error) {
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    try {
        const data = await UserService.deleteUser(userId);
        res.status(statusCode.CREATED).send(util.success(statusCode.OK, message.DELETE_SUCCESS, data));
    } catch (error) {
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createUser,
    findUserById,
    updateUser,
    deleteUser
}