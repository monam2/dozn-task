import BaseButton from "../common/BaseButton";
import Card from "../common/Card";
import useApiHistory from "./useApiHistory";

export default function ApiHistory() {
  const { sortedHistoryList, isLatest, handleToggle, bookmark, undoBookmark, handleCallApi } =
    useApiHistory();

  return (
    <>
      <div>
        <BaseButton size="lg" color="primary" variant="filled" onClick={handleToggle}>
          {isLatest ? "오래된 순 보기" : "최신 순 보기"}
        </BaseButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
        {sortedHistoryList.map((history) => (
          <Card
            key={history.timestamp}
            history={history}
            buttonText="API 호출 결과"
            bookmark={bookmark}
            undoBookmark={undoBookmark}
            handleCallApi={() => handleCallApi(history)}
          />
        ))}
      </div>
    </>
  );
}
