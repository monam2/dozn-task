import { useScrpData } from "@/react-query/querys";
import BaseButton from "../common/BaseButton";
import { useEffect, useState } from "react";
import { openPopup } from "@/utils/openPopup";
import useHistoryStore from "@/store/history";

/**
 * 사용 가능 API 테이블 컴포넌트
 *
 * - API 호출하기 버튼을 누르면 호출
 * -> useEffect로 누른 api 정보를 의존해서 팝업 창 띄우기
 */

interface ApiTableProps {
  apiList: ApiData[] | undefined;
}

/** 테이블 헤더 */
function TableHeader() {
  return (
    <thead>
      <tr className="bg-table-header text-table-headerText">
        {apiListObj.map((item) => (
          <th key={item.key} className="border border-gray-100 px-4 py-2 text-center">
            {item.label}
          </th>
        ))}
        <th className="border border-gray-100 px-4 py-2 text-center">API 호출</th>
      </tr>
    </thead>
  );
}

/** 테이블 본문 */
function TableBody({ apiList }: ApiTableProps) {
  return (
    <tbody>
      {apiList && apiList.map((item: ApiData) => <TableRow key={item.apiCdUid} item={item} />)}
    </tbody>
  );
}

/** 테이블 행 */
function TableRow({ item }: { item: ApiData }) {
  const { add, historyList } = useHistoryStore(); // api 호출 내역 관리 스토어
  const [scrpParams, setScrpParams] = useState<{ mdulCustCd: string; apiCd: string } | null>(null);
  const { data } = useScrpData(scrpParams ?? { mdulCustCd: "", apiCd: "" });

  /** 스크래핑 데이터 호출 핸들러 -> 스크래핑 파라미터 변경
   * -> useScrpData에서 enabled로 두 파라미터가 존재할 때만 받아오게 해야함
   * + api 호출 내역 추가
   */
  const handleOnClick = (item: ApiData) => {
    setScrpParams({ mdulCustCd: item.mdulCustCd, apiCd: item.apiCd });
    add({
      ...item,
      timestamp: String(new Date().getTime()),
      isBookmarked: false,
      historyId: historyList.length + 1,
    }); // api 호출 내역 추가 - 타임스탬프, 북마크 여부
  };

  // handleOnClick에서 변경된 scrpParams를 의존
  useEffect(() => {
    if (!data || !scrpParams?.apiCd || !scrpParams?.mdulCustCd) return;
    openPopup("API 호출 결과", data);
  }, [scrpParams, data]);

  return (
    <tr className="bg-white">
      {apiListObj.map((api) => (
        <td key={api.key} className="border border-gray-100 px-4 py-2 align-top">
          {item[api.key]}
        </td>
      ))}
      <td className="border border-gray-100 px-4 py-2 align-top whitespace-pre-wrap">
        {/* 호출하기 버튼 - 스크래핑 데이터 호출 */}
        <BaseButton
          onClick={() => handleOnClick(item)}
          className="bg-primary"
          size="sm"
          color="primary"
          variant="outlined"
        >
          호출하기
        </BaseButton>
      </td>
    </tr>
  );
}

/** 테이블 컴포넌트 */
export default function ApiTable({ apiList }: ApiTableProps) {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full border-collapse border border-gray-100">
        <TableHeader />
        <TableBody apiList={apiList} />
      </table>
    </div>
  );
}

/** api 테이블 칼럼, 키 */
const apiListObj: { key: keyof ApiData; label: string }[] = [
  { key: "apiNm", label: "API 이름" },
  { key: "apiCd", label: "API 코드" },
  { key: "apiDesc", label: "API 설명" },
  { key: "mdulCustCd", label: "모듈 고객 코드" },
  { key: "mdulNm", label: "모듈 이름" },
  { key: "kwrdCd", label: "키워드 코드" },
  { key: "kwrdNm", label: "키워드 이름" },
  { key: "prvr", label: "제공 기관" },
];
