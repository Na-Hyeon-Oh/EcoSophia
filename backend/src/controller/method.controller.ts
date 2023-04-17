import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import { Method } from '../entity/method.entity';
import { MethodInput, MethodUpdateInput } from "../dto";
import dataSource from "../loader/db";

export async function createMethod(req: Request, res: Response): Promise<any> {
    try {
        const {type, name}: MethodInput = req.body;
        const userId = parseInt(req.params.userId);     // 로그인한 사용자의 ID

        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).send('User NOT FOUND');
        }

        const methodRepository = dataSource.getRepository(Method);
        const method = await methodRepository.create({
            user,
            type,
            name,
        });
        await methodRepository.save(method);

        res.status(200).json(method);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function getMethods(req: Request, res: Response): Promise<any> {
    try {
        const userId = parseInt(req.params.userId); // 로그인한 사용자의 ID

        const methodRepository = dataSource.getRepository(Method);
        const methods = await methodRepository.find({
            where: {
                user: { id: userId }
            },
            order: {
                id : 'DESC'
            }
        });

        res.status(200).json(methods);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function updateMethod(req: Request, res: Response): Promise<any> {
    try {
        const id = parseInt(req.params.methodId);
        const { type, name }: MethodUpdateInput = req.body;
        const userId = parseInt(req.params.userId); // 로그인한 사용자의 ID

        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).send('User NOT FOUND');
        }


        const methodRepository = dataSource.getRepository(Method);
        const method = await methodRepository.findOne({
            where: {
                id: id,
                user: { id: userId },
            }
        });
        if (!method) {
            return res.status(404).send('Method not found');
        }

        method.type = type;
        method.name = name;
        await methodRepository.save(method);

        res.status(200).json(method);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function deleteMethod(req: Request, res: Response): Promise<any> {
    try {
        const id = parseInt(req.params.methodId);
        const userId = parseInt(req.params.userId);

        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).send('User NOT FOUND');
        }

        const methodRepository = dataSource.getRepository(Method);
        const method = await methodRepository.findOne({
            where: {
                id: id,
                user: { id: userId },
            },
        });
        if (!method) {
            return res.status(404).send('Method NOT FOUND');
        }

        await methodRepository.remove(method);

        res.status(200).json({ message: 'Method deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
