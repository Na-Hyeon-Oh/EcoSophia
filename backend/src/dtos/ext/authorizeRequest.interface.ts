export interface ExtAuthorizeRequest {
    "response_type": string,                // OAuth 2.0 인증 요청 시 반환되는 형태
    "client_id": string,                    // client id
    "redirect_uri": string,                 // 오픈뱅킹에서 발급한 이용기관 앱의 Client ID
    "scope": string,                        // 사용자인증이 성공하면 이용기관으로 연결되는 URL
    "state": string,                        // Access Token 권한 범위
    "auth_type": number                     // 사용자인증타입 구분 (0:최초인증, 2:인증생략)
}