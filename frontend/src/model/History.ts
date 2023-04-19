import Tag from './Tag';
import { Method } from './Method';

interface History {
    id: number,
    date: Date,
    method: Method,
    content: string,
    cost: number,
    tags: Array<string>,
}

export default History;