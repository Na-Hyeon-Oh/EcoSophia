import Tag from './Tag';
import { Method } from './Method';

interface History {
    id: number,
    userId: number,
    date: Date | null | undefined,
    by: Method,
    content: string,
    cost: number | bigint,
    tags: Array<Tag>,
}

export default History;