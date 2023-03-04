export interface ExtTokenResponse {
    "access_token": string,                 // 오픈뱅킹에서 발행된 Access Token
    "token_type": string,                   // Access Token 유형
    "expires_in": number,                   // Access Token 만료 기간(초)
    "refresh_token": string,                // Access Token 갱신 시 사용하는 Refresh Token
    "scope": string,                        // Access Token 권한 범위
    "user_seq_no": string                   // 사용자일련번호
}