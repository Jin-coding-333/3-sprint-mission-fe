import Button from "@/components/atoms/button/Button";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[500px] bg-[#cfe5ff] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-black">
          <h1 className="text-5xl font-bold">Hero Section</h1>
          <Button shape="rectangle" styleVariant="primary">
            구경하러 가기
          </Button>
        </div>
      </div>
    </section>
  );
}
