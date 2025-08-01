import Button from "@/components/atoms/button/Button";
import cn from "@/utils/cn";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={HeroSectionStyle.container}>
      {/* Content */}
      <div className={cn(HeroSectionStyle.content.sm, HeroSectionStyle.content.md, HeroSectionStyle.content.lg)}>
        {/* Text with Button Box */}
        <div className={cn(HeroSectionStyle.textWithButtonBox.sm, HeroSectionStyle.textWithButtonBox.md, HeroSectionStyle.textWithButtonBox.lg)}>
          <h1 className={cn(HeroSectionStyle.text.sm, HeroSectionStyle.text.md, HeroSectionStyle.text.lg, "font-bold text-secondary-700")}>
            <span>일상의 모든 물건을</span>
            <span>거래해 보세요</span>
          </h1>
          <Button shape="round" styleVariant="primary" className={cn(HeroSectionStyle.button, "text-xl")}>
            구경하러 가기
          </Button>
        </div>
        {/* Image Box */}
        <Image
          src="/imgs/Img_home_top.svg"
          alt="랜딩 페이지 Hero 이미지"
          width={746}
          height={340}
          className="min-w-[448px] h-[204px] md:w-[744px] md:h-[340px] lg:w-[746px] lg:h-[340px]"
          priority
        />
      </div>
    </section>
  );
}

const HeroSectionStyle = {
  container: "w-screen h-[540px] md:h-[771px] lg:h-[540px] bg-[#cfe5ff] flex justify-center",
  content: {
    sm: "flex flex-col items-center gap-[132px] w-full h-full pt-[48px]",
    md: "md:gap-[211px] md:w-[744px] md:pt-[97px] md:h-[540px]",
    lg: "lg:flex lg:flex-row lg:justify-between lg:gap-0 lg:w-[1110px] lg:pt-[200px]",
  },
  textWithButtonBox: {
    sm: "flex flex-col justify-between items-center w-[240px] h-[156px]",
    md: "md:w-full md:h-[136px] md:gap-[24px]",
    lg: "lg:justify-start lg:gap-[32px] lg:w-[357px] lg:h-[260px]"
  },
  text: {
    sm:"flex flex-col justify-start items-center gap-[5px] text-3xl ",
    md: "md:flex-row md:text-[40px]",
    lg: "lg:flex-col lg:items-start"
  },
  button: "w-[240px] h-[48px] md:w-[357px] md:h-[56px] lg:w-[357px] lg:h-[56px]"
}