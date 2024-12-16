import { convertDate } from "@/utils/convertDate";
import { BookmarkIcon } from "./BookmarkIcon";

/**
 * api 호출 내역 카드 컴포넌트
 *
 * - 활성화 된 api는 파란색 테두리
 */

interface CardProps {
  history: ApiHisotryData;
  buttonText: string;
  bookmark: (historyId: number) => void;
  undoBookmark: (historyId: number) => void;
  handleCallApi: () => void;
}

const Card = ({ history, buttonText, bookmark, undoBookmark, handleCallApi }: CardProps) => {
  const { apiNm, apiCd, historyId, timestamp, mdulCustCd, mdulNm, isBookmarked, userApiStus } =
    history;

  return (
    <div
      className={`relative flex flex-col gap-4 w-full max-w-sm bg-white border ${userApiStus === "7000001" ? "border-primary" : "border-gray-200"} rounded-xl shadow-lg p-8`}
    >
      <div className="flex flex-col justify-between gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-content-1 font-bold text-black">{apiNm}</h3>
          <p className="mt-2 text-content-1 text-gray-600">{apiCd}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-content-3 text-gray-400">호출 시간: {convertDate(timestamp)}</p>
          <p className="text-content-3 text-gray-400">모듈 코드: {mdulCustCd}</p>
          <p className="text-content-3 text-gray-400">모듈 이름: {mdulNm}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button onClick={isBookmarked ? () => undoBookmark(historyId) : () => bookmark(historyId)}>
          <BookmarkIcon isBookmarked={isBookmarked} />
        </button>
        <button
          onClick={handleCallApi}
          className="inline-block bg-blue-100 text-primary font-medium px-4 py-2 rounded-md hover:bg-blue-300 transition-colors duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
