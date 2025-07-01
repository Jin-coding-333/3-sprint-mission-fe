interface ActionDropdownListProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ActionDropdownList({
  onEdit,
  onDelete,
}: ActionDropdownListProps) {
  return (
    <div className="mt-[10px] w-[102px] h-[90px] md:w-[140px] md:h-[92px] rounded border-secondary-300 border-[1px]">
      <div className={DropdonwListBox} onClick={onEdit}>
        수정하기
      </div>
      <div className={DropdonwListBox} onClick={onDelete}>
        삭제하기
      </div>
    </div>
  );
}

const DropdonwListBox =
  "flex items-center justify-center w-auto h-[46px] text-md md:text-lg text-secondary-500 cursor-pointer";
