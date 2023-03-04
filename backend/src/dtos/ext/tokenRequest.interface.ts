export interface ExtTokenRequest {
    "code": string,                             // 사용자인증 성공 후 획득한 Authorization Code
    "client_id": string,                        // 오픈뱅킹에서 발급한 이용기관 앱의 Client ID
    "client_secret": string,                    // 오픈뱅킹에서 발급한 이용기관 앱의 Client Secret
    "redirect_uri": string,                     // Access Token을 전달받을 Callback URL
    "grant_type": string,                       // authorization_code
}