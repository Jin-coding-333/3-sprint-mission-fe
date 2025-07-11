import Icon from "./icons/Icon";
import cn from "@/utils/cn";

interface TagProps {
  type: "editable" | "readonly";
  text: string;
}

export default function Tag({ type, text }: TagProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-fit h-[36px] py-[5px] px-[16px] rounded-[26px] cursor-pointer bg-secondary-100",
        type === "editable" && "pl-[16px] pr-[12px] md:pl-[16px] md:pr-[12px]"
      )}
    >
      <span
        className={cn(
          type === "editable" && "mr-[8px]",
          "text-secondary-800 text-lg"
        )}
      >
        #{text}
      </span>
      {type === "editable" && <Icon type="X" className="w-[20px] h-[20px]" />}
    </div>
  );
}
