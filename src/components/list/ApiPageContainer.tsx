import PageButton from "../common/PageButton";

/**
 * 페이지네이션 컴포넌트
 *
 * - 페이지 버튼 클릭 시 해당 페이지를 currentPage로 변경
 */

interface PaginationProps {
  currentPage: number; // 현재 페이지
  totalPages: number; // 전체 페이지 수
  onPageChange: (page: number) => void;
}

const ApiPageContainer = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex w-full justify-center items-center gap-x-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 border rounded ${currentPage === 1 ? "bg-white" : "text-black"}`}
      >
        이전
      </button>
      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
        <PageButton
          key={page}
          currentPage={currentPage}
          page={page}
          handlePageChange={handlePageChange}
        />
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 border rounded ${
          currentPage === totalPages ? "bg-white" : "text-black"
        }`}
      >
        다음
      </button>
    </div>
  );
};

export default ApiPageContainer;
