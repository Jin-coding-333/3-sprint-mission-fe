import cn from "@/utils/cn";
import { fieldStyles } from "./field.style";
import { TextareaProps } from "./field.type";

export default function Textarea({
  name,
  placeholder,
  className,
  onChange,
  value,
  rows,
  required,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      value={value}
      rows={rows}
      required={required}
      placeholder={placeholder}
      className={cn(fieldStyles.base, fieldStyles.textarea, className)}
      onChange={onChange}
    ></textarea>
  );
}
