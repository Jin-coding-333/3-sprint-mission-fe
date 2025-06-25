import Image from "next/image";

interface CheckIconProps {
  color: "blue" | "red";
}

export default function CheckIcon({ color = "blue" }: CheckIconProps) {
  return (
    <Image
      src={`/icons/ic_check-${color}.svg`}
      alt="check icon"
      width={24}
      height={24}
    />
  );
}
