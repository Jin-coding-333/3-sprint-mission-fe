import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";

interface ActionDropdownListProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ActionDropdownList({
  onEdit,
  onDelete,
}: ActionDropdownListProps) {
  return (
    <div className={actionDropdownListBox}>
      <button type="button" className={dropdownListBox} onClick={onEdit}>
        <span>수정하기</span>
        <EditIcon className="w-4 h-4 text-secondary-400" />
      </button>
      <button type="button" className={dropdownListBox} onClick={onDelete}>
        <span>삭제하기</span>
        <DeleteIcon className="w-4 h-4 text-secondary-400" />
      </button>
    </div>
  );
}

const actionDropdownListBox =
  "absolute top-40px right-0 mt-[10px] w-[102px] h-[90px] md:w-[140px] md:h-[92px] rounded border-secondary-300 border-[1px] bg-white";

const dropdownListBox =
  "flex items-center justify-between w-full h-[46px] px-4 text-md md:text-lg text-secondary-500 cursor-pointer transition-colors";
