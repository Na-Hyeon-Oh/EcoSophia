import axios from 'axios';
import { apiEndPoint } from '../assets/apiEndPoint';
import History from '../model/History';

export const getHistory = (userId: number): Promise<Array<History>> => {
    return axios.get(`${apiEndPoint}/history/${userId}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
};

