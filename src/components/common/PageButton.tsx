interface PageButtonProps {
  currentPage: number;
  page: number;
  handlePageChange: (page: number) => void;
}

export default function PageButton({ currentPage, page, handlePageChange }: PageButtonProps) {
  return (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`w-10 h-10 border rounded font-semibold ${
        currentPage === page
          ? "border-primary text-primary"
          : "bg-white border-table-header text-black"
      }`}
    >
      {page}
    </button>
  );
}
