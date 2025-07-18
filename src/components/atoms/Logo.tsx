import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  type?: "gnb" | "main";
}

export default function Logo({ type = "gnb" }: LogoProps) {
  return (
    <Link href="/">
      {type === "gnb" ? (
        <>
          <Image
            className="block md:hidden"
            src="/imgs/img_logo_text.svg"
            alt="텍스트 로고"
            width={103}
            height={51}
            priority
          />
          <Image
            className="hidden md:block"
            src="/imgs/img_main-logo.svg"
            alt="기본 로고"
            width={153}
            height={51}
            priority
          />
        </>
      ) : (
        <Image
          className="w-[198px] h-[66px] md:w-[396px] md:h-[132px]"
          src="/imgs/img_main-logo.svg"
          alt="기본 로고"
          width={396}
          height={132}
          priority
        />
      )}
    </Link>
  );
}
