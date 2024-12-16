import { useEffect, useMemo, useState } from "react";
import useHistoryStore from "@/store/history";
import { useScrpData } from "@/react-query/querys";
import { openPopup } from "@/utils/openPopup";

/**
 * api 요청 내역 관리 커스텀 훅
 * - 최신/오래된 순 정렬
 * - 북마크 설정/해제 -> store 액션으로 정의
 * - 활성화 여부?? -> userApiStus?? 어떤 속성인지 모르겠음.
 * - -> userApiStus === "7000001" 이면 활성화...?
 */

export default function useApiHistory() {
  const { historyList, bookmark, undoBookmark } = useHistoryStore();
  const [isLatest, setIsLatest] = useState(true); // 최신순/오래된순 상태
  const [scrpParams, setScrpParams] = useState<{ mdulCustCd: string; apiCd: string } | null>(null);
  const { data } = useScrpData(scrpParams ?? { mdulCustCd: "", apiCd: "" }); // 스크래핑 데이터

  /** 정렬 - 재계산 방지 */
  const sortedHistoryList = useMemo(() => {
    if (!historyList) return [];

    /**
     * 1. 활성화 항목을 먼저 보여주기
     * 2. 최신/오래된 순에 따라 정렬해서 보여주기
     */
    return [...historyList]
      .sort((a, b) => {
        const isAActive = a.userApiStus === "7000001" ? 1 : 0;
        const isBActive = b.userApiStus === "7000001" ? 1 : 0;
        return isBActive - isAActive; // 활성화된 항목이 먼저
      })
      .sort((a, b) => {
        const dateA = new Date(Number(a.timestamp)).getTime();
        const dateB = new Date(Number(b.timestamp)).getTime();
        return isLatest ? dateB - dateA : dateA - dateB;
      });
  }, [historyList, isLatest]);

  /** 최신/오래된 순 토글 핸들러 */
  const handleToggle = () => {
    setIsLatest((prev) => !prev);
  };

  /** API 호출 결과 보기 핸들러 */
  const handleCallApi = (item: ApiData) => {
    setScrpParams({ mdulCustCd: item.mdulCustCd, apiCd: item.apiCd });
  };

  // handleCallApi에서 변경된 scrpParams를 의존
  useEffect(() => {
    if (!data || !scrpParams?.apiCd || !scrpParams?.mdulCustCd) return;
    openPopup("API 호출 결과", data);
  }, [scrpParams, data]);

  return { sortedHistoryList, isLatest, handleToggle, bookmark, undoBookmark, handleCallApi };
}
