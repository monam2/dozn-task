/**
 * 로그인 관련 타입
 */

type AccessToken = string;
type AdmUserId = string;
type UserPassword = string;
type IsDozn = boolean;
type UserId = string;

type LoginFailCount = string;

interface LoginResponseDto {
  accessToken: AccessToken;
  loginFailCount: LoginFailCount;
}

interface AccessTokenPayload {
  accessToken: AccessToken;
  userId: UserId;
  isDozn: IsDozn;
}
