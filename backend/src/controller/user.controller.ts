import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import { UserInput } from '../dto';
import dataSource from "../loader/db";

export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const userRepository = dataSource.getRepository(User);
        const userInput: UserInput = req.body;
        const newUser = userRepository.create(userInput);
        await userRepository.save(newUser);
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function loginUser(req: Request, res: Response): Promise<void> {
    try {
        const userRepository = dataSource.getRepository(User);
        const { email, pw }: UserInput = req.body;
        const user = await userRepository.findOne({
            where: {
                email: email,
                pw: pw
            }
        });
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function getUser(req: Request, res: Response): Promise<void> {
    try {
        const userRepository = dataSource.getRepository(User);
        const id = parseInt(req.params.userId);
        const user = await userRepository.findOne({
            where: { id: id }
        });
        if (user) {
            res.status(200).json({
                id: id,
                email: user.email,
            });
        }
        else {
            res.status(404).send('User NOT FOUND');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const userRepository = dataSource.getRepository(User);
        const id = parseInt(req.params.userId);
        const user = await userRepository.findOne({
            where: { id: id }
        });
        if (user) {
            await userRepository.remove(user);
            res.status(200).json({
                id: id,
                email: user.email,
            });
        }
        else {
            res.status(404).send('User NOT FOUND');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
