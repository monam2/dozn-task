import ApiTable from "./ApiTable";
import ApiPageContainer from "./ApiPageContainer";
import { useState } from "react";
import { useApiList } from "./../../react-query/querys";
import Spinner from "../common/Spinner";

function LoadingSpinner() {
  return (
    <div className="flex min-h-96 w-full items-center justify-center">
      <Spinner color="primary" size="md" />
    </div>
  );
}

export default function ApiListBox() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useApiList({ pageIdx: String(currentPage), pageSize: String(10) });

  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col w-full justify-start items-center gap-6">
      <ApiTable apiList={data?.list} />
      <ApiPageContainer
        currentPage={currentPage}
        totalPages={Number(data?.totalPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
