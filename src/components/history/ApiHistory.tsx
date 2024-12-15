import Card from "../common/Card";

export default function ApiHistory() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
      <Card title="카드 1" description="API 설명 1" buttonText="API 호출" />
      <Card title="카드 2" description="API 설명 2" buttonText="API 호출" />
      <Card title="카드 3" description="API 설명 3" buttonText="API 호출" />
      <Card title="카드 4" description="API 설명 4" buttonText="API 호출" />
      <Card title="카드 5" description="API 설명 5" buttonText="API 호출" />
      <Card title="카드 6" description="API 설명 6" buttonText="API 호출" />
    </div>
  );
}
