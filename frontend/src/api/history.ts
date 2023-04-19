import axios from 'axios';
import { apiEndPoint } from '../assets/apiEndPoint';
import History, { HistoryRequest, HistoryResponse } from '../model/History';

export const postHistory = async (userId: number, historyRequest: HistoryRequest): Promise<History> => {
    try {
        console.log(historyRequest);
        const response = await axios.post(
            `${apiEndPoint}/history/${userId}`,
            historyRequest,
            { headers: { 'Content-Type': 'application/json' }
            });

        const parsedData: HistoryResponse = response.data;
        const newHistory: History = {
            id: parsedData["id"],
            date: parsedData["date"],
            method: parsedData["method"],
            content: parsedData["content"],
            cost: parsedData["cost"],
            tags: parsedData["tags"],
        };
        return newHistory;
    } catch (error) {
        console.error(error);
        throw new Error('POST history failed');
    }
};

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

export const deleteHistory = async (userId: number, historyId: number): Promise<number> => {
    try {
        return await axios.delete(
            `${apiEndPoint}/history/${userId}/${historyId}`,
            { headers: { 'Content-Type': 'application/json' }})
            .then((response) => response.data["id"])
            .catch((error) => {
                console.error(error);
                return -1;
            });
    } catch (error) {
        console.error(error);
        throw new Error('Delete History failed');
    }
};

