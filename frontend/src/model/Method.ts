export interface Method {
    id: number,
    userId: number,
    type: MethodType
    name: string,
}

export enum MethodType {              // 현금 / 카드
    Cash = '현금',
    Card = '카드'
}