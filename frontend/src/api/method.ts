import axios from 'axios';
import { apiEndPoint } from '../assets/apiEndPoint';
import { Method, MethodRequest, MethodResponse } from '../model/Method';
import { MethodType } from '../assets/enums/MethodType';

export const postMethod = async (userId: number, methodRequest: MethodRequest): Promise<Method> => {
    try {
        console.log(methodRequest);
        const response = await axios.post(
            `${apiEndPoint}/method/${userId}`,
            methodRequest,
            { headers: { 'Content-Type': 'application/json' }
            });

        const parsedData: MethodResponse = response.data;
        const newMethod: Method = {
            id: parsedData["id"],
            type: parsedData["type"] == "카드" ? MethodType.Card : MethodType.Cash,
            name: parsedData["name"],
        };
        return newMethod;
    } catch (error) {
        console.error(error);
        throw new Error('POST method failed');
    }
};

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

export const deleteMethod = async (userId: number, methodId: number): Promise<number> => {
    try {
        return await axios.delete(
            `${apiEndPoint}/method/${userId}/${methodId}`,
            { headers: { 'Content-Type': 'application/json' }})
            .then((response) => response.data["id"])
            .catch((error) => {
                console.error(error);
                return -1;
            });
    } catch (error) {
        console.error(error);
        throw new Error('Delete Method failed');
    }
};

