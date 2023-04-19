import { MethodType } from '../assets/enums/MethodType';
import User from './User';

export interface Method {
    id: number,
    type: MethodType,
    name: string,
}

export interface MethodRequest {
    type: string,
    name: string,
}

export interface MethodResponse {
    id: number,
    user: User,
    type: string,
    name: string
}