import Button from "@/components/atoms/button/Button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Hero Section</h1>
        <Button shape="rectangle" styleVariant="primary">
          구경하러 가기
        </Button>
      </div>
      {/* 이미지 컴포넌트 */}
    </div>
  );
}
