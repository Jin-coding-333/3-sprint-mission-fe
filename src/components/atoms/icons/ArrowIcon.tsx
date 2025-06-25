import Image from "next/image";

interface ArrowIconProps {
  direction: "left" | "right";
  color?: "black" | "gray" | "white";
}

export default function ArrowIcon({
  direction,
  color = "black",
}: ArrowIconProps) {
  const arrowIcon = {
    left: `/icons/ic_arrow_left_${color}.svg`,
    right: `/icons/ic_arrow_right_${color}.svg`,
  };

  return (
    <Image src={arrowIcon[direction]} alt="arrow icon" width={15} height={15} />
  );
}
