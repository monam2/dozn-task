import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";

/**
 * API 요청 기본 클라이언트 설정
 *
 * 요청 인터셉터
 * - 요청 시 토큰을 요청 헤더에 주입
 * - 토큰 유효시간 만료 시 자동 로그아웃 후 리다이렉트
 *
 * 응답 인터셉터
 * - 로그인 api 응답이라면 토큰을 받아서 저장 및 디코딩
 * - 401에러 반환 시 로그아웃 후 리다이렉트
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
  // 타입 수정 필요요
  async (config): Promise<any> => {
    const acessToken = sessionStorage.getItem("acessToken");
    if (acessToken) {
      (config.headers as AxiosRequestHeaders).Authorization =
        `Bearer ${acessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  // 타입 수정 필요
  async (response: AxiosResponse<any>) => {
    if (response.data && response.data.token) {
      const accessToken = response.data.token;
      console.log(accessToken);

      sessionStorage.setItem("accessToken", accessToken);

      // jwt-decode로 토큰 까서 정보 저장하기
    }
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);
