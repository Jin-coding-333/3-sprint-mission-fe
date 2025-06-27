import Image from "next/image";

interface HeartIconProps {
  type?: "pink" | "blank";
}

export default function HeartIcon({ type = "pink" }: HeartIconProps) {
  const src = `/icons/ic_heart_${type}.svg`;

  return (
    <div className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]">
      <Image
        className="object-contain"
        src={src}
        alt="heart icon"
        width={30}
        height={30}
      />
    </div>
  );
}
