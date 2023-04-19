import axios from 'axios';
import { apiEndPoint } from '../assets/apiEndPoint';
import { Method } from '../model/Method';

export const getMethod = (userId: number): Promise<Array<Method>> => {
    return axios.get(`${apiEndPoint}/method/${userId}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
};

