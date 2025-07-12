import cn from "@/utils/cn";
import HeartIcon from "../icons/HeartIcon";

interface LikeButtonProps {
  liked: boolean;
  count: number;
  onClick?: () => void;
  className?: string;
}

export default function LikeButton({
  liked,
  count,
  onClick,
  className,
}: LikeButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center bg-white border border-secondary-200 rounded-[35px] px-3 gap-2 transition select-none",
        buttonSize,
        className
      )}
      onClick={onClick}
    >
      <HeartIcon type={liked ? "pink" : "blank"} className={iconSize} />
      <span
        className={cn(
          textSize,
          "font-medium text-secondary-500 font-pretendard"
        )}
      >
        {count}
      </span>
    </button>
  );
}

const buttonSize = "w-[80px] h-[32px] md:w-[88px] md:h-[40px]";
const iconSize = "w-[24px] h-[24px] md:w-[32px] md:h-[32px]";
const textSize = "text-lg";
