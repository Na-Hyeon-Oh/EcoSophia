import axios from "axios";
import {AuthorizeRequest} from "../../dtos/ext/authorizeRequest.interface";

const authorize = async (): Promise<void> => {
    try {
        const queryParams: AuthorizeRequest = {
            response_type: "code",
            redirect_uri: "http://localhost:8000/openapi",
            scope: "login inquiry",
            state: "abcdefghijklmnopqrstuvwsyzlucyaa",
            auth_type: 0
        };

        await axios({
            method: "get",
            url: "https://testapi.openbanking.or.kr/oauth/2.0/authorize",
            params: queryParams
        });

        console.log("abc");

    } catch (error) {
        console.error(error);
    }

}

export default {
    authorize,

}