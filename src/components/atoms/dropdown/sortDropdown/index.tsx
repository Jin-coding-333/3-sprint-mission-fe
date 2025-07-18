"use client";

import { useState } from "react";
import SortDropdownButton from "./SortDropdownButton";
import SortDropdownList from "./SortDropdownList";

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-fit h-fit">
      <SortDropdownButton
        sortDropdownText="최신순"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && <SortDropdownList />}
    </div>
  );
}
