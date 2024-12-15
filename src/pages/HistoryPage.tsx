import ApiHistory from "@/components/history/ApiHistory";

export default function HistoryPage() {
  return (
    <div className="flex flex-col w-full min-h-[900px] justify-center items-center gap-20 pt-[50px] pb-[50px] px-12">
      <h1 className="text-heading-2 font-semibold">API 사용 히스토리</h1>
      <ApiHistory />
    </div>
  );
}
