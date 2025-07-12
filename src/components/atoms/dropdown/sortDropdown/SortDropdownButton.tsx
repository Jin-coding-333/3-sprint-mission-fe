import Icon from "../../icons/Icon";

interface SortDropdownButtonProps {
  sortDropdownText: string;
  onClick: () => void;
}

export default function SortDropdownButton({
  sortDropdownText = "최신순",
  onClick,
}: SortDropdownButtonProps) {
  return (
    <div className={sortDropdownButtonBox} onClick={onClick}>
      <Icon
        type="sort"
        className="block relative md:hidden w-[24px] h-[24px]"
      />
      <div className={sortDropdownButtonTextWithIcon}>
        <span>{sortDropdownText}</span>
        <Icon type="arrow_down" className="hidden md:block" />
      </div>
    </div>
  );
}

const sortDropdownButtonBox =
  "w-[42px] h-[42px] md:w-[130px] md:h-[42px] p-[9px] md:px-[20px] py-[12px] rounded-[12px] border border-secondary-200 cursor-pointer bg-white";

const sortDropdownButtonTextWithIcon =
  "hidden md:w-full md:h-full md:flex md:justify-between items-center text-secondary-800 text-lg";
