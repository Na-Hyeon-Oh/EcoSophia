import Tag from './Tag';

interface History {
    id: number,
    userId: number,
    date: Date,
    content: string,
    cost: number | bigint,
    tags: Array<Tag>,
}

export default History;