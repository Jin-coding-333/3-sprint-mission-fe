import Image from "next/image";

interface SectionIntroImageProps {
  validSection: "section1" | "section2" | "section3";
}

export default function SectionIntroImage({
  validSection,
}: SectionIntroImageProps) {
  return (
    <Image
      width={670}
      height={524}
      className="min-w-[344px] h-[259px] md:w-[670px] md:h-[524px] lg:w-[590px] lg:h-[445px]"
      src={SectionIntroImageData[validSection].src}
      alt={SectionIntroImageData[validSection].alt}
      priority
    />
  );
}

const SectionIntroImageData = {
  section1: {
    src: "/imgs/img_home_01.svg",
    alt: "랜딩 페이지 첫 번째 이미지",
  },
  section2: {
    src: "/imgs/img_home_02.svg",
    alt: "랜딩 페이지 두 번째 이미지",
  },
  section3: {
    src: "/imgs/img_home_03.svg",
    alt: "랜딩 페이지 세 번째 이미지",
  },
};
