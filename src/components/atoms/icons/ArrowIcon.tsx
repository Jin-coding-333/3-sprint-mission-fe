import Image from "next/image";

interface ArrowIconProps {
  type: "left" | "right";
  color?: "black" | "gray" | "white";
}

export default function ArrowIcon({ type, color = "black" }: ArrowIconProps) {
  const src = `/icons/ic_arrow_${type}_${color}.svg`;
  const direction = type === "left" ? "왼쪽" : "오른쪽";

  return (
    <Image
      src={src}
      alt={`${direction} 화살표`}
      width={7}
      height={7}
      loading="lazy"
    />
  );
}
