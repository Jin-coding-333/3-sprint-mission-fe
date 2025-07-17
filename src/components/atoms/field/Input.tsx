import cn from "@/utils/cn";
import { InputProps } from "./field.type";
import { fieldStyles } from "./field.style";

export default function Input({
  id,
  name,
  type,
  value,
  required,
  disabled,
  placeholder,
  className,
  onChange,
  onKeyDown,
}: InputProps) {
  return (
    <input
      className={cn(fieldStyles.base, fieldStyles.input, className)}
      id={id}
      name={name}
      type={type}
      value={value}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
