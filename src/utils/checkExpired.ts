/**
 * 토큰 만료 시간을 확인하는 함수
 * - true : 만료됨
 */
export const isTokenExpired = (exp: string | null) => {
  if (!exp) {
    return false;
  }

  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime >= Number(exp);
};
