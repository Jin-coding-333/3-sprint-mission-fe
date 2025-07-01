import cn from "@/utils/cn";

export default function SortDropdownList() {
  return (
    <div className={sortDropdownListBox}>
      <div className={cn(sortDropdownListText, "border-b")}>최신순</div>
      <div className={sortDropdownListText}>좋아요순</div>
    </div>
  );
}

const sortDropdownListBox =
  "absolute top-20px right-0 mt-[10px] w-[130px] h-[84px] rounded-[12px] border-secondary-300 border-[1px] cursor-pointer";

const sortDropdownListText =
  "flex items-center justify-center w-full h-[42px] text-lg text-secondary-800";
