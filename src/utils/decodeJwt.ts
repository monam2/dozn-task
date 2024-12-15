import { jwtDecode } from "jwt-decode";

/**
 * JWT 토큰 디코딩
 *
 * - jwt-decode는 단순 디코딩만 수행, 서명 검증은 진행하지 않는다.
 * - Base64Url 인코딩
 */

export const decodeJwt = (token: string): AccessTokenPayload | null => {
  try {
    const decodedTk: AccessTokenPayload = jwtDecode(token);
    return decodedTk;
  } catch (error) {
    console.log("JWT토큰 디코딩 실패", error);
    return null;
  }
};
