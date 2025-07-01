import ActionDropdown from "./actionDropdown";
import SortDropdown from "./sortDropdown";

interface DropdownProps {
  type: "action" | "sort";
}

export default function Dropdown({ type }: DropdownProps) {
  return <>{type === "action" ? <ActionDropdown /> : <SortDropdown />}</>;
}
