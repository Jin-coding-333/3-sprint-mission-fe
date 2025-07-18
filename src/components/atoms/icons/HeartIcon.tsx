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

  const altText = type === "pink" ? "filled heart icon" : "empty heart icon";

  return (
    <Image
      className={className}
      src={src}
      alt={altText}
      width={30}
      height={30}
    />
  );
}
