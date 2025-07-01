"use client";

import { useState } from "react";
import ActionDropdownIcon from "./ActionDropdownIcon";
import ActionDropdownList from "./ActionDropdownList";

export default function ActionDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOnEdit = () => {
    alert("edit");
    setIsOpen(false);
  };
  const handleOnDelete = () => {
    alert("delete");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <ActionDropdownIcon onClick={handleClick} />
      {isOpen && (
        <ActionDropdownList onEdit={handleOnEdit} onDelete={handleOnDelete} />
      )}
    </div>
  );
}
