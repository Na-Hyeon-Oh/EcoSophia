import { MethodType } from '../assets/enums/MethodType';

export interface Method {
    id: number,
    userId: number,
    type: MethodType,
    name: string,
}