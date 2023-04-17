export interface HistoryInput {
    userId: number;
    date: Date;
    methodId: number;
    content: string;
    cost: number;
    tags: string[];
}

export interface HistoryUpdateInput {
    userId?: number;
    date: Date;
    methodId: number;
    content: string;
    cost: number;
    tags: string[];
}