import { instance } from "./client";

/** 로그인 요청을 보내는 함수 */
export const postLoginByIdPw = async ({
  admUserId,
  userPw,
}: {
  admUserId: AdmUserId;
  userPw: UserPassword;
}) => {
  const response = await instance.post<LoginResponse>("/recruit/login-check", {
    admUserId,
    userPw,
  });

  const ok = !!response.data.errYn;
  if (!ok) {
    throw new Error("로그인 중 에러가 발생했습니다.");
  }
  return response.data.data.accessToken;
};

/** api 목록을 조회하는 함수
 * - pageSize가 없을 수도 있으므로 처리해야 함
 */
export const fetchApiListData = async (pageIdx: string, pageSize?: string) => {
  return instance.get<ApiListResponse>(
    pageSize
      ? `/user/api/list?pageIdx=${pageIdx}&pageSize=${pageSize}`
      : `/user/api/list?pageIdx=${pageIdx}`,
  );
};

/** 스크래핑 데이터를 조회하는 함수 */
export const fetchScrpData = async (mdulCustCd: string, apiCd: string) => {
  return instance.get<ScrpResponse>(
    `/recruit/scrp-recruit?mdulCustCd=${mdulCustCd}&apiCd=${apiCd}`,
  );
};
