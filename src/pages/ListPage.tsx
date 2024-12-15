import ApiListBox from "@/components/list/ApiListBox";

export default function ListPage() {
  return (
    <div className="flex flex-col w-full min-h-[900px] justify-start items-center gap-20 pt-[50px] pb-[50px] px-12">
      <h1 className="text-heading-2 font-bold">사용 가능한 API 목록</h1>
      <ApiListBox />
    </div>
  );
}
