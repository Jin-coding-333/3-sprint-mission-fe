import Image from "next/image";

interface TagProps {
  type: "editable" | "readonly";
  text: string;
}

export default function Tag({ type, text }: TagProps) {
  return (
    <div
      className={` ${
        type === "editable" && "pl-[16px] pr-[12px]"
      } flex items-center justify-center w-fit h-[36px] py-[5px] rounded-[26px] cursor-pointer bg-secondary-100`}
    >
      <span
        className={`${
          type === "editable" ? "mr-[8px]" : ""
        } text-secondary-800 text-lg`}
      >
        #{text}
      </span>
      <Image
        className={`${type === "readonly" ? "hidden" : "block"}`}
        src="/icons/ic_X.svg"
        alt="tag close button"
        width={20}
        height={20}
      />
    </div>
  );
}
