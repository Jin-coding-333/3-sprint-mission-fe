import cn from "@/utils/cn";
import Image from "next/image";
import visible from "/public/icons/ic_eye-visible.svg";
import invisible from "/public/icons/ic_eye-invisible.svg";

interface EyeIconProps {
  type: "visible" | "invisible";
  onClick?: () => void;
  className?: string;
}

export default function EyeIcon({ type, className, onClick }: EyeIconProps) {
  const src = type === "visible" ? visible : invisible;

  return (
    <button
      type="button"
      className={cn(
        "w-fit h-fit",
        className,
        src === visible ? "bottom-[20px]" : "bottom-[16px]"
      )}
      onClick={onClick}
    >
      <Image src={src} alt="eye icon" width={24} height={24} />
    </button>
  );
}
