import { Request, Response } from 'express';
import { ExtAuthorizeRequest } from "../../dtos/ext/authorizeRequest.interface";

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

export default {
    openAuthorizeUrl,
}

// http://localhost:8000/openapi?code=j7nFp4r3GHrW5N162mbl7QOMoUBx9E&scope=inquiry%20login&state=abcdefghijklmnopqrstuvwsyzlucyaa
