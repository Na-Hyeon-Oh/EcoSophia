import Tag from './Tag';
import User from './User';
import { Method } from './Method';

interface History {
    id: number,
    date: Date,
    method: Method,
    content: string,
    cost: number,
    tags: Array<string>,
}

export interface HistoryRequest {
    date: string,
    methodId: number,
    content: string,
    cost: number,
    tags: Array<string>,
}

export interface HistoryResponse {
    id: number,
    date: Date,
    user: User,
    method: Method,
    content: string,
    cost: number,
    tags: Array<string>,
}

export default History;