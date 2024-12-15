import useAuthStore from "@/store/auth";
import { isTokenExpired } from "@/utils/checkExpired";
import axios, { AxiosRequestHeaders } from "axios";

/**
 * API 요청 기본 클라이언트 설정
 * -> 토큰 만료는 api를 호출할 때 체크하는게 좋을 것 같다.
 * -> 매초 인터벌을 돌거나 서비스워커로 체크하기엔 너무 비효율적. https가 아니라서 서비스워커는 어차피 안된다.
 *
 * 요청 인터셉터
 * - 요청 시 토큰을 요청 헤더에 주입
 * - 토큰 유효시간 만료 시 자동 로그아웃 후 리다이렉트
 * - jwt의 exp값은 unix 타임스탬프 형식 -> 현재 시간을 unix 타임 스탬프 형식으로 변환해 비교
 * => isTokenExpired
 *
 * 응답 인터셉터
 * - 401에러 반환 시 로그아웃 후 리다이렉트
 *
 * !! alert은 마지막에 모달로 수정하기
 */

const BASE_URL = "https://admin.octover.co.kr";
const API_PATH = "/admin/api";

export const instance = axios.create({
  baseURL: BASE_URL + API_PATH,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    // api키를 받는지, 액세스 토큰을 받는지는 확인 필요
    const { apiKey, exp, logout } = useAuthStore.getState();

    if (!apiKey || !isTokenExpired(exp)) {
      // 토큰 정보가 없거나 토큰이 만료되었다면 로그아웃
      alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요.");
      logout();
      window.location.href = "/";
      return Promise.reject(new Error("로그인 오류"));
    }

    (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${apiKey}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요.");
      useAuthStore.getState().logout();
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);
