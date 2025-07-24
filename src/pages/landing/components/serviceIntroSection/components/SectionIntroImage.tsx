import Image from "next/image";

interface SectionIntroImageProps {
  validSection: "section1" | "section2" | "section3";
}

export default function SectionIntroImage({
  validSection,
}: SectionIntroImageProps) {
  return (
    // <div
    // // className=
    // // "relative w-[345px] h-[260px] md:w-[670px] md:h-[524px] lg:w-[590px] lg:h-[445px]"
    // >
    <Image
      width={670}
      height={524}
      className="w-[145px] h-[160px] md:w-[670px] md:h-[524px] lg:w-[590px] lg:h-[445px]"
      src={SectionIntroImageData[validSection].src}
      alt={SectionIntroImageData[validSection].alt}
      priority
    />
    // </div>
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

// const SectionIntroImageSize = {
//   width:
// }
