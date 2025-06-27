import Image from "next/image";

interface ArrowIconProps {
  type: "left" | "right";
  color?: "black" | "gray" | "white";
}

export default function ArrowIcon({ type, color = "black" }: ArrowIconProps) {
  const src = `/icons/ic_arrow_${type}_${color}.svg`;

  return <Image src={src} alt="arrow icon" width={15} height={15} />;
}
