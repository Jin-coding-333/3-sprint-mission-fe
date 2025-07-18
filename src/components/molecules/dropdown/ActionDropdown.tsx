"use client";

import ActionDropdownIcon from "../../atoms/dropdown/actionDropdown/ActionDropdownIcon";
import ActionDropdownList from "../../atoms/dropdown/actionDropdown/ActionDropdownList";
import { useOpen } from "@/hooks/useOpen";

export default function ActionDropdown() {
  const { isOpen, close, toggle } = useOpen(false);

  const handleClick = () => {
    toggle();
  };

  const handleOnEdit = () => {
    alert("edit");
    close();
  };
  const handleOnDelete = () => {
    alert("delete");
    close();
  };

  return (
    <div className="ml-[200px] relative w-fit h-fit">
      <ActionDropdownIcon onClick={handleClick} />
      {isOpen && (
        <ActionDropdownList onEdit={handleOnEdit} onDelete={handleOnDelete} />
      )}
    </div>
  );
}
