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
      <div className={DropdonwListBox} onClick={onEdit}>
        <span>수정하기</span>
        <EditIcon className="w-4 h-4 text-secondary-400" />
      </div>
      <div className={DropdonwListBox} onClick={onDelete}>
        <span>삭제하기</span>
        <DeleteIcon className="w-4 h-4 text-secondary-400" />
      </div>
    </div>
  );
}

const actionDropdownListBox =
  "absolute top-40px right-0 mt-[10px] w-[102px] h-[90px] md:w-[140px] md:h-[92px] rounded border-secondary-300 border-[1px]";

const DropdonwListBox =
  "flex items-center justify-between w-auto h-[46px] px-4 text-md md:text-lg text-secondary-500 cursor-pointer hover:bg-secondary-50 transition-colors";
