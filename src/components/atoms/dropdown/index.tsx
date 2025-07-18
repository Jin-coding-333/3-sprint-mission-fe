import ActionDropdown from "../../molecules/dropdown/ActionDropdown";
import SortDropdown from "./sortDropdown";

interface DropdownProps {
  type: "action" | "sort";
}

export default function Dropdown({ type }: DropdownProps) {
  return type === "action" ? <ActionDropdown /> : <SortDropdown />;
}
