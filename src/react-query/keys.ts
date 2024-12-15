/**
 * 쿼리키 관리 파일
 */
export const keys = {
  all: ["dozn"] as const,
  list: (pageIdx: string, pageSize?: string) => [...keys.all, "list", pageIdx, pageSize],
  scrp: (mdulCustCd: string, apiCd: string) => [...keys.all, "scrp", mdulCustCd, apiCd],
};
