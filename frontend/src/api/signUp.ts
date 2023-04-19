import axios from 'axios';
import { apiEndPoint } from '../assets/apiEndPoint';
import { SignInUpRequest } from '../model/SignInUpRequest';
import { SignInUpResponse } from '../model/SignInUpResponse';

export const signUp = async (signUpRequest: SignInUpRequest): Promise<number> => {
    try {
        console.log(signUpRequest);
        const response = await axios.post(
            `${apiEndPoint}/user`,
            signUpRequest,
            { headers: { 'Content-Type': 'application/json' }
            });

        const parsedData: SignInUpResponse = response.data;
        return parsedData["id"];
    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
};