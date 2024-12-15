/**
 * 로그인 관련 타입
 */

type AccessToken = string;
type AdmUserId = string;
type UserPassword = string;
type IsDozn = boolean;

type LoginFailCount = string;

interface LoginResponseDto {
  accessToken: AccessToken;
  loginFailCount: LoginFailCount;
}

interface AccessTokenPayload {
  apiKey: string;
  identification: string;
  isDozn: IsDozn;
  exp: string;
  iat: string;
}
