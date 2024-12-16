/**
 * 데이터 타입 정의
 *
 * - 필드 값이 많기 때문에 데이터 객체를 따로 정의 후 Response 제네릭 타입으로 사용
 *
 * data를 interface가 아닌 type으로 정의한 이유
 * - 추가 필드가 있을 경우 &로 결합하는게 직관적이고 확장 시 더 유용하다고 생각
 *
 */

/** API 개별 데이터 */
type ApiData = {
  admUserId: AdmUserId;
  apiNm: string;
  apiDesc: string;
  apiCd: string;
  kwrdCd: string;
  kwrdNm: string;
  prvr: string;
  apiCdUid: string;
  apiLogStus: string;
  userApiStus: string;
  cmnCdLginType: string;
  cmnCdLginTypeNm: string;
  mdulCustCd: string;
  mdulNm: string;
};

/** 스크래핑 데이터 */
type ScrpDescriptionData = unknown; // 스크래핑 결과라고만 되어있는데 나중에 수정하기

/** API 호출내역 개별 데이터 */
type ApiHistoryData = { historyId: number; timestamp: string; isBookmarked: boolean } & ApiData;
