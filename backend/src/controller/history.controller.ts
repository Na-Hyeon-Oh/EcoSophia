import { Request, Response } from 'express';
import { User, Method, History } from '../entity';
import {HistoryInput, HistoryUpdateInput} from "../dto";
import dataSource from "../loader/db";

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export async function createHistory(req: Request, res: Response): Promise<any> {
    try {
        const {date, methodId, content, cost, tags}: HistoryInput = req.body;
        const userId = req.user?.id;     // 로그인한 사용자의 ID

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
                id: methodId,
                user: { id: userId },
            }
        });
        if (!method) {
            return res.status(404).send('Method NOT FOUND');
        }

        const historyRepository = dataSource.getRepository(History);
        const history = await historyRepository.create({
            user,
            date,
            method,
            content,
            cost,
            tags
        });
        await historyRepository.save(history);

        res.status(200).json(history);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function getHistories(req: Request, res: Response): Promise<any> {
    try {
        const userId = req.user?.id; // 로그인한 사용자의 ID

        const historyRepository = dataSource.getRepository(History);
        const histories = await historyRepository.find({
            where: {
                user: { id: userId }
            },
            relations: ['method'],
            order: {
                date: 'DESC'
            }
        });

        res.status(200).json(histories);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function updateHistory(req: Request, res: Response): Promise<any> {
    try {
        const id = req.params.historyId;
        const { date, methodId, content, cost, tags }: HistoryUpdateInput = req.body;
        const userId = req.user?.id; // 로그인한 사용자의 ID

        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).send('User NOT FOUND');
        }

        const historyRepository = dataSource.getRepository(History);
        const history = await historyRepository.findOne({
            where: {
                id: parseInt(id),
                user: { id: userId },
            },
            relations: ['method'],
        });
        if (!history) {
            return res.status(404).send('History NOT FOUND');
        }

        const methodRepository = dataSource.getRepository(Method);
        const method = await methodRepository.findOne({
            where: {
                id: methodId,
                user: { id: userId },
            }
        });
        if (!method) {
            return res.status(404).send('Method not found');
        }

        history.date = date;
        history.method = method;
        history.content = content;
        history.cost = cost;
        history.tags = tags;
        await historyRepository.save(history);

        res.status(200).json(history);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export async function deleteHistory(req: Request, res: Response): Promise<any> {
    try {
        const id = req.params.historyId;
        const userId = req.user?.id;

        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).send('User NOT FOUND');
        }

        const historyRepository = dataSource.getRepository(History);
        const history = await historyRepository.findOne({
            where: {
                id: parseInt(id),
                user: { id: userId },
            },
            relations: ['method'],
        });
        if (!history) {
            return res.status(404).send('History NOT FOUND');
        }

        await historyRepository.remove(history);

        res.status(200).json({ message: 'History deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}