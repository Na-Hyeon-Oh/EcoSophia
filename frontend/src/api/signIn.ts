import axios from 'axios';
import { apiEndPoint } from '../assets/apiEndPoint';
import { SignInUpRequest } from '../model/SignInUpRequest';
import { SignInUpResponse } from '../model/SignInUpResponse';

export const signIn = async (signInRequest: SignInUpRequest): Promise<number> => {
    try {
        console.log(signInRequest);
        const response = await axios.post(
            `${apiEndPoint}/user/login`,
            signInRequest,
            { headers: { 'Content-Type': 'application/json' }
        });

        const parsedData: SignInUpResponse = response.data;
        return parsedData["id"];
    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
};