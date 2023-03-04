import {Request, Response} from 'express';
import { ExtAuthorizeRequest } from "../../dtos/ext/authorizeRequest.interface";
import { ExtTokenResponse } from "../../dtos/ext/tokenResponse.interface";
import { ExtTokenRequest } from "../../dtos/ext/tokenRequest.interface";
import axios from "axios";

const openAuthorizeUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const queryParams: ExtAuthorizeRequest = {
            response_type: "code",
            client_id: "8326371c-2afb-464d-bffe-4ef242f29569",
            redirect_uri: "http://localhost:8000/openapi",
            scope: "login inquiry",
            state: "abcdefghijklmnopqrstuvwsyzlucyaa",
            auth_type: 0
        };

        const url = "https://testapi.openbanking.or.kr/oauth/2.0/authorize"
            + "?response_type=" + queryParams.response_type
            + "&client_id=" + queryParams.client_id
            + "&redirect_uri=" + queryParams.redirect_uri
            + "&scope=" + queryParams.scope
            + "&state=" + queryParams.state
            + "&auth_type=" + queryParams.auth_type;

        // 새로운 창 띄우기
        const script = `
            <script type="text/javascript">
                window.open("${url}");
            </script>
        `;
        res.send(script);
        // * 기존 창에서 redirection
        // res.redirect(url);

    } catch (error) {
        console.error(error);
    }
}

const issueToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const queryParams: ExtTokenRequest = {
            code: "eehDvGTWs0FssK0KT0iTONjtIITVyz",
            client_id: "8326371c-2afb-464d-bffe-4ef242f29569",
            client_secret: "ecd96e2c-dcae-4623-b237-629244139adf",
            redirect_uri: "http://localhost:8000/openapi",
            grant_type: "authorization_code"
        };

        const response = await axios({
            method: "get",
            url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
            params: queryParams
        });

        const parsedResponse: ExtTokenResponse = response.data;
        res.send(parsedResponse);

    } catch (error) {
        console.error(error);
    }

}

export default {
    openAuthorizeUrl,
    issueToken
}

/*
http://localhost:8000/openapi?code=WrgUkJeydq51z2qtA6Y0skMOAL3B7l&scope=inquiry%20login&state=abcdefghijklmnopqrstuvwsyzlucyaa
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyNDM5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjg1NjY4Nzg4LCJqdGkiOiIxOTBmMjBhYi0zZWVhLTQzNmEtYmUxMS1mMjlkY2VmNjViYTMifQ.Sw_NDRJkjJkARgYs-sgp-tvCD2df3mNjsO1aGUAiCL0",
    "token_type": "Bearer",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyNDM5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjg2NTMyNzg4LCJqdGkiOiI4M2I3NTAxOC00YWQ4LTQzODctOWNlNi1jYmVjOTE2ZDQzM2QifQ.nGb2YsZ_vj8HthC9ICclW1DMOWKy0_w4DLvYMbPO6Wg",
    "expires_in": 7775999,
    "scope": "inquiry login",
    "user_seq_no": "1101022439"

 */