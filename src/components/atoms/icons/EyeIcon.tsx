import cn from "@/utils/cn";
import Image from "next/image";

interface EyeIconProps {
  type: "visible" | "invisible";
  onClick?: () => void;
  className?: string;
}

export default function EyeIcon({ type, className, onClick }: EyeIconProps) {
  const src = `/icons/ic_eye-${type}.svg`;

  return (
    <button className={cn("w-fit h-fit", className)} onClick={onClick}>
      <Image src={src} alt="eye icon" width={24} height={24} />
    </button>
  );
}
