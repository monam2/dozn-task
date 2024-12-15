/**
 * 쿼리 훅 관리 파일
 */

import { useQuery } from "@tanstack/react-query";
import { keys } from "./keys";
import { fetchApiListData, fetchScrpData } from "@/services";

/** api 리스트를 받아오는 쿼리 훅 */
export const useApiList = ({ pageIdx, pageSize }: { pageIdx: string; pageSize?: string }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: keys.list(pageIdx, pageSize),
    queryFn: () => fetchApiListData(pageIdx, pageSize),
  });

  return {
    data: data?.data.data || null,
    isError,
    error,
    isLoading,
  };
};

/** 스크래핑 데이터를 받아오는 쿼리 훅 */
export const useScrpData = ({ mdulCustCd, apiCd }: { mdulCustCd: string; apiCd: string }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: keys.scrp(mdulCustCd, apiCd),
    queryFn: () => fetchScrpData(mdulCustCd, apiCd),
    enabled: !!mdulCustCd && !!apiCd, // 두 값이 모두 있을때만 실행해야 함
  });

  return {
    data: data?.data.data || null,
    isError,
    error,
    isLoading,
  };
};
