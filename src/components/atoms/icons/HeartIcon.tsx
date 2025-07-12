import Image from "next/image";

interface HeartIconProps {
  type?: "pink" | "blank";
  className?: string;
}

export default function HeartIcon({
  type = "pink",
  className,
}: HeartIconProps) {
  const src = `/icons/ic_heart_${type}.svg`;

  return (
    <Image
      className={className}
      src={src}
      alt="heart icon"
      width={30}
      height={30}
    />
  );
}
